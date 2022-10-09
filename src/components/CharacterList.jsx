import { React, useEffect, useState } from 'react';
import Character from './Character.jsx';
import Nav from './Nav.jsx';

function CharacterList(){

  const [page,setPage] = useState(1)
  const [characters,setCharacters] = useState([])
  
  function handleNext(){
    if(page != 42){
      setPage(page+1)
    }
    else{
      console.log('no hay mas paginas.')
    }
  }
  
  function handlePrev(){
    if(page != 1){
      setPage(page-1)
    }
    else{
      console.log('no hay mas paginas.')
    }
  }
  
  useEffect(()=>{
    async function fetchData(){
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      const data = await response.json()
      await setCharacters(data.results)
    }
    
    fetchData()
  },[page]);
  
  return(
    <div>
    <Nav page={page} next={handleNext} prev={handlePrev} />
    
    <div
    className='w-screen grid grid-cols-3 gap mb-2'
    >
    {
      characters.map((character)=>{
       return(<Character key={character.id} character={character}/> )
      })
    }
    </div>  
  
    <Nav page={page} next={handleNext} prev={handlePrev} />
    </div>
  )
}

export default CharacterList;
