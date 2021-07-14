# Dynamic Programming

## Tips & Tricks
### 1. Brute Force
* Start with simple inputs & draw out its tree
* Implement the tree with recursion using leaf nodes as base case
* Test with different inputs

### 2. Optimization
* Add an object for memoization (usually a HashMap of sorts)
* Add an additional base case at the start of the function to return memoized values
* Store the return value as a memoized value before returning it

### 3. Iterative
* Most iterative cases are faster, but code can be more complex & convoluted
* Visualise the problem as a table / grid
* Usually the table size is based on the value of the inputs
* Initialize the table with default values
* Add in trivial answers into the table
* Iterate through table 
* Fill further positions based on the options you have at the current position  
  
## Learning Materials
* [What Is Dynamic Programming and How To Use It](https://www.youtube.com/watch?v=vYquumk4nWw)
* [Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenge](https://www.youtube.com/watch?v=oBt53YbR9Kk)
