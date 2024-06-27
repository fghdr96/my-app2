import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, del, toggleDone } from "./utils/store/slice/todoList";
import { Box, Button, TextField, Typography } from "@mui/material";




export default function App() {
  const [newWork, setNewWork] = useState('');
 const works = useSelector(store => store.todoList.works);
 const dispatch = useDispatch();

 const handleClick = (e) => {
  e.preventDefault();
  dispatch(add(newWork));
};
 

  return (
    <>
    <Box display='flex' width={{xs:"100vw", md:"100%"}} height={{xs:"100vh" , md:'100%'}} justifyContent="center" alignItems="center" >
      
        
      

    <Box mt={5} sx={{background:'white' , opacity:'0.7', width:'60%' , justifyContent:'center' , alignItems:'center',textAlign:'center',borderRadius:'10px'}} > 
        <Typography variant="h6" textAlign="center" sx={{color:'#008EBB' ,fontFamily: 'Dancing Script', fontWeight:500,fontSize:'45px'}} >ToDo List</Typography>
    
       <form onSubmit={handleClick}>
       <TextField id="outlined-basic" sx={{mt:2, width:{xs:'50%' , sm:'60%' ,md:'30%'}}}  variant="outlined" type="text" value={newWork} onChange={(e) => setNewWork(e.target.value)} />
        

        <Button variant="outlined" type="submit" sx={{mt:2, justifyItems:'center',justifySelf:'center',alignItems:'center',height:'55px',width:'65px'}}>Add</Button>
      </form>
      
      <Box sx={{mt:2 , mb:2}} display="grid" justifyContent="center" alignItems="center">
        {works.map((work, workIndex) => (
          <Box display="flex"  mb={2}
           key={workIndex} sx={{ textDecoration: work.done ? "line-through" : "none" }}>
         
            <input  type="checkbox" checked={work.done} onChange={() =>dispatch(toggleDone(workIndex))}/>
        
            <Button variant='outlined' sx={{mr:2,ml:2, height:'25px',width:'30px'}} onClick={() =>dispatch(del(workIndex))}>delete</Button>
             
            {" "}
            {work.title}
          </Box>
        ))}
      </Box>
      </Box>
    </Box> 
      
    </>
  )
}
