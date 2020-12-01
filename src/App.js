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
import { createContext } from 'react';
import AlgoDetails from './Components/AlgoDetails/AlgoDetails';


const dataDS=[

    {
        id:'array',
        Header : 'Array Data Stucture',
        Introduction : 'An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).',
        Description1:'The following diagram represents an integer array that has 12 elements. The index of the array starts with 0, so the array having 12 elements has indexes from 0 to 11.',
        Img : 'https://beginnersbook.com/wp-content/uploads/2018/10/array.jpg',
        Description2:"'<p>In this example we have an array arr of type “int”. The size of the array is 10 which means it can hold 10 integer values. arr[0] would be first element, arr[1] second and so on. Here we are assigning values to only few elements of the array.</br> After this program, I have shared the output of this program, which shows that the default value of the elements of an int array is 0. The elements that are not assigned any value shows their value as 0 (default value).<p>'",
        Description3:'',
        Description4:'',
        Description5:'',
        Complexity : 'Line one\nLine two\nLine three'



    },
    {
      id:'linkedlist',
      Header : 'Linked List Data Stucture',
      Introduction : 'Array is a container which can hold a fix number of items and these items should be of the same type. Most of the data structures make use of arrays to implement their algorithms. Following are the important terms to understand the concept of Array.',
      Img : "'https://media.geeksforgeeks.org/wp-content/uploads/array-2.png'",
      Description2:'<p>In this example we have an array arr of type “int”. The size of the array is 10 which means it can hold 10 integer values. arr[0] would be first element, arr[1] second and so on. Here we are assigning values to only few elements of the array.</br> After this program, I have shared the output of this program, which shows that the default value of the elements of an int array is 0. The elements that are not assigned any value shows their value as 0 (default value).<p>',
      Description3:'',
      Description4:'',
      Description5:'',
      Complexity : 'O(n)'



  },
  {
    id:'stack',
    Header : 'Stack',
    Introduction : 'Array is a container which can hold a fix number of items and these items should be of the same type. Most of the data structures make use of arrays to implement their algorithms. Following are the important terms to understand the concept of Array.',
    Img : "'https://media.geeksforgeeks.org/wp-content/uploads/array-2.png'",
    Description2:'<p>In this example we have an array arr of type “int”. The size of the array is 10 which means it can hold 10 integer values. arr[0] would be first element, arr[1] second and so on. Here we are assigning values to only few elements of the array.</br> After this program, I have shared the output of this program, which shows that the default value of the elements of an int array is 0. The elements that are not assigned any value shows their value as 0 (default value).<p>',
    Description3:'',
    Description4:'',
    Description5:'',
    Complexity : 'O(n)'



},
{
  id:'queue',
  Header : 'Queue',
  Introduction : 'Array is a container which can hold a fix number of items and these items should be of the same type. Most of the data structures make use of arrays to implement their algorithms. Following are the important terms to understand the concept of Array.',
  Img : "'https://media.geeksforgeeks.org/wp-content/uploads/array-2.png'",
  Description2:'<p>In this example we have an array arr of type “int”. The size of the array is 10 which means it can hold 10 integer values. arr[0] would be first element, arr[1] second and so on. Here we are assigning values to only few elements of the array.</br> After this program, I have shared the output of this program, which shows that the default value of the elements of an int array is 0. The elements that are not assigned any value shows their value as 0 (default value).<p>',
  Description3:'',
  Description4:'',
  Description5:'',
  Complexity : 'O(n)'



}
, {
  id:'graph',
  Header : 'Graph',
  Introduction : 'Array is a container which can hold a fix number of items and these items should be of the same type. Most of the data structures make use of arrays to implement their algorithms. Following are the important terms to understand the concept of Array.',
  Img : "'https://media.geeksforgeeks.org/wp-content/uploads/array-2.png'",
  Description2:'<p>In this example we have an array arr of type “int”. The size of the array is 10 which means it can hold 10 integer values. arr[0] would be first element, arr[1] second and so on. Here we are assigning values to only few elements of the array.</br> After this program, I have shared the output of this program, which shows that the default value of the elements of an int array is 0. The elements that are not assigned any value shows their value as 0 (default value).<p>',
  Description3:'',
  Description4:'',
  Description5:'',
  Complexity : 'O(n)'



}





]


