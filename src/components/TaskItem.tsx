import * as React from 'react';
import { Task } from '../containers/Task';
import { style } from 'typestyle';

interface TaskItemProps {
    task: Task;
    onToggle: (id: any) => void;
}

const textDecorator = (task: Task) => style({
    textDecoration: task.done ? 'line-through' : 'none'
});

class TaskItem extends React.Component<TaskItemProps, {}> {

    render() {
         const { task } = this.props;
         const onToggle: any = () => this.props.onToggle(task.id);
         return (
            <div>
                <input type="checkbox" onChange={onToggle} checked={task.done} />
                <span className={textDecorator(task)}>{task.name}
                </span>
            </div>);
    }
}
export default TaskItem;