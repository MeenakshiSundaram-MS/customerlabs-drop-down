import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectList: [],
      optionList: [
        { name: "First Name", isDisabled: false },
        { name: "Middle Name", isDisabled: false },
        { name: "Last Name", isDisabled: false },
        { name: "City", isDisabled: false },
        { name: "State", isDisabled: false },
        { name: "Country", isDisabled: false },
        { name: "Time Zone", isDisabled: false },
        { name: "Source", isDisabled: false },
      ],
      chosenList: [],
      valueObj: {}
    };
  }
  render() {
    const { selectList, optionList, valueObj } = this.state;
    return (
      <React.Fragment>
        <div className="main-content">
          <div className="top-content">
            <h5>&#8592; Saving Segment</h5>
          </div>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">
                Enter the name of the Segment
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Name of the Segment"
              />
            </div>
          </form>
          <p>
            To save your segment, you need to add the schemas to build the query
          </p>
          {selectList.map((select, index) => {
            return (
              <div className="select-wrapper">
                <select
                  className="p-2 m-2 border-0"
                  onChange={e => {
                    valueObj[select.name] = e.target.value;
                    this.setState({ valueObj });
                  }}
                >
                  <option value="" hidden>
                    Select your schema
                  </option>
                  {optionList.map(option => {
                    return (
                      <option
                        disabled={Object.values(valueObj).includes(option.name)}
                      >
                        {option.name}
                      </option>
                    );
                  })}
                </select>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={e => {
                    selectList.splice(index, 1);
                    delete valueObj[select.name];
                    this.setState({ selectList, valueObj });
                  }}
                >
                  -
                </button>
              </div>
            );
          })}
          <button
            className="btn btn-link"
            onClick={e => {
              let r = Math.random()
                .toString(36)
                .substring(7);
              selectList.push({
                name: "Select-" + r
              });
              this.setState({ selectList });
            }}
          >
            + Add New schema
          </button>
        </div>
        <footer>
          <button className="ft-btn1">Save the Segment</button>
          <button className="ft-btn2">Cancel</button>
        </footer>
      </React.Fragment>
    );
  }
}
