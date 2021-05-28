import React from 'react';
import '../row/row.css';




function Row(props) {
  console.log(props);
    return (
      <div className="row">
          <div className="project-name"><p>
            שם הפרוייקט:
            <span> {props.projectName} </span>
            </p></div>
          <div className="project-time"><p><span> {props.workTime} </span> :זמן</p></div>
          <div className="start-button"><button>התחל</button></div>
          <div className="stop-button"><button>עצור</button></div>
          <div className="remove-"><button>מחק פרוייקט</button></div>
      </div>
    );
  }
  
  export default Row;