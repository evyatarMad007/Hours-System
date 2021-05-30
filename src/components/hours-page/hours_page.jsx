import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewTable from '../util/view-table/view_table';
import AddRow from '../util/add-row/add_row';

function HoursPage() {
    return ( 
        <div className="hours-page">
            <h1 className="display-4 mt-3">מערכת ספירת שעות</h1>

            <div className="row">
                <div className="col-12">
                    <AddRow/>
                </div>
            </div>

            <div className="row">
                <div className="col-10" style={{display: 'block', margin: '0 auto'}}>
                    <ViewTable/>
                </div>
            </div>
        
        </div>
     );
}
 
export default HoursPage;

