import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdCreateNewFolder } from 'react-icons/md';
import { apiUrl } from '../../../config/config.json';
import axios from 'axios';
import {headersAuth} from '../../../utils/constData';
import { toast } from 'react-toastify';
import { Redirect } from "react-router-dom";

class AddProject extends Component {
  state = { 
    addProjectWindow: false,
    project: { 
      project_name: "",
      project_rate: "",
      consumer_first_name: "",
      consumer_last_name: "",
      consumer_city_adress: "",
      consumer_phone_number: "",
      consumer_email: "",
    },
    errors: {
      err_project_name: "",
      err_project_rate: "",
      err_consumer_first_name: "",
      err_consumer_last_name: "",
      err_consumer_city_adress: "",
      err_consumer_phone_number: "",
      err_consumer_email: "",
    },
    isValid: {
      project_name: false,
      project_rate: false,
      consumer_first_name: false,
      consumer_last_name: false,
      consumer_city_adress: false,
      consumer_phone_number: false,
      consumer_email: false,
    },
    toSubmitMode: false
  }

  // open the window - add project 
  openAddProjectWindow = () => {
    let { addProjectWindow } = this.state;
    addProjectWindow ? addProjectWindow = false : addProjectWindow = true;
    this.setState({ addProjectWindow });
  }
  // validate function
  handlerChangeProject = (inpName, inpValue) => {
    let project = this.state.project;
    let {errors, isValid} = this.state;
    project[inpName] = inpValue;
    this.setState({ project })
    // validate 
    if( project.project_name ) {
        if( project.project_name.length < 2 ) {
            errors.err_project_name = 'Project name must be at least 2 characters long';
            isValid.project_name = false;
        } 
        if( project.project_name.length >= 2 ) {
            errors.err_project_name = null;
            isValid.project_name = true;
        }
    }
    if( project.project_rate ) {
      const regProjectRate = /^[0-9]*$/;
      
        if( ! regProjectRate.test(project.project_rate)  ) {
            errors.err_project_rate = 'Project Rate is invalid';
            isValid.project_rate = false;
        } 
        if( regProjectRate.test(project.project_rate) ) {
            errors.err_project_rate = null;
            isValid.project_rate = true;
        }
    }
    if( project.consumer_first_name ) {
        if( project.consumer_first_name.length < 2 ) {
            errors.err_consumer_first_name = 'consumer name must be at least 2 characters long';
            isValid.consumer_first_name = false;
        } 
        if( project.consumer_first_name.length >= 2 ) {
            errors.err_consumer_first_name = null;
            isValid.consumer_first_name = true;
        }
    }
    if( project.consumer_last_name ) {
        if( project.consumer_last_name.length < 2 ) {
            errors.err_consumer_last_name = 'consumer name must be at least 2 characters long';
            isValid.consumer_last_name = false;
        } 
        if( project.consumer_last_name.length >= 2 ) {
            errors.err_consumer_last_name = null;
            isValid.consumer_last_name = true;
        }
    }
    if( project.consumer_city_adress ) {
        if( project.consumer_city_adress.length < 2 ) {
            errors.err_consumer_city_adress = 'invalid city adress name';
            isValid.consumer_city_adress = false;
        } 
        if( project.consumer_city_adress.length >= 2 ) {
            errors.err_consumer_city_adress = null;
            isValid.consumer_city_adress = true;
        }
    }
    if( project.consumer_email ) {
        const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if( ! regEmail.test(project.consumer_email) ) {
            errors.err_consumer_email = "Invalid email";
            isValid.consumer_email = false;
        } 
        if( regEmail.test(project.consumer_email) ) {
            errors.err_consumer_email = null;
            isValid.consumer_email = true;
        }
    }
    if( project.consumer_phone_number ) {
        const regIsraeliPhone = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;

        if( ! regIsraeliPhone.test(project.consumer_phone_number) ) {
            errors.err_consumer_phone_number = 'Invalid phone number';
            isValid.consumer_phone_number = false;
        } 
        if( regIsraeliPhone.test(project.consumer_phone_number) ) {
            errors.err_consumer_phone_number = null;
            isValid.consumer_phone_number = true;
        }
    }
    if( isValid.project_name && isValid.project_rate && isValid.consumer_first_name && isValid.consumer_last_name && isValid.consumer_city_adress && isValid.consumer_email && isValid.consumer_phone_number) {
       let {toSubmitMode} = this.state;
       toSubmitMode = true;
       this.setState({ toSubmitMode })
    }
    if( ! isValid.project_name || ! isValid.project_rate || ! isValid.consumer_first_name || ! isValid.consumer_last_name || ! isValid.consumer_city_adress || ! isValid.consumer_email || ! isValid.consumer_phone_number) {
       let {toSubmitMode} = this.state;
       toSubmitMode = false;
       this.setState({ toSubmitMode })
    }
  }
  // create new Project
  doSubmit = async () => {
      const createProjectData =  {...this.state.project}; 
      
      try {
          await axios.post(`${apiUrl}/users/create-project`, createProjectData, headersAuth)
          .then( res  => {
            if( res.data.message === "OK" ) toast('project has been created');
          })
          this.setState({project: {
            project_name: "",
            project_rate: "",
            consumer_first_name: "",
            consumer_last_name: "",
            consumer_city_adress: "",
            consumer_phone_number: "",
            consumer_email: ""
          }})
          const project_name = document.querySelector('#projectName').value = '';
          const project_rate = document.querySelector('#projectRate').value = '';
          const consumer_first_name = document.querySelector('#consumerFirstName').value = '';
          const consumer_last_name = document.querySelector('#consumerLastName').value = '';
          const consumer_city_adress = document.querySelector('#consumerAdress').value = '';
          const consumer_phone_number = document.querySelector('#consumerPhoneNumber').value = '';
          const consumer_email = document.querySelector('#consumerEmail').value = '';
          
      } 
      
      catch (err) {
          if( err.response && err.response.status === 409 ){
            // ... 
          }
      }
  }

