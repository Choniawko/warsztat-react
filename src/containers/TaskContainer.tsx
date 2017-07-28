import * as React from 'react';
import { Task } from './Task';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { addTask, loadTask, findById, toggleTask, updateTasks, removeTask } from '../helpers';

interface TaskState {
    tasks: Task[];
    currentTask: string;
}

class TaskContainer extends React.Component<{}, TaskState> {

    state = {
        tasks: [ ],
        currentTask: ''
    };

    componentDidMount() {
        loadTask()
            .then((tasks: Task[]) => {
                this.setState({
                    tasks: tasks
                });
            });
    }

    handleInput = (e: any): void => {
        this.setState({
            currentTask: e.target.value
        });
    }

    handleToggle = (id: number) => { 
        const task: any = findById(id, this.state.tasks);
        const toggled = toggleTask(task);
        const updatedTasks = updateTasks(this.state.tasks, toggled);

        this.setState({
            tasks: updatedTasks
        });
    }

    handleSubmit = (e: any): void => {
        e.preventDefault();
        this.setState({
            tasks: addTask(this.state.currentTask, this.state.tasks),
            currentTask: ''
        });
    }

    handleRemove = (id: number): void => {
        const updatedTasks = removeTask(id, this.state.tasks);
        this.setState({
            tasks: updatedTasks
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
            <TaskList
                onToggle={this.handleToggle} 
                tasks={this.state.tasks} 
                handleRemove={this.handleRemove} 
            />
        </div>
        );
    }
}

export default TaskContainer;