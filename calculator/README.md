# Startups.com Engineering Challenge

## Challenge

If you are not familiar with the challenge, you may wish to review it here [problem definition](https://paper.dropbox.com/doc/Startups.com-Engineering-Challenge-jkuzsKFCDjmG6NuQ22LGa).

Suzy has trouble with basic positive integer addition and subtraction. We’re going to build a simple and attractive one-page React application to help her with these basic math functions. Suzy is very busy, and might use this app on a HD laptop, tablet, or smartphone.

Suzy should be able to:

- enter an integer
- enter an operation ( +/- )
- enter another integer
- calculate and view the result of her inputs
- clear inputs for new values

Your task is to build this simple app using:

- JavaScript
- React (V16+ preferred)
- Preferred styling (CSS, Sass, CSS-in-JS)

We recommend you avoid component frameworks like Bootstrap, Chakra, or Material-UI. We want to see your approach to building components and standard grid/element styles, even if it’s not perfect.

## Assumptions

I have made the following primary assumptions (some additional minor assumptions are documented only in the code):

- The order of input for a requested calculation must start with the input of the firstOperand followed by the selection of an operator before the secondOperand and ultimate calculation can be completed
- The above ordering has generally been controlled by 'disabling' those elements which are not yet available for the user's interaction.    
- Both of the first and second operands can be input either by clicking on the provided 'digit' buttons and/or typing or numeric selection within the appropriate input fields in the header area
- Operators, the Calculate and Clear operations can only be selected via clicking the button  
- All digits clicked before the operator selection will be considered to be part of the first operand; all digits after the operator will be used for the second operand.
- A 'Clear' operation was referred to in the Challenge description but was not depicted in the wireframe.  A separate button has been added for this purpose that can be invoked at any time during the configuration of a calculation or after the completion of the calculation.  This button essentially resets the state as if no entries nor selections have yet been made.
- For demonstration purposes, I have also added a multiplication operator to the requested addition and subtraction ones  
- Following a completed calculation, the operands and operator must be 'Cleared' before another calculation can be configured/requested
- As requested, Bootstrap and other frameworks have been avoided.  As such the styling and UX are pretty simple, but are generally inline with what was suggested by the wireframe.
- The styling should be minimally responsive to changing and/or different screen dimensions via standard CSS  
- Cross component state management has largely been handled via the useReducer hook for simplicity.  A full Redux implementation has been avoided for simplicity as it has been assumed that such is not the primary focus of this challenge.  
- For purposes of this challenge, it is sufficient to run the app on the local machine in development mode via simple npm start from within a terminal or IDE of your choosing.

## How to install, build and run

1. Prerequisites
    ```
   - You will need a current version of node installed (I have v14.15.5)
   - You will need to have npm installed (I have a rather old version 6.14.11 presently)
   - You will need to have cloned this repository
   - You will need to have localhost ports 3000 available and unused
    ```
2. UI
    ``` 
   - cd into <repository-dir>/calculator
   - npm install
   - npm start
    ```
3. Access the UI (http://localhost:3000/)
    ```
   - When the above have all completed and there are no errors, navigate in Chrome to (http://localhost:3000/) 
   - Use the calculator as you would any standard handheld calculator to perform requested interger-based calculations 
    ```   
