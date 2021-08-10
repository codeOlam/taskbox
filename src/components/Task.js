import React from 'react';

export default function Task({task: {id, title, state}, onArchiveTask, onPinTask}){
    return (
        <div className={`list-item ${state}`}>
            <label className="checkbox">
                <input
                type="checkbox"
                defaultChecked={state === 'TASK_ARCHIVED'}
                disable={true}
                name="checked"
                />
                <span className="checkbox-custom" onclick={() => onArchiveTask(id)} />
            </label>
            <div className="title">
               <input 
                type="text"
                value={title}
                readOnly={true}
                /> 
            </div>
            <div className="actions" onClick={event => event.stopPropagation()}>
                {state !== 'TASK_ARCHIVED' &&(
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a onClick={() => onPinTask(id)}>
                        <span className={`icon-star`}/>
                    </a>
                )}
            </div>
        </div>
    );
}