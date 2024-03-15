import React, {Component} from 'react';
import {Link} from "react-router-dom";

class JobCardGridItem extends Component {
    render() {
        return (
            <Link to={`/jobs/` + this.props.id} className="job-listing">

                <div className="job-listing-details">
                    <div className="job-listing-company-logo">
                        <img src={this.props.employer_logo} alt={this.props.name}/>
                    </div>

                    <div className="job-listing-description">
                        <h4 className="job-listing-company">{this.props.employer_name}</h4>
                        <h3 className="job-listing-title">{this.props.name}</h3>
                    </div>
                </div>

                <div className="job-listing-footer">
                    <span className="bookmark-icon"></span>
                    <ul>
                        <li>
                            <i className="icon-material-outline-location-on"></i> {this.props.area_name}
                        </li>
                        <li>
                            <i className="icon-material-outline-business-center"></i> {this.props.type}
                        </li><br />
                        <li>
                            <i className="icon-material-outline-account-balance-wallet"></i> {this.props.salary_from != 0 ? this.props.salary_from + " UZS" : ""}{this.props.salary_to != 0 ? (" - " + this.props.salary_to + " UZS") : ""}
                            {(this.props.salary_from + this.props.salary_to) === 0 ? "Сontractual" : ""}
                        </li>
                        <li>
                            <i className="icon-material-outline-access-time"></i> 2 days ago
                        </li>
                    </ul>
                </div>
            </Link>
        );
    }
}

export default JobCardGridItem;
