import React from 'react';
import El from './eachList';
import Akr from './Keterangan';

class List extends React.Component{
    state = {
            lists: [
                {
                    id: 'few3',
                    nama: 'Budi'
                }, 
                {
                    id: '4r3wf',
                    nama: 'Anggi'
                }, 
                {
                    id: 'fewf2',
                    nama: 'Melsa'
                }],
            searchTerm:'',
            counter:1
    }
    changeList = (idx, newName) => {
        let index = this.state.lists.findIndex(el => el.id=idx);
        let lists = [...this.state.lists];
        lists[index]['nama'] = newName;
        this.setState({lists});
    }
    deleteList = (theName) => {
        this.setState(
            {
                lists : this.state.lists.filter(el => el.id!==theName)
            }
        )
    }
    add = () => {
        if(this.refs.inputAdd.value !== ''){
            let newData={
                id: this.refs.inputAdd.value,
                nama: this.refs.inputAdd.value
            }
            this.setState(
                {
                    lists: [newData, ...this.state.lists]
                }
            )
        }
    }
    search = (evt) => {
        this.setState({searchTerm:evt.target.value});
    }
    componentDidMount(){
        console.log(this.state.counter);
        this.refs.inputAdd.focus();
    }
    render(){
        let list = this.state.lists.filter(
            el => el.nama.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        ).map((val,idx) => {
            return <El key={val.id} id={val.id} name={val.nama} changeList={(event) => { this.changeList(val.id, event.target.value)}} delete={this.deleteList.bind(this, val.id)}>{idx+1}</El>
        });
        // this.setState({counter:this.state.counter++});
        return (
            <div>
                <div>
                    <label>Cari</label>
                    <input type="text" onChange={this.search}/>
                </div>
                <input type="text" ref="inputAdd" placeholder="Tambahkan daftar"/>
                <button onClick={this.add}>Tambah</button>
                {list}
                <Akr/>
            </div>
        )
    }
}

export default List;