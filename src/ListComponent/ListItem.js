import React from 'react';

const ListItem = props => {
    return (
        <div>
            <li onClick={props.removeOneItem} >{props.doThis}</li>
        </div>
    );
}
export default ListItem;
