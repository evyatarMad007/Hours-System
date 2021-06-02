import React, { Component } from 'react';
import { AiOutlineClockCircle,AiOutlineFundProjectionScreen } from 'react-icons/ai';
import {  RiRestartLine,RiDeleteBin6Line ,RiArrowDropDownLine} from 'react-icons/ri';
import {  BsPlay, BsPauseFill } from 'react-icons/bs';
import {  BiCoin } from 'react-icons/bi';


class ViewProject extends Component {
  
  state = { 
    count: this.props.projectTime,
    startBtn: false,
    pauseBtn: false,
    paymentBtn: false,
    removeBtn: false,
    dropDown: false,

   }

  dropDown = () => {
    let { dropDown } = this.state;
    dropDown ? dropDown = false : dropDown = true
    this.setState({ dropDown })
  }

  startCount = () => {
    console.log(this.props.projectTime);
    const interval = setInterval(() => {
      let {count} = this.state;
      count++
      this.setState({ count })
    }, 1000);
  }

  render() {
    
    const {props} = this;
    const {count, startBtn, pauseBtn, paymentBtn, removeBtn,dropDown} = this.state;
    // console.log(props);

    let ProjectRate = props.projectRate;
    // let secounds = count;
    // let minutes = count / 60;

    let hoursFormat =  count / 60 / 60 % 1 ? 0 : count / 60 / 60 ;

    // 180
    let minutes =  count / 60 % 60 ? 'true' : 'false' ;
    // let secounds =  count / 60 / 60 % 1 ? 0 : count / 60 / 60 ;

    // console.log(minutes);

    return ( 
      // <div className="view-project">
      <div className="view-project">
        
        <div className={props.switchMode ? "line-control line-control-constricted" : "line-control" }>
        <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }>{props.index}</div>
        <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }>{props.dateCreated}</div>
            <div className={props.switchMode ? "title-project title-project-constricted" : "title-project" }><div className="text"><span className="project-name"><AiOutlineFundProjectionScreen/></span> { props.projectName }</div></div>
            <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }><div className="text"><span className="project-time"></span>₪{props.projectRate}</div></div>
            <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }><div className="text"><span className="project-time"><AiOutlineClockCircle/></span>{count}</div></div>
            <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }><div className="text"><span className="project-time"></span>₪{props.projectRate.toFixed(2)}</div></div>
            <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }><button onClick={this.startCount} className="td-button btn btn-outline-success btn-sm"><span className="start-time"><BsPlay/></span></button></div>
            <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }><button className="td-button btn btn-outline-secondary btn-sm"><span className="stop-time"><BsPauseFill/></span></button></div>
            <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }><button className="td-button btn btn-outline-warning btn-sm"><span className="payment"><BiCoin/></span></button></div>
            <div className={props.switchMode ? "title-fix title-fix-constricted" : "title-fix" }><button  className="td-button btn btn-outline-danger btn-sm"><span className="remove-project"><RiDeleteBin6Line/></span></button></div>
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
                      <tr>
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
                      <tr>
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
                      <tr>
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
                      <tr>
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
                      <tr>
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
                      <tr>
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
                      <tr>
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
                      <tr>
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
                      <tr>
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
                      <tr>
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
                      <tr>
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





    
      
      
        

      

