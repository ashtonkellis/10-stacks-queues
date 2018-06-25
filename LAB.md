![cf](http://i.imgur.com/7v5ASc8.png) Lab 10 - Stacks and Queues Data Structures
====

## To Submit this Assignment
  * fork this repository and work in a branch called `lab-10`
  * Set up Travis CI on your forked repo
  * submit a pull request to your forked repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Requirements  
#### Configuration  
  <!-- list of files, configurations, tools, etc that are required -->
  Your lab directory must include  
  * **src/ directory** *
     * **lib/** -- directory for holding your programs helper modules
     * **__test/__** -- directory for holding your programs unit and integration tests
  * **index.js** -- The entry point to your module
  * **README.md** -- with a documentation about your lab
  * **.gitignore** -- with a robust .gitignore
  * **.eslintrc.json** -- with the class .eslintrc file
  * **.eslintignore** -- with the class .eslintignore
  * **.package.json** -- with all dependencies and dev-dependencies

#### Testing  
  * write at least two assertions for each method of the Stack and Queue List Data Structures
  * organize your tests into appropriate describe/test blocks for test output readability


#### Feature Tasks  
  * implement a Stack constructor
    * implement `push(value)`, `pop()`, and `peek()` methods on the Stack class by utilizing methods from the Linked List class you already defined in Lab 5, or in your `data-structures-and-algorithms` repo. 
  * implement a Queue constructor
    * implement `enqueue(value)`, `dequeue()`, and `peek()` methods on the Queue class by utilizing methods from the Linked List class you already defined in Lab 5, or in your `data-structures-and-algorithms` repo. 
  * **If you do not have a completed Linked List class to utilize, you may use Javascript arrays like the lecture code, *but you will only receive a maximum of 8 points.***  
  * **If you do not have a completed Linked List class to utilize, you may utilize an NPM package that gives you a Linked List, *but you will only receive a maximum of 8 points.*** 
  * If you go the NPM package route, the instructional team will **NOT** assist you in figuring out how to use the NPM package. You should figure that out yourself. The instructional team **WILL** assist if you use the above two methods to implement your Stack and Queue.
 
  
####  Documentation  
Add your Travis badge to the top of your README. List out the methods for your Queue and Stack class and explain what they do by using your favorite analogy for each. List the Big Oh time and space complexity for each method, making considerations for the actual Big Oh complexity they might have under the hood when utilizing Linked List or Array methods. 


