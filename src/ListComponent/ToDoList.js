import React from 'react';
import ListItem from '../ListComponent/ListItem';

const ToDoList = props => {
    const allTasks = props.toDoItems.map((task, index) => {
        return (
            <ListItem removeOneItem={(e) => props.removeOneItem(task)} doThis={task} key={index} />
        );
    })
    return (
        <div>
            <h4>قائمة الاحتياجات يالذيب</h4>
            <ul className='ulList'>{allTasks}</ul>
        </div>
    );
}
export default ToDoList;