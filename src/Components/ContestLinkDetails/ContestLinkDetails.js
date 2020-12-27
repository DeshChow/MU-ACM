import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ContestLinkDetailsInner from '../ContestLinkDetailsInner/ContestLinkDetailsInner';
import FootItem from '../FootItem/FootItem';
import './ContestLinkDetails.css';

const ContestLinkDetails = () => {

  /*  const data=[
 
        {
         name:'MU INTRA UNIVERSITY PROGRAMMING CONTEST',
         src:'https://www.hackerrank.com/contests/mu-intra-university-programming-contest-junior/challenges',
         password:'No Password'
       },

       {
        name:'Practice on Previous ICPC Problems',
        src:'http://vjudge.net/contest/130739#overview',
        password:'icpc'
      },

      {
        name:'Welcome Beginners!',
        src:'http://vjudge.net/contest/119023#overview!',
        password:'No Password'
      },


       {
           name:'Weekly Contest-Number Theory',
           src:'http://vjudge.net/contest/139900#overview',
           password:'metro'
         },

       {
           name:'Weekly Contest-Ad hoc, Stack,Queue',
           src:'http://vjudge.net/contest/93243#overview',
           password:'metro'
         },


         {
            name:'Weekly Contest-Searching',
            src:'https://vjudge.net/contest/207447',
            password:'MU_Codefighter'
          },
 
          {
            name:'Weekly Contest-Sorting',
            src:'https://vjudge.net/contest/208532',
            password:'MU_Codefighter'
          },
 

         {
           name:'Weekly Contest-Mathematics',
           src:'http://vjudge.net/contest/94221#overview',
           password:'metro'
         },

         {
           name:'Weekly Contest-Graph',
           src:'http://vjudge.net/contest/95315#overview',
           password:'metro'
         },
         {
           name:'Weekly Contest-Recursion & Backtracking',
           src:' http://vjudge.net/contest/107961#overview',
           password:'metro'
         },
         {
           name:'Weekly Contest-MAX_FLOW',
           src:'https://vjudge.net/contest/376681',
           password:'max_flow'
         },



   ];*/

      const [data,setData]=useState([]);


      useEffect(() => {

        fetch('http://localhost:5000/ContestLink')
        .then(res=>res.json())
           .then(result=>
            {
               console.log(result);

               result.reverse();

               setData(result)
            })
       
      }, []);


   let cnt=0;

   let history=useHistory();

   const handleClick=()=>
   {
    history.push('/addAPost');
   }

   const isAvaible=()=>
   {
      if(data.length)return true;

      else return false;
   }

    return (
       isAvaible() &&<div>
            <div>
                <br></br>
                 <button onClick={handleClick} className="postbtn" style={{float: 'right', color: 'white', marginRight: '100px'}}>Add a Post</button>
                 <br></br>
            </div>

            <div>

            {

                data.map(d=>
                <ContestLinkDetailsInner key={d.name} d={d} cnt={++cnt}></ContestLinkDetailsInner>
                
                
                )
            }
            </div>

            <FootItem></FootItem>
            
        </div>
          
    );
};

export default ContestLinkDetails;