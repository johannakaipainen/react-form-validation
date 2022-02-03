import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  // onFocus for confirmPassword, because after filling the input, you are not going to focus any other input field, so the possible 
  // error message would appear when you click submit
  // onFocus gives the error for as long as the fields don't match
  return (
    <div className="formInput">
      <label>{label}</label>
      <input 
        {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus} 
        onFocus={()=>inputProps.name==="confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
