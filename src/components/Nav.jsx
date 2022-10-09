function Nav(props){
  return(
    <div className='h-12 flex justify-around bg-gray-900 py-1' >
     <Button text='Previous' function={()=>{props.prev()}} />
      
     <p 
     className='text-white w-2/3 flex justify-center items-center select-none' 
     >
       Current page: {props.page}/42
     </p>
      
     <Button text='Next' function={()=>{props.next()}} />
    </div>
  )
}

function Button(props){
  return(
    <button 
    className=' flex grow justify-center items-center  hover:border rounded-lg border-white text-white' 
    onClick={props.function}
    >
    {props.text}
    </button>
  )
}

export default Nav;