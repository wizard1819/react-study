import './App.css';
function App() {





  const names = [
    { name: 'Ayyasamy', id: 1 },
    { name: 'Mohan', id: 2 },
    { name: 'Munna', id: 3 },
    { name: 'Monu', id: 4 },
    { name: 'Tamil', id: 5 },
  ]





  function show(data) {
    console.log(`${data} has been chosen as a team member`);
  }
  return (
    <>
      <div>
        <table className='tab'>
          <thead>
            <tr>
              <th>Sr no</th>
              <th>id</th>
              <th>name</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {names.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><button className='btn' onClick={() => show(item.name)}>click</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App;
