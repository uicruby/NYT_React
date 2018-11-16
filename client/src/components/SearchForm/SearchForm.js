/////////////////////////////////////////////// /* Imports */ ////////////////////////////////////////////////
import React, {Component} from "react";
import moment from "moment";


/////////////////////////////////////////////// /* Class */ ////////////////////////////////////////////////
export default class SearchForm extends Component {

  constructor() {
    super();
    this.state = {
      searchParams: {},
      searching: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      searchParams: {
        topic: this.refs.topic.value,
        startDate: this.refs.startYear.value
          ? `&begin_date=${moment(new Date(this.refs.startYear.value)).format('YYYYMMDD')}`
          : "",
        endDate: this.refs.endYear.value
          ? `&end_date=${moment(new Date(this.refs.endYear.value)).format('YYYYMMDD')}`
          : "",
        limit: this.refs.numOfRecords.value
          ? this.refs.numOfRecords.value
          : 10

      }
    }, function() {
      // alert("new state is " + JSON.stringify(this.state));
      this.props.newQuery(this.state); // Send the Query to Home Component
      this.setState({
        searching: true
      }, () => setTimeout(() => this.setState({searching: null}), 1200));
    });
  }

  render() {
    return (<React.Fragment>
      <div className="col s12 m12 l6">
        <div className="card-panel">
          <h2 className="header center">Search for an Article</h2>
          <div className="row">
            <form className="col s12" onSubmit={this.handleSubmit}>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">search</i>
                  <label for="topic">Topic</label>
                  <input type="text" ref="topic" id="topic" required="required" className="validate"/>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">format_list_numbered</i>
                  <select id="numOfRecords" ref="numOfRecords">
                    <option value="" disabled="disabled" selected="selected">Choose your option</option>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">date_range</i>
                  <label for="startYear">Start Year (Optional)</label>
                  <input type="text" ref="startYear" className="datepicker" id="startYear"/>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">date_range</i>
                  <label for="endYear">End Year (Optional)</label>
                  <input type="date" ref="endYear" className="datepicker" id="endYear"/>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  {
                    this.state.searching
                      ? (<div className="preloader-wrapper big active right" style={{
                          background: "none"
                        }}>
                        <div className="spinner-layer spinner-blue">
                          <div className="circle-clipper left">
                            <div className="circle"></div>
                          </div>
                          <div className="gap-patch">
                            <div className="circle"></div>
                          </div>
                          <div className="circle-clipper right">
                            <div className="circle"></div>
                          </div>
                        </div>

                        <div className="spinner-layer spinner-red">
                          <div className="circle-clipper left">
                            <div className="circle"></div>
                          </div>
                          <div className="gap-patch">
                            <div className="circle"></div>
                          </div>
                          <div className="circle-clipper right">
                            <div className="circle"></div>
                          </div>
                        </div>

                        <div className="spinner-layer spinner-yellow">
                          <div className="circle-clipper left">
                            <div className="circle"></div>
                          </div>
                          <div className="gap-patch">
                            <div className="circle"></div>
                          </div>
                          <div className="circle-clipper right">
                            <div className="circle"></div>
                          </div>
                        </div>

                        <div className="spinner-layer spinner-green">
                          <div className="circle-clipper left">
                            <div className="circle"></div>
                          </div>
                          <div className="gap-patch">
                            <div className="circle"></div>
                          </div>
                          <div className="circle-clipper right">
                            <div className="circle"></div>
                          </div>
                        </div>
                      </div>)
                      : (<button className="btn cyan waves-effect waves-light right" type="submit" name="action">Submit
                        <i className="mdi-content-send right"></i>
                      </button>)
                  }
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>

    </React.Fragment>); // End of Return
  } // End of Render
} // End of Class
