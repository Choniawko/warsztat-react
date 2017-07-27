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

export const toggleTask = (task: Task) => {
    return {
        ...task,
        done: !task.done
    };
};

export const updateTasks = (tasks: Task[], task: Task) => {
 return tasks;
};