import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdCreateNewFolder } from 'react-icons/md';


class AddProject extends Component {
  state = { 
    newProjectMode: false
  }

  createNewProject = () => {
    let { newProjectMode } = this.state;
    newProjectMode ? newProjectMode = false : newProjectMode = true;
    this.setState({ newProjectMode });
  }

  getDataCollection = () => {
    let projectName = document.querySelector('#projectName');
    let projectRate = document.querySelector('#projectRate');
    let consumerFirstName = document.querySelector('#consumerFirstName');
    let consumerLastName = document.querySelector('#consumerLastName');
    let consumerAdress = document.querySelector('#consumerAdress');
    let consumerPhoneNumber = document.querySelector('#consumerPhoneNumber');
    let consumerEmail = document.querySelector('#consumerEmail');

    const newProjectData = {
      projectName: projectName.value.trim(),
      projectRate: projectRate.value.trim(),
      consumerFirstName: consumerFirstName.value.trim(),
      consumerLastName: consumerLastName.value.trim(),
      consumerAdress: consumerAdress.value.trim(),
      consumerPhoneNumber: consumerPhoneNumber.value.trim(),
      consumerEmail: consumerEmail.value.trim()
    }

      projectName.value = '';
      projectRate.value = '';
      consumerFirstName.value = '';
      consumerLastName.value = '';
      consumerAdress.value = '';
      consumerPhoneNumber.value = '';
      consumerEmail.value = '';

    console.log(newProjectData);
  }

  render() { 
    const { newProjectMode } = this.state;

    return (
      <div className="add-row">
          <div className="add-project-name">
            
            <button className="btn btn-primary" onClick={this.createNewProject}>צור פרוייקט חדש <span><MdCreateNewFolder/></span></button>
            <div className={newProjectMode ? "inputs inputs-on" : "inputs"}>
              <form action="">
               <div className="project-info">
                 <p className="display-4">פרטי הפרוייקט</p>
                    <div className="project-general">
                        <input name="projectName" id="projectName"  className="form-control" type="text"  placeholder="שם הפרוייקט"/>
                        <input name="projectRate" id="projectRate"  className="form-control" type="text"  placeholder="תעריף שעתי"/>
                    </div>
               </div>
               <div className="consumer-info">
                    <div className="consumer-general">
                    <p className="display-4">פרטי הלקוח</p>
                        <input name="consumerFirstName" id="consumerFirstName"  className="form-control" type="text"  placeholder="שם פרטי"/>
                        <input name="consumerLastName" id="consumerLastName"  className="form-control" type="text"  placeholder="שם משפחה"/>
                        <input name="consumerAdress" id="consumerAdress"  className="form-control" type="text"  placeholder="כתובת מגורים"/>
                    </div>
                    <div className="consumer-contact">
                        <input name="consumerPhoneNumber" id="consumerPhoneNumber"  className="form-control" type="text"  placeholder="מספר טלפון"/>
                        <input name="consumerEmail" id="consumerEmail"  className="form-control" type="text"  placeholder="כתובת מייל"/>
                    </div>
               </div>
               <div className="submit">
                 <button className="btn btn-success btn-sm" type="button" onClick={this.getDataCollection}>צור פרוייקט</button>
               </div>
               </form>
            </div>
              
              
            
          </div>
      </div>
    );
  }
}
 
export default AddProject;