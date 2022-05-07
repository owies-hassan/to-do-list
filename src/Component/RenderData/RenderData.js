

import {Box, Button} from "@mui/material";
import {useEffect, useState} from "react";
import RenderUpdate from "../RenderUpdate/RenderUpdate";
import {useDispatch, useSelector} from "react-redux";
import {comData, delData, updateData} from "../../Redux/Action";
import './RenderData.css'
import {COM_DATA} from "../../Redux/Type";

const RenderData=({item,id})=>{
    const[edit,isEdit]=useState(true);
const[style,setStyle]=useState({transform:'translateX(100%)',opacity:0})
    const dispatch=useDispatch();
    const handleEdit=()=>{
        isEdit(!edit)
    }
    const handleDel=()=>{
        dispatch(delData(item))
    }
    const handleComplete=()=>{
         dispatch(comData(item))
    }

    useEffect(()=>{
        const timeOut=setTimeout(()=>{
            setStyle({transform:'translateX(0%)',opacity: 1})
        },500)

        return ()=>{
            clearTimeout(timeOut)
        }
    },[])
    return(
      <Box>
          {edit?
              <div style={style} className={`content-item`}>
              <p>{item}</p>
              <Button onClick={handleDel} variant='contained' color='error'>Delete</Button>
              <Button onClick={handleEdit} variant='contained' color='primary'>Edit</Button>
              <Button onClick={handleComplete} variant='contained' color='success'>Complete</Button>
          </div>:<RenderUpdate id={id} edit={edit} isEdit={isEdit} item={item} />}
      </Box>
    )
}
export default RenderData;