import { addTask, toggleTask, updateTasks } from './helpers';

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

test('Should change done property one task', () => {
    const startTask = {
            id:  1,
            name: 'Name #1',
            done: false
        };

    const expected = {
            id:  1,
            name: 'Name #1',
            done: true
        };

    const result = toggleTask(startTask);

    expect(result).toEqual(expected);
});

test('Shoud update an item by id', () => {
    const startTasks = [
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
    const updatedTask = {
            id:  1,
            name: 'Name #1',
            done: true
        };

    const expectedTasks = [
        {
            id:  1,
            name: 'Name #1',
            done: true
        },
        {
            id:  2,
            name: 'Name #2',
            done: false
        },
    ];
    const result = updateTasks(startTasks, updatedTask);

    expect(result).toEqual(expectedTasks);
});