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

    this.toDos.forEach( function( todo ) {
      if ( todo.completed ) {
        completedToDos++;
      }
    } )

    // If all items are marked COMPLETE then make all FALSE (NOT COMPLETE)
    if ( completedToDos === totalToDos ) {
      this.toDos.forEach( function( todo ) {
        todo.completed = false;
      })
    }
    // Some items are not marked COMPLETE, so make all COMPLETE
    else {
      this.toDos.forEach( function( todo ) {
        todo.completed = true;
      })
    }

    this.toDos.forEach ( function( todo ) {
      if ( completedToDos === totalToDos ) {
        todo.completed = false;
      }
      else {
        todo.completed = true;
      }
    })

  }
};

toDoList.initializeToDos();

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
  deleteToDo: function(position) {
    // This IF gets rid of unintended behavior. If position is left blank it is
    // NaN, but will still delete the 0th position. This corrects that.
    if ( position >= 0 ) {
      toDoList.deleteToDo(position);
    }
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

    toDoList.toDos.forEach( function( todo, position ) {
        var toDosLi = document.createElement("li")
        var toDoTextWithCompletion = ""

        if ( todo.completed ) {
          toDoTextWithCompletion = "( x ) " + todo.toDoText
        }
        else { 
          toDoTextWithCompletion = "(   ) " + todo.toDoText
        }

        toDosLi.id = position
        toDosLi.textContent = toDoTextWithCompletion
        toDosLi.appendChild(this.createDeleteButton())

        toDosUl.appendChild(toDosLi)
    }, this )

  },
  createDeleteButton: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton btn btn-danger btn-sm";
    return deleteButton;
  },
  setUpEventListeners: function() {
    var toDosUl = document.querySelector("ul");

    toDosUl.addEventListener("click", function (event) {

    var elementClicked = event.target;

    if ( elementClicked.className === "deleteButton btn btn-danger btn-sm" ) {
      handlers.deleteToDo(parseInt(elementClicked.parentNode.id));
    }

    })
  }
}

view.setUpEventListeners();