import React, { Component } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import {   RiArrowDropDownLine, RiMoneyDollarCircleFill} from 'react-icons/ri';
import {  BsPauseFill } from 'react-icons/bs';
import {  MdDeleteForever } from 'react-icons/md';
import {  BsPlayFill } from 'react-icons/bs';


class ViewProject extends Component {
  
  state = { 
    count: this.props.projectTime,
    startBtnActive: false,
    startBtn: false,
    pauseBtn: false,
    paymentBtn: false,
    removeBtn: false,
    dropDown: false,
    interval: null,
  }

  dropDown = () => {
    let { dropDown } = this.state;
    dropDown ? dropDown = false : dropDown = true
    this.setState({ dropDown })
  }

  startBtnActiveFunc = async (event)  => {

      let { startBtnActive,count } = this.state;
      startBtnActive ? startBtnActive = false : startBtnActive = true;
      await this.setState({startBtnActive})


      // call to sendAjaxProjectTime function 
      this.sendAjaxProjectTime(event);

      // setting the counter (project time )
      if(startBtnActive) {
        const interval = setInterval(() => {
        count++
        this.setState({count})
       }, 1000);
       this.setState({interval}) 
      }
      if(! startBtnActive) {
        clearInterval(this.state.interval); 
      }
  }

  sendAjaxProjectTime = async (project) => {

    const { startBtnActive, count }  = this.state;

    // If the startBtnActive is true,
    // The count is in the middle of a process,
    // so do not start the algorithm
    // and return 
    if( startBtnActive ) return;


    // get the current time, project_id 
    let projectId;
    let currentTime = count;
    project.nativeEvent.path.forEach( element  => {
      if( element.className === 'view-project' ) projectId = element.id;
    })

    // If the count is complete,
    // you will start the save algorithm --->
    if( ! startBtnActive ){
      console.log(projectId, currentTime, startBtnActive);

      localStorage.setItem(`projectID${projectId}`, projectId)
      if( localStorage.getItem((`projectID${projectId}`)) ) {
        localStorage.removeItem(`projectID${projectId}`)
        localStorage.setItem(`projectID${projectId}`, projectId)
      }
    };
          
  }

  

  
  

  render() {
    const {props} = this;
    const {count,dropDown,startBtnActive} = this.state;
    // startBtn, pauseBtn, paymentBtn, removeBtn,


    return ( 
      <div className="view-project" id={ props.id }>
        <div className={props.switchMode ? "line-control line-control-constricted" : "line-control" }>
        <div className={props.switchMode ? "title-fix checkbox title-fix-constricted" : "title-fix checkbox" }> <input type="checkbox" name={props.index} id={props.index} /> </div>
        {/* <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }>{props.dateCreated}</div> */}
            <div className={props.switchMode ? "title-project title-project-constricted" : "title-project" }><div className="text"><span className="project-name"></span>{ props.projectName }</div></div>
            <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }><div className="text"><span className="project-time"></span>₪ {props.projectRate}</div></div>
            <div className={props.switchMode ? "title-fix time-element title-fix-constricted" : "title-fix time-element" }><div className="text"><span className="project-time"><AiOutlineClockCircle/></span> {count} </div></div>
            <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }><div className="text"><span className="project-time"></span>₪ {Math.round(props.projectRate.toFixed(2) * count / 60 / 60)}</div></div>
            <div className={props.switchMode ? "title-fix actions title-fix-constricted" : "title-fix actions" }>{
                ! startBtnActive 
                ? <button onClick={this.startBtnActiveFunc} className="td-button"><span className="start-time"><BsPlayFill/></span></button>
                : <button onClick={this.startBtnActiveFunc} className="td-button"><span className="stop-time"><BsPauseFill/></span></button>
            }</div>
            <div className={props.switchMode ? "title-fix actions title-fix-constricted" : "title-fix actions" }><button className="td-button"><span className="payment"><RiMoneyDollarCircleFill/></span></button></div>
            <div className={props.switchMode ? "title-fix actions title-fix-constricted" : "title-fix actions" }><button  className="td-button"><span className="remove-project"><MdDeleteForever/></span></button></div>
            <div className={props.switchMode ? "title-fix drop-down title-fix-constricted" : "title-fix drop-down" }><span onClick={this.dropDown} className={dropDown ? 'drop-down drop-down-on' : 'drop-down'}><RiArrowDropDownLine/></span></div>
        </div>
        
        
        <div className={dropDown ? "line-info line-info-on" : "line-info"}>
            <div className="general-info">
                <ul>
                    <li><span>שם לקוח: </span>  {`${props.consumerFirstName} ${props.consumerLastName}`}</li>
                    <li><span>כתובת: </span>  {props.consumerAdress}</li>
                    <li><span>טלפון: </span>  {props.consumerPhoneNumber}</li>
                    <li><span>מייל: </span>  {props.consumerEmail}</li>
                </ul>
            </div>
            <div className="history-info">
              <div className="title"><p className="display-5">הסטוריה</p></div>
              <div className="table">
              <table className="table-hover" >
                  <thead>
                      <tr id="tr-header">
                          <th scope="col">תאריך תשלום</th>
                          <th scope="col">מזהה עסקה</th>
                          <th scope="col">זמן עבודה</th>
                          <th scope="col">תעריף שעתי</th>
                          <th scope="col">סה''כ  תשלום</th>
                          <th scope="col">סה''כ אחרי מע''מ(17%)</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr >
                          <td>25/05/2021</td>
                          <td>2569875</td>
                          <td>240:00</td>
                          <td>120 ₪</td>
                          <td>1,728 ₪</td>
                          <td>2,021 ₪</td>
                      </tr>
                      <tr>
                          <td>25/05/2021</td>
                          <td>2569875</td>
                          <td>240:00</td>
                          <td>120 ₪</td>
                          <td>1,728 ₪</td>
                          <td>2,021 ₪</td>
                      </tr>
                  </tbody>
                  <tfoot style={{borderBottom: '2px solid black'}}>
                  </tfoot>
              </table>
              </div>
            </div>
        </div>

      </div>
     );
  }

}
 
export default ViewProject;





    
      
      
        

      

