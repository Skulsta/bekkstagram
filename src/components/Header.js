import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-header">
      <h1>
        <Link to="/">Bekkstagram</Link>
      </h1>
    </header>
  );
};

export default Header;
