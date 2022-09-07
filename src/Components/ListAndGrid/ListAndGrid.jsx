import React from 'react'
import './ListAndGrid.css'
import { FaList ,FaTasks} from "react-icons/fa";
import { BsFillGridFill,BsThreeDots } from "react-icons/bs";
import { AiOutlineStar,AiOutlineCalendar } from "react-icons/ai";
import avatar1  from '../../images/avatar1.png';
import avatar2  from '../../images/avatar2.png';
import avatar3  from '../../images/avatar3.png';
import avatar4  from '../../images/avatar4.png';


const ListAndGrid = () => {
  return (
    <div className='Grid-List-Container'>
        <header className='header'>
            <h1>Toggle Card List</h1>
        </header>

        <div className="toggle-btns">
        <FaList className='icons active' />
        <BsFillGridFill className='icons' />
        
        </div>
        <div className="project-container list">
            <div className="project">
                <div className="top-menu">
                    <AiOutlineStar className='icons2' />
                    <BsThreeDots className='icons2' />
                </div>
               <img src={avatar1}  className="Profile-img" alt="" />
               <h2 className="project_title">Revoluation</h2>
               <p className="project-desc">
               These example sentences are selected automatically 
               from various online news sources to reflect current 
               usage of the word 'dome.' Views expressed in the examples 
               do not represent the opinion of Merriam-Webster or its editors
               </p>
               <div className="project-info">
                <div className="detail">

                    <div className="info">
                        <FaTasks  className='icons3'/>
                        <p>Task:Commercial Project</p>   
                    </div>                        
                </div>
                <div className="detail flex">
                    <div className="info">
                    < AiOutlineCalendar  className='icons3'/>
                    <p>Date: 09.01.2021</p>
                    </div>   
              
                <div className="members">
                    <img src={avatar2}className="member-img" alt="" />
                    <img src={avatar3} className="member-img" alt="" />
                    <img src={avatar4} className="member-img"alt="" />
                </div>
               </div>
               </div>
            </div>
            <div className="project">
                <div className="top-menu">
                    <AiOutlineStar className='icons2' />
                    <BsThreeDots className='icons2' />
                </div>
               <img src={avatar1}  className="Profile-img" alt="" />
               <h2 className="project_title">Revoluation</h2>
               <p className="project-desc">
               These example sentences are selected automatically 
               from various online news sources to reflect current 
               usage of the word 'dome.' Views expressed in the examples 
               do not represent the opinion of Merriam-Webster or its editors
               </p>
               <div className="project-info">
                <div className="detail">

                    <div className="info">
                        <FaTasks  className='icons3'/>
                        <p>Task:Commercial Project</p>   
                    </div>                        
                </div>
                <div className="detail flex">
                    <div className="info">
                    < AiOutlineCalendar  className='icons3'/>
                    <p>Date: 09.01.2021</p>
                    </div>   
              
                <div className="members">
                    <img src={avatar2}className="member-img" alt="" />
                    <img src={avatar3} className="member-img" alt="" />
                    <img src={avatar4} className="member-img"alt="" />
                </div>
               </div>
               </div>
            </div>
            <div className="project">
                <div className="top-menu">
                    <AiOutlineStar className='icons2' />
                    <BsThreeDots className='icons2' />
                </div>
               <img src={avatar1}  className="Profile-img" alt="" />
               <h2 className="project_title">Revoluation</h2>
               <p className="project-desc">
               These example sentences are selected automatically 
               from various online news sources to reflect current 
               usage of the word 'dome.' Views expressed in the examples 
               do not represent the opinion of Merriam-Webster or its editors
               </p>
               <div className="project-info">
                <div className="detail">

                    <div className="info">
                        <FaTasks  className='icons3'/>
                        <p>Task:Commercial Project</p>   
                    </div>                        
                </div>
                <div className="detail flex">
                    <div className="info">
                    < AiOutlineCalendar  className='icons3'/>
                    <p>Date: 09.01.2021</p>
                    </div>   
              
                <div className="members">
                    <img src={avatar2}className="member-img" alt="" />
                    <img src={avatar3} className="member-img" alt="" />
                    <img src={avatar4} className="member-img"alt="" />
                </div>
               </div>
               </div>
            </div>
            <div className="project">
                <div className="top-menu">
                    <AiOutlineStar className='icons2' />
                    <BsThreeDots className='icons2' />
                </div>
               <img src={avatar1}  className="Profile-img" alt="" />
               <h2 className="project_title">Revoluation</h2>
               <p className="project-desc">
               These example sentences are selected automatically 
               from various online news sources to reflect current 
               usage of the word 'dome.' Views expressed in the examples 
               do not represent the opinion of Merriam-Webster or its editors
               </p>
               <div className="project-info">
                <div className="detail">

                    <div className="info">
                        <FaTasks  className='icons3'/>
                        <p>Task:Commercial Project</p>   
                    </div>                        
                </div>
                <div className="detail flex">
                    <div className="info">
                    < AiOutlineCalendar  className='icons3'/>
                    <p>Date: 09.01.2021</p>
                    </div>   
              
                <div className="members">
                    <img src={avatar2}className="member-img" alt="" />
                    <img src={avatar3} className="member-img" alt="" />
                    <img src={avatar4} className="member-img"alt="" />
                </div>
               </div>
               </div>
            </div>



        </div>

    </div>
  )
}

export default ListAndGrid