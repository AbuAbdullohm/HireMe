import React, {Component} from 'react';
import {Link} from "react-router-dom";

class JobSmallCardItem extends Component {
    render(){
        return(
            <div className="job-info">

                <Link to={`/jobs/` + this.props.id}>
                    <div class="job-small-card_item">
                        <div className="job-details">
                            <h4>{this.props.name}</h4>
                            <div>{(this.props.employer_name)}</div>
                        </div>
                        <div className="hr-rate">
                            <span>${this.props.salary_from} - ${this.props.salary_to}/hr</span>
                        </div>
                    </div>
                </Link>
            </div>

        );
    }
}

export default JobSmallCardItem;
