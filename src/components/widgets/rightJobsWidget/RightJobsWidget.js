import React, { useState, useEffect } from "react";
import JobSmallCardItem from "../../job/JobSmallCardItem";

const TopJobsWidget = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [size] = useState(props.size);
  const [widgetName] = useState(props.widget_name);
  const [queryCondition] = useState(props.queryCondition);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://vacancy.hire.uz/v1/vacancies?per-page=${size}&${queryCondition}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [size, queryCondition]);


  if (error) {
    return (
      <div className="widget widget-jobs">
        <div className="sd-title">
          <h3>{widgetName}</h3>
          <i className="la la-ellipsis-v"></i>
        </div>
        <section
          id="not-found"
          className="center margin-top-50 margin-bottom-25"
        >
          <h2>
            <i className="icon-feather-alert-circle"></i>
          </h2>
          <p>We're sorry, but our server is gone down</p>
        </section>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="widget widget-jobs">
        <div className="sd-title">
          <h3>{widgetName.widget_name}</h3>
          <i className="la la-ellipsis-v"></i>
        </div>
        <section
          id="not-found"
          className="center margin-top-50 margin-bottom-25"
        >
          <div>
            <i className="icon-line-awesome-cloud-download"></i>
          </div>
          <p>Now data is being loaded</p>
        </section>
      </div>
    );
  } else {
    return (
      <div className="widget widget-jobs">
        <div className="sd-title">
          <h3>{widgetName}</h3>
          <i className="la la-ellipsis-v"></i>
        </div>
        <div className="jobs-list">
          {data.map((item) => (
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
};

export default TopJobsWidget;
