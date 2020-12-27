import React from 'react';

import winner1 from '../../images/winner1.jpg';
import winner2 from '../../images/winner2.jpg';
import winner3 from '../../images/winner3.jpg';
import winner4 from '../../images/winner4.jpg';
import winner5 from '../../images/winner5.jpg';
import FootItem from '../FootItem/FootItem';
import MemoryDetailInner from '../MemoryDetailInner/MemoryDetailInner';


const MemoryDetail = () => {


    const data=[
        {
            imgName : winner1 ,
            name : `'Ada Lovelace National Girls' Programming Contest 2020`,
            rank : 'Champion',
            details:'MU_LastTry has solved 4 problems in Ada Lovelace National Girls Programming Contest 2020 and ranked 1 nationally.Metropolitan University always creats a great environment for female students for practising and enriching their skill.'
        },
        {
            imgName : winner2 ,
            name : 'ICPC Dhaka Regional Contest 2019',
            rank : '30th',
            details:'MU_Resplendence Secured 30th position at ACM ICPC Dhaka Regional.This is the best rank in ICPC Regional for Metropolitan University till now. It was really good and great moment to see them at top 30 from MU.'
        },
        {
            imgName : winner3,
            name : 'Bangladesh University of Professionals IUPC 2019',
            rank : '13th',
            details:'MU_Resplendence Secured 30th position at BUP IUPC 2019.This is the best rank in any national programming contest for Metropolitan University till now.This contest rank makes MU as one of the top-rated University regarding programing contest.'
        },
        {
            imgName : winner4,
            name : 'LU CSE Carnival 2019 Inter University Programming Contest',
            rank : '22nd',
            details:'MU_Inferno Secured 22nd position at LU CSE Carnival 2019 Inter University Programming Contest.This is the great achievement for the juniors of Metropolitan University.It also gives ray of hope of the bright future of MU students.'
        },
        {
            imgName : winner5,
            name : 'LU Inter University Programming Contest 2017',
            rank : '5th',
            details:'MU_Kheloars! Secured 5th position at LU Inter University Programming Contest 2017. Fifteen teams from Metropolitan University were participated in the contest which was a great achievement indeed! Both seniors ans juniors tried their best and most of them secured a good rank.'
        }
      
    ];

    
    return (
        <div>
           

            {

                data.map(d=><MemoryDetailInner d={d}></MemoryDetailInner>)
            }

            <FootItem></FootItem>
        </div>
    );
};

export default MemoryDetail;