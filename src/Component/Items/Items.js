import RenderData from "../RenderData/RenderData";
import './items.css'

const Items=({data})=>{


    return(

           <div className='content-items'>
               {data?.map((item,id)=>{
                   return(
                       <RenderData key={id} item={item.name} id={id}/>
                   )
               })}
           </div>

    )
}
export default Items