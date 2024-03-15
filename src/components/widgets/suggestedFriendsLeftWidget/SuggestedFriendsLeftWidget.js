import React, {Component} from 'react';
import SuggestedFriendCardItem from "../../friend/SuggestedFriendCardItem";
import {Link} from "react-router-dom";

class SuggestedFriendsLeftWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            size: props.size,
            widget_name: props.widget_name,
            queryCondition: props.queryCondition,
            data: [],
        }
    }

    componentDidMount() {
        fetch("http://localhost:9003/v1/friends?per-page=" + this.state.size + `&` + this.state.queryCondition )
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
                <div className="widget widget-jobs">
                    <div className="sd-title">
                        <h3>{this.state.widget_name}</h3>
                        <i className="la la-ellipsis-v"></i>
                    </div>
                    <section id="not-found" className="center margin-top-50 margin-bottom-25">
                        <h2><i className="icon-feather-alert-circle"></i></h2>
                        <p>We're sorry, but our server is gone down</p>
                    </section>

                </div>
            );
        } else if (!isLoaded) {
            return (
                <div className="widget widget-jobs">
                    <div className="sd-title">
                        <h3>{this.state.widget_name}</h3>
                        <i className="la la-ellipsis-v"></i>
                    </div>
                    <section id="not-found" className="center margin-top-50 margin-bottom-25">
                        <div><i className="icon-line-awesome-cloud-download"></i></div>
                        <p>Now data is being loaded</p>
                    </section>

                </div>
            );

        } else {
            return (
                <div className="widget suggestions full-width">
                    <div className="sd-title">
                        <h3>Suggestions</h3>
                        <i className="la la-ellipsis-v"></i>
                    </div>

                    <div className="suggestions-list">

                        {data.map(item => (
                            <SuggestedFriendCardItem
                                name={"James William"}
                                jobTitle={"Landshaft designer"}
                                picture={"./images/user-avatar-small-01.jpg"}
                            />
                        ))}

                        <div className="view-more">
                            <Link to="#" title="">View More</Link>
                        </div>
                    </div>

                </div>
            );
        }

    }
}

export default SuggestedFriendsLeftWidget;