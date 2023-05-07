import React from 'react';


export const CardWallet = () => {
  return (
    <div className='border border-gray rounded h-[50vh] mt-0 text-white p-4 shadow-md'>
      <h3 className='text-black font-bold '>Wallets</h3>

     <div className='flex flex-col items-center justify-start'>
        
        //card
        <div className='flex items-center shadow-md w-[100%] p-2 rounded'>
          <div className='border border-blue p-2 rounded-full bg-[#E4F4FF]'>
              <img src="carteira.svg" alt="" />
          </div>

          <div className='pl-2'>
            <h4 className='text-1xl text-black font-bold'>Carteira</h4>
            <span className='text-gray-500 font-bold'>USD$ 1.588,71</span>
          </div>

        </div>

        //card
        <div className='flex items-center shadow-md w-[100%] p-2 rounded'>
          <div className='border border-green-500 p-2 rounded-full bg-[#D0EDDD]'>
              <img src="disponível.svg" alt="" />
          </div>

          <div className='pl-2'>
            <h4 className='text-1xl text-black font-bold'>Disponível BTC</h4>
            <span className='text-gray-500 font-bold'>BTC 0,000001345</span>
          </div>

        </div>


        //card
        <div className='flex items-center shadow-md w-[100%] p-2 rounded'>
          <div className='border border-blue p-2 rounded-full bg-[#F3EDDC]'>
              <img src="bitcoin.svg" alt="" />
          </div>

          <div className='pl-2'>
            <h4 className='text-1xl text-black font-bold'>Cotação Bitcoin</h4>
            <span className='text-gray-500 font-bold'>USD$ 41.577,23</span>
          </div>

        </div>



      <div>
        
      </div>
     </div>

    </div>
  );  
}