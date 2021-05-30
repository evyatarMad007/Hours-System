import React from 'react';
import Row from '../row/row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './view-table.css';

// import { GrPowerReset } from 'react-icons/gr';


function ViewTable() {
    return ( 
        <table class="table table-hover text-center" style={{direction: 'rtl'}}>
            <thead >
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">פרוייקט</th>
                    <th scope="col">זמן</th>
                    <th scope="col">התחלת ספירה</th>
                    <th scope="col">השהה ספירה</th>
                    <th scope="col">איפוס ספירה</th>
                    <th scope="col">מחיקת פרוייקט</th>
                </tr>
            </thead>
            <tbody>
                <Row/>
            </tbody>
        </table>
                
     );
}
 
export default ViewTable;