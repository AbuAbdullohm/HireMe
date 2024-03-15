import React, {Component} from 'react';

class ProfileCardAlbumItem extends Component {
    render() {
        return (
            <div className="freelancer">

                <div className="freelancer-overview">
                    <div className="freelancer-overview-inner">

                        <span className="bookmark-icon"></span>

                        <div className="freelancer-avatar">
                            <div className="verified-badge"></div>
                            <a href="single-freelancer-profile.html">
                                <img src="images/user-avatar-big-01.jpg" alt=""/>
                            </a>
                        </div>

                        <div className="freelancer-name">
                            <h4><a href="single-freelancer-profile.html">Tom Smith <img className="flag"
                                                                                        src="images/flags/gb.svg" alt=""
                                                                                        data-tippy-placement="top"
                                                                                        data-tippy=""
                                                                                        data-original-title="United Kingdom"/>
                            </a>
                            </h4>
                            <span>UI/UX Designer</span>
                        </div>

                        <div className="freelancer-rating">
                            <div className="star-rating" data-rating="4.9"></div>
                        </div>
                    </div>
                </div>

                <div className="freelancer-details">
                    <div className="freelancer-details-list">
                        <ul>
                            <li>Rate <strong>$60 / hr</strong></li>
                            <li>Job Success <strong>95%</strong></li>
                        </ul>
                    </div>
                    <a href="single-freelancer-profile.html" className="button button-sliding-icon ripple-effect width158">View Profile <i className="icon-material-outline-arrow-right-alt"></i></a>
                </div>
            </div>

        );
    }
}

export default ProfileCardAlbumItem;