  render() { 
    const { addProjectWindow } = this.state;
    
    return (
      <div className="add-row">
          <div className="add-project-name">
            
            <button className="add-project-btn" onClick={this.openAddProjectWindow}>פרוייקט חדש <span><MdCreateNewFolder/></span></button>
            <div className={addProjectWindow ? "inputs inputs-on" : "inputs"}>
              <form action="">
               <div className="project-info">
                 <p className="display-4">פרטי הפרוייקט</p>
                    <div className="project-general">
                        <input name="projectName" id="projectName" onChange={ e => this.handlerChangeProject('project_name', e.target.value)}  className="form-control" type="text"  placeholder="שם הפרוייקט"/>
                        <input name="projectRate" id="projectRate" onChange={ e => this.handlerChangeProject('project_rate', e.target.value)}  className="form-control" type="text"  placeholder="תעריף שעתי"/>
                        {/* <select  id="consumer-select" className="select">
                            <option value="empty">בחר לקוח קיים...</option>
                            <option value="1">משה כהן</option>
                            <option value="2">יוסי לוי</option>
                            <option value="3">ורד ביטון</option>
                            <option value="4">אביתר מדרי</option>
                            <option value="5">אופק חגג</option>
                        </select> */}
                    </div>
               </div>
               <div className="consumer-info">
                    <div className="consumer-general">
                    <p className="display-4">פרטי הלקוח</p>
                        <input name="consumerFirstName" id="consumerFirstName" onChange={ e => this.handlerChangeProject('consumer_first_name', e.target.value)}  className="form-control" type="text"  placeholder="שם פרטי"/>
                        <input name="consumerLastName" id="consumerLastName" onChange={ e => this.handlerChangeProject('consumer_last_name', e.target.value)}  className="form-control" type="text"  placeholder="שם משפחה"/>
                        <input name="consumerAdress" id="consumerAdress" onChange={ e => this.handlerChangeProject('consumer_city_adress', e.target.value)}  className="form-control" type="text"  placeholder="כתובת מגורים"/>
                    </div>
                    <div className="consumer-contact">
                        <input name="consumerPhoneNumber" id="consumerPhoneNumber" onChange={ e => this.handlerChangeProject('consumer_phone_number', e.target.value)}  className="form-control" type="text"  placeholder="מספר טלפון"/>
                        <input name="consumerEmail" id="consumerEmail" onChange={ e => this.handlerChangeProject('consumer_email', e.target.value)} className="form-control" type="text"  placeholder="כתובת מייל"/>
                    </div>
               </div>
               <div className="submit">
                 <button className="submit-btn" type="button" onClick={this.doSubmit} disabled={ this.state.toSubmitMode ? false : true }> צור פרוייקט חדש</button>
               </div>
               </form>
            </div>
              
              
            
          </div>
      </div>
    );
  }
}
 
export default AddProject;