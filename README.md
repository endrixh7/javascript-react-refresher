# JavaScript Refresher
## JavaScript Summary
    - Weakly typed language
        - No explicit type assigment (TypeScript is explicit, superset of JS)
        - Data types can be switched dynamically
    - OOP Language
        - Data can be organized in logical object
        - Primitive and Reference types
    - Versatile Language
        - Runs in browser & directly on a PC/Server
        - Can perform a broad variety of tasks

## Core syntax Refresher
    - 'var' variable
    - 'string' & 'number'
    - true/false
    - function() {}
        - args and params
        - pure function
        - scoping

## Let and Const
    - Next Gen JavaScript
    - 'var' is outdated, 'let' is used instead of 'var'
    - 'unchanged' variable is newly variable 'const' or constant

## Arrow functions
    - named function
        - const sumarizeUser = ( /arguments here/ ) => { / code goes here / }
    - used to short normal function
    - const add = (a, b) => a + b;
    - one argument
        - const addOne = a = a+ 1;
    - without argument
        - const addRandom = () => 1 + 2;
    - 'this' keyword 
        - 

## Objects Properties and Methods
    - key/value pair is also called 'property' or a 'field' of a object
    - function inside of the object
        - greet() {
                /code goes here/
                this.property
            }
        - combined with 'this' keyword
        - 'this' with '.' notation
        - person.greet(); 

## Arrays and Arrays Method
    - Arrays combined with loops
    - methods
        - hobbies.map()
        - .map() is a method
        - .map() combined with arrow function
            - hobbie.map((hobby)=>{
                / code goes here /
            })
        - methods with single argument
            - hobbie.map(hobby => {
                / code goes here /
            })
## Other source for 'return' and 'this'
    - https://www.youtube.com/watch?v=GwU1TAC2BDY - return
    - https://www.youtube.com/watch?v=Pv9flm-80vM - this

## Arrays, Objects, and Reference Types
    - Reference is a pointer nothing more
    - The value is added as pointer inside of the array virtually
    - constant thing is pointing at
    - immutability

## Spread Operator and Rest Parameters (Very very important!)
    - Immutability
    - copy array using slice() method
    - another way is using [...] spread operator
        - Pull out all the properties and put it where you specified
        - [...hobbies]
        - added one by one all the properties
        - {...person} spread operator in objects
    - Rest Operator
        - is the opposite of the spread Operator
        - works with args
        - used to scalable functions
            - const toArray (...args) {
                return args
            }
            clg(toArray(1,2,3,4,... much more args here))
        - merge multiple args

## Destructuring Arrays/Objects
    - Object Destructuring
    - Syntax :
        const person = {
            name: 'endri',
            age: 29,
            greet() {
                clg('Hi my name is' + this.name)
            }
        }
    - display only name
        const printName = ({name, age}) => {
            clg(name)
        }
    - printName(name)
         const {name, age} = person
         clg(name,age)
    
    - Arrays destructuring
    - Syntax :
        const hobbies = ['Sports', 'Cars']
        const [hobby1, hobby2] = hobbies
        clg(hobby1, hobby2)
    - Remember, in Arrays you dont need names because they are pulled out by positions [0,1,2]
    - In Object we need to pull out by Property Name.

## Async code and Promising
    - What is asynchrounous code?
    - Async code takes some time to execute
    - Sync code will execute immediately one by one
    - Promises
        - Takes two functions
            - Resolve   (solution)
            - Reject    (error)
        - No callback function anymore but instead 'resolve'
        - return and '.then()' block
    - Async/Await
        - Try and Catch

## Wrap Up
    - Done ✅
    - 1% better than yesterday
    - repeat the basics

# React Refresher
## React Summary
    - Understand React.js Basics
    - State management & Reactivity

## What is React?
    - A JavaScript 'library' for building UI
    - Started a huge eco-system, forming a 'pseudo-framework'
    - React is browser programming language
    - Declarative(React) vs Imperative(Vanilla JS)
    - Define Components and build UIs

## Starting a project
    - cra
    - vite
    - imports
    - render
    - component
    Done ✅

## Understanding JSX
    - XML JavaScript
    - JSX == React.createElement('h1', {}, 'hi, this is react')
        - We have created a H1, a object with text, 3 different things

## Understanding Components
    - Functional Components
    - Class Components

## Working with Multiple Components
    - For each component create a CSS file to keep the code clean
    - 

## Working with Props
    - 

## Rendering List of Data

## Handling Events

## Parent-Child Communication

## Managing State

## More on State

## User-Input and Two-Way Binding

## Wrap Up
    - Done ✅✅
    - 1% better than yesterday
    - repeat the basics
    - respect others
    - be kind
    - love your family and your true friends ❤️

# Made with love by EndriX