import React from 'react';
import './add-row.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function AddRow() {
  
    return (
      <div className="add-row">
          <div className="add-project-name">
            
            <button className="btn btn-success m-2">+ הוסף פרוייקט</button>
            <div className="inputs">
               <input  className="form-control" type="text"  placeholder="שם הפרוייקט"/>
            </div>
              
              
            
          </div>
      </div>
    );
  }
  
  export default AddRow;