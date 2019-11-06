// Packages
import React from 'react';
import MyList from '../ListComponent/MyList';
import '../ListComponent/MyList.css'

const NeedsList = props => {
    const toDos = []
    return (
        <MyList theList={toDos} />

    );
}



export default NeedsList;
