import React, {Component} from 'react';
import {Link} from "react-router-dom";

class PostCardItem extends Component {
    render() {

        var link = this.props.type === 1 ? `/feed/` : (this.props.type === 2 ? `/jobs/` : `/feed/`);

        return (
            <div className="listings-container margin-top-35">

                <Link to={link + this.props.id} className="job-listing">

                    <div className="job-listing-details">
                        <div className="job-listing-company-logo">
                            <img src={this.props.avatar} alt="" style={borderRadius100} />
                        </div>

                        {(this.props.type === 1 || this.props.type === 2) ? (
                            <div className="job-listing-description">
                                <h4 className="job-listing-company">{this.props.name} <span className="verified-badge"
                                                                                            data-tippy-placement="top" data-tippy=""
                                                                                            data-original-title="Verified Employer"></span>
                                </h4>
                                <h3 className="job-listing-title"> {this.props.title}</h3>
                                <p className="job-listing-text">{this.props.description}</p>
                            </div>
                        ) : (
                            <div className="job-listing-description">
                                <h4 className="job-listing-company">{this.props.name} <span className="verified-badge"
                                                                                            data-tippy-placement="top" data-tippy=""
                                                                                            data-original-title="Verified Employer"></span>
                                </h4>
                                <embed src={this.props.link} />
                            </div>

                        )}



                    </div>

                </Link>

            </div>

        );
    }
}

export default PostCardItem;

var borderRadius100 = {
    borderRadius: 100,
};