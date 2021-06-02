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

  render() { 
    const { newProjectMode } = this.state;
    console.log(newProjectMode);
    return (
      <div className="add-row">
          <div className="add-project-name">
            
            <button className="btn btn-success" onClick={this.createNewProject}>צור פרוייקט חדש <span><MdCreateNewFolder/></span></button>
            <div className={newProjectMode ? "inputs inputs-on" : "inputs"}>
               <div className="project-info">
                 <p className="display-4">פרטי הפרוייקט</p>
                    <div className="project-general">
                        <input  className="form-control" type="text"  placeholder="שם הפרוייקט"/>
                        <input  className="form-control" type="text"  placeholder="תעריף שעתי"/>
                    </div>
               </div>
               <div className="consumer-info">
                    <div className="consumer-general">
                    <p className="display-4">פרטי הלקוח</p>
                        <input  className="form-control" type="text"  placeholder="שם פרטי"/>
                        <input  className="form-control" type="text"  placeholder="שם משפחה"/>
                        <input  className="form-control" type="text"  placeholder="כתובת מגורים"/>
                    </div>
                    <div className="consumer-contact">
                        <input  className="form-control" type="text"  placeholder="מספר טלפון"/>
                        <input  className="form-control" type="text"  placeholder="כתובת מייל"/>
                    </div>
               </div>
            </div>
              
              
            
          </div>
      </div>
    );
  }
}
 
export default AddProject;