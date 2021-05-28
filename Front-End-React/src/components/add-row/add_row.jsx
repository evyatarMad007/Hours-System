import React from 'react';
import '../add-row/add-row.css';




function add_Row() {
  
    return (
      <div className="add-row">
          <div className="add-project-name"><p>
          <input type="text" />
          :שם הפרוייקט
            
            </p></div>
          <div className="add-project-time"><p> :זמן</p></div>
          <div className="add-start-button"><button>התחל</button></div>
          <div className="add-stop-button"><button>עצור</button></div>
          <div className="add-remove-"><button>מחק פרוייקט</button></div>
      </div>
    );
  }
  
  export default add_Row;