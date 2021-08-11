import {createStore} from 'redux';

export const actions = {
    ARCHIVE_TASK: 'ARCHIVE_TASK',
    PIN_TASK: 'PIN_TASK'
};

export const archiveTask = id => ({type: actions.ARCHIVE_TASK, id});
export const pinTask = id => ({type: actions.PIN_TASK, id});

//Reducer that will change the state of a single task
function taskStateReducer(taskState){
    return (state, action) => {
        return {
            ...state, 
            tasks: state.tasks.map(task => 
                task.id === action.id ? {...task, state: taskState}: task),
        };
    };
}

//reducers decribing how content of store will change for each actions
export const reducer = (state, action)=>{
    switch(action.type){
        case action.ARCHIVE_TASK:
            return taskStateReducer('TASK_ARCHIVED')(state, action);
        case action.PIN_TASK:
            return taskStateReducer('TASK_PINNED')(state, action);
        default:
            return state;
    }
};

//initial state of the store, which will usually be fetched from a server

const defaultTasks = [
    {id: '1', title: 'Somthing', state:'TASK_INBOX'},
    {id: '2', title: 'Somthing more', state:'TASK_INBOX'},
    {id: '3', title: 'Somthing else', state:'TASK_INBOX'},
    {id: '4', title: 'Somthing again', state:'TASK_INBOX'},
];

export default createStore(reducer, {tasks: defaultTasks});