import * as React from 'react';

export namespace TaskForm {

    export interface Props {
        currentTask: string;
        handleInput: (e: any) => void;
        handleSubmit: (e: any) => void;
    }

    export interface State {
        // empty
    }
}

class TaskForm extends React.Component <TaskForm.Props, TaskForm.State> {
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