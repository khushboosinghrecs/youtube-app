import React, { useEffect, useState } from 'react'
import { YouTubeApiKey } from '../utils/constant';
import { Link } from 'react-router-dom';
import VedioCard from './VedioCard';

function VedioContainer() {
    const [vedioList, setVedioList] = useState([]);
    useEffect(()=>{
        getVedios();
    }, []);
    const getVedios = async ()=>{
        try{
        const data = await fetch(YouTubeApiKey);
        const json = await data.json();
        setVedioList(json.items);
        console.log(json.items);
        }
        catch(err){
            console.log(err);
        }
    }
    
return (
    <div className='flex flex-wrap'>
        {vedioList.map((vedio, i)=>(
       <Link  to={"/watch?v=" + vedio.id}  key = {i} >  <VedioCard info={vedio}/> </Link> 
        ))}
    </div>

  )
}

export default VedioContainer