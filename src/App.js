import './App.css';
import Actions from './components/Actions';
import Table from './components/Table';
import { useState } from 'react';
import axios from 'axios'

function App() {
  const [jsonData,setjsonData] = useState(undefined)
  const [error,setError] = useState(false)
  const  [show, setshow] = useState(false);


  const onLoadHandler = async(filename)=> {
    axios.get(`http://localhost:8000/readFile?filename=${filename}`)
    .then(res => {
      if(res.data == 'error'){
        setError(true)
      }
      else{
        setError(false)
        setjsonData(res.data)
      }

    })
  }

  const onSaveHandler = ()=> {
    axios.post(`http://localhost:8000/saveFile`,{
      headers : {
        headers: {'Content-Type': '*'},
      },
      data : JSON.stringify(jsonData)
    })
    .then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'prize.yaml');
      document.body.appendChild(link);
      link.click();
    })
  }

  const showAllButtonHandler = (value)=> {
    setshow(value)
  }

  let empty = true
  if(jsonData !== undefined){
    empty = false
  }

  return (
    <div className="App">
      <Actions onShow = {showAllButtonHandler} onLoadHandler={onLoadHandler} data={jsonData} onSave={onSaveHandler}></Actions>
      {jsonData ? <div className='title'>{show ? "Displaying All the Content" : "Displying Only Winners from 2020 and 2019"}</div> : ''}
      {!error ? <Table show={show} data={jsonData}></Table> : <div className='error'>Error Something went Wrong</div>}
    </div>
  );
}

export default App;
