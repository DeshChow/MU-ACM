import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DataStructure from './Components/DataStructure/DataStructure';
import Algorithm from './Components/Algorithm/Algorithm';
import { Nav } from 'react-bootstrap';
import NavBar from './Components/NavBar/NavBar';
import Details from './Components/Details/Details';
import { createContext, useState } from 'react';
import AlgoDetails from './Components/AlgoDetails/AlgoDetails';
import ContestLinkDetails from './Components/ContestLinkDetails/ContestLinkDetails';
import ProgrammingSiteDetail from './Components/ProgrammingSiteDetail/ProgrammingSiteDetail';
import MemoryDetail from './Components/MemoryDetail/MemoryDetail';
import AddContestLink from './Components/AddContetLink/AddContestLink';


const dataDS = [

  {
    id: 'array',
    Header: 'Array Data Stucture',
    Introduction: 'An array is a collection of items stored at contiguous memory locations.It can store a fixed size. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).',
    Description1: 'The following diagram represents an integer array that has 12 elements. The index of the array starts with 0, so the array having 12 elements has indexes from 0 to 11.',
    Img: 'https://beginnersbook.com/wp-content/uploads/2018/10/array.jpg',
    Description2: 'In this example we have an array arr of type “int”. The size of the array is 10 which means it can hold 10 integer values. arr[0] would be first element, arr[1] second and so on. Here we are assigning values to only few elements of the array.</br> After this program, I have shared the output of this program, which shows that the default value of the elements of an int array is 0. The elements that are not assigned any value shows their value as 0 (default value).',
    Description3: '',
    Description4: '',
    Description5: '',
    Complexity: 'Line one\nLine two\nLine three'



  },
  {
    id: 'stack',
    Header: 'Stack Data Stucture',
    Introduction: 'Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).',
    Description1: '',
    Img: 'https://www.tutorialspoint.com/data_structures_algorithms/images/stack_representation.jpg',
    Description2: 'There are many real-life examples of a stack. Consider an example of plates stacked over one another in the canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO(Last In First Out)/FILO(First In Last Out) order.',
    Description3: 'A stack can be implemented by means of Array, Structure, Pointer, and Linked List. Stack can either be a fixed size one or it may have a sense of dynamic resizing. Here, we are going to implement stack using arrays, which makes it a fixed size stack implementation.',
    Description4: '',
    Description5: '',
    Complexity: 'O(n)'



  },
  {
    id: 'queue',
    Header: 'Queue Data Stucture',
    Introduction: 'A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first. The difference between stacks and queues is in removing. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.',
    Img: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2014/02/Queue.png',
    Description2: 'As in stacks, a queue can also be implemented using Arrays, Linked-lists, Pointers and Structures. For the sake of simplicity, we shall implement queues using one-dimensional array.',
    Description3: '',
    Description4: '',
    Description5: '',
    Complexity: 'O(n)'



  },
  {
    id: 'linkedlist',
    Header: 'Linked List Data Stucture',
    Introduction: 'A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers as shown in the below image:',
    Img: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png',
    Description2: 'In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.',
    Description3: '',
    Description4: '',
    Description5: '',
    Complexity: 'O(n)'



  }
  , {
    id: 'graph',
    Header: 'Graph Data Structure',
    Introduction: 'A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph.',
    Img: 'https://www.geeksforgeeks.org/wp-content/uploads/undirectedgraph.png',
    Description2: 'In the above Graph, the set of vertices V = {0,1,2,3,4} and the set of edges E = {01, 12, 23, 34, 04, 14, 13}.',
    Description3: 'Graphs are used to solve many real-life problems. Graphs are used to represent networks. The networks may include paths in a city or telephone network or circuit network. Graphs are also used in social networks like linkedIn, Facebook. For example, in Facebook, each person is represented with a vertex(or node). Each node is a structure and contains information like person id, name, gender, locale etc.',
    Description4: '',
    Description5: '',
    Complexity: 'O(n)'



  }





]


