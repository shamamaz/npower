## Expectations

- it's okay to make mistakes, in fact it is encouraged
- it's better to struggle with one of these problems, and not have the solution ready, than to just read some blog posts or follow a tutorial...they will learn more this way
- is it better to struggle for a few hours, and not have a solution, than to read about `<insert framework here>` or `<follow some tutorial here>`...the answer is YES
- discourage looking up a solution before they have their own solution
- if they get stuck, that's what we are here for
- if they have a question, ask! This is a good environment to ask questions. If you don't know the answer to what they are asking, someone else will and this is okay
- it's normal to find these problems really hard, a lot of us find these problems hard!

## Goals
Try to get people to name different parts of the code:
- loops
- conditionals
- functions
- operators

Try to commit some of these problems + solutions to a github repo

Try to have good coding practices:
- nice indentation
- good naming

There are lots of other good coding practises, but if they can do just those two things, that's a huge start. Much of the time, "my code isn't working" comes from a typo which is a result of badly indented code, which is hard to read.


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

## Approaches
- solve the problem on paper first, before you start to write the code
- try to look for the pattern - most coding problems are about finding the pattern, and then writing code to implement that pattern

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
