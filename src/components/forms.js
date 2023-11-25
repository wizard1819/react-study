import { useState } from "react"

export default function FormsScreen(){


    const [ip,setIp]=useState({});
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setIp(values => ({...values, [name]: value}));
        console.log(event,ip);
      }
  
    return(
        <>
        <form>
            <input
            id="ine"
            name='name'
            value={ip.name || ''}
            onChange={handleChange}
             />
        </form>
        </>
    )
}

