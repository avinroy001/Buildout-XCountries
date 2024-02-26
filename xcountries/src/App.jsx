import { useState ,useEffect} from 'react';
import Card from './Card';
import './App.css'
import {fetchData} from './api'
function App() {
    let [info,setInfo]=useState([]);

    const getdata=async ()=>{
      try{
        const ans=await fetchData();
        setInfo(ans)
      }catch(e){
        console.log(e);
      }
    }
    useEffect(()=>{
      getdata();
    },[]);
    console.log(info);
  return (
    <>
      {info.length ?(<div className='card'>
        {
          info.map((el)=> (
            <Card data={el} key={el.ccn3}/>
          ))
        }
      </div>):(<></>)}
    </>
  )
}

export default App
