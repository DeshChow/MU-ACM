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
import array from '../src/images/array.png'; 
import stack1 from '../src/images/stack1.png';
import stack2 from '../src/images/stack2.png';
import stack31 from '../src/images/stack3-1.png';
import stack32 from '../src/images/stack3-2.png';
import stack4 from '../src/images/stack4.png';
import queue1 from '../src/images/queue1.png';
import queue2 from '../src/images/queue2.png';
import queue3 from '../src/images/queue3.png';
import linkedlist1 from '../src/images/linkedlist1.png';
import linkedlist2 from '../src/images/linkedlist2.png';
import graph1 from '../src/images/graph.png';
import NotFound from './Components/NotFound/NotFound';



const dataDS = [

  {
    id: 'array',
    Header: 'Array Data Stucture',
    Introduction: 'An array is a collection of items stored at contiguous memory locations.It can store a fixed size. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).',
    Description1: 'The following diagram represents an integer array that has 12 elements. The index of the array starts with 0, so the array having 12 elements has indexes from 0 to 11.',
    Img: 'https://beginnersbook.com/wp-content/uploads/2018/10/array.jpg',
    Description2: 'In this example we have an array arr of type “int”. The size of the array is 10 which means it can hold 10 integer values. arr[0] would be first element, arr[1] second and so on. Here we are assigning values to only few elements of the array. After this program, I have shared the output of this program, which shows that the default value of the elements of an int array is 0. The elements that are not assigned any value shows their value as 0 (default value).',
    Description3: '',
    Description4: '',
    Description5: '',
    code:`#include <stdio.h>
    int main() {
       int LA[] = {1,3,5,7,8};
       int item = 10, k = 3, n = 5;
       int i = 0, j = n;   
       printf("The original array elements are :");
       for(i = 0; i<n; i++) {
          printf("LA[%d] = %d ", i, LA[i]);
       }
    }`,
 



  },
  {
    id: 'stack',
    Header: 'Stack Data Stucture',
    Introduction: 'Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).',
    Description1: '',
    Img:'https://www.tutorialspoint.com/data_structures_algorithms/images/stack_representation.jpg',
    Description2: 'There are many real-life examples of a stack. Consider an example of plates stacked over one another in the canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO(Last In First Out)/FILO(First In Last Out) order.',
    Description3: 'A stack can be implemented by means of Array, Structure, Pointer, and Linked List. Stack can either be a fixed size one or it may have a sense of dynamic resizing. Here, we are going to implement stack using arrays, which makes it a fixed size stack implementation.',
    Description4: '',
    Description5: '',
    code:`INIT_STACK (STACK, TOP)

    Algorithm to initialize a stack using array. 
    TOP points to the top-most element of stack.

    1) TOP: = 0;
    2) Exit
    
PUSH_STACK(STACK,TOP,MAX,ITEM)

    Algorithm to push an item into stack.
            
    1) IF TOP = MAX   then
    Print “Stack is full”;
    Exit;
    2) Otherwise
    TOP: = TOP + 1;        /*increment TOP*/
    STACK (TOP):= ITEM;
    3) End of IF
    4) Exit
    
POP_STACK(STACK,TOP,ITEM)

    Algorithm to pop an element from stack.

    1) IF TOP = 0 then
        Print “Stack is empty”;
        Exit;
    2) Otherwise
        ITEM: =STACK (TOP);
        TOP:=TOP – 1;
    3) End of IF
    4) Exit
    
IS_FULL(STACK,TOP,MAX,STATUS)

    Algorithm to check stack is full or not. 
    STATUS contains the result status.

    1) IF TOP = MAX then
        STATUS:=true;
    2) Otherwise
        STATUS:=false;
    3)  End of IF
    4)  Exit
    
    
IS_EMPTY(STACK,TOP,MAX,STATUS)

    Algorithm to check stack is empty or not.
    STATUS contains the result status.

            
    1) IF TOP = 0 then
        STATUS:=true;
    2) Otherwise
        STATUS:=false;
    3)  End of IF
    4)  Exit`,
 



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
    code:`INIT(QUEUE,FRONT,REAR)
    This algorithm is used to intialize a QUEUE,FRONT,
    and REAR.
        1.	FRONT := 1;
        2.	REAR    := 0;
        3.	Return;
INSERT-ITEM(QUEUE,FRONT,REAR,MAX,ITEM)
    This algorithm is used to add or insert item to QUEUE.
        1.	If (REAR  = MAX) then
            a.	Display “Queue overflow”;
            b.	Return;
        2.	Otherwise
            a.	REAR := REAR + 1;
            b.	QUEUE(REAR) := ITEM;
        3.	Return;
REMOVE-ITEM(QUEUE,FRONT,REAR,ITEM)
    This algorithm is used to delete an item from QUEUE.
        1.	If (FRONT = REAR + 1) then
            a.	Display “Queue underflow”;
            b.	Return;
        2.	Otherwise
            a.	ITEM := QUEUE(FRONT);
            b.	FRONT := FRONT + 1;
        3.	Return;
EMPTY-CHECK(QUEUE,FRONT,REAR,EMPTY)
    This algorithm is used to check whether 
    a QUEUE is EMPTY or not.
        1.	If (FRONT = REAR + 1) then
            a.	EMPTY := true;
        2.	Otherwise
            a.	EMPTY := false;
        3.	Return;
FULL-CHECK(QUEUE,FRONT,REAR,MAX,FULL)
    This algorithm is used to check whether 
    a QUEUE is full or not.
        1.	If ( REAR = MAX ) then
            a.	FULL := true;
        2.	Otherwise
            a.	FULL := false;
        3.	Return;`,
   



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
    code:`//insert link at the first location
            void insertFirst(int key, int data){
              //create a link
              struct node *link = (struct node*) malloc(sizeof(struct node));
              link->key = key;
              link->data = data;
            
              //point it to old first node
              link->next = head;
            
              //point first to new first node
              head = link;
          }
    
    
//delete first item
        struct node* deleteFirst(){
          //save reference to first link
          struct node *tempLink = head;
          
          //mark next to first link as first 
          head = head->next;
          
          //return the deleted link
          return tempLink;
        }


//display the list
        void printList(){
          struct node *ptr = head;
          printf("\n[ ");
          
          //start from the beginning
          while(ptr != NULL){        
              printf("(%d,%d) ",ptr->key,ptr->data);
              ptr = ptr->next;
          }
          
          printf(" ]");
        }`,
  



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
    code:` #include <iostream>

    using namespace std;

    bool A[10][10];

    void initialize()
    {
        for(int i = 0;i < 10;++i)
            for(int j = 0;j < 10;++j)
                A[i][j] = false;
    }

    int main()
    {
        int x, y, nodes, edges;
        initialize();       //Since there is no edge initially
        cin >> nodes;       //Number of nodes
        cin >> edges;       //Number of edges
        for(int i = 0;i < edges;++i)
        {
            cin >> x >> y;
            A[x][y] = true;     //Mark the edges from vertex x to vertex y
       }
       if(A[3][4] == true)
          cout << “There is an edge between 3 and 4” << endl;
      else 
          cout << “There is no edge between 3 and 4” << endl;

      if(A[2][3] == true)
          cout << “There is an edge between 2 and 3” << endl;
      else 
          cout << “There is no edge between 2 and 3” << endl;

      return 0;
    }`,
    



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
    code: `Procedure binary_search
    A ← sorted array
    n ← size of array
    x ← value to be searched
 
    Set lowerBound = 1
    Set upperBound = n 
 
    while x not found
       if upperBound < lowerBound 
          EXIT: x does not exists.
    
       set midPoint = lowerBound + ( upperBound - lowerBound ) / 2
       
       if A[midPoint] < x
          set lowerBound = midPoint + 1
          
       if A[midPoint] > x
          set upperBound = midPoint - 1 
 
       if A[midPoint] = x 
          EXIT: x found at location midPoint
    end while
    
 end procedure`,
   



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
    code:`procedure bubbleSort( list : array of items )

    loop = list.count;
    
    for i = 0 to loop-1 do:
       swapped = false
     
       for j = 0 to loop-1 do:
       
          /* compare the adjacent elements */   
          if list[j] > list[j+1] then
             /* swap them */
             swap( list[j], list[j+1] )		 
             swapped = true
          end if
          
       end for
       
       /*if no number was swapped that means 
       array is sorted now, break the loop.*/
       
       if(not swapped) then
          break
       end if
       
    end for
    
 end procedure return list`,
   



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
    code: `Begin
    define an empty queue que
    at first mark all nodes status as unvisited
    add the start vertex into the que
    while que is not empty, do
       delete item from que and set to u
       display the vertex u
       for all vertices 1 adjacent with u, do
          if vertices[i] is unvisited, then
             mark vertices[i] as temporarily visited
             add v into the queue
          mark
       done
       mark u as completely visited
    done
 End`,
   



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
    code: `DFS-iterative (G, s):                                   //Where G is graph and s is source vertex
    let S be stack
    S.push( s )            //Inserting s in stack 
    mark s as visited.
    while ( S is not empty):
        //Pop a vertex from stack to visit next
        v  =  S.top( )
       S.pop( )
       //Push all the neighbours of v in stack that are not visited   
      for all neighbours w of v in Graph G:
          if w is not visited :
                   S.push( w )         
                  mark w as visited


  DFS-recursive(G, s):
      mark s as visited
      for all neighbours w of s in Graph G:
          if w is not visited:
              DFS-recursive(G, w)`,
  



  }
  , {
    id: 'segmenttree',
    Header: 'Segment Tree',
    Introduction: 'Array is a container which can hold a fix number of items and these items should be of the same type. Most of the data structures make use of arrays to implement their algorithms. Following are the important terms to understand the concept of Array.',
    Img: "https://he-s3.s3.amazonaws.com/media/uploads/a0c7f90.jpg",
    Description2: '<p>In this example we have an array arr of type “int”. The size of the array is 10 which means it can hold 10 integer values. arr[0] would be first element, arr[1] second and so on. Here we are assigning values to only few elements of the array.After this program, I have shared the output of this program, which shows that the default value of the elements of an int array is 0. The elements that are not assigned any value shows their value as 0 (default value).',
    Description3: '',
    Description4: '',
    Description5: '',
    code: `void build(int node, int start, int end)
    {
        if(start == end)
        {
            // Leaf node will have a single element
            tree[node] = A[start];
        }
        else
        {
            int mid = (start + end) / 2;
            // Recurse on the left child
            build(2*node, start, mid);
            // Recurse on the right child
            build(2*node+1, mid+1, end);
            // Internal node will have the sum of both of its children
            tree[node] = tree[2*node] + tree[2*node+1];
        }
    }
    
    
    void update(int node, int start, int end, int idx, int val)
{
    if(start == end)
    {
        // Leaf node
        A[idx] += val;
        tree[node] += val;
    }
    else
    {
        int mid = (start + end) / 2;
        if(start <= idx and idx <= mid)
        {
            // If idx is in the left child, recurse on the left child
            update(2*node, start, mid, idx, val);
        }
        else
        {
            // if idx is in the right child, recurse on the right child
            update(2*node+1, mid+1, end, idx, val);
        }
        // Internal node will have the sum of both of its children
        tree[node] = tree[2*node] + tree[2*node+1];
    }
}


int query(int node, int start, int end, int l, int r)
{
    if(r < start or end < l)
    {
        // range represented by a node is completely outside the given range
        return 0;
    }
    if(l <= start and end <= r)
    {
        // range represented by a node is completely inside the given range
        return tree[node];
    }
    // range represented by a node is partially inside and partially outside the given range
    int mid = (start + end) / 2;
    int p1 = query(2*node, start, mid, l, r);
    int p2 = query(2*node+1, mid+1, end, l, r);
    return (p1 + p2);
}`,
    



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
            <Route path="/addAPost">

              <AddContestLink></AddContestLink>

            </Route>

            <Route path='*'>

               <NotFound></NotFound>

            </Route>




          </Switch>
        </Router>

      </UserContext.Provider>

    </div>


  );
}

export default App;