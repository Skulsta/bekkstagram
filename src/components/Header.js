import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/" className="logo">
      <h1>Bekkstagram</h1>
    </Link>
  );
};

export default Header;
