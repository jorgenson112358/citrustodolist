import React, { Component } from 'react';

class ToDoItem extends Component {

    completeIt() {
        this.props.markComplete(this.props.thing);
    }

    deleteIt() {
        this.props.deleteItem(this.props.thing);
    }

    makeImportant() {
        this.props.setImportance(this.props.thing);
    }

    render() {

        var imp = '';
        if (this.props.item.important === true) {
            imp = <img src="./orange-slice.jpg" className="todo__item--slice" alt="lemon slice" />;
        }

        return (
            <div className="col-12">
                <div className="row item__row">
                    <div className="col-1">
                        {imp}
                    </div>
                    <div className={'col-11 col-md-6' + (this.props.item.status === 'complete' ? ' todo__item--complete' : '')}>
                        {this.props.item.title}
                    </div>
                    <div className={'col-12 col-md-2' + (this.props.item.status === 'complete' ? ' todo__item--complete' : '')}>
                        {this.props.item.projname}
                    </div>
                    <div className="col-12 col-md-3 item-buttons">
                        <button className="btn btn-info" title="Add flag" onClick={this.makeImportant.bind(this)}><span className="fa fa-star"></span></button>
                        <button className="btn btn-success" title="Mark complete" onClick={this.completeIt.bind(this)}><span className="fa fa-check"></span></button>
                        <button className="btn btn-danger" title="Delete" onClick={this.deleteIt.bind(this)}><span className="fa fa-trash"></span></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDoItem;