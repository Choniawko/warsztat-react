import * as React from 'react';
import { Task } from '../containers/Task';
import { style } from 'typestyle';

const listElementStyle = style({
    listStyle: 'none'
});

interface TaskListProps {
    tasks: Task[];

}

class TaskList extends React.Component <TaskListProps, {}> {
    render() {
        
        const { tasks } = this.props;
        
        return (
            <ul>
                { tasks.map((task: Task) => {
                    return <li key={task.id} className={listElementStyle}>{task.name}</li>;
                    })
                }
            </ul>
        );
    }
}

export default TaskList;