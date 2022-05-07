import {addItem, updateInput} from "./Action";
import {ACTIVE_DATA, COM_DATA, DELETE_ALL, DELETE_DATA, UPDATE_DATA, UPDATE_INPUT, ValINPUT} from "./Type";


const initialState={
    val:[],
    del:[],
    complete:[],
    active:[]
}

const Reducer=(state=initialState,action)=>{
    switch (action.type){
        case ValINPUT:
            return{
                ...state,
                val:[...state.val, {name: action.data}]
            }
        case UPDATE_INPUT:
            const updates=state.val;
            const indexVal=action.index;
            const itemVal=action.ele
            const update=updates[indexVal]
            update['name']=itemVal
            return {
                ...state,
                val: updates
            }
        case DELETE_DATA:
            const ele=action.data
            const getFilteredItem=state.val.filter(item=>{return item.name === ele})
            const filteredItem=state.val.filter(item=> {return item.name !== ele})
            console.log(getFilteredItem)
            return {
                ...state,
                val: filteredItem,
                del: [...state.del,...getFilteredItem],
            }
        case DELETE_ALL:
            return {
                ...state,
                val: [],

            }
        case COM_DATA:
            const com=action.data
            const getFilteredCom=state.val.filter(item=>{return item.name === com})
            const filteredCom=state.val.filter(item=> {return item.name !==com})
            return {
                ...state,
                val: filteredCom,
                complete: [...state.complete,...getFilteredCom]
            }
        case ACTIVE_DATA:
            return {
                ...state,
                active: action.data
            }
        default :
            return  state

    }
}

export default Reducer;