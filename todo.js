
// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList  = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listerns

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click',filtertodo);

// Functions
function addTodo(event){
    // evevnt check 
    console.log(event.target);
    // Prevent form from submitting
    event.preventDefault();
    
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo)

    // Checkmakr button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>' ;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
     
    // Checkmakr button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);

    // Clear todoinput value
    todoInput.value = '';
}
function deleteCheck(e){
    //console.log(e.target)
    const item = e.target;
    // Delete functionality
    if (item.classList[0] === 'trash-btn'){
        const todoItem = item.parentElement;
        
        // Animation
        todoItem.classList.add('fall');
        todoItem.addEventListener("transitionend", function(){    /// transitionend is a special event listner
            todoItem.remove(); 
        });
 
    }
    //complete functionality
    if (item.classList[0] === 'complete-btn'){
        const todoItem = item.parentElement;
        todoItem.classList.toggle('completed');
    }
}    
function filtertodo(e){
    const todos = todoList.childNodes;
    
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "pending":
                if(!todo.classList.contains("completed")){ // doesnt contain completed
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            
        }
    });

}

