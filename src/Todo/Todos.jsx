import { useEffect, useState } from "react";
import { MdCheck,MdDeleteForever } from "react-icons/md";
import { TodoInput,TodoItem,TodoSubmitBtn } from "../styles/TodoStyles";

export const Todos = ()=>{  
    
    const [inputValue, setInputValue] = useState('');
    
    const [tasks, setTask] = useState([]);

    const [currentTime, setCurrentTime] = useState("")

    const now = new Date()
    const date = now.toLocaleDateString();

    useEffect(() => {
        const theTime =setInterval(() => {
            setCurrentTime(formatedTime);
        }, 1000);
    
        const formatedTime = ()=>{ 
            const time = new Date();
            let hours = time.getHours();
            let minutes = time.getMinutes();
            let seconds = time.getSeconds();
            let ampm = hours >= 12 ? 'PM' : 'AM';
    
            // Convert 24-hour time to 12-hour time
            hours = hours % 12;
            hours = hours ? hours : 12; // The hour '0' should be '12'
            if(seconds<10)seconds = `0${seconds}`
            if(minutes<10)minutes = `0${minutes}`
            
            return `${hours}-${minutes}-${seconds} ${ampm}`
        }
    
      return () => {
        clearInterval(theTime);
      }
    }, [])
    
    

    

    const hangleFormSubmit = (event)=>{ 

        event.preventDefault()

        if(!inputValue) return;

        if(tasks.includes(inputValue)) {
            setInputValue("")
            return;
        }
        
        setTask((prev)=> [...prev, inputValue])

        setInputValue("")
    }

    return(
        <> 
        <section> 
        <h1 style={ {padding:'.5rem', color:'#fff'} }>Todo List</h1> 
        </section>
        <section> 
            <h5 style={{marginBottom:'1rem'}}>{`${date}  -  ${currentTime}`}</h5>
        </section> 

        <section> 
            <form onSubmit={hangleFormSubmit}> 
                {<TodoInput value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />}
                {<TodoSubmitBtn type="submit">Add Task</TodoSubmitBtn>}
            </form>
        </section>
        <br/>
        <section> 
            <ul> 
                {
                tasks.map((task, index)=> 
                    <TodoItem key={index}>
                     {task}
                     <span className="hSpacer"></span>
                     <MdCheck cursor={'pointer'} onClick={()=>console.log('chcked')}/>
                     <span style={{width: '1rem'}}></span> 
                     <MdDeleteForever cursor={'pointer'} color="red" onClick={()=>console.log('clicked')
                     }  />
                     </TodoItem>
                    )
                }
            </ul>
        </section>
        <section> 
        </section>
        </>
    );
}