
function Character({character}){
  return(
    <div className='flex bg-gray-800 rounded-lg rounded-lg mt-2 p-2 mx-1 text-white'>
      <img 
      className='h-36 w-1-/3'  
      src={character.image} 
      alt={character.name} 
      />
      
      <div className='w-2/3 pl-2'>
        <h2 className='text-2xl font-semibold 
        flex items-center justify-center pb-4'>{character.name}</h2>
        <p>{(character.status == 'Dead')?'🔴 ': (character.status == 'Alive')?'🟢 ':'⚪' } {character.status} - {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Location: {character.origin.name}</p>
      </div>
    
  </div>
  )
}
export default Character;
