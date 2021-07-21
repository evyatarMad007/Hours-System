import React, { Component } from 'react';
import { AiOutlineClockCircle,AiOutlineFundProjectionScreen } from 'react-icons/ai';
import {  RiDeleteBin6Line ,RiArrowDropDownLine} from 'react-icons/ri';
import {  BsPlay, BsPauseFill } from 'react-icons/bs';
import {  BiCoin } from 'react-icons/bi';
// import '../../../service/userService';


class ViewProject extends Component {
  
  state = { 
    count: this.props.projectTime,
    startBtnActive: false,
    startBtn: false,
    pauseBtn: false,
    paymentBtn: false,
    removeBtn: false,
    dropDown: false,
    interval: null 

   }

  dropDown = () => {
    let { dropDown } = this.state;
    dropDown ? dropDown = false : dropDown = true
    this.setState({ dropDown })
  }

  startBtnActiveFunc = () => {
      let { startBtnActive,count } = this.state;
      startBtnActive ? startBtnActive = false : startBtnActive = true;
      this.setState({startBtnActive})

      if(startBtnActive) {
        const interval = setInterval(() => {
        count++
        this.setState({count})
       }, 0);
       this.setState({interval}) 
      
    }
      if(! startBtnActive) {
        clearInterval(this.state.interval); 

      }
  }


  render() {
    const {props} = this;
    const {count,dropDown,startBtnActive} = this.state;
    // startBtn, pauseBtn, paymentBtn, removeBtn,

    return ( 
      <div className="view-project">
        <div className={props.switchMode ? "line-control line-control-constricted" : "line-control" }>
        <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }>{props.index}</div>
        <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }>{props.dateCreated}</div>
            <div className={props.switchMode ? "title-project title-project-constricted" : "title-project" }><div className="text"><span className="project-name"><AiOutlineFundProjectionScreen/></span> { props.projectName }</div></div>
            <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }><div className="text"><span className="project-time"></span>₪ {props.projectRate}</div></div>
            <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }><div className="text"><span className="project-time"><AiOutlineClockCircle/></span> {count} </div></div>
            <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }><div className="text"><span className="project-time"></span>₪ {Math.round(props.projectRate.toFixed(2) * count / 60 / 60)}</div></div>
            <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }>{
                ! startBtnActive 
                ? <button onClick={this.startBtnActiveFunc} className="td-button"><span className="start-time"><BsPlay/></span></button>
                : <button onClick={this.startBtnActiveFunc} className="td-button"><span className="stop-time"><BsPauseFill/></span></button>
            }</div>
            <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }><button className="td-button"><span className="payment"><BiCoin/></span></button></div>
            <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }><button  className="td-button"><span className="remove-project"><RiDeleteBin6Line/></span></button></div>
            <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }><span onClick={this.dropDown} className={dropDown ? 'drop-down drop-down-on' : 'drop-down'}><RiArrowDropDownLine/></span></div>
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





    
      
      
        

      

