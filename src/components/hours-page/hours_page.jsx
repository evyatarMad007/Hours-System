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
            dateCreated: '28.08.2020',
            projectName: 'בניית אתר תדמית',
            projectTime: 0,
            projectRate: 100,
            consumerFirstName: 'משה',
            consumerLastName: 'כהן',
            consumerAdress: 'נתניה',
            consumerPhoneNumber: '050-89753065',
            consumerEmail: 'moshe@gmail.com'
        },
        {
            id:'659-897',
            dateCreated: '15.05.2021',
            projectName: 'CRM SYSTEM',
            projectTime: 0,
            projectRate: 750,
            consumerFirstName: 'יוסי',
            consumerLastName: 'לוי',
            consumerAdress: 'רחובות',
            consumerPhoneNumber: '054-5903742',
            consumerEmail: 'yossi@gmail.com'
        },
        {
            id: '598-201',
            dateCreated: '09.03.2021',
            projectName: 'Facebook SYSTEM',
            projectTime: 0,
            projectRate: 100,
            consumerFirstName: 'נורית',
            consumerLastName: 'אברהם',
            consumerAdress: 'באר שבע',
            consumerPhoneNumber: '052-8003985',
            consumerEmail: 'nurit@gmail.com'
        },   
    ]

    // <div className="title-project"><p>{35}</p><p className="note-hover bg-secondary">סך פרוייקטים</p></div>
    // <div className="title-fix" ><p>{195}</p> <p className="note-hover bg-secondary">תעריף ממוצע</p></div>
    // <div className="title-fix" ><p>{195}</p> <p className="note-hover bg-secondary">סך שעות</p></div>
    // <div className="title-fix" ><p>{195}</p> <p className="note-hover bg-secondary">סך לגביה</p></div>

    getSchemaLine = () => {
        const {data} = this;
        const totalNumProjects = data.length;
        let projectRateAverage = 0;
        let totalMoneyCash = 0;
        let toatlWorkTime = 0;
        data.map( (project) => {
            projectRateAverage += project.projectRate;
            totalMoneyCash += project.projectTime / 60 / 60 * project.projectRate;
            toatlWorkTime += project.projectTime;
        } )
        projectRateAverage = projectRateAverage / totalNumProjects;
        projectRateAverage = projectRateAverage.toFixed()
        toatlWorkTime = toatlWorkTime / 60 / 60;
        toatlWorkTime = toatlWorkTime.toFixed(1);
        totalMoneyCash = totalMoneyCash.toFixed(2)
        return {
            toatlWorkTime,
            totalNumProjects ,
            projectRateAverage,
            totalMoneyCash
        }
    }
    



    render() { 
        this.getSchemaLine();
        
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
                        <div className="title-fix">תאריך יצירה</div>
                        <div className="title-project">פרוייקט</div>
                        <div className="title-fix" >תעריף</div>
                        <div className="title-fix" >שעות עבודה</div>
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
                            dateCreated={project.dateCreated}
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
                        <div className="title-fix"></div>
                        <div className="title-project"><p>{this.getSchemaLine().totalNumProjects}</p><p className="note-hover bg-primary">סך פרוייקטים</p></div>
                        <div className="title-fix" ><p>{this.getSchemaLine().projectRateAverage} ₪</p> <p className="note-hover bg-primary">תעריף ממוצע</p></div>
                        <div className="title-fix" ><p>{this.getSchemaLine().toatlWorkTime}</p> <p className="note-hover bg-primary">סך שעות</p></div>
                        <div className="title-fix" ><p>{this.getSchemaLine().totalMoneyCash} ₪</p> <p className="note-hover bg-primary">סך לגביה</p></div>
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

