"use strict";

let variable = "my variable";

// Rule 1: No blanks
// let my name = "Luke Skywalker";

// Rule 2: May contain only letters and numbers
// let name! = "Darth Vader";

// Rule 3: First character always has to be a letter 
// let 9name = "Han Solo";

// Rule 4: Variables are case sensitive. The following two are different variables!
let name = "Leia Organa";
let Name = "Obi Wan";

console.log(name);
console.log(Name);

// Rule 5: Avoid Umlaut (convention)
let hängematte = "ferien";
let haengematte = "Ferien";

// Rule 6: Underscores are the only allowed special sign. Instead of blanks, use underscore or camelCase
let my_name = "Yoda";
let myName = "Darth Maul";

// Rule 7: Do not use keywords for variables
// let let = "Mace Windu";