import React from 'react';
import ReactDOM from 'react-dom';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

const Form = () => {
  return (
    <form id="interested-students-form">
      <div id="form-body">
        <div id= "interested-student">
          Interested Student?
        </div>
        <div id="form-name-school">
          <FormControl
            type="text"
            placeholder="Name"
            id="form-name"
          />
          <FormControl
            type="text"
            placeholder="School"
            id="form-school"
          />
        </div>
        <FormControl
          type="text"
          placeholder="Email"
          id="form-email"
        />
        <Button 
          bsStyle="success" 
          bsSize="small"
          id="submit-button">
          Interested Student
        </Button>
        <div id="interested-company">
          Interested Company?
        </div>
        </div>
      </form>
  )
}

export default Form;