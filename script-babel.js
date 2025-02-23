"use strict";

var ulTodoEl = $(".todo__list");
var btnAddTodo = $(".todo__btn");
$(function () {
  var saveToLocalStorage = localStorage.getItem('todos');
  if (saveToLocalStorage) {
    ulTodoEl.html(saveToLocalStorage);
  }
});
function setItemLoalStorage() {
  localStorage.setItem('todos', ulTodoEl.html());
}
$(ulTodoEl).on('click', 'button', function () {
  this.parentElement.remove();
  setItemLoalStorage();
});
$(ulTodoEl).on('change', 'input[type="checkbox"]', function () {
  if (this.checked) {
    this.setAttribute('checked', 'checked');
  } else {
    this.removeAttribute('checked');
  }
  setItemLoalStorage();
});
$(btnAddTodo).on('click', function (event) {
  event.preventDefault();
  var inputTodoEl = $('.todo__input');
  var inputTodoElValue = inputTodoEl.val().trim();
  if (inputTodoElValue === '') {
    return;
  }
  var liTodoEl = $('<li></li>');
  var checkBoxEl = $('<input>').attr('type', 'checkbox');
  $(liTodoEl).append(checkBoxEl);
  var spanTodoEl = $('<span></span>').text(inputTodoElValue);
  $(liTodoEl).append(spanTodoEl);
  var btnDel = $('<button></button>').text('X');
  $(liTodoEl).append(btnDel);
  $(ulTodoEl).append(liTodoEl);
  inputTodoEl.val('');
  setItemLoalStorage();
});
$(ulTodoEl).on('click', 'span', function () {
  var taskText = $(this).text();
  $('#myModal .modal-body p').text(taskText);
  $('#myModal').modal('show');
});
