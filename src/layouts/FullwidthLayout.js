import React from "react";
import PropTypes from "prop-types";

export default function FullwidthLayout(props) {
  return (
    <div>
      <div className="clearfix"></div>

      <div className="margin-top-70"></div>
      {props.children}
    </div>
  );
}

FullwidthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
