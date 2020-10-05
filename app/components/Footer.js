import React from 'react';

function Footer() {
  const year = (new Date()).getFullYear();

  // note, is slow, we only using it for demonstration purposes
  // be weary when using it too much in a large site
  const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--body-background-color').trim();
  const gutterMargin = getComputedStyle(document.documentElement).getPropertyValue('--grid-half-gutter-width').trim();

  // only styling this inline to show how it can be done
  // we also leverage CSS variables to pull this off, as a demonstration
  const styles = {
    backgroundColor: backgroundColor,
    marginLeft: `-${gutterMargin}`,
    marginRight: `-${gutterMargin}`
  };

  return (
    <footer className="page-footer font-small" style={styles}>
      <div className="footer-copyright text-center py-3">
        <span className="p-2">&copy;{year} Copyright</span>
        <a href="https://jeremyfalcon.com/">jeremyfalcon.com</a>
      </div>
    </footer>
  );
}

export default Footer;
