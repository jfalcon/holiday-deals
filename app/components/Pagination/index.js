import React from 'react';
import { Pagination as Paginate } from 'react-bootstrap';

const MAX_PAGES = 10;

function Pagination({ min, max, active }) {
  const pages = [
    <Paginate.First key="pagination-item-first" />,
    <Paginate.Prev key="pagination-item-prev" />
  ];

  for (let page = min; page < max; page++) {
    pages.push(
      <Paginate.Item key={`pagination-item-${page}`} active={page === active}>
        {page}
      </Paginate.Item>,
    );

    if (page === (MAX_PAGES - 1)) {
      pages.push(<Paginate.Ellipsis key="pagination-item-ellipsis" />);
      break;
    }
  }

  pages.push(
    <Paginate.Item key={`pagination-item-${max}`} active={max === active}>
      {max}
    </Paginate.Item>,
  );

  pages.push(<Paginate.Next key="pagination-item-next" />);
  pages.push(<Paginate.Last key="pagination-item-last" />);

  return <Paginate>{pages}</Paginate>;
}

export default Pagination;
