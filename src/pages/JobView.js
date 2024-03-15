import React, {Component} from 'react';
import CenteredLayout from './../layouts/CenteredLayout';
import JobCardGridItem from './../components/job/JobCardGridItem';
import {withRouter} from 'react-router';
import renderHTML from 'react-render-html';
import {Link} from "react-router-dom";

class JobView extends Component {

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
        fetch("https://vacancy.hire.uz/v1/vacancies/" + id)
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
                    <div className="single-page-header" data-background-image="/images/single-job.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="single-page-header-inner">
                                        <div className="left-side">
                                            <div className="header-image">
                                                <Link to="single-company-profile.html">
                                                    {
                                                        data.employer.logo_urls.original !== ""
                                                            ? <img src={data.employer.logo_urls.original} alt=""/>
                                                            : <img src={"/images/company-logo-placeholder.png"} alt=""/>
                                                    }

                                                </Link>
                                            </div>
                                            <div className="header-details">
                                                <h3>{data.name}</h3>
                                                <h5>{data.employer.name}</h5>
                                                <ul>
                                                    <li>
                                                        <Link to={"/companies/" + data.employer.id}>
                                                            <i className="icon-material-outline-business"></i> {data.employer.name}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <div className="star-rating" data-rating="4.9"></div>
                                                    </li>
                                                    {/*<li><img className="flag" src="/images/flags/gb.svg" alt=""/> {data.area.name}</li>*/}
                                                    <li>
                                                        <div className="verified-badge-with-title">Verified</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="right-side">
                                            <div className="salary-box">
                                                <div className="salary-type">Annual Salary</div>
                                                <div
                                                    className="salary-amount" style={{"font-size": "20px"}}>{data.salary.from != 0 ? data.salary.from + " UZS": ""}{data.salary.to != 0 ? (" - " + data.salary.to + " UZS") : ""}</div>
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
                                    <h3 className="margin-bottom-25">Job Description</h3>
                                    <div>{renderHTML(data.description)}</div>
                                </div>

                                <div className="single-page-section">
                                    <h3 className="margin-bottom-30">Location</h3>
                                    <div id="single-job-map-container">
                                        <div id="singleListingMap" data-latitude="51.507717" data-longitude="-0.131095"
                                             data-map-icon="im im-icon-Hamburger"></div>
                                        <Link to="#" id="streetView">Street View</Link>
                                    </div>
                                </div>

                                {/*<div className="single-page-section">*/}
                                    {/*<h3 className="margin-bottom-25">Similar Jobs</h3>*/}

                                    {/*<div className="listings-container grid-layout">*/}

                                        {/*<JobCardGridItem*/}
                                            {/*id="1"*/}
                                            {/*name="PHP developer"*/}
                                            {/*salary_from={10000000}*/}
                                            {/*salary_to={20000000}*/}
                                        {/*/>*/}

                                        {/*<JobCardGridItem*/}
                                            {/*id="1"*/}
                                            {/*name="Web developer"*/}
                                            {/*salary_from={10000000}*/}
                                            {/*salary_to={20000000}*/}
                                        {/*/>*/}

                                    {/*</div>*/}

                                {/*</div>*/}
                            </div>


                            <div className="col-xl-4 col-lg-4">
                                <div className="sidebar-container">

                                    <Link to="/signin" className="apply-now-button popup-with-zoom-anim">Apply
                                        Now <i className="icon-material-outline-arrow-right-alt"></i></Link>

                                    <div className="sidebar-widget">
                                        <div className="job-overview">
                                            <div className="job-overview-headline">Job Summary</div>
                                            <div className="job-overview-inner">
                                                <ul>
                                                    <li>
                                                        <i className="icon-material-outline-location-on"></i>
                                                        <span>Location</span>
                                                        <h5>{data.area.name}</h5>
                                                    </li>
                                                    <li>
                                                        <i className="icon-material-outline-business-center"></i>
                                                        <span>Job Type</span>
                                                        <h5>{data.type.name == "" ? 'Full time' : data.type.name}</h5>
                                                    </li>
                                                    <li>
                                                        <i className="icon-material-outline-local-atm"></i>
                                                        <span>Salary</span>
                                                        <h5>{data.salary.from != 0 ? data.salary.from + " UZS": ""}{data.salary.to != 0 ? (" - " + data.salary.to + " UZS") : ""}</h5>
                                                    </li>
                                                    <li>
                                                        <i className="icon-material-outline-access-time"></i>
                                                        <span>Date Posted</span>
                                                        <h5>2 days ago</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sidebar-widget">
                                        <h3>Bookmark or Share</h3>

                                        <button className="bookmark-button margin-bottom-25">
                                            <span className="bookmark-icon"></span>
                                            <span className="bookmark-text">Bookmark</span>
                                            <span className="bookmarked-text">Bookmarked</span>
                                        </button>

                                        <div className="copy-url">
                                            <input id="copy-url" type="text" value="" className="with-border"/>
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
                                                    <li><Link to="#" data-button-color="#3b5998"
                                                           title="Share on Facebook" data-tippy-placement="top"><i
                                                        className="icon-brand-facebook-f"></i></Link></li>
                                                    <li><Link to="#" data-button-color="#1da1f2" title="Share on Twitter"
                                                           data-tippy-placement="top"><i
                                                        className="icon-brand-twitter"></i></Link></li>
                                                    <li><Link to="#" data-button-color="#dd4b39"
                                                           title="Share on Google Plus" data-tippy-placement="top"><i
                                                        className="icon-brand-google-plus-g"></i></Link></li>
                                                    <li><Link to="#" data-button-color="#0077b5"
                                                           title="Share on LinkedIn" data-tippy-placement="top"><i
                                                        className="icon-brand-linkedin-in"></i></Link></li>
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

export default withRouter(JobView)