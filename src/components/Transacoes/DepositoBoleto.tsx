import { Link } from "react-router-dom";


export const DepositoBoleto = () => {
  return (
    <div className='border border-gray rounded h-[50vh] mt-0 text-white p-4'>
      
    <div className="flex justify-center pt-4 pb-2">
      <img src="deposito.png" alt="" />
    </div>

    <div className="text-center">
        <h3 className="text-black font-bold" style={{fontSize: '16px'}}>Depósito por boleto</h3>
        <p className="text-black font-medium">Gerar boletos de pagamentos.</p>
       
        <div className="pt-3">
          <span className="text-black font-normal ">
            Com um clique você pode gerar
            boletos de pagamentos
          </span>
        </div>
 
        <br />
        
        <Link to="/deposito1">
        <button className="bg-[#D9D9D9] p-3 flex justify-center m-auto w-[80%]">
          <div className="text-center">
            <img src="seta.png" alt="" />
          </div>
         
        </button>
        </Link>

    </div>
 
    </div>
  );
}