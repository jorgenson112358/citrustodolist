import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
    constructor() {
        super();
        this.storageKey = 'ToDoItems';

        this.state = {
            data: [],
            newTitle: ''
        };

        this.save = this.save.bind(this);
        this.markComplete = this.markComplete.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.markImportance = this.markImportance.bind(this);
    }

    componentDidMount() {
        var obj = localStorage.getItem(this.storageKey);
        if (obj == null) {
            obj = [];
        }
        else {
            obj = JSON.parse(obj);
        }

        this.setState({
            data: obj
        });
    }

    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.state.data));
    }

    markComplete(id) {
        let obj = Object.assign([], this.state.data);
        for (var x = 0; x < obj.length; x++) {
            if (x === id) {
                obj[x].status = 'complete';
                break;
            }
        }

        this.setState({
            data: obj
        });
    }

    deleteItem(id) {
        let obj = Object.assign([], this.state.data);

        obj.splice(id, 1);

        this.setState({
            data: obj
        });
    }

    markImportance(id) {
        let obj = Object.assign([], this.state.data);
        for (var x = 0; x < obj.length; x++) {
            if (x === id) {
                obj[x].important = !obj[x].important;
                break;
            }
        }

        this.setState({
            data: obj
        });
    }

    addNewItem() {
        var newItem = {
            'title': document.getElementById('newTitle').value,
            'projname': document.getElementById('projName').value,
            'status': 'open'
        };

        this.setState({
            data: [...this.state.data, newItem]
        });

        document.getElementById('newTitle').value = '';
        document.getElementById('projName').value = '';
    }

    render() {

        let rows = [];
        let currentData = this.state.data;

        for (var x = 0; x < currentData.length; x++) {
            rows.push(<ToDoItem
                item={currentData[x]}
                thing={x}
                key={x}
                markComplete={this.markComplete}
                deleteItem={this.deleteItem}
                setImportance={this.markImportance}
            />);
        }

        return (
            <div>
                <form className="todo__controls">
                    <div className="row">
                        <div className="col-12 col-md-7 form-group">
                            <input  className="form-control" id="newTitle" placeholder="New title" type="text" />
                        </div>
                        <div className="col-12 col-md-3 form-group">
                            <input className="form-control" id="projName" placeholder="Category" type="text" />
                        </div>
                        <div className="col-12 col-md-2">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <button type="button" className="btn btn-primary todo-button" onClick={this.addNewItem}>Add</button>
                                </div>
                                <div className="col-12 col-md-6 save-button__mobile">
                                    <button type="button" className="btn btn-secondary todo-button" onClick={this.save}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="row todo__list">
                    {rows}
                </div>
            </div>
        )
    }
}

export default ToDoList;