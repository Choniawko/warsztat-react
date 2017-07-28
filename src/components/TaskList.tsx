import * as React from 'react';
import { Task } from '../containers/Task';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    onToggle: (id: any) => any;
    handleRemove: (id: any) => any;

}

class TaskList extends React.Component <TaskListProps, {}> {
    render() {
        const { tasks, onToggle, handleRemove } = this.props;
        
        return (
            <ul>
                {tasks.map((task: Task) => {
                    return (
                        <TaskItem 
                            key={task.id} 
                            task={task} 
                            onToggle={onToggle} 
                            handleRemove={handleRemove} 
                        /> 
                    );
                    })}
            </ul>
        );
    }
}

export default TaskList;