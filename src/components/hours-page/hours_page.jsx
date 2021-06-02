import React, { Component } from 'react';
import AddProject from '../util/add-project/add-project';
import ViewProject from '../util/view-project/view-project';
import Switches from '../tools/switch';



class HoursPage extends Component {

    state = { 
        switchMode: false
     }

    switchBtnMode = () => {
        let { switchMode } = this.state;
        let switchElement = document.querySelector('.MuiSwitch-root');
        let switchBtn = switchElement.children[0].classList;
        switchBtn.forEach( classValue => {
            if(! classValue.includes('Mui-checked')) {
                switchMode = true;
                return this.setState({ switchMode })
            } 
            if( classValue.includes('Mui-checked')) {
                switchMode = false;
                return this.setState({ switchMode })
            }
        })
    }

     data = [
        {
            id: '235-985',
            projectName: 'בניית אתר תדמית',
            projectTime: 7200,
            projectRate: 250,
            consumerFirstName: 'משה',
            consumerLastName: 'כהן',
            consumerAdress: 'נתניה',
            consumerPhoneNumber: '050-89753065',
            consumerEmail: 'moshe@gmail.com'
        },
        {
            id:'659-897',
            projectName: 'CRM SYSTEM',
            projectTime: 10800,
            projectRate: 100,
            consumerFirstName: 'יוסי',
            consumerLastName: 'לוי',
            consumerAdress: 'רחובות',
            consumerPhoneNumber: '054-5903742',
            consumerEmail: 'yossi@gmail.com'
        },
        {
            id: '598-201',
            projectName: 'Facebook SYSTEM',
            projectTime: 3600,
            projectRate: 750,
            consumerFirstName: 'נורית',
            consumerLastName: 'אברהם',
            consumerAdress: 'באר שבע',
            consumerPhoneNumber: '052-8003985',
            consumerEmail: 'nurit@gmail.com'
        },   
    ]



    render() { 
        // console.log(this.state.switchMode);
        // const projectRateAverage;
        // const toatlWorkTime;
        // const totalNumProjects;
        // const totalMoneyCash;
        

        return ( 
            <div className="hours-page">
    
                <div className="box">
                    <h1 className="display-4 mt-3">מערכת ספירת שעות</h1>
                </div>
                
                <div className="box">
                        <AddProject/>
                </div>
    
    
                <div className="box">
                    <div className="view-project title-box">
                        <div className="title-fix">#</div>
                        <div className="title-project">פרוייקט</div>
                        <div className="title-fix" >תעריף</div>
                        <div className="title-fix" >זמן</div>
                        <div className="title-fix" >סה''כ</div>
                        <div className="title-fix" >הפעלה</div>
                        <div className="title-fix" >השהיה</div>
                        <div className="title-fix" >לתשלום</div>
                        <div className="title-fix" >מחיקה</div>
                        <div className="title-fix" ></div>
                     </div> 
                </div>
    
                <div className="box">
                    {
                        this.data.map( (project, index) => <ViewProject key={index+1}
                            index={index+1}
                            id={project.id}
                            projectName={project.projectName}
                            projectTime={project.projectTime}
                            projectRate={project.projectRate}
                            switchMode={this.state.switchMode}
                            consumerFirstName={project.consumerFirstName}
                            consumerLastName={project.consumerLastName}
                            consumerAdress={project.consumerAdress}
                            consumerPhoneNumber={project.consumerPhoneNumber}
                            consumerEmail={project.consumerEmail}
                        /> )
                    }
                </div>
                <div className="box">
                <div className="line-bottom">
                <div className="total-data">
                        <div className="title-fix"></div>
                        <div className="title-project">סך פרוייקטים: <p>{35}</p></div>
                        <div className="title-fix" >תעריף ממוצע: <p>{195}</p></div>
                        <div className="title-fix" >סך שעות: <p>{195}</p></div>
                        <div className="title-fix" >סך לגביה: <p>{195}</p></div>
                        <div className="title-fix" ></div>
                        <div className="title-fix" ></div>
                        <div className="title-fix" ></div>
                        <div className="title-fix" ></div>
                        <div className="title-fix" ></div>
                     </div>
                    <div className="dense-padding">
                        <i>צופף שורות</i>
                        <span onClick={ this.switchBtnMode }><Switches/></span>
                        
                        
                    </div>
                </div>
                </div>
            </div>
         );
    }
}
 
export default HoursPage;

