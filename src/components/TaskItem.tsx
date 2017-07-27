import * as React from 'react';
import { Task } from '../containers/Task';

interface TaskItemProps {
    task: Task;
    onToggle: (id: number) => void;
}
class TaskItem extends React.Component<TaskItemProps, {}> {

    render() {
        // const { task } = this.props;
        // const onToggle = this.props.onToggle(task.id);
        return (
            <div>
            test
        </div>);
    }
}
export default TaskItem;