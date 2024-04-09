import React from "react";

const JobSearchSidebar = () => {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         error: null,
  //         isLoaded: false,
  //         data: [],
  //     }
  // }

  return (
    <div className="full-page-sidebar">
      <div className="full-page-sidebar-inner" data-simplebar>
        <div className="sidebar-container">
          <div className="sidebar-widget">
            <h3>Location</h3>
            <div className="input-with-icon">
              <div id="autocomplete-container">
                <input
                  id="autocomplete-input"
                  type="text"
                  placeholder="Location"
                />
              </div>
              <i className="icon-material-outline-location-on"></i>
            </div>
          </div>

          <div className="sidebar-widget">
            <h3>Keywords</h3>
            <div className="keywords-container">
              <div className="keyword-input-container">
                <input
                  type="text"
                  className="keyword-input"
                  placeholder="e.g. job title"
                />
                <button className="keyword-input-button ripple-effect">
                  <i className="icon-material-outline-add"></i>
                </button>
              </div>
              <div className="keywords-list">keywords go here</div>
              <div className="clearfix"></div>
            </div>
          </div>

          <div className="sidebar-widget">
            <h3>Category</h3>
            <select
              className="selectpicker default"
              multiple
              data-selected-text-format="count"
              data-size="7"
              title="All Categories"
            >
              <option>Admin Support</option>
              <option>Customer Service</option>
              <option>Data Analytics</option>
              <option>Design & Creative</option>
              <option>Legal</option>
              <option>Software Developing</option>
              <option>IT & Networking</option>
              <option>Writing</option>
              <option>Translation</option>
              <option>Sales & Marketing</option>
            </select>
          </div>

          <div className="sidebar-widget">
            <h3>Job Type</h3>

            <div className="switches-list">
              <div className="switch-container">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="switch-button"></span> Freelance
                </label>
              </div>

              <div className="switch-container">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="switch-button"></span> Full Time
                </label>
              </div>

              <div className="switch-container">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="switch-button"></span> Part Time
                </label>
              </div>

              <div className="switch-container">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="switch-button"></span> Internship
                </label>
              </div>
              <div className="switch-container">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="switch-button"></span> Temporary
                </label>
              </div>
            </div>
          </div>

          <div className="sidebar-widget">
            <h3>Salary</h3>
            <div className="margin-top-55"></div>

            <input
              className="range-slider"
              type="text"
              defaultValue=""
              data-slider-currency="$"
              data-slider-min="1500"
              data-slider-max="15000"
              data-slider-step="100"
              data-slider-value="[1500,15000]"
            />
          </div>

          <div className="sidebar-widget">
            <h3>Tags</h3>

            <div className="tags-container">
              <div className="tag">
                <input type="checkbox" id="tag1" />
                <label htmlFor="tag1">front-end dev</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag2" />
                <label htmlFor="tag2">angular</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag3" />
                <label htmlFor="tag3">react</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag4" />
                <label htmlFor="tag4">vue js</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag5" />
                <label htmlFor="tag5">web apps</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag6" />
                <label htmlFor="tag6">design</label>
              </div>
              <div className="tag">
                <input type="checkbox" id="tag7" />
                <label htmlFor="tag7">wordpress</label>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>

        <div className="sidebar-search-button-container">
          <button className="button ripple-effect">Search</button>
        </div>
      </div>
    </div>
  );
};

export default JobSearchSidebar;
