function Vehicle() {

    const names = [
        { name: 'guna', id: 1 },
        { name: 'arun', id: 2 },
        { name: 'praveen', id: 3 },
        { name: 'velu', id: 4 },
        { name: 'guna', id: 5 },
        { name: 'guna', id: 6 },
    ]




    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {names.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><button onClick={()=>{console.log(`${item.name} is chosen as a member`)}}>click</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Vehicle;