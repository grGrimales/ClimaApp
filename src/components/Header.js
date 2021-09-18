import React from "react";
import PropTypes from "prop-types";

export const Header = ({ titulo }) => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <a href="#!" className="brand-logo">
          {titulo}
        </a>
      </div>
    </nav>
  );
};

Header.protTypes = {
  titulo: PropTypes.string.isRequired,
};
