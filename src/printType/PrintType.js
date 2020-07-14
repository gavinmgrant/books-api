import React, { Component } from "react";
import DisplaySelection from "../displaySelection/DisplaySelection";

class PrintType extends Component {
  render() {
    const selectOptions = this.props.selectOptions.printSelections;
    const printOptions = selectOptions.map((options, i) => (
      <option value={options} key={i}>
        {options}
      </option>
    ));
    
    return (
      <div>
        <DisplaySelection
          printOptions={printOptions}
          changeHandler={this.props.printChangeHandler}
        />
      </div>
    );
  }
}

export default PrintType;