import React from 'react';

const Footer2 = () => {
    return (
        <nav className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </nav>
    );
};

export default Footer2;