import * as React from 'react';

interface TaskFormProps {
    currentTask: string;
}

class TaskForm extends React.Component <TaskFormProps, {}> {
    render() {
        const { currentTask } = this.props;
        return (
            <form>
                <input value={currentTask} type="text"/>
            </form>
        );
    }
}

export default TaskForm;