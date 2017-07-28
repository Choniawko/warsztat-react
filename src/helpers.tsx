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

export const toggleTask = (task: Task): Task => ({...task, done: !task.done});

export const updateTasks = (tasks: Task[], task: Task) => {
    const updatedIndex = tasks.findIndex(item => task.id === item.id);

    return [
        ...tasks.slice(0, updatedIndex),
        task,
        ...tasks.slice(updatedIndex + 1)
    ];
};

export const loadTask = () => {
    return fetch('http://localhost:8000/tasks')
            .then((res: any) => {
                return res.json();
            });
};

export const findById = (id: number, tasks: Task[]) => tasks.find((el: Task) => el.id === id);
