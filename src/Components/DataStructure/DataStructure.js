import React from 'react';
import FootItem from '../FootItem/FootItem';
import FullCard from '../FullCard/FullCard';

const DataStructure = () => {
    const dsAllData = [{

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

    },
    {

        topic:'ds',
        id:'linkedlist',
        header: 'Linked List',
        detail: 'A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.'


    },
    {

        topic:'ds',
        id:'graph',
        header: 'Graph',
        detail: 'A Graph is a non-linear data structure consisting of nodes and edges.'
        

    }



    ]


  
    return (

        <div>
        <div className='container'>
           

           {
                 dsAllData.map(data=><FullCard data={data}></FullCard>)
             }

             
         
        </div>

        <FootItem></FootItem>

        </div>
    );
};

export default DataStructure;