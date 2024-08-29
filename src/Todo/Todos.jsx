import { useState } from "react";
import { MdCheck,MdDeleteForever } from "react-icons/md";
import { TodoInput,TodoItem,TodoSubmitBtn } from "../styles/TodoStyles";

export const Todos = ()=>{  
    
    const [inputValue, setInputValue] = useState('');
    
    const [tasks, setTask] = useState([]);

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
        <h1 style={ {padding:'1rem', marginBottom: '1rem'} }>Todo List</h1> 
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