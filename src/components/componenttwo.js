import {React} from "react"

export default function Componenttwo(){

    let store;


    const st = () =>{
        console.log(store);
    }
    return(
        <>
        <button onClick={st}>click</button>
        two
        </>
    )
}