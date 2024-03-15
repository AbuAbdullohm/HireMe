import React, {Component} from 'react';
import JobSmallCardItem from "../../job/JobSmallCardItem";

class TopJobsWidget extends Component {
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
        fetch("https://vacancy.hire.uz/v1/vacancies?per-page=" + this.state.size + `&` + this.state.queryCondition )
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
                <div className="widget widget-jobs">
                    <div className="sd-title">
                        <h3>{this.state.widget_name}</h3>
                        <i className="la la-ellipsis-v"></i>
                    </div>
                    <div className="jobs-list">

                        {data.map(item => (
                            <JobSmallCardItem
                                id={item.id}
                                name={item.name}
                                employer_name={item.employer.name}
                                salary_from={item.salary.from}
                                salary_to={item.salary.to}
                            />
                        ))}

                    </div>

                </div>
            );
        }

    }
}

export default TopJobsWidget;