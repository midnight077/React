// import React, { Component } from 'react'


// export default class Todo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             tasks: [{ id: 1, txt: "Task" }, { id: 2, txt: "Task" }, { id: 3, txt: "Task" }],
//             currTask: ""
//         }
//     }
//     handleChange = (e) => {
//         this.setState({ currTask: e.target.value });
//     }
//     onAdd = () => {
//         // we are using ... coz the react will compare reference of old and new tasks array
//         // if old and new ref are same it will not re-render
//         // But setState is old so it will call render anyways
//         this.setState({
//             tasks:
//                 [...this.state.tasks,
//                 {
//                     id: this.state.tasks.length + 1,
//                     txt: this.state.currTask
//                 }],
//             currTask: ""
//         })

//     }
//     onDelete = (id) => {
//         console.log(this);
//         let nta = this.state.tasks.filter(task=>{
//             return task.id!= id;
//         })
//         this.setState({tasks: nta});
//     }
//     render() {
//         return (
//             <>
//                 <div>
//                     <div className="input-container">
//                         <input onChange={this.handleChange} value={this.state.currTask} ></input>
//                         <button onClick={this.onAdd} > Add </button>
//                     </div>
//                     <div className="task-container">
//                         <ul>
//                             {
//                                 this.state.tasks.map(task => (
//                                     <li key={task.id}>
//                                         <h1>{task.txt}</h1>
//                                         <button onClick={()=>this.onDelete(task.id)} >Delete</button>
//                                     </li>
//                                 ))
//                             }
//                         </ul>
//                     </div>

//                 </div>

//             </>
//         )
//     }
// }


import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currTask: "",
            tasks: [{ id: 1, txt: "Task 1" }, { id: 2, txt: "Task 2" }, { id: 3, txt: "Task 3" }]
        }
    }
    handleChange = (e) => {
        let ctask = e.target.value;
        this.setState({ currTask: ctask });
    }

    addTask = () => {
        this.setState({
            currTask: "",
            tasks: [...this.state.tasks, { id: this.state.tasks.length + 1, txt: this.state.currTask }]
        })
    }
    onDelete = (id) => {
        console.log(id);
        let nta = this.state.tasks.filter(task => task.id != id)
        this.setState({ tasks: nta });
    }
    render() {
        return (
            <>
            <InputComponent handleChange={this.handleChange} value={this.state.currTask} addTask={this.addTask} />
            <TaskListComponent tasksArr = {this.state.tasks} onDelete={this.onDelete} />
            </>
        )
    }
}


class InputComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='input-container'>
                <input type='text' onChange={this.props.handleChange} value={this.props.value} ></input>
                <button onClick={this.props.addTask} > Add </button>
            </div>
        )
    }
}

class TaskListComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='task-container'>
                <ul>
                    {
                        this.props.tasksArr.map(task => (
                            <li>
                                <h1>{task.txt}</h1>
                                <button onClick={() => { this.props.onDelete(task.id) }}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

