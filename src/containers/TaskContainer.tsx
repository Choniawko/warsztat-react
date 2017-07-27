import * as React from 'react';
import { Task } from './Task';

interface TaskState {
    tasks: Task[];
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
            ]
        };
    }

    render() {
        return (
        <div>
            <input type="text"/>
            <ul>
                {this.state.tasks.map((task) => <li key={task.id}>{task.name}</li>)}
            </ul>
        </div>
        );
    }

}

export default TaskContainer;