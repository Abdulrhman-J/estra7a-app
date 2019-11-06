// Packages
import React from 'react';
import MyList from '../ListComponent/MyList';
import '../ListComponent/MyList.css'

// this component is the grandfuther of the rest of list item
const NeedsList = props => {
    // make empty arr to add on it the new and to asigne it for remove all
    const toDos = []
    return (
        // pass the arr
        <MyList theList={toDos} />

    );
}



export default NeedsList;
