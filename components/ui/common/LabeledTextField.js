import React from 'react';
import classes from 'components/ui/common/LabeledTextField.module.css';

function LabeledTextField(props) {
  return (
    <div className={classes.labeledTextField}>
        <label>{props.label}</label>
        <input ref={props.inputRef} required={props.required ?? false}/>
    </div>
  )
}

export default LabeledTextField