import * as React from 'react';
import { Task } from './Task';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

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
            currentTask: 'Default'
        };
    }

    render() {
        return (
        <div>
            <TaskForm currentTask={this.state.currentTask} />
            <TaskList tasks={this.state.tasks} />
        </div>
        );
    }
}

export default TaskContainer;