const dataALGO = [

  {
    id: 'binarysearch',
    Header: 'Binary Search',
    Introduction: 'Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.',
    Description1: '',
    Img: 'https://codenuclear.com/wp-content/uploads/2017/07/Binary_Search.jpg',
    Description2: 'Binary search halves the searchable items and thus reduces the count of comparisons to be made to very less numbers.',
    Description3: '',
    Description4: '',
    Description5: '',
    Complexity: 'Line one\nLine two\nLine three'



  },
  {
    id: 'bubblesort',
    Header: 'Bubble Sort',
    Introduction: 'Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order.Lets consider an array with values {5, 1, 6, 2, 4, 3}',
    Img: 'https://www.studytonight.com/data-structures/images/basic-bubble-sort.png',
    Description2: 'So as we can see in the representation above, after the first iteration, 6 is placed at the last index, which is the correct position for it.',
    Description3: 'Similarly after the second iteration, 5 will be at the second last index, and so on.',
    Description4: '',
    Description5: '',
    Complexity: 'O(n)'



  },
  {
    id: 'bfs',
    Header: 'BFS',
    Introduction: 'Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures.It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a -search key), and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.For Example:',
    Img: 'https://media.geeksforgeeks.org/wp-content/uploads/bfs-5.png',
    Description2: 'In the above graph, we start traversal from vertex 2. When we come to vertex 0, we look for all adjacent vertices of it. 2 is also an adjacent vertex of 0. If we don’t mark visited vertices, then 2 will be processed again and it will become a non-terminating process. A Breadth First Traversal of the following graph is 2, 0, 3, 1.',
    Description3: '',
    Description4: '',
    Description5: '',
    Complexity: 'O(n)'



  },
  {
    id: 'dfs',
    Header: 'DFS',
    Introduction: 'Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures.It traverses in a depthward motion and uses a stack to remember to get the next vertex to start a search, when a dead end occurs in any iteration.',
    Img: 'https://www.tutorialspoint.com/data_structures_algorithms/images/depth_first_traversal.jpg',
    Description2: 'As in the example given above, DFS algorithm traverses from S to A to D to G to E to B first, then to F and lastly to C. It employs the following rules.',
    Description3: '=>Role-1:  Visit the adjacent unvisited vertex. Mark it as visited. Display it. Push it in a stack.',
    Description4: '=>Role-2: If no adjacent vertex is found, pop up a vertex from the stack. (It will pop up all the vertices from the stack, which do not have adjacent vertices.)',
    Description5: '=>Role-3:  Repeat Rule 1 and Rule 2 until the stack is empty.',
    Complexity: 'O(n)'



  }
  , {
    id: 'segmenttree',
    Header: 'Segment Tree',
    Introduction: 'Array is a container which can hold a fix number of items and these items should be of the same type. Most of the data structures make use of arrays to implement their algorithms. Following are the important terms to understand the concept of Array.',
    Img: "'https://media.geeksforgeeks.org/wp-content/uploads/array-2.png'",
    Description2: '<p>In this example we have an array arr of type “int”. The size of the array is 10 which means it can hold 10 integer values. arr[0] would be first element, arr[1] second and so on. Here we are assigning values to only few elements of the array.</br> After this program, I have shared the output of this program, which shows that the default value of the elements of an int array is 0. The elements that are not assigned any value shows their value as 0 (default value).<p>',
    Description3: '',
    Description4: '',
    Description5: '',
    Complexity: 'O(n)'



  }





]

export const UserContext = createContext();
function App() {

  const [userTopic, setUserTopic] = useState({
    dsID: 'array',
    algoID: 'binarysearch'
  })
  return (

    <div >

      <UserContext.Provider value={[userTopic, setUserTopic]}>

        <Router>

          <NavBar></NavBar>

          <Switch>

            <Route path="/dataStructure">

              <DataStructure></DataStructure>

            </Route>
            <Route path="/algorithm">

              <Algorithm></Algorithm>

            </Route>
            <Route path="/Details/:id">

              <Details dataDS={dataDS}></Details>


            </Route>
            <Route path="/Detailsalgo/:id">

              <AlgoDetails dataALGO={dataALGO}></AlgoDetails>


            </Route>
            <Route path="/ContestLink">

              <ContestLinkDetails></ContestLinkDetails>


            </Route>
            <Route path="/ProgrammingSite">

              <ProgrammingSiteDetail></ProgrammingSiteDetail>


            </Route>

            <Route path="/home">

              <Home></Home>


            </Route>

            <Route path="/MUMemory">

              <MemoryDetail></MemoryDetail>


            </Route>

            <Route exact path="/">

              <Home></Home>


            </Route>
            <Route path="/AdminPanel">

              <AddContestLink></AddContestLink>

            </Route>




          </Switch>
        </Router>

      </UserContext.Provider>

    </div>


  );
}

export default App;