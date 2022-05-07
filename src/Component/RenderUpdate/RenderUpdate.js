import {Box, Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {updateInput} from "../../Redux/Action";
import {useRef} from "react";


const RenderUpdate=({edit,isEdit,item,id})=>{
    const cur=useRef()
    const dispatch=useDispatch()
    const handleEdit=()=>{

        console.log(id)
        isEdit(!edit)
        dispatch(updateInput(id,cur.current.value))

    }
    return(
        <Box style={{display:'flex'}}>
            <TextField
               inputRef={cur}
                type='text'
                label='update'
                defaultValue={item}


            />
            <Button onClick={handleEdit} variant='contained' color='success'>Update</Button>
        </Box>
    )
}
export default RenderUpdate;