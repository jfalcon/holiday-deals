import React, { useEffect, useState } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { PAGE_LISTING_API_URL } from '../../constants';
import { html2text } from '../../helpers/formats';
import Pagination from '../Pagination';
import './style.scss';

const INITIAL_PAGE = 1;

function ProductListing() {
  const [category, setCategory] = useState('Category'); // consider localization
  const [page, setPage] = useState(INITIAL_PAGE);
  const [isLoading, setIsLoading] = useState(true);
  const [maxPage, setMaxPage] = useState(INITIAL_PAGE);
  const [listing, setListing] = useState([]);
  const loadNextPage = () => setPage(page + 1);
  const loadPrevPage = () => setPage((page > 1) ? page - 1 : page);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${PAGE_LISTING_API_URL}?page=${page}`, { mode: 'cors' });
        if (!response.ok) throw new Error('Unable to load list of products.');

        const result = await response.json();
        setCategory(result.name);
        setListing(result.groups);
        setMaxPage(result.totalPages);
        setIsLoading(false);
      } catch (ex) {
        console.error(ex);
      }
    })();
  }, [page]);

  return (
    <Container className="product-listing">
      <Row className="flush">
        {listing.map((item, index) => {
          const productUrl = item?.links?.www;
          const price = parseFloat(item?.price?.regular) || 0;;
          const fromPrice = parseFloat(item?.priceRange?.regular?.low) || 0;
          const imageLink = item?.thumbnail?.href;
          const imageHeight = parseInt(item?.thumbnail?.height, 10) || 0;
          const imageWidth = parseInt(item?.thumbnail?.width, 10) || 0;

          return (
            <Card key={index} className="product-item" style={{ width: imageWidth }}>
              <div className="product-image">
                <Card.Img src={imageLink} width={imageWidth} height={imageHeight} />
                <span className="product-price">{(fromPrice !== 0) ? `From $${fromPrice.toFixed(2)}` : `$${price.toFixed(2)}`}</span>
              </div>

              <Card.Body>
                <Card.Title>{html2text(item.name)}</Card.Title>
                <Card.Text>{category}</Card.Text>

                <a href={productUrl} className="btn btn-primary">Info</a>
              </Card.Body>
            </Card>
          );
        })}
      </Row>

      <Row style={{display: isLoading ? 'none' : 'block'}}>
        <Pagination min={INITIAL_PAGE} max={maxPage} active={page} nextPage={loadNextPage} prevPage={loadPrevPage} />
      </Row>
    </Container>
  );
}

export default ProductListing;
