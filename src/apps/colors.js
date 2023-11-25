import {  setState } from "./state/store";

export default function Color() {

const data =[
    {name:'guna',id:1,age:20},
    {name:'hari',id:2,age:20},
    {name:'vels',id:3,age:20},
    {name:'arun',id:4,age:20},
    {name:'praveen',id:1,age:20},
    {name:'mohan',id:1,age:20},
    {name:'vino',id:1,age:20},
    {name:'raths',id:1,age:20},
]


    const setcoll = () => {
        setState(data);
    }

    return (
        <>
            <div>colors
            </div>
            <button onClick={()=>{setcoll()}}>set</button>

        </>
    )
}