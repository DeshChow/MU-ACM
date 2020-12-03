import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

import HomeCard from '../HomeCard/HomeCard';


const Home = () => {

    const dsData = [{

        topic:'ds',
        id:'array',
        header: 'Array',
        detail: 'An array is a collection of items stored at contiguous memory locations.It can store a fixed size'

    },
    {

        topic:'ds',
        id:'stack',
        header: 'Stack',
        detail: 'Stack is a linear data structure which follows a particular order in which the operations are performed.'

    },
    {

        topic:'ds',
        id:'queue',
        header: 'Queue',
        detail: 'A Queue is a linear structure which follows a particular order in which the operations are performed.'

    }



    ]

    const algoData = [{

        topic:'algo',
        id:'bfs',
        header: 'BFS',
        detail: 'Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures.'

    },
    {

        topic:'algo',
        id:'dfs',
        header: 'DFS',
        detail: 'Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures.'

    },
    {

        topic:'algo',
        id:'segmenttree',
        header: 'Segment Tree',
        detail: 'A Segment Tree is a data structure that allows answering range queries over an array effectively, while still being flexible enough to allow modifying the array.'

    }



    ]

      const history=useHistory();

    const handleClick=(str)=>{

        history.push('/'+str);

    }
    
    return (

        <>

<Header></Header>
             
            <div>
            <div style={{padding : '0px 20px'}}>
                <h1 style={{ textAlign: 'center' }}>Data Structure</h1>

                
                <a onClick={()=>handleClick('dataStructure')} href='' style={{float:'right' }}><b>see all</b></a>
                </div>

               <br/>

                

                <HomeCard data={dsData}></HomeCard>

            </div>

            <div>
            <div style={{padding : '0px 20px'}}>
                <h1 style={{ textAlign: 'center' }}>Algorithm</h1>

                
                <a onClick={()=>handleClick('algorithm')} href='' style={{float:'right' }}><b>see all</b></a>
                </div>

               <br/>

                

                <HomeCard data={algoData}></HomeCard>

            </div>





        </>


    );
};

export default Home;