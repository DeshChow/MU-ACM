import React from 'react';
import ProgrammingSiteDetailInner from '../ProgrammingSiteDetailInner/ProgrammingSiteDetailInner';
import Codeforce from '../../images/Codeforce.png';
import Codechef from '../../images/Codechef.png';
import Toph from '../../images/Toph.png';
import Kattis from '../../images/Kattis.png';
import DevSkill from '../../images/DevSkill.png';
import Codemarshal from '../../images/Codemarshal.png';
import Atcoder from '../../images/Atcoder.png';
import LightOj from '../../images/LightOj.png';
import ShopOj from '../../images/ShopOj.png';
import Uri from '../../images/Uri.png';
import LeetCode from '../../images/LeetCode.png';
import Uva from '../../images/Uva.png';

const ProgrammingSiteDetail = () => {

    const  data=[
        {
           name:Codeforce,
           src:'https://codeforces.com/'
        },
        {
           name:Codechef,
           src:'https://www.codechef.com/'
        },
        {
           name:Toph,
           src:'https://toph.co/'
        },
        {
            name:LightOj,
           src:'http://lightoj.com/login_main.php'
        },
        {
            name:Uva,
            src:'https://onlinejudge.org/'
        },
        {
            name:Kattis,
           src: 'https://open.kattis.com/'
        },
        {
            name:DevSkill,
           src:'https://devskill.com/'
        },
        {
            name:Codemarshal,
           src:'https://algo.codemarshal.org/'
        },
        {
            name:Atcoder,
           src:'https://atcoder.jp/'
        },
        {
            name:ShopOj,
           src:'https://www.spoj.com/'
        },
        {
            name:Uri,
            src:'https://www.urionlinejudge.com.br/judge/en/login'
        },
        {
            name:LeetCode,
            src:'https://leetcode.com/'
        },

    ]
    return (
        <div className='row'>
            
            {
               data.map(d=><div className='col-3'><ProgrammingSiteDetailInner d={d}></ProgrammingSiteDetailInner></div>)
            }



        </div>
    );
};

export default ProgrammingSiteDetail;