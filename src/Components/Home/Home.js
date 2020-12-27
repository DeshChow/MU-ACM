import React from 'react';
import { useHistory } from 'react-router-dom';
import ContestLink from '../ContestLink/ContestLink';
import FootItem from '../FootItem/FootItem';
import Header from '../Header/Header';
import {AiOutlineLine} from "react-icons/ai";
import HomeCard from '../HomeCard/HomeCard';
import Memory from '../Memory/Memory';
import ProgrammingSite from '../ProgrammingSite/ProgrammingSite';


const Home = () => {

    const dsData = [{

        topic: 'ds',
        id: 'array',
        header: 'Array',
        detail: 'An array is a collection of items stored at contiguous memory locations.It can store a fixed size'

    },
    {

        topic: 'ds',
        id: 'stack',
        header: 'Stack',
        detail: 'Stack is a linear data structure which follows a particular order in which the operations are performed.'

    },
    {

        topic: 'ds',
        id: 'queue',
        header: 'Queue',
        detail: 'A Queue is a linear structure which follows a particular order in which the operations are performed.'

    }



    ]

    const algoData = [{

        topic: 'algo',
        id: 'bfs',
        header: 'BFS',
        detail: 'Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures.'

    },
    {

        topic: 'algo',
        id: 'dfs',
        header: 'DFS',
        detail: 'Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures.'

    },
    {

        topic: 'algo',
        id: 'segmenttree',
        header: 'Segment Tree',
        detail: 'A Segment Tree is a data structure that allows answering range queries over an array effectively, while still being flexible enough to allow modifying the array.'

    }



    ]

    const history = useHistory();

    const handleClick = (str) => {

        history.push('/' + str);

    }

    return (

        <div>

            <Header></Header>

            <br></br>

            <div>
                <div>
                    <h1 style={{ textAlign: 'center',fontFamily: "cursive" }}>Data Structure</h1>
                    <div className="row" >  
           <AiOutlineLine size="2rem" style={{marginLeft: "715px",color: '#4A0363'}}></AiOutlineLine>
           <AiOutlineLine size="2rem" style={{marginLeft: "10px",color: 'tomato'}}></AiOutlineLine>
           <AiOutlineLine size="2rem" style={{marginLeft: "10px",color: 'green'}}></AiOutlineLine>
           </div>


                    <a onClick={() => handleClick('dataStructure')}  style={{ float: 'right',marginTop: '-30px' }}><b style={{marginLeft: '-70px',cursor: 'pointer'}}>see all</b></a>
                </div>

              



                <HomeCard data={dsData}></HomeCard>

            </div>

            <div>
                <div >
                    <h1 style={{ textAlign: 'center',fontFamily: "cursive" }}>Algorithm</h1>
                    <div className="row" >  
           <AiOutlineLine size="2rem" style={{marginLeft: "715px",color: '#4A0363'}}></AiOutlineLine>
           <AiOutlineLine size="2rem" style={{marginLeft: "10px",color: 'tomato'}}></AiOutlineLine>
           <AiOutlineLine size="2rem" style={{marginLeft: "10px",color: 'green'}}></AiOutlineLine>
           </div>

                 
                    <a onClick={() => handleClick('algorithm')}  style={{ float: 'right',marginTop: '-30px' }}><b style={{marginLeft: '-70px',cursor: 'pointer'}}>see all</b></a>
                </div>


                <HomeCard data={algoData}></HomeCard>

            </div>

            <div>

                <ContestLink></ContestLink>

            </div>

            <div>

               <ProgrammingSite></ProgrammingSite>

            </div>

            <div>

    <Memory></Memory>

</div>

   <FootItem></FootItem>






        </div>


    );
};

export default Home;