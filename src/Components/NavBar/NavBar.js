import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaGraduationCap} from "react-icons/fa";
import './NavBar.css'
import { useHistory } from 'react-router-dom';
const NavBar = () => {

    let history=useHistory();

    const handleClick=()=>
    {
        history.replace('/home');
    }
    return (

        <div className='header'>

            
        <nav className='test'>
            <span>
            <span onClick={handleClick} style={{marginLeft: '-280px', cursor:'pointer'}}>
              <span><FaGraduationCap size="1.3rem" style={{color:'yellow', marginTop: '-5px'}}/></span> 
               <span  style={{ 'fontFamily': 'cursive', 'fontSize': '1.3rem'}}><b style={{color: 'orangered'}}>MU</b><b style={{color: 'white'}}>-ACM</b></span>
            </span>
            <span style={{marginLeft: '280px'}}>
                <a href='/home'>Home</a>
                <a href='/dataStructure'>Data Structure</a>
                <a href='/algorithm'>Algorithm</a>

                <a href='/ContestLink'>Contest</a>
                <a href='/ProgrammingSite'>Online Judges</a>
                <a href='/MUMemory'>Memory</a>
            </span>
            </span>
          
            </nav>

            </div>
    );
};

export default NavBar;