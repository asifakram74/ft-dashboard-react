import React, { useState } from "react";
 import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
 import ThreeSixtyIcon from "@material-ui/icons/ThreeSixty";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const Changepass2 = () => {
 
  
    const [state, setState] = useState({
    
      defaultValue:"{30}"
   
    });
 
    function handleChange(event) {
      setState({
         [event.target.name]: event.target.value
      });
    }

    function HomeIcon(props) {
      return (
          <img src={props.img} alt=""/>
      
      );
    }

  return (
    <div>
      
      <form  autoComplete="off" className="footer_lang_li">
      <FormControl  className="navbar-list right" >
        
        <Select
          value={state.age}
          onChange={handleChange}
          defaultValue={30}
          input={
            <OutlinedInput
              labelWidth={state.labelWidth}
              name="age"
              id="outlined-age-simple"
            />
          }
        >
    
          <MenuItem value={10}>
            <HomeIcon 
            img="/images/icon/bottom-arrow-light.svg"
            />
            Ten  
          </MenuItem>
          <MenuItem value={40}>
            <HomeIcon 
            img="/images/icon/password_icon.svg"
            
            />
            Ten
          </MenuItem>
          <MenuItem value={20}>
            <ThreeSixtyIcon />
            Twenty
          </MenuItem>
          <MenuItem value={30}>
            <CheckCircleIcon />
            Thirty
          </MenuItem>
        </Select>
      </FormControl>
    </form>


    </div>
  )
}

export default Changepass2


