import React, {Component} from 'react';
import CenteredLayout from './../layouts/CenteredLayout';
import JobCardGridItem from './../components/job/JobCardGridItem';
import {withRouter} from 'react-router';
import renderHTML from 'react-render-html';
import {Link} from "react-router-dom";

class CompanyView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
        }
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        fetch("https://vacancy.hire.uz/v1/employers/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {

        const {error, isLoaded, data} = this.state;

        if (error) {
            return <div>Error {JSON.stringify(error)}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <CenteredLayout>
                    <div className="single-page-header" data-background-image="images/single-company.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="single-page-header-inner">
                                        <div className="left-side">
                                            <div className="header-image">
                                                {
                                                    data.logo_urls.original
                                                        ? <img src={data.logo_urls.original} alt=""/>
                                                        : <img src={"images/company-logo-placeholder.png"} alt=""/>
                                                }
                                            </div>
                                            <div className="header-details">
                                                <h3>{data.name}</h3>
                                                <ul>
                                                    <li>
                                                        <div className="star-rating" data-rating="4.9"></div>
                                                    </li>
                                                    <li><img className="flag" src="/images/flags/de.svg" alt=""/> {data.area.name}
                                                    </li>
                                                    <li>
                                                        <div className="verified-badge-with-title">Verified</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">

                            <div className="col-xl-8 col-lg-8 content-right-offset">

                                <div className="single-page-section">
                                    <h3 className="margin-bottom-25">About Company</h3>
                                    <div>
                                        {data.description}
                                    </div>
                                </div>

                                <div className="boxed-list margin-bottom-60">
                                    <div className="boxed-list-headline">
                                        <h3><i className="icon-material-outline-business-center"></i> Open Positions</h3>
                                    </div>

                                    <div className="listings-container compact-list-layout">

                                        <a href="single-job-page.html" className="job-listing">

                                            <div className="job-listing-details">

                                                <div className="job-listing-description">
                                                    <h3 className="job-listing-title">Python Developer</h3>

                                                    <div className="job-listing-footer">
                                                        <ul>
                                                            <li><i
                                                                className="icon-material-outline-location-on"></i> Berlin
                                                            </li>
                                                            <li><i
                                                                className="icon-material-outline-business-center"></i> Full
                                                                Time
                                                            </li>
                                                            <li><i
                                                                className="icon-material-outline-access-time"></i> 2
                                                                days ago
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>

                                            <span className="bookmark-icon"></span>
                                        </a>

                                        <a href="single-job-page.html" className="job-listing">

                                            <div className="job-listing-details">

                                                <div className="job-listing-description">
                                                    <h3 className="job-listing-title">Junior Full Stack
                                                        Developer</h3>

                                                    <div className="job-listing-footer">
                                                        <ul>
                                                            <li><i
                                                                className="icon-material-outline-location-on"></i> Berlin
                                                            </li>
                                                            <li><i
                                                                className="icon-material-outline-business-center"></i> Full
                                                                Time
                                                            </li>
                                                            <li><i
                                                                className="icon-material-outline-access-time"></i> 2
                                                                days ago
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>

                                            <span className="bookmark-icon"></span>
                                        </a>
                                    </div>

                                </div>

                            </div>


                            <div className="col-xl-4 col-lg-4">
                                <div className="sidebar-container">

                                    <div className="sidebar-widget">
                                        <h3>Location</h3>
                                        <div id="single-job-map-container">
                                            <div id="singleListingMap" data-latitude="52.520007"
                                                 data-longitude="13.404954"
                                                 data-map-icon="im im-icon-Hamburger"></div>
                                            <a href="#" id="streetView">Street View</a>
                                        </div>
                                    </div>

                                    <div className="sidebar-widget">
                                        <h3>Social Profiles</h3>
                                        <div className="freelancer-socials margin-top-25">
                                            <ul>
                                                <li><a href="#" title="Dribbble" data-tippy-placement="top"><i
                                                    className="icon-brand-dribbble"></i></a></li>
                                                <li><a href="#" title="Twitter" data-tippy-placement="top"><i
                                                    className="icon-brand-twitter"></i></a></li>
                                                <li><a href="#" title="Behance" data-tippy-placement="top"><i
                                                    className="icon-brand-behance"></i></a></li>
                                                <li><a href="#" title="GitHub" data-tippy-placement="top"><i
                                                    className="icon-brand-github"></i></a></li>

                                            </ul>
                                        </div>
                                    </div>

                                    <div className="sidebar-widget">
                                        <h3>Share</h3>

                                        <div className="copy-url">
                                            <input id="copy-url" type="text" value={"https://hire.uz" + this.props.location.pathname} className="with-border" />
                                            <button className="copy-url-button ripple-effect"
                                                    data-clipboard-target="#copy-url" title="Copy to Clipboard"
                                                    data-tippy-placement="top"><i
                                                className="icon-material-outline-file-copy"></i></button>
                                        </div>

                                        <div className="share-buttons margin-top-25">
                                            <div className="share-buttons-trigger"><i
                                                className="icon-feather-share-2"></i></div>
                                            <div className="share-buttons-content">
                                                <span>Interesting? <strong>Share It!</strong></span>
                                                <ul className="share-buttons-icons">
                                                    <li><a href="#" data-button-color="#3b5998"
                                                           title="Share on Facebook" data-tippy-placement="top"><i
                                                        className="icon-brand-facebook-f"></i></a></li>
                                                    <li>
                                                        <a href="#" data-button-color="#1da1f2" title="Share on Twitter" data-tippy-placement="top">
                                                            <i className="icon-brand-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-button-color="#dd4b39" title="Share on Google Plus" data-tippy-placement="top">
                                                            <i className="icon-brand-google-plus-g"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" data-button-color="#0077b5" title="Share on LinkedIn" data-tippy-placement="top">
                                                            <i className="icon-brand-linkedin-in"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </CenteredLayout>
            );
        }


    }
}

export default withRouter(CompanyView)