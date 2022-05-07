import {useSelector} from "react-redux";
import {Box, Button} from "@mui/material";


const ItemsTest=()=>{
    const{val}=useSelector(state=>state)
    return(
        <div className='content-item'>
            {val&&val.map((item,id)=>{
                return(
                    <Box key={id}>
                        <p>{item}</p>
                        <Button variant='contained' color='error'>Delete</Button>
                        <Button variant='contained' color='primary'>Edit</Button>

                    </Box>
                )
            })}
        </div>
    )
}
export default ItemsTest