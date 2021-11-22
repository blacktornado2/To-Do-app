import React, { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{task: "Check mails", id: 1}, {task: "Homework", id: 2}, {task: "Lala", id: 3}],
            currTask: ""
        }
    }

    handleChange = (e) => {
        // console.log(e.target.value)

        this.setState({
            currTask: e.target.value
        })
    }

    handleSubmit = () => {
        this.setState({
            tasks: [...this.state.tasks, {task: this.state.currTask, id: this.state.tasks.length + 1}],
            currTask: ""
        })
    }

    handleDelete = (id) => {
        // console.log("Deleted")
        let newArray = this.state.tasks.filter( (taskObj) => {
            return (taskObj.id !== id);
        })

        this.setState({
            tasks: [...newArray]
        })
    }


    render() {
        return (
            <div>
                <input type="text" value={this.state.currTask} onChange={this.handleChange} />
                <button type="submit" onClick={this.handleSubmit}>SUBMIT</button>

                {
                    this.state.tasks.map(taskObj => (
                        <div key={taskObj.id}>
                            <p>{taskObj.task}</p>
                            <button onClick = {() => this.handleDelete(taskObj.id)} > DELETE </button>
                        </div>
                    ))
                }
            </div>
        )
    }
}
