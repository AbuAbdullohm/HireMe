import React, {Component} from 'react';
import FullwidthLayout from './../layouts/FullwidthLayout';
import CompanyCardGridItem from './../components/company/CompanyCardGridItem';
import Pagination from './../components/ui/pagination/Pagination';
import JobSearchSidebar from "../components/ui/jobSearchSidebar/JobSearchSidebar";
import {Link} from "react-router-dom";
import queryString from 'query-string'
import CenteredLayout from "../layouts/CenteredLayout";

export default class Companies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
        }
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        var specs = values.specializations;
        var page = values.page;
        fetch("https://vacancy.hire.uz/v1/employers?per-page=12" + "&page=" + page)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result.data
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
            return (
                <CenteredLayout>
                    <div id="titlebar" className="gradient">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">

                                    <h2>Browse Companies</h2>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="letters-list">
                                    <a href="#" className="current">A</a>
                                    <a href="#">B</a>
                                    <a href="#">C</a>
                                    <a href="#">D</a>
                                    <a href="#">E</a>
                                    <a href="#">F</a>
                                    <a href="#">G</a>
                                    <a href="#">H</a>
                                    <a href="#">I</a>
                                    <a href="#">J</a>
                                    <a href="#">K</a>
                                    <a href="#">L</a>
                                    <a href="#">M</a>
                                    <a href="#">N</a>
                                    <a href="#">O</a>
                                    <a href="#">P</a>
                                    <a href="#">Q</a>
                                    <a href="#">R</a>
                                    <a href="#">S</a>
                                    <a href="#">T</a>
                                    <a href="#">U</a>
                                    <a href="#">V</a>
                                    <a href="#">W</a>
                                    <a href="#">X</a>
                                    <a href="#">Y</a>
                                    <a href="#">Z</a>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="widget widget-jobs">
                                    <div className="sd-title">
                                        <i className="la la-ellipsis-v"></i>
                                    </div>
                                    <section id="not-found" className="center margin-top-50 margin-bottom-25">
                                        <h2><i className="icon-feather-alert-circle"></i></h2>
                                        <p>We're sorry, but our server is gone down</p>
                                    </section>

                                </div>
                            </div>
                        </div>
                    </div>

                </CenteredLayout>
            );
        } else if (!isLoaded) {
            return (
                <CenteredLayout>
                    <div id="titlebar" className="gradient">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">

                                    <h2>Browse Companies</h2>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="letters-list">
                                    <a href="#" className="current">A</a>
                                    <a href="#">B</a>
                                    <a href="#">C</a>
                                    <a href="#">D</a>
                                    <a href="#">E</a>
                                    <a href="#">F</a>
                                    <a href="#">G</a>
                                    <a href="#">H</a>
                                    <a href="#">I</a>
                                    <a href="#">J</a>
                                    <a href="#">K</a>
                                    <a href="#">L</a>
                                    <a href="#">M</a>
                                    <a href="#">N</a>
                                    <a href="#">O</a>
                                    <a href="#">P</a>
                                    <a href="#">Q</a>
                                    <a href="#">R</a>
                                    <a href="#">S</a>
                                    <a href="#">T</a>
                                    <a href="#">U</a>
                                    <a href="#">V</a>
                                    <a href="#">W</a>
                                    <a href="#">X</a>
                                    <a href="#">Y</a>
                                    <a href="#">Z</a>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="widget widget-jobs">
                                    <div className="sd-title">
                                        <i className="la la-ellipsis-v"></i>
                                    </div>
                                    <section id="not-found" className="center margin-top-50 margin-bottom-25">
                                        <div><i className="icon-line-awesome-cloud-download"></i></div>
                                        <p>Now data is being loaded</p>
                                    </section>

                                </div>
                            </div>
                        </div>
                    </div>

                </CenteredLayout>
            )
        } else {
            return (
                <CenteredLayout>
                    <div id="titlebar" className="gradient">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">

                                    <h2>Browse Companies</h2>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="letters-list">
                                    <a href="#" className="current">A</a>
                                    <a href="#">B</a>
                                    <a href="#">C</a>
                                    <a href="#">D</a>
                                    <a href="#">E</a>
                                    <a href="#">F</a>
                                    <a href="#">G</a>
                                    <a href="#">H</a>
                                    <a href="#">I</a>
                                    <a href="#">J</a>
                                    <a href="#">K</a>
                                    <a href="#">L</a>
                                    <a href="#">M</a>
                                    <a href="#">N</a>
                                    <a href="#">O</a>
                                    <a href="#">P</a>
                                    <a href="#">Q</a>
                                    <a href="#">R</a>
                                    <a href="#">S</a>
                                    <a href="#">T</a>
                                    <a href="#">U</a>
                                    <a href="#">V</a>
                                    <a href="#">W</a>
                                    <a href="#">X</a>
                                    <a href="#">Y</a>
                                    <a href="#">Z</a>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="companies-list">

                                    {data.map(item => (
                                        <CompanyCardGridItem
                                            id={item.id}
                                            name={item.name}
                                            logo={item.logo_urls.original}
                                            area_name={item.area.name}
                                        />
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>

                </CenteredLayout>
            );
        }


    }
}