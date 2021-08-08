import React, { Component } from 'react';
import AddProject from './add-project';
import ViewProject from './view-project';
import Switches from '../../tools/switch';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { HiOutlineUserCircle } from 'react-icons/hi';
import PageHeader from '../../common/page-header';
import { apiUrl } from '../../../config/config.json';
import axios from 'axios';
import {headersAuth} from '../../../utils/constData';

class HoursPage extends Component {

    state = { 
        switchMode: false,
        filterProjectInput: false,
        filterConsumerInput: false,
        getProjectsList: [],
        project: { 
            project_name: "",
            last_name: "",
            password: "",
            phone_number: "",
            email: "",
        },
        errors: {
            err_first_name: "",
            err_last_name: "",
            err_password: "",
            err_phone_number: "",
            err_email: "",
        },
        isValid: {
            first_name: false,
            last_name: false,
            password: false,
            phone_number: false,
            email: false,
        },
        toSubmitMode: false
    }

    // padding lines  
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

    // filter window - projects & consumers
    getElementsProjectsList = () => {
        let {filterProjectInput} = this.state;
        filterProjectInput  = true;
        this.setState({ filterProjectInput })
    }
    getElementsConsumersList = () => {
        let {filterConsumerInput} = this.state;
        filterConsumerInput  = true;
        this.setState({ filterConsumerInput })
    }
    removeElementsList = () => {
        let {filterProjectInput,filterConsumerInput} = this.state;
        filterProjectInput  = false;
        filterConsumerInput  = false;
        this.setState({ filterProjectInput,filterConsumerInput })
    }

    // Get Req - all Projects
    componentDidMount() {
       axios.get(`${apiUrl}/users/all-projects`, headersAuth)
       .then( res => {
        let { getProjectsList } = this.state;
        getProjectsList = res.data;
        this.setState({ getProjectsList });
       })
    }
 
    getSchemaLine = () => {
        const {getProjectsList} = this.state;
        const totalNumProjects = getProjectsList.length;

        let projectRateAverage = 0; // minimize
        let totalMoneyCash = 0; // minimize
        let toatlWorkTime = 0; // minimize
        if( getProjectsList.length > 0 ) {
            getProjectsList.map( (project) => {
                projectRateAverage += project.project_rate;
                totalMoneyCash += project.project_time / 60 / 60 * project.project_rate;
                toatlWorkTime += project.project_time;
                return '';
            } )

            projectRateAverage = projectRateAverage / totalNumProjects;
            projectRateAverage = projectRateAverage.toFixed() // minimize
            toatlWorkTime = toatlWorkTime / 60 / 60;
            toatlWorkTime = toatlWorkTime.toFixed(1); // minimize
            totalMoneyCash = totalMoneyCash.toFixed(2) 
            return {
                toatlWorkTime,
                projectRateAverage,
                totalMoneyCash,
                totalNumProjects,
            }
        }
    }

