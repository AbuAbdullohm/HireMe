import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CompanyCardGridItem extends Component {
    render() {
        return (

            <Link to={`/companies/` + this.props.id} className="company">

                <div className="company-inner-alignment">
                    <span className="company-logo">
                        {this.props.logo !== "" ? <img src={this.props.logo} alt=""/> : <img src={"images/company-logo-placeholder.png"} alt=""/>}
                    </span>
                    <h4>{this.props.name}</h4>
                    <div className="star-rating" data-rating="3.5"></div>
                </div>

            </Link>
        );
    }
}

export default CompanyCardGridItem;
