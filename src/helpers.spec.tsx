import { addTask } from './helpers';

test('Should add task to state', () => {

    const startTaskList = [
        {
            id:  1,
            name: 'Name #1',
            done: false
        },
        {
            id:  2,
            name: 'Name #2',
            done: false
        },
    ];

    const receivedTasks = [
         {
            id:  1,
            name: 'Name #1',
            done: false
        },
        {
            id:  2,
            name: 'Name #2',
            done: false
        },
        {
            id:  3,
            name: 'Name #3',
            done: false
        }
    ]; 

    const added = 'Name #3';

    const finishedTask = addTask(added, startTaskList);

    expect(finishedTask).toEqual(receivedTasks);

});