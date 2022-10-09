import { React, useEffect, useState } from 'react';
import Character from './Character.jsx';
import Nav from './Nav.jsx';
import Popup from './Popup.jsx';

function CharacterList(){

  const [page,setPage] = useState(1)
  const [characters,setCharacters] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  
  function handleNext(){
    if(page != 42){
      setPage(page+1)
    }
    else{
      setIsOpen(true)
      setTimeout(()=>{
        setIsOpen(false)
      },5000)
    }
  }
  
  function handlePrev(){
    if(page != 1){
      setPage(page-1)
    }
    else{
      setIsOpen(true)
      setTimeout(()=>{
        setIsOpen(false)
      },5000)
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
    <h1 className='flex justify-center items-center 
    text-white font-semibold sm:text-blue-200 md:text-6xl bg-gray-900
    select-none '
    >
    Rick and  Morty
    </h1>
    
    <Nav page={page} next={handleNext} prev={handlePrev} />
    {isOpen && <Popup />}
    <div
    className='w-screen grid sm:grid-cols-1 sm:grid-cols md:md:grid-cols-2 gap mb-2'
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
