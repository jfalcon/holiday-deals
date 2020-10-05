import React from 'react';

function Header() {
  // only styling this inline to show how it can be done
  const styles = {
    fontFamily: 'Mountains of Christmas',
    fontSize: '5rem',
    fontWeight: 'bold'
  };

  return (
    <header className="page-header">
      <div className="text-center py-3" style={styles}>Holiday Deals <i className="fas fa-candy-cane"></i></div>
    </header>
  );
}

export default Header;
