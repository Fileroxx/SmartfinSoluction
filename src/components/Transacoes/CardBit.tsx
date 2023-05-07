

export const CardBit = () => {
  return (
    <div className='border border-gray rounded h-[20vh] mt-0 text-white p-4'>
      
      <div className="flex items-center justify-start">
        <div>
          <img className="w-[80%]" src="bitcoin.png" alt="" />
        </div>

        <div>
          <h3 className='text-[#000] font-bold'>Disponível BTC</h3>
          <p className="text-[#595959] font-semibold">BTC 0,00001264</p>
        </div>

      </div>
 
    </div>
  );
}