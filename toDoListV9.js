// Name: Mike Giebner
// Watch and Code Practical JavaScript

  // This is a method
  var toDoList = {
  initializeToDos: function() {
    this.toDos = [];
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

// for ( var i = 0; i < 10; i++) {
//   toDoList.addToDo(i);
//   // toDoList.toggleCompleted(i);
// }

// No longer needed
// var displayToDosButton = document.getElementById("displayToDosButton");
// var toggleAllbutton = document.getElementById("toggleAllbutton");

// displayToDosButton.addEventListener("click", function() {
//   toDoList.displayToDos();
// });

// toggleAllbutton.addEventListener("click", function() {
//   toDoList.toggleAll();
// });

var handlers = {
  addToDo: function() {
  
    var addToDoTextInput = document.getElementById("addToDoTextInput");

    // This IF gets rid of unintended behavior. Leaving the text field blank was
    // allowing a blank ToDo. This corrects that.
    if ( addToDoTextInput.value !== "" ) {
      toDoList.addToDo(addToDoTextInput.value);
    }
    addToDoTextInput.value = "";
    view.displayToDos();
  },
  changeToDo: function() {
    var changeToDoPosition = document.getElementById("changeToDoPosition")
    var changeToDoTextInput = document.getElementById("changeToDoTextInput")

    // This IF gets rid of unintended behavior.
    if ( changeToDoPosition.valueAsNumber >= 0 &
      changeToDoTextInput.value !== "" ) {
        toDoList.changeToDo(changeToDoPosition.valueAsNumber, changeToDoTextInput.value);
    }
    changeToDoPosition.value = "";
    changeToDoTextInput.value = "";
    view.displayToDos();
  },
  deleteToDo: function() {
    var deleteToDoPositioon = document.getElementById("deleteToDoPosition");

    // This IF gets rid of unintended behavior. If position is left blank it is
    // NaN, but will still delete the 0th position. This corrects that.
    if ( deleteToDoPositioon.valueAsNumber >= 0 ) {
      toDoList.deleteToDo(deleteToDoPositioon.valueAsNumber);
    }
    deleteToDoPositioon.value = "";
    view.displayToDos();
  },
  toggleCompleted: function() {
    var toggleCompletedToDoPosition = document.getElementById("toggleCompletedToDoPosition");

    // This IF gets rid of unintended behavior.
    if ( toggleCompletedToDoPosition.valueAsNumber >= 0 ) {
      toDoList.toggleCompleted(toggleCompletedToDoPosition.valueAsNumber);
    }
    toggleCompletedToDoPosition.value = "";
    view.displayToDos();
  },
  toggleAll: function() {
    toDoList.toggleAll();
    view.displayToDos();
  }
}

var view = {
  displayToDos: function() {
  var toDosUl = document.querySelector("ul");
  toDosUl.innerHTML = "";

    for ( var i = 0; i < toDoList.toDos.length; i++ ) {
      var toDosLi = document.createElement("li");
      var toDoTextWithCompletion = "";

      if ( toDoList.toDos[i].completed ) {
        toDoTextWithCompletion = "( x ) " + toDoList.toDos[i].toDoText;
      }
      else {
        toDoTextWithCompletion = "(   ) " + toDoList.toDos[i].toDoText;
      }

      toDosLi.textContent = toDoTextWithCompletion;

      toDosUl.appendChild(toDosLi);
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  }
}