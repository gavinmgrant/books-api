import React, { Component } from "react";
import DisplaySelection from "../displaySelection/DisplaySelection";

class BookType extends Component {
  render() {
    const selectOptions = this.props.selectOptions.bookSelections;
    const bookOptions = selectOptions.map((options, i) => (
      <option value={options} key={i}>
        {options}
      </option>
    ));

    return (
      <div>
        <DisplaySelection
          bookOptions={bookOptions}
          bookChangeHandler={this.props.bookChangeHandler}
        />
      </div>
    );
  }
}

export default BookType;