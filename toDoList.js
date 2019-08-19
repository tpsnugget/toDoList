// Name: Mike Giebner
// Watch and Code Practical JavaScript

var toDoList = ["item 1", "item 2", "item 3"];

// To add an item
toDoList.push("item 4");

// To update an item
toDoList[0] = "item 1 updated";

// To delete an item, arg1 is where to start deleting, arg2 is the number of
// items to delete
toDoList.splice(0, 1);