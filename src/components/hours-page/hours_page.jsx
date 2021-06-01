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
            projectRate: 250
        },
        {
            id:'659-897',
            projectName: 'CRM SYSTEM',
            projectTime: 10800,
            projectRate: 100
        },
        {
            id: '598-201',
            projectName: 'Facebook SYSTEM',
            projectTime: 3600,
            projectRate: 750
        },  
        {
            id: '235-985',
            projectName: 'Finance System',
            projectTime: 7200,
            projectRate: 250
        },
        {
            id:'659-897',
            projectName: 'Portal Users',
            projectTime: 1565,
            projectRate: 280
        },
        {
            id: '598-201',
            projectName: 'Google SYSTEM',
            projectTime: 1285,
            projectRate: 360
        },  
    ]



    render() { 
        // console.log(this.state.switchMode);
        const projectRateAverange;
        const toatlWorkTime;
        const totalNumProjects;
        const totalMoneyCash;
        

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

