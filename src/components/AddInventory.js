import React from "react";

export default class AddInventory extends React.Component {
    constructor() {
        super();
        this.handleUserClick = this.handleUserClick.bind(this);       
    }
    handleUserClick() {
        let cat = {
            img : this.refs.path.value,
            name : this.refs.name.value,
            age : this.refs.age.value,
            type : this.refs.type.value 
        };
        if(cat.img != '' &&  cat.name != '' && cat.age != '' && cat.type != '') {
            this.props.onUserClick(cat);
        }
    }
    render() {
        return (
            <div className="add_inventory">
                <input type="text" placeholder="image path" ref="path"/>
                <input type="text" placeholder="name" ref="name"/>
                <input type="text" placeholder="type" ref="type"/>
                <input type="text" placeholder="age" ref="age"/>
                <button onClick={this.handleUserClick}>Add</button>
            </div>
        );
    }
} 