const dataALGO=[

  {
      id:'array',
      Header : 'Binary Search',
      Introduction : 'An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).',
      Description1:'The following diagram represents an integer array that has 12 elements. The index of the array starts with 0, so the array having 12 elements has indexes from 0 to 11.',
      Img : 'https://beginnersbook.com/wp-content/uploads/2018/10/array.jpg',
      Description2:"'<p>In this example we have an array arr of type “int”. The size of the array is 10 which means it can hold 10 integer values. arr[0] would be first element, arr[1] second and so on. Here we are assigning values to only few elements of the array.</br> After this program, I have shared the output of this program, which shows that the default value of the elements of an int array is 0. The elements that are not assigned any value shows their value as 0 (default value).<p>'",
      Description3:'',
      Description4:'',
      Description5:'',
      Complexity : 'Line one\nLine two\nLine three'



  },
  {
    id:'linkedlist',
    Header : 'Linked List Data Stucture',
    Introduction : 'Array is a container which can hold a fix number of items and these items should be of the same type. Most of the data structures make use of arrays to implement their algorithms. Following are the important terms to understand the concept of Array.',
    Img : "'https://media.geeksforgeeks.org/wp-content/uploads/array-2.png'",
    Description2:'<p>In this example we have an array arr of type “int”. The size of the array is 10 which means it can hold 10 integer values. arr[0] would be first element, arr[1] second and so on. Here we are assigning values to only few elements of the array.</br> After this program, I have shared the output of this program, which shows that the default value of the elements of an int array is 0. The elements that are not assigned any value shows their value as 0 (default value).<p>',
    Description3:'',
    Description4:'',
    Description5:'',
    Complexity : 'O(n)'



},
{
  id:'stack',
  Header : 'Stack',
  Introduction : 'Array is a container which can hold a fix number of items and these items should be of the same type. Most of the data structures make use of arrays to implement their algorithms. Following are the important terms to understand the concept of Array.',
  Img : "'https://media.geeksforgeeks.org/wp-content/uploads/array-2.png'",
  Description2:'<p>In this example we have an array arr of type “int”. The size of the array is 10 which means it can hold 10 integer values. arr[0] would be first element, arr[1] second and so on. Here we are assigning values to only few elements of the array.</br> After this program, I have shared the output of this program, which shows that the default value of the elements of an int array is 0. The elements that are not assigned any value shows their value as 0 (default value).<p>',
  Description3:'',
  Description4:'',
  Description5:'',
  Complexity : 'O(n)'



},
{
id:'queue',
Header : 'Queue',
Introduction : 'Array is a container which can hold a fix number of items and these items should be of the same type. Most of the data structures make use of arrays to implement their algorithms. Following are the important terms to understand the concept of Array.',
Img : "'https://media.geeksforgeeks.org/wp-content/uploads/array-2.png'",
Description2:'<p>In this example we have an array arr of type “int”. The size of the array is 10 which means it can hold 10 integer values. arr[0] would be first element, arr[1] second and so on. Here we are assigning values to only few elements of the array.</br> After this program, I have shared the output of this program, which shows that the default value of the elements of an int array is 0. The elements that are not assigned any value shows their value as 0 (default value).<p>',
Description3:'',
Description4:'',
Description5:'',
Complexity : 'O(n)'



}
, {
id:'graph',
Header : 'Graph',
Introduction : 'Array is a container which can hold a fix number of items and these items should be of the same type. Most of the data structures make use of arrays to implement their algorithms. Following are the important terms to understand the concept of Array.',
Img : "'https://media.geeksforgeeks.org/wp-content/uploads/array-2.png'",
Description2:'<p>In this example we have an array arr of type “int”. The size of the array is 10 which means it can hold 10 integer values. arr[0] would be first element, arr[1] second and so on. Here we are assigning values to only few elements of the array.</br> After this program, I have shared the output of this program, which shows that the default value of the elements of an int array is 0. The elements that are not assigned any value shows their value as 0 (default value).<p>',
Description3:'',
Description4:'',
Description5:'',
Complexity : 'O(n)'



}





]
function App() {
  return (

    <div >


      <Router>

        <NavBar></NavBar>

        <Switch>

          <Route path="/dataStructure">

            <DataStructure></DataStructure>

          </Route>
          <Route path="/algorithm">

            <Algorithm></Algorithm>

          </Route>
          <Route path="/Detailsds">
               
               <Details dataDS={dataDS}></Details>
           

          </Route>
          <Route path="/Detailsalgo">
               
              <AlgoDetails dataALGO={dataALGO}></AlgoDetails>
           

          </Route>
         
          <Route path="/home">
               
          <Home></Home>
           

          </Route>
          <Route exact path="/">

            <Home></Home>


          </Route>




        </Switch>
      </Router>



    </div>

   
  );
}

export default App;
