
function Character({character}){
  return(
    <div className='flex bg-gray-800 rounded-lg rounded-lg mt-2 p-2 mx-1 text-white'>
      <img 
      className='h-36 w-36 rounded-full mx-1'  
      src={character.image} 
      alt={character.name} 
      />
      
      <div className='flex flex-col justify-left items-left'>
        <h2 className='text-2xl font-semibold my-2 pl-6'>{character.name}</h2>
        <p>{(character.status == 'Dead')?'🔴 ': (character.status == 'Alive')?'🟢 ':'⚪' } {character.status} - {character.species}</p>
        <p>Gender: {character.gender}</p>
        <p>Location: {character.origin.name}</p>
      </div>
    
  </div>
  )
}
export default Character;
