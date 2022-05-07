
import Form from "./Component/Form/Form";
import Items from "./Component/Items/Items";
import './App.css'
import {useState} from "react";
import { useSelector} from "react-redux";
import {Button, Container} from "@mui/material";


function App() {
  const{val,del,complete}=useSelector(state=>state)
  const[showAllData,setShowAllData]=useState(true)
  const[showAllDeletes,setShowAllDeletes]=useState(false);
  const[showAllCompletes,setShowAllCompletes]=useState(false);


  const functionShowAllActive = () => {
    setShowAllData(true);
    setShowAllDeletes(false);
    setShowAllCompletes(false)
  }
  const functionShowAllDeletes  = () => {

    setShowAllData(false);
    setShowAllDeletes(true);
    setShowAllCompletes(false)
  }
  const functionShowAllCompletes = () => {
    setShowAllData(false);
    setShowAllDeletes(false);
    setShowAllCompletes(true)
  }
  return (
      <div className="App">
        <Container style={{marginTop:'100px'}}>
          <Form/>
          <div style={{display:'flex',justifyContent:'center',marginTop:'40px'}}>
            <Button className='hover-error' onClick={functionShowAllActive} variant='outlined' color='error'>ALL ACTIVE</Button>
            <Button className='hover-com' onClick={functionShowAllCompletes} variant='outlined' color='primary'>ALL Complete</Button>
            <Button className='hover-edit' onClick={functionShowAllDeletes} variant='outlined' color='success'>ALL Deletes</Button>

          </div>
          {showAllData&&<Items data={val} />}
          {showAllDeletes&&<Items data={del} />}
          {showAllCompletes&&<Items data={complete} />}
        </Container>
      </div>
  );
}

export default App;
