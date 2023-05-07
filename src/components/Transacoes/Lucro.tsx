import React from 'react';
import { Link } from 'react-router-dom';


export const LucroCard = () => {
  return (
    <div className='border border-gray rounded h-[50vh] mt-0 text-white p-4'>
      
    <div className="flex justify-center pt-4 pb-2">
      <img src="lucro.png" alt="" />
    </div>

    <div className="text-center">
        <h3 className="text-black font-bold" style={{fontSize: '16px'}}>Saque o seu lucro</h3>
        <p className="text-black font-medium">Saque seus lucros de forma segura</p>
       
        <div className="pt-3">
          <span className="text-black font-normal ">
          Realize o saque dos seus lucros com segurança.
          </span>
        </div>
 
        <br />
        <Link to="/saque1">
        <button className="bg-[#D9D9D9] p-3 flex justify-center m-auto w-[80%]">
          <div className="text-center">
            <img src="seta.png" alt="" />
          </div>
         
        </button>
        </Link>

    </div>
 
    </div>
  )  
}
