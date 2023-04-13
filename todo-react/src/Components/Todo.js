import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks :[{id:1 , txt : "Task"},{id:2 , txt : "Task"},{id:3 , txt : "Task"}] ,
            currTask : ""
        }
    }
    handleChange=(e)=>{
        this.setState({currTask:e.target.value}) ;
    }
    onAdd = () => {
        this.setState({
            tasks:
                [...this.state.tasks ,
                {id:this.state.tasks.length+1,
                    txt:this.state.currTask}],
                currTask : ""
            })
    }
    render() {
        return (
        <>
            <div>
                <div className="input-container">
                    <input onChange={this.handleChange} value={this.state.currTask}></input>
                    <button onClick={this.onAdd} > Add </button>
                </div>
                <div className="task-container">
                    <ul>
                        {
                            this.state.tasks.map(task=>(
                                <li key={task.id}> 
                                    <h1>{task.txt}</h1>
                                    <button>Delete</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>

        </>
        )
  }
}
