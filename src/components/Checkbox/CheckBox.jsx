import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
const CheckBox = (props) => {
  const [filterState, setFilterState] = React.useState({
    filter1: false,
  });

  const handleChange = (event) => {
    setFilterState({
      ...filterState,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <div>
      <ul className=" mb-0 setting_list no-border">
        <Checkbox
          icon={<CircleUnchecked />}
          checkedIcon={<CircleCheckedFilled />}
          name="filter1"
          checked={filterState.filter1}
          onChange={handleChange}
          disabled={props.disable}
        />
      </ul>
    </div>
  );
};

export default CheckBox;
