import * as React from 'react';
import { Task } from '../containers/Task';

interface TaskItemProps {
    task: Task;
    onToggle: (id: any) => void;
}
class TaskItem extends React.Component<TaskItemProps, {}> {

    render() {
         const { task } = this.props;
         const onToggle: any = () => this.props.onToggle(task.id);
         return (
            <div>
                <input type="checkbox" onChange={onToggle} checked={task.done} />
                {task.name}
            </div>);
    }
}
export default TaskItem;