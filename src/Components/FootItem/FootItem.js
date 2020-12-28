import React from 'react';
import './FootItem.css';
import {FaFacebook} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import {SiWebmoney} from "react-icons/si";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {AiFillTag} from "react-icons/ai";
import {FaGraduationCap} from "react-icons/fa";
import { useHistory } from 'react-router-dom';

const FootItem = () => {


    let history=useHistory();

     const RouteChange=(path)=>
     {
           history.push(path);
     }
    return (
        <div className="footbody" id="foot">
        <footer class="footer">
            <div class="l-footer">
            <span><FaGraduationCap size="3rem" style={{color:'yellow', marginTop: '-30px'}}/></span> 
               <span  style={{ 'fontFamily': 'cursive', 'fontSize': '3rem'}}><b className="logg">MU</b><b>-ACM</b></span>
            <br></br>
            <br></br>
                <p style={{ textAlign: 'justify'}}>Metropolitan University has a great environment for ACM ICPC.Because ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life-long learning, career development, and professional networking.</p>
                <br></br>
                <br></br>

                    <ul class="social-icons">
                        <li><a  className="facebook" href="https://www.facebook.com/groups/734057760032501"><FaFacebook size="1.5em"/></a></li>
                        <li><a className="website" href="https://metrouni.edu.bd/"><SiWebmoney size="1.5em"/></a></li>
                        <li><a className="whatsapp" href="https://api.whatsapp.com/send?phone=+8801778482201"><AiOutlineWhatsApp size="1.5em"/></a></li>   
                    </ul>
            </div>
            <ul class="r-footer" >
                <li>
                    <b className="footh2" >
                        Information </b>
                    <ul class="box" style={{cursor:'pointer'}}>
                        

                        <li><a href='https://icpc.global/' style={{color: 'white'}}>ACM Global Site</a></li>

                        <li><a href='https://nordic.icpc.io/' style={{color: 'white'}}>NCPC-Bangladesh</a></li>

                        <li><a href='https://www.stopstalk.com/dashboard' style={{color: 'white'}}>Find Your Profile</a></li>

                        <li> <a href='http://www.synapse0.com/' style={{color: 'white'}}>Synapse Site</a></li>

                        <li> <a href='https://www.facebook.com/BAPS.BGD/' style={{color: 'white'}}>BAPS Facebook Group</a></li>

                        

                    </ul>
                </li>
                <li class="features" style={{marginTop:'-5px',marginLeft:'180px', fontSize: '18px', color: '#DDD8D8'}}>
                <b className="footh2" >
                        Contact Us </b>
                <li>
                    <li>Email:</li>
                    <li>muacm2021@gmail.com</li>
                </li>
                    
                        
                       
                </li>
                <li Style={{marginLeft: '-100px'}}>
                    <h2 className="footh2">
                        Address</h2>
                    <ul class="box">
                        <li>Bateshwar, Sylhet-3103, Bangladesh</li>
                    </ul>
                </li>
            </ul>
            <div class="b-footer">
                <p style={{marginTop: '-40px'}}>
                    All rights reserved by ©MU-ACM 2020 </p>
            </div>
        </footer>

        </div>
    );
};

export default FootItem;