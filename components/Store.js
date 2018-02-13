import {createStore} from 'redux';

const reducer=(state,action) => {
    if(action.type=='TEST'){
        return Object.assign({},state,{name:'SUCCESS'});
    }
    else if(action.type=='LOGIN'){
        return Object.assign({},state,{isLoggedIn:action.payload.isLoggedIn,auth_token:action.payload.auth_token});
    }
    else return state;
}

export default createStore(reducer,{
    name:'test',
    isLoggedIn:false,
    auth_token:''
});

