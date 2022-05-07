import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItem, delAll} from "../../Redux/Action";
import Error from "../Error/Error";
import './Form.css'

const Form = () => {
    const allData=useSelector(state=>state.val)
    const[val,setVal]=useState('');
    const[checkVal,setCheckVal]=useState(false);
    const[checkDel,setCheckDel]=useState(false)
    const dispatch=useDispatch()
    const handleAdd = () => {
        if (val) {
            dispatch(addItem(val))
            setVal('')
            setCheckVal(false)
            setCheckDel(false)
        } else {
            setCheckVal(true)
        }
    }
    const handleDelAll=()=>{
        if (!allData.length){
            setCheckDel(true)
            setCheckVal(false)
        }else {
            dispatch(delAll())
         setCheckDel(false)
            setCheckVal(false)

        }
    }
    return (
       <Box>
           <Box className='content-form' >
               <TextField
                   value={val}
                   type='text'
                   label='your task'
                   fullWidth={true}
                   onChange={(e) => setVal(e.target.value)}

               />
               <Button style={{width:'10%'}} onClick={handleAdd} variant='contained' color='success'>Add</Button>
               <Button className='style-btn' style={{width:'17%'}} onClick={handleDelAll}  variant='contained' color='error'>Delete All
               <p >without restore</p>
               </Button>

           </Box>
           {checkVal&& <Error Text='please write some tasks' />}
           {checkDel&&<Error Text='you are already delete all items'/>}
       </Box>
    )
}
export default Form;