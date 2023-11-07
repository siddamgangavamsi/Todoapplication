// array to store  the task
let Tasklist = []
// function to save the task
function saveTask() {
    // accessing the inpu value

    // debugger;
    const TaskName = document.getElementById("inputVal").value
    console.log(TaskName)
    if (TaskName.trim() !== "") {
        let Taskdata = {
            taskId: Tasklist.length + 1,
            taskname: TaskName
        }
        Tasklist.push(Taskdata)
        //  to make the input field empty
        document.getElementById("inputVal").value = ''
        DynamicRendering()
    }
}
//function to  dynamic  task
function DynamicRendering() {
    document.getElementById("listitem").innerHTML=''
    // debugger;
    for (i = 0; i < Tasklist.length; i++) {
        let dynamicli = document.createElement("li")
        dynamicli.classList.add('crud')
        // paragraph creating 
        let mypara = document.createElement('p')
        mypara.innerHTML = Tasklist[i].taskname
        // appending the mypara to dynamicli
        dynamicli.appendChild(mypara)
        // appending the dynmaic list to the ul
        document.getElementById("listitem").appendChild(dynamicli)
        // create the div element for appending  edit & delete icons
        const Divele = document.createElement('div')
        Divele.classList.add('tasks')
        //creating the edit icon
        const EditIcon = document.createElement('i')
        EditIcon.classList.add('bi')
        EditIcon.classList.add('bi-pencil-square')
        //creating the delete icon
        const DeleteIcon = document.createElement('i')
        DeleteIcon.classList.add('bi')
        DeleteIcon.classList.add("bi-trash")
        // appending edit and delete icons to divele
        Divele.appendChild(EditIcon)
        Divele.appendChild(DeleteIcon)
        //appending divele to dynamic list
        dynamicli.appendChild(Divele)
        //adding the functility for edit and delete icons
        EditIcon.addEventListener('click', EditTask)
        EditIcon.taskId = Tasklist[i].taskId

        //delete icon functility 
        DeleteIcon.addEventListener('click', DeleteTask)
        DeleteIcon.taskId = Tasklist[i].taskId
    }
}
        // function to delete the task
        function DeleteTask(e) {
            console.log(e)
            console.log(e.target.taskId)
            index = Tasklist.findIndex((d) => d.taskId == e.target.taskId)
            Tasklist.splice(index, 1)
            DynamicRendering()

        }
        // function to delete the task
        function EditTask(e) {
            console.log(e)
            console.log(e.target.taskId)
            edit = Tasklist.find((d) => d.taskId == e.target.taskId)
            console.log(edit)
            document.getElementById("inputVal").value=edit.taskname



        }
        // function to remove all the task
        function RemoveallTask(){
            Tasklist.splice(0)
            DynamicRendering()
        }

