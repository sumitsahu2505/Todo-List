const input = document.querySelector('#todo-input');
document.querySelector('#submit').addEventListener('click', () => {
    const inputData = input.value;
    input.value = "";

    const todo_el = document.createElement('div');
    todo_el.classList.add('todo-item');

    const todo_content_el = document.createElement('div');
    
    const todo_input_el = document.createElement('input');
    todo_input_el.classList.add('text');
    todo_input_el.type = 'text';
    todo_input_el.value = inputData;
    todo_input_el.setAttribute('readonly', 'readonly');

    todo_content_el.appendChild(todo_input_el);
    
    const todo_action_el = document.createElement('div');
    todo_action_el.classList.add('action-items');

    const todo_done_el = document.createElement('i');
    todo_done_el.classList.add('fa-solid', 'fa-check');

    const todo_edit_el = document.createElement('i');
    todo_edit_el.classList.add('fa-solid', 'fa-pen-to-square', 'edit');

    const todo_delete_el = document.createElement('i');
    todo_delete_el.classList.add('fa-solid', 'fa-trash');

    todo_action_el.appendChild(todo_done_el);
    todo_action_el.appendChild(todo_edit_el);
    todo_action_el.appendChild(todo_delete_el);

    // Append all elements correctly
    todo_el.appendChild(todo_content_el);
    todo_el.appendChild(todo_action_el);
    document.querySelector('.todo-list').appendChild(todo_el);
    
    todo_done_el.addEventListener('click', () => {
        todo_el.classList.add('done'); // Just add a class to mark as done
    });

    todo_edit_el.addEventListener('click', () => {
        if (todo_edit_el.classList.contains("edit")) {
            todo_edit_el.classList.remove("edit", "fa-pen-to-square");
            todo_edit_el.classList.add("fa-save", "save"); // Correct save icon
            todo_input_el.removeAttribute("readonly");
            todo_input_el.focus();
        } else {
            todo_edit_el.classList.remove("save", "fa-save");
            todo_edit_el.classList.add("edit", "fa-pen-to-square");
            todo_input_el.setAttribute("readonly", "readonly");
        }
    });

    todo_delete_el.addEventListener("click", () => {
        todo_el.remove(); // Remove element directly
    });
});
