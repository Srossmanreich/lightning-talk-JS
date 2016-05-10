(function() {
  var todo = {
    list: [],
    // tableRowString: "<tr><td>" + (i + 1) + "</td><td>" + todoList[i] + "</td></tr>"
    init: function() {
      this.DOMobjects();
      this.bindEvent();
    },

    DOMobjects: function() {
      this.todoForm = $("#todo-input-form");
      this.todoInput = this.todoForm.find('input[type=text]');
      this.todoTableBody = $("#todo-table-body");
      this.todoTotalNumber = $("#number-of-todo");
    },
    bindEvent: function() {
      this.todoForm.on("submit", this.updateTodoTable.bind(this));
    },
    updateTodoTable = function(event) {
      event.preventDefault();
      var input = this.todoInput.val();
      this.list.push(input);
      this.todoTableBody.empty();
      for(var i = 0; i < this.list.length; i++) {
        $("#todo-table-body").append("<tr><td>" + (i + 1) + "</td><td>" + this.list[i] + "</td></tr>")
      }
      this.todoTotalNumber.text(this.list.length);
      this.todoForm.val('');
    }
  };
  todo.init();
})