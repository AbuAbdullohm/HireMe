import React, {Component} from 'react';
import CenteredLayout from './../layouts/CenteredLayout';
import {withRouter} from 'react-router';
import renderHTML from 'react-render-html';
import {Link} from "react-router-dom";
import PostCardItem from "../components/post/PostCardItem";

class FeedView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
        }
    }

    componentDidMount() {

        // var id = this.props.match.params.id;

        fetch("https://localhost:9002/v1/vacancies")
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
                                            <div className="header-details">
                                                <ul>
                                                    <li>
                                                        <Link to="single-company-profile.html">
                                                            <i className="icon-material-outline-person-pin"></i> {"Izzat Rakhmatov"}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <i className="icon-feather-clock"></i> {"19:23"}
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
                                    <h3 className="margin-bottom-25">Lorem ipsum dolor sit amet</h3>
                                    <div>
                                        {renderHTML("<b>Lorem ipsum</b> Dolor sit amet")}

                                        Lorem ipsum dolor sit amet sin ti ahuave sin tu amen der hua min ga avaz an anay muli ak nui ka
                                        Lorem ipsum dolor sit amet sin ti ahuave sin tu amen der hua min ga avaz an anay muli ak nui kaLorem ipsum dolor sit amet sin ti ahuave sin tu amen der hua min ga avaz an anay muli ak nui kaLorem ipsum dolor sit amet sin ti ahuave sin tu amen der hua min ga avaz an anay muli ak nui kaLorem ipsum dolor sit amet sin ti ahuave sin tu amen der hua min ga avaz an anay muli ak nui ka
                                        <img src={"/images/blog-07a.jpg"} />
                                        Arfudinsen modam, Lorem sin ti amet der dua tu min anay  mki a ak nui anay ga avaz der ak min anay muki ak sin Arfudinsen modam, Lorem sin ti amet der dua tu min anay ak nui anay ga avaz der ak min anay muki ak sin Arfudinsen modam, Lorem sin ti amet der dua tu min anay ak nui anay ga avaz der ak min anay muki ak sin
                                        Arfudinsen modam, Lorem sin ti amet der dua tu min anay ak nui anay ga avaz der ak min anay muki ak sin
                                        Arfudinsen modam, Lorem sin ti amet der dua tu min anay ak nui anay ga avaz der ak min anay muki ak sin
                                    </div>
                                </div>

                                <div className="single-page-section">
                                    <h3 className="margin-bottom-25">Also see</h3>

                                    <div>

                                        <PostCardItem
                                            name={"Izzat Rakhmatov"}
                                            avatar={"/images/user-avatar-small-02.jpg"}
                                            type={1} // type post
                                            title={"Post title Bilingual Event Support Specialist"}
                                            description={"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value."}
                                        />

                                        <PostCardItem
                                            name={"Izzat Rakhmatov"}
                                            avatar={"/images/user-avatar-small-02.jpg"}
                                            type={1} // type post
                                            title={"Post title Bilingual Event Support Specialist"}
                                            description={"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value."}
                                        />

                                    </div>

                                </div>
                            </div>


                            <div className="col-xl-4 col-lg-4">
                                <div className="sidebar-container">

                                    <Link to="#small-dialog" className="apply-now-button popup-with-zoom-anim">Apply
                                        Now <i className="icon-material-outline-arrow-right-alt"></i></Link>

                                    <div className="sidebar-widget">
                                        <div className="job-overview">
                                            <div className="job-overview-headline">Job Summary</div>
                                            <div className="job-overview-inner">
                                                <ul>
                                                    <li>
                                                        <i className="icon-material-outline-location-on"></i>
                                                        <span>Location</span>
                                                        <h5>London, United Kingdom</h5>
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

export default withRouter(FeedView)