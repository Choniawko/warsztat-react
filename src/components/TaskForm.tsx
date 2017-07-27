import * as React from 'react';

interface TaskFormProps {
    currentTask: string;
    handleInput: (e: any) => void;
    handleSubmit: (e: any) => void;
}

class TaskForm extends React.Component <TaskFormProps, {}> {
    render() {
        const { currentTask, handleInput, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <input onChange={handleInput} value={currentTask} type="text"/>
            </form>
        );
    }
}

export default TaskForm;