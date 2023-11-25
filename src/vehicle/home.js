import { useEffect } from 'react';
import './home.css'

function Home() {

    useEffect(()=>{
        let date = new Date();
        console.log(date);
    })
   

    return (
        <>
            <div>
                <h1 className='head'>Hello , Welcome Home</h1>
            </div>
          
        </>
    )
}

export default Home;