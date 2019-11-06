// Packages
import React, { Component } from 'react';
import ToDoList from '../ListComponent/ToDoList';
import ListItem from './ListItem';

class MyList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toDoItems: this.props.theList,
            newItem: ""
        };
    }

    // to clear the list
    clearList = e => {
        // console.log("the button has clicked");
        this.setState({
            toDoItems: []
        });
    };

    onTextBoxChange = e => {
        console.log("on text change ", e.target.value);
        // to update the newItem to what you wrote
        this.setState({
            newItem: e.target.value
        });
    };

    removeOneItem = (item) => {
        const list = [...this.state.toDoItems]
        const index = list.indexOf(item)
        list.splice(index, 1)
        console.log('let me clear this task', item);
        this.setState({
            toDoItems: list
        })
    };

    addItem = e => {
        this.setState({
            toDoItems: [...this.state.toDoItems, this.state.newItem],
            newItem: ""
        });
    };


    render() {

        return (
            <div className='countainerList'>
                <h1>احتياجات الاستراحة</h1>
                <br />
                <ToDoList removeOneItem={this.removeOneItem} toDoItems={this.state.toDoItems} />
                <input
                    type='text'
                    value={this.state.newItem}
                    onChange={this.onTextBoxChange}
                    placeholder='اكتب هنا ي الذيب'
                />
                <br />
                <br />
                <div className='buttons'>
                    <button className='addItemList' onClick={this.addItem}>أضف للسته</button>
                    <button className='removeAllList' onClick={this.clearList}>!!!انجزت كلشي</button>
                </div>
                <br />
                <p>اضغط على نفس المهمه عشان تحذفها</p>

            </div>
        );
    }

}

export default MyList;