    render() { 

        const {filterProjectInput, filterConsumerInput} = this.state;

        return ( 
            <div className="hours-page">
    
                <div className="box">
                    <PageHeader>Hours System</PageHeader>
                </div>
                
                <div className="box">
                        <AddProject/>
                </div>

                { 
                    this.state.getProjectsList.length > 0 
                    ? 
                    <React.Fragment>
                        <div className="box filter-box">
                            <div className="project-filter" onMouseLeave={this.removeElementsList}>
                                <input onClick={this.getElementsProjectsList}  name="inp-project-filter" className="form-control" type="text" placeholder="חפש לפי פרוייקט"/>
                                <ul className={filterProjectInput ? 'project ul-on' : 'project' }>
                                    {/* foreach will be here  */}
                                    <li><i><AiOutlineFundProjectionScreen/></i> <span>בניית אתר תדמית</span></li>
                                    <li><i><AiOutlineFundProjectionScreen/></i> <span>CRM SYSTEM</span></li>
                                    <li><i><AiOutlineFundProjectionScreen/></i> <span>Facebook SYSTEM</span></li>
                                    <li><i><AiOutlineFundProjectionScreen/></i> <span>בניית אתר תדמית</span></li>
                                    <li><i><AiOutlineFundProjectionScreen/></i> <span>CRM SYSTEM</span></li>
                                    <li><i><AiOutlineFundProjectionScreen/></i> <span>Facebook SYSTEM</span></li>
                                    <li><i><AiOutlineFundProjectionScreen/></i> <span>בניית אתר תדמית</span></li>
                                    <li><i><AiOutlineFundProjectionScreen/></i> <span>CRM SYSTEM</span></li>
                                    <li><i><AiOutlineFundProjectionScreen/></i> <span>Facebook SYSTEM</span></li>
                                </ul>
                            </div>

                            <div className="consumer-filter" onMouseLeave={this.removeElementsList}>
                            <input onClick={this.getElementsConsumersList}  name="inp-consumer-filter" className="form-control" type="text" placeholder="חפש לפי לקוח"/>
                                <ul className={filterConsumerInput ? 'consumer ul-on' : 'consumer' }>
                                    {/* foreach will be here  */}
                                    <li><i ><HiOutlineUserCircle/></i> <span>בניית אתר תדמית</span></li>
                                    <li><i ><HiOutlineUserCircle/></i> <span>CRM SYSTEM</span></li>
                                    <li><i ><HiOutlineUserCircle/></i> <span>Facebook SYSTEM</span></li>
                                    <li><i ><HiOutlineUserCircle/></i> <span>בניית אתר תדמית</span></li>
                                    <li><i ><HiOutlineUserCircle/></i> <span>CRM SYSTEM</span></li>
                                    <li><i ><HiOutlineUserCircle/></i> <span>Facebook SYSTEM</span></li>
                                    <li><i ><HiOutlineUserCircle/></i> <span>בניית אתר תדמית</span></li>
                                    <li><i ><HiOutlineUserCircle/></i> <span>CRM SYSTEM</span></li>
                                    <li><i ><HiOutlineUserCircle/></i> <span>Facebook SYSTEM</span></li>
                                </ul>
                            </div>
                    </div>
                        <div className="box">
                        <div className="view-project title-box">
                            <div className="title-fix checkbox"><input type="checkbox" name="select-all" id="select-all"/></div>
                            <div className="title-project">פרוייקט</div>
                            <div className="title-fix" >תעריף</div>
                            <div className="title-fix" >שעות עבודה</div>
                            <div className="title-fix" >סה''כ</div>
                            <div className="title-fix actions" ></div>
                            <div className="title-fix actions" >פעולות</div>
                            <div className="title-fix actions" ></div>
                            <div className="title-fix drop-down" ></div>
                        </div> 
                        </div> <div className="box">
                        {
                            this.state.getProjectsList && 
                            this.state.getProjectsList.map( (project, index) => <ViewProject 
                            key={index+1}
                            index={index+1}
                            dateCreated={project.project_created_at}
                            id={project.project_id}
                            projectName={project.project_name}
                            projectTime={project.project_time}
                            projectRate={project.project_rate}
                            switchMode={this.state.switchMode}
                        /> )
                        }
                    </div>
                        <div className="box">
                    <div className="line-bottom">
                    <div className="total-data">
                            <div className="title-fix checkbox"></div>
                            {/* <div className="title-fix"></div> */}
                            <div className="title-project"><p>{this.getSchemaLine() && this.getSchemaLine().totalNumProjects}</p><p className="note-hover bg-primary">סך פרוייקטים</p></div>
                            <div className="title-fix" ><p>{this.getSchemaLine() && this.getSchemaLine().projectRateAverage} ₪</p> <p className="note-hover bg-primary">תעריף ממוצע</p></div>
                            <div className="title-fix" ><p>{this.getSchemaLine() && this.getSchemaLine().toatlWorkTime}</p> <p className="note-hover bg-primary">סך שעות</p></div>
                            <div className="title-fix" ><p>{this.getSchemaLine() && this.getSchemaLine().totalMoneyCash} ₪</p> <p className="note-hover bg-primary">סך לגביה</p></div>
                            <div className="title-fix actions"></div>
                            <div className="title-fix actions"></div>
                            <div className="title-fix actions"></div>
                            <div className="title-fix drop-down"></div>
                        </div>
                        <div className="dense-padding">
                            <i>צופף שורות</i>
                            <span onClick={ this.switchBtnMode }><Switches/></span>
                            
                            
                        </div>
                    </div>
                    </div>
                        </React.Fragment>
                : <p className="no-project-yet">You have not yet created any projects</p>
                }
                

            </div>
         );
    }
}
 
export default HoursPage;

