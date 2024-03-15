import React, {Component} from 'react'
import CenteredLayout from './../layouts/CenteredLayout';

class Notfound extends Component {
    render() {
        return (
            <CenteredLayout>
                <div className="container">

                    <div className="row">
                        <div className="col-xl-12">

                            <section id="not-found" className="center margin-top-50 margin-bottom-25">
                                <h2>404 <i className="icon-line-awesome-question-circle"></i></h2>
                                <p>We're sorry, but the page you were looking for doesn't exist</p>
                            </section>

                            <div className="row">
                                <div className="col-xl-8 offset-xl-2">
                                    <div className="intro-banner-search-form not-found-search margin-bottom-50">
                                        <div className="intro-search-field ">
                                            <input id="intro-keywords" type="text"
                                                   placeholder="What Are You Looking For?"/>
                                        </div>

                                        <div className="intro-search-button">
                                            <button className="button ripple-effect">Search</button>
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

export default Notfound