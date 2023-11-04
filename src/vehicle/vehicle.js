
function Vehicle(){

    const names=[
        {name:'guna',id:1},
        {name:'guna',id:1},
        {name:'guna',id:1},
        {name:'guna',id:1},
        {name:'guna',id:1},
        {name:'guna',id:1},
    ]
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                </tr>
            </thead>

            <tbody>
                {names.map((item, index)=>(
                    <tr  key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <div>
            <input onChange={(e)=>{console.log(e.target.value)}}></input>
        </div>
        </>
    )
}

export default Vehicle;