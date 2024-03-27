import React from "react";
import { Link } from "react-router-dom";

const Pagination = (props) => {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       error: null,
  //       isLoaded: false,
  //       data: [],
  //     };
  //   }

  return (
    <div className="pagination-container margin-top-20 margin-bottom-20">
      <nav className="pagination">
        <ul>
          <li className="pagination-arrow">
            <Link to="#" className="ripple-effect">
              <i className="icon-material-outline-keyboard-arrow-left"></i>
            </Link>
          </li>

          <li>
            <Link
              to={props.location_query + "&page=1"}
              className="ripple-effect current-page"
            >
              1
            </Link>
          </li>
          <li>
            <Link
              to={props.location_query + "&page=2"}
              className="ripple-effect"
            >
              2
            </Link>
          </li>
          <li>
            <Link
              to={props.location_query + "&page=3"}
              className="ripple-effect"
            >
              3
            </Link>
          </li>
          <li>
            <Link
              to={props.location_query + "&page=4"}
              className="ripple-effect"
            >
              4
            </Link>
          </li>
          <li className="pagination-arrow">
            <Link to="#" className="ripple-effect">
              <i className="icon-material-outline-keyboard-arrow-right"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
