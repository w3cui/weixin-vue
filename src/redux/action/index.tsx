// src/actions/counter.js
import {setUserThird} from '../../service'
import {
    ADD,
    MINUS,
    WEIXIN_USER,
} from '../constants'

export const add = () => {
    return {
        type: ADD
    }
}
export const minus = () => {
    return {
        type: MINUS
    }
}

// 异步的 action
export function asyncAdd() {
    return dispatch => {
        setTimeout(() => {
            dispatch(add())
        }, 2000)
    }
}

export const setWeiXinUser = (user) => {
    return {
        type: WEIXIN_USER,
        user: { ...user },
    }
}

export const actionUserInfo = ()=>{
    return dispatch => {
        setUserThird().then((res)=>{
            dispatch(res); 
        })
    }
}