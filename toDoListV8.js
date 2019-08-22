// Name: Mike Giebner
// Watch and Code Practical JavaScript

  // This is a method
  var toDoList = {
  initializeToDos: function() {
    this.toDos = [];
  },
  // This is a method
  displayToDos: function() {
    // If the array is empty, display a message and don't display the number of
    // items in the array or the "These items are: " message
    if ( this.toDos.length === 0) {
      console.log("Your array is empty!");
    }
    // Perform this section if there is at least one item in the array
    else {
      for ( var i = 0; i < this.toDos.length; i++ ) {
      if ( i === 0) {
        console.log("There are", this.toDos.length, "items in my array");
        console.log("These items are: ");
      }
      // Print completed status
      // Top part is if item complete is TRUE
      if ( this.toDos[i].completed ) {
        console.log("(x) ", this.toDos[i].toDoText);
      }
      // This part is if item complete is FALSE
      else {
        console.log("( ) ", this.toDos[i].toDoText);
      }
      }
    }
  },
  // This is a method
  addToDo: function(item) {
    this.toDos.push({
      toDoText: item,
      completed: false
    });
  },
  // This is a method
  changeToDo: function(numToChange, toDoText) {
    this.toDos[numToChange].toDoText = toDoText;
  },
  // This is a method
  deleteToDo: function(numToDelete) {
    this.toDos.splice(numToDelete, 1);
  },
  toggleCompleted: function(numToChange) {
    this.toDos[numToChange].completed = ! (this.toDos[numToChange].completed);
  },
  toggleAll: function() {
    var totalToDos = this.toDos.length;
    var completedToDos = 0;
    for ( var i = 0; i < this.toDos.length; i++ ) {
      if ( this.toDos[i].completed ) {
        completedToDos++;
      }
    }
    // If all items are marked COMPLETE then make all FALSE (NOT COMPLETE)
    if ( completedToDos === totalToDos ) {
      for ( var i = 0; i < this.toDos.length; i++ ) {
        toDoList.toggleCompleted(i);
      }
    }
    // Some items are not marked COMPLETE, so make all COMPLETE
    else {
      for ( var i = 0; i < this.toDos.length; i++ ) {
        if ( !this.toDos[i].completed ) {
          toDoList.toggleCompleted(i);
        }
      }
    }
  }
};

toDoList.initializeToDos();

for ( var i = 0; i < 10; i++) {
  toDoList.addToDo(i);
  // toDoList.toggleCompleted(i);
}
{/* toDoList.toggleCompleted(0);
toDoList.displayToDos();
toDoList.toggleAll();
toDoList.displayToDos(); */}

var displayToDosButton = document.getElementById("displayToDosButton");
var toggleAllbutton = document.getElementById("toggleAllbutton");

displayToDosButton.addEventListener("click", function() {
  toDoList.displayToDos();
});

toggleAllbutton.addEventListener("click", function() {
  toDoList.toggleAll();
});