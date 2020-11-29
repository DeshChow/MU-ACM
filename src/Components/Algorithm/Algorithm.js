import React from 'react';
import FullCard from '../FullCard/FullCard';

const Algorithm = () => {

    const algoAllData = [
        {

            header: 'Binary Search',
            detail: 'Binary search is a fast search algorithm with run-time complexity of Ο(log n).'

        },
        {

            header: 'Bubble Sort',
            detail: 'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.'

        },
        {

            header: 'BFS',
            detail: 'Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures.'

        },
        {

            header: 'DFS',
            detail: 'Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures.'

        },
        {

            header: 'Segment Tree',
            detail: 'A Segment Tree is a data structure that allows answering range queries over an array effectively, while still being flexible enough to allow modifying the array.'

        },



    ]


    return (
        <div className='container'>
            {
                 algoAllData.map(data=><FullCard data={data}></FullCard>)
             }
        </div>
    );
};

export default Algorithm;