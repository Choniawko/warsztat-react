import * as React from 'react';
import { Task } from '../containers/Task';
import { style } from 'typestyle';

interface TaskItemProps {
    task: Task;
    onToggle: (id: any) => void;
    handleRemove: (id: any) => any;
}

const textDecorator = (task: Task) => style({
    textDecoration: task.done ? 'line-through' : 'none'
});

class TaskItem extends React.Component<TaskItemProps, {}> {

    render() {
         const { task } = this.props;
         const onToggle: any = () => this.props.onToggle(task.id);
         const handleRemove: any = () => this.props.handleRemove(task.id);
         return (
            <div>
                <input type="checkbox" onChange={onToggle} checked={task.done} />
                <span className={textDecorator(task)}>{task.name}
                </span>
                <span><button onClick={handleRemove}>X</button></span>
            </div>);
    }
}
export default TaskItem;