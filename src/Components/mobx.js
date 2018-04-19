import {observer} from 'mobx-react'
import React,{Component, Fragment} from 'react'
import store from '@/store'

@observer
export default class Mobx extends Component {
  state = {
    show:true
  }

  handle = (e) => {
    if(e.which==27) this.changeShow()
    if(e.which==13){
      store.changeData(this.refs.nama.value, this.refs.token.value)
      this.changeShow()
    }
  }

  changeShow = ()=>{
    this.setState(prev => ({ show: !prev.show }));
  }

  componentDidUpdate(){
    console.log(store)
  }
  render() {
    const {getData:{nama, token}} = store

    return <div>
        {this.state.show ? <Fragment>
            <h1
              onClick={this.changeShow}
            >
              {nama}
            </h1>
            <p>{token}</p>
            test
          </Fragment> : <Fragment>
            <input type="text" ref="nama" defaultValue={nama} />
            <input type="text" ref="token" defaultValue={token} onKeyPress={this.handle} />
          </Fragment>}
      </div>;
  }
}

