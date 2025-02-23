
const ulTodoEl = $(".todo__list");
const btnAddTodo = $(".todo__btn");

$(function () {
    const saveToLocalStorage = localStorage.getItem('todos');
    if (saveToLocalStorage) {
        ulTodoEl.html(saveToLocalStorage);
    }
})

function setItemLoalStorage() {
    localStorage.setItem('todos', ulTodoEl.html());
}

$(ulTodoEl).on('click', 'button', function () {
    this.parentElement.remove();
    setItemLoalStorage();
})

$(ulTodoEl).on('change', 'input[type="checkbox"]', function () {

    if (this.checked) {
        this.setAttribute('checked', 'checked');
    } else {
        this.removeAttribute('checked');
    }
    setItemLoalStorage();
})

$(btnAddTodo).on('click', function (event) {
    event.preventDefault();
    const inputTodoEl = $('.todo__input');
    const inputTodoElValue = inputTodoEl.val().trim();

    if (inputTodoElValue === '') {
        return;
    }

    const liTodoEl = $('<li></li>');

    const checkBoxEl = $('<input>').attr('type', 'checkbox');
    $(liTodoEl).append(checkBoxEl);

    const spanTodoEl = $('<span></span>').text(inputTodoElValue);
    $(liTodoEl).append(spanTodoEl);

    const btnDel = $('<button></button>').text('X');
    $(liTodoEl).append(btnDel);

    $(ulTodoEl).append(liTodoEl);

    inputTodoEl.val('');

    setItemLoalStorage();
});

$(ulTodoEl).on('click', 'span', function () {
    const taskText = $(this).text();

    $('#myModal .modal-body p').text(taskText);
    $('#myModal').modal('show');
});
