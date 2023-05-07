

export const CotacaoBit = () => {
  return (
    <div className='border border-gray rounded h-[20vh] mt-0 text-white p-4'>
      
    <div className="flex items-center justify-between">
      <div>
        <img className="w-[80%]" src="cotacao.png" alt="" />
      </div>

      <div>
        <span className="text-gray-500" style={{fontSize: '14px'}}>Cotação</span>
        <h3 className='text-[#000] font-bold'>Disponível BTC</h3>
        <p className="text-[#595959] font-semibold">BTC 0,00001264</p>
      </div>

      <div>

        <div className="bg-[#CBF1DD] p-1 rounded">
          <span className="text-[#1D9F5A] font-bold">+2,13</span>
        </div>

      </div>

    </div>

  </div>
  );
} 