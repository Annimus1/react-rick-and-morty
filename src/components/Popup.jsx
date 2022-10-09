function Popup(props){

  return(
    <div className='relative'>
      <div 
      className='h-1/6 sm:w-full md:w-1/2 fixed top-2 left-2 bg-white 
      flex justify-center items-center
      text-xl text-rose-500 
      border-l-8 border-r-8 border-rose-500 animate-bounce'
      >
        <p>Hold on, Cowboy! There's no more pages for showing you.</p>
      </div>
    </div>
  )
}

export default Popup;