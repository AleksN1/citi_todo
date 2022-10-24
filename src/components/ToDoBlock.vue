<template>
    <div class="container">
        <div class="todolist"> <h2 id="h2">TODO list: </h2> <span id="counter">{{tasks.length}}</span></div>
        <input id = "in1" type="text" placeholder="Add a new task and press ENTER" @keyup.enter = "addTask" v-model = "task">
        <ul>
            <li id="li" v-for = "(task, index) in tasks" :key="index"><span id="span" :class = "{'done': task.isCompleted}">{{index+1}}. {{task.text}}</span>
                <div class="btn">
                    <button id = "rem" @click="deleteTask(index)">Remove</button>
                    <button id = "cha" @click="editTask(index)">Change</button>
                    <button id = "done" @click="task.isCompleted = !task.isCompleted">Done</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default ({
        name: 'ToDoBlock',
        
        data () {
            return {
            user: localStorage.getItem("name"),
            editedTask: null,
            task: "",
            tasks: [],
            }
        },

        methods: {
            addTask: function () {
                if (this.task.length === 0) return;
                if (this.editedTask === null) {
                    this.tasks.push ({
                    text:this.task,
                    isCompleted: false});
                }
                else {
                    this.tasks[this.editedTask].text = this.task;
                    this.editedTask = null;
                }
                    this.task = "";
            },

            deleteTask: function (index) {
                this.tasks.splice(index, 1)
            },
        
            editTask: function (index) {
                this.task = this.tasks[index].text;
                this.editedTask = index;
            }     
        }
    })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        max-width: 90%;
        min-height: 500px;
        border-radius: 25px;
        background:linear-gradient(180deg, #00AFED 0%, #00569A 100%);
        margin: 0px auto;
        padding: 0px 0px 20px 0px;
    }
    .todolist {
        display: flex;
        justify-content: center;
        
        align-items: center;
        text-align: center;
    }
    #h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
    }
    #counter {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        width: 40px;
        background: none;
    }
    #in1 {
        display: flex;
        margin: 10px auto;
        font-size: 24px;
        text-align: center;
        height: auto;
        width: 90%;
    }
    /*ul {}*/
    #li {
        display: flex;
        flex-wrap: wrap;   
        cursor: pointer;
        font-size: 25px;
        margin-top: 25px;
        height: 25px;
        
        justify-content: center;
    }
    .done {
        text-decoration: line-through;
        color: #0afa02;
    }
    #span {
        display: flex;
        flex-wrap: wrap;
        background: #f9fafa;
        width: 90%;
        word-break: break-word;
    }
    .btn {
        display: flex;
        margin-left: 5px;
    }    
    button {
        width: 70px;
        font-weight: bold;
        text-transform: uppercase;
        border: 1px solid black;
    }
    #rem:hover {
        background: #fa0202;
    }
    #cha:hover {
        background: #fae102;
    }
    #done:hover {
        background: #0afa02;
    }
</style>