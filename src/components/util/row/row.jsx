import React from 'react';
import './row.css';
import { AiOutlineClockCircle,AiOutlineFundProjectionScreen } from 'react-icons/ai';
import {  RiRestartLine,RiDeleteBin6Line } from 'react-icons/ri';
import {  BsPlay, BsPauseFill } from 'react-icons/bs';



function Row(props) {
  console.log(props);
    return (
      <tr className="td">
         <td scope="row"><div className="text">1</div></td>
         <td><div className="text"><span className="project-name"><AiOutlineFundProjectionScreen/></span> בניית אתר תדמית</div></td>
         <td><div className="text"><span className="project-time"><AiOutlineClockCircle/></span> 32:52</div></td>
         <td><button className="td-button btn btn-outline-success btn-sm">התחל <span className="start-time"><BsPlay/></span></button></td>
         <td><button className="td-button btn btn-outline-secondary btn-sm">השהה <span className="stop-time"><BsPauseFill/></span></button></td>
         <td><button className="td-button btn btn-outline-danger btn-sm">אפס <span className="reset-time"><RiRestartLine/></span></button></td>
         <td><button className="td-button btn btn-outline-danger btn-sm">מחק פרוייקט <span className="remove-project"><RiDeleteBin6Line/></span></button></td>
      </tr>
    );
  }
  
  export default Row;