## Resources

### Advent Of Code
[Advent of Code](http://adventofcode.com/)

### [REPL.IT](https://repl.it/)
This is a good repl for pure programming problems that aren't of a front-end nature.

This is because [Repl.it](https://repl.it/) does not stack overflow when a student codes an incorrect recursive function. Instead it fails and warns the student.

### Github
[How to start a github repo](http://kbroman.org/github_tutorial/pages/init.html)


## Basic patterns
- read a file
- split the contents of file into an array
- do something with that array
- log it to the console
- copy and paste that console result into the Advent of Code program
- if you are correct, tada! You can move onto the next problem set

## Javascript

Reading a file

```
const input = require('fs').readFileSync('<filename>', 'utf8');
```

Splitting input by line

```
const anArray = input.split('\n')
```

Splitting an input by comma


```
const steps = input.split(', ')
```
