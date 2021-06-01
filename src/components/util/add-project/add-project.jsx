import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdCreateNewFolder } from 'react-icons/md';


function AddProject() {
  
    return (
      <div className="add-row">
          <div className="add-project-name">
            
            <button className="btn btn-success">צור פרוייקט  <span><MdCreateNewFolder/></span></button>
            <div className="inputs">
               <input  className="form-control" type="text"  placeholder="שם הפרוייקט"/>
            </div>
              
              
            
          </div>
      </div>
    );
  }
  
  export default AddProject;