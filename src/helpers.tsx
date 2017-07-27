import { Task } from './containers/Task';
export const addTask = (taskName: string, tasks: Task[]) => {
    return [
        ...tasks,
        {
            id: tasks.length + 1,
            name: taskName,
            done: false
        }
    ];
};