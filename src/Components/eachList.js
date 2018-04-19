import React from 'react';

class Elist extends React.Component{
    state = {
        edit: false
    };

    save = () => {
        let temp = this.state.edit;
        this.setState({
            edit: !temp
        });
    }
    render() {
        let rend = null;
        if(this.state.edit){
            rend = (
                <div>
                    <input type="text" defaultValue={this.props.name} onChange={this.props.changeList} />
                    <button onClick={this.save}>Save</button>
                </div>
            );
        }else{
            rend = (
                <div>
                    <p>{this.props.name}</p>
                    <button onClick={this.save}>Edit</button>
                    <button onClick={this.props.delete}>Delete</button>
                </div>
            );
            
        }
        return (
            <div>
                <h1>id #{this.props.children}</h1>
                {rend}
            </div>
        )
    }
}

export default Elist;