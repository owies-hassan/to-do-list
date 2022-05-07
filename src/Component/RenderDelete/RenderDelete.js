import {useSelector} from "react-redux";

const RenderDelete=()=>{
    const {del}=useSelector(state=>state)
    return(
        <div>
            {del&&del.map(item=>{
                return(
                    <div className='content-item'>
                        {item.name}
                    </div>
                )
            })}
        </div>
    )
}
export default RenderDelete;