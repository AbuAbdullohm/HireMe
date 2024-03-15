import React, {Component} from 'react';

class PostTopBar extends Component {
    render(){
        return(
            <div className="intro-banner-search-form">

                <div className="intro-search-field">
                    <input id="intro-keywords" placeholder="Share your mind" type="text" />
                </div>

                <div className="intro-search-button">
                    <button className="button ripple-effect"
                            onClick="window.location.href='jobs-list-layout-full-page-map.html'">
                        <i className="icon-line-awesome-edit"></i>
                    </button>
                    <button className="button ripple-effect"
                            onClick="window.location.href='jobs-list-layout-full-page-map.html'">
                        <i className="icon-line-awesome-link"></i>
                    </button>
                    <button className="button ripple-effect"
                            onClick="window.location.href='jobs-list-layout-full-page-map.html'">
                        <i className="icon-material-outline-assignment"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default PostTopBar;
