import {ACTIVE_DATA, COM_DATA, DELETE_ALL, DELETE_DATA, UPDATE_DATA, UPDATE_INPUT, ValINPUT} from "./Type";


export const addItem=(data)=>{
    return{
        type:ValINPUT,
        data
    }
}
export const updateInput=(index,ele)=>{
    return{
        type:UPDATE_INPUT,
        index,
        ele,
    }
}

export const delData=(data)=>{
    return{
        type:DELETE_DATA,
        data,
    }
}

export const updateData=(data)=>{
    return{
        type:UPDATE_DATA,
        data,
    }
}

export const activeData=(data)=>{
    return{
        type:ACTIVE_DATA,
        data,
    }
}
export const comData=(data)=>{
    return{
        type:COM_DATA,
        data,
    }
}
export const delAll=(data)=>{
    return{
        type:DELETE_ALL,
        data,
    }
}