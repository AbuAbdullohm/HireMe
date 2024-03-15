import React, {Component} from 'react';

class DashboardSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
        }
    }

    render() {

        return (
            <div className="dashboard-sidebar">
                <div className="dashboard-sidebar-inner" data-simplebar>
                    <div className="dashboard-nav-container">

                        <a href="#" className="dashboard-responsive-nav-trigger">
					<span className="hamburger hamburger--collapse">
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</span>
                            <span className="trigger-title">Dashboard Navigation</span>
                        </a>

                        <div className="dashboard-nav">
                            <div className="dashboard-nav-inner">

                                <ul data-submenu-title="Start">
                                    <li><a href="dashboard.html"><i
                                        className="icon-material-outline-dashboard"></i> Dashboard</a></li>
                                    <li><a href="dashboard-messages.html"><i
                                        className="icon-material-outline-question-answer"></i> Messages <span
                                        className="nav-tag">2</span></a></li>
                                    <li><a href="dashboard-bookmarks.html"><i
                                        className="icon-material-outline-star-border"></i> Bookmarks</a></li>
                                    <li><a href="dashboard-reviews.html"><i
                                        className="icon-material-outline-rate-review"></i> Reviews</a></li>
                                </ul>

                                <ul data-submenu-title="Organize and Manage">
                                    <li className="active-submenu"><a href="#"><i
                                        className="icon-material-outline-business-center"></i> Jobs</a>
                                        <ul>
                                            <li><a href="dashboard-manage-jobs.html">Manage Jobs <span
                                                className="nav-tag">3</span></a></li>
                                            <li><a href="dashboard-manage-candidates.html">Manage Candidates</a></li>
                                            <li><a href="dashboard-post-a-job.html">Post a Job</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><i className="icon-material-outline-assignment"></i> Tasks</a>
                                        <ul>
                                            <li><a href="dashboard-manage-tasks.html">Manage Tasks <span
                                                className="nav-tag">2</span></a></li>
                                            <li><a href="dashboard-manage-bidders.html">Manage Bidders</a></li>
                                            <li><a href="dashboard-my-active-bids.html">My Active Bids <span
                                                className="nav-tag">4</span></a></li>
                                            <li><a href="dashboard-post-a-task.html">Post a Task</a></li>
                                        </ul>
                                    </li>
                                </ul>

                                <ul data-submenu-title="Account">
                                    <li><a href="dashboard-settings.html"><i
                                        className="icon-material-outline-settings"></i> Settings</a></li>
                                    <li><a href="index-logged-out.html"><i
                                        className="icon-material-outline-power-settings-new"></i> Logout</a></li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );

    }
}

export default DashboardSidebar;