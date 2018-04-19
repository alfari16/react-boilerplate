import React from 'react';

class Todo extends React.Component{
    constructor(){
        super();
        this.state={kondisi:false};
    }
    render(){
        let style = {
            'background': 'red',
            'width': '400px',
            position: 'relative',

        };
        let close={
            position:'absolute',
            top:'50%',
            right:'20px',
            transform: 'translateY(-50%)',
            fontWeight: 900,
            fontSize: '22px' 
        };
        let edit={
            position: 'absolute',
            top: '50%',
            right: '20px',
            transform: 'translateY(-50%)',
            fontWeight: 900,
            fontSize: '22px',
            top:'calc(50% + 20px)'
        }
        let rend = `iya nak ${this.props.children + this.props.activity}`;
        return(
            <li style={style} className="container" onClick={this.sebut.bind(this)}>
                <h1 ref="name">{this.props.name}</h1>
                <p ref="activity">{rend}</p>
                <div style={close} onClick={this.remove.bind(this)}>&times;</div>
                <div style={close,edit} onClick={this.remove.bind(this)}>edit</div>
            </li>
        )
    }
    remove(){
        console.log(this.props.id);
        this.props.removeIt(this.props.id);
    }
    sebut(){
        this.props.which(this.props.id);
    }
}

export default Todo;