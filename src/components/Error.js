import React from "react";
import PropTypes from "prop-types";

export const Error = ({ mensaje }) => {
  return <p className="red darken-4 error">{mensaje}</p>;
};

Error.protTypes = {
  mensaje: PropTypes.string.isRequired,
};
