import React from 'react';

const ListItem = props => {
    return (
        <div>
            {/* to remove the item from list by click */}
            <li onClick={props.removeOneItem} >{props.doThis}</li>
        </div>
    );
}
export default ListItem;
