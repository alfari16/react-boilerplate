import {observable, computed} from 'mobx'

class store {
  @observable data = {
    nama:'angga',
    token : 'here is ur fockin token'
  }

  @computed get getData(){
    return this.data
  }

  changeData(nama,token){
    this.data={
      nama,
      token,
    }
  }
}

export default new store()