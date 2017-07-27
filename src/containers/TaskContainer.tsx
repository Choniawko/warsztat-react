import * as React from 'react';
import { Task } from './Task';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { addTask } from '../helpers';

interface TaskState {
    tasks: Task[];
    currentTask: string;
}

class TaskContainer extends React.Component<{}, TaskState> {

    constructor() {
        super();
        this.state = {
            tasks: [
                    {
                        id:  1,
                        name: 'Name #1',
                        done: false
                    },
                    {
                        id:  2,
                        name: 'Name #2',
                        done: false
                    },
                    {
                        id:  3,
                        name: 'Name #3',
                        done: false
                    }
            ],
            currentTask: ''
        };
    }

    handleInput = (e: any): void => {
        this.setState({
            currentTask: e.target.value
        });
    }

    handleToggle = () => { 
        // empty
    }

    handleSubmit = (e: any): void => {
        e.preventDefault();
        this.setState({
            tasks: addTask(this.state.currentTask, this.state.tasks)
        });
        this.setState({
            currentTask: ''
        });
    }

    render() {
        return (
        <div>
            <TaskForm 
                handleInput={this.handleInput} 
                currentTask={this.state.currentTask} 
                handleSubmit={this.handleSubmit}
            />
            <TaskList onToggle={this.handleToggle} tasks={this.state.tasks} />
        </div>
        );
    }
}

export default TaskContainer;