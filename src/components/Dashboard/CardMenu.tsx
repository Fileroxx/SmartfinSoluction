import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"


export const CardMenu = () => {

  const [showSpan, setShowSpan] = useState(false);

  const handleMouseEnter = () => {
    setShowSpan(true);
  }

  const handleMouseLeave = () => {
    setShowSpan(false);
  }


  return (
    <div className="border fixed border-gray-800 p-4 shadow-md rounded h-[90vh] w-[7vw] transition-[1s] hover:w-[13vw]"
    onMouseLeave={handleMouseLeave}
    >
    <div className="flex items-center">
      



     </div>



     <div className="mt-3">

      <NavLink to="/dashboard">
        <button className="rounded  z-1 p-3 flex items-center text-white font-bold text-2xl"   onMouseEnter={handleMouseEnter}>
         
         <img src="inicio.png" alt="" />
       
        {showSpan && <span className="ml-2 text-black" style={{fontSize: "16px"}}>Dashboard</span>}
     
    
        </button>
      </NavLink>

      <br />

        <NavLink to="/transacoes">
          <button className="rounded p-3 flex items-center text-white font-bold text-2xl" onMouseEnter={handleMouseEnter}>
         
         <img src="transacoes.png" alt="" />

          {showSpan && <span className="ml-2  text-black" style={{fontSize: "16px"}}>Transações</span>}

          </button>
        </NavLink>
 
  

      <br />
      <NavLink to={'/minha-conta'} >
        <button className="rounded p-3 flex items-center text-white font-bold text-2xl" onMouseEnter={handleMouseEnter}>
        
        <img src="conta.png" alt="" />
      
      
      {showSpan && <span className="ml-2 text-black" style={{fontSize: "16px"}}>Conta</span>}
     
        </button>
      </NavLink>

      <br />

      <button className=" rounded p-3 flex items-center text-white font-bold text-2xl w-[100%]" onMouseEnter={handleMouseEnter}>
     
     <img src="suporte.png" alt="" />
      
    {showSpan && <span className="ml-2 text-black" style={{fontSize: "16px"}}>Suporte</span>}
     

      </button>
      
      <br />


     </div>

</div>
  );
}