import { CardMenu } from "../components/Dashboard/CardMenu";


export default function Deposito2() {
  return (
    <div className="h-[100vh] w-[90%] m-auto bg-[#fff]">

    <div className="m-0 rounded p-0 bg-[#fff]">
      <div className="container-fluid">

      <h1 className="text-white mb-3 text-3xl text-left font-bold">Dashboard</h1>

      <div className="row">

          <div className="col-lg-2">
            <CardMenu />
          </div>

          <div className="col-lg-9">

            <div className="row">

              <div className="col-lg-12">
              <div className='border border-gray rounded shadow-md h-[70vh] mt-0 text-white p-4'>
      
      <div className="flex items-center justify-start">
  
  
            <div>

              <div className='border-b border-gray-500'>
              <h3 className='text-[#000] font-bold text-2xl'>Depósito por boleto</h3>
              <br />
              <p className='text-gray-500'>Dados</p>
              <hr />
              </div>


              <form action="" className='pt-4'>
                <div className="row">
                  <div className="col-lg-6">
                  <input placeholder='Nome' className='w-[300px] p-2 my-2 rounded border-0 outline-none text-[#646464] border-none bg-[#D9D9D9]' type="text" />
                 
                  </div>
                  <div className="col-lg-6">
                  <input placeholder='CPF/CNPJ' className='w-[300px] p-2 my-2 rounded border-0 outline-none text-[#646464] border-none bg-[#D9D9D9]' type="text" />
                 
                  </div>

                  <div className="col-lg-12">
                    <input placeholder='Valor do boleto' className='w-[300px] my-2 p-2 rounded border-0 outline-none text-[#646464] border-none bg-[#D9D9D9]' type="text" />
                  </div>
                  <div className="col-lg-6">
                  <select className='w-[300px] p-2 rounded my-2 border-0 outline-none text-[#646464] border-none bg-[#D9D9D9]'>
                      <option value="Carteira">Selecione uma carteira</option>
                      <option value="Carteira2">Carteira</option>
                    </select>
                  </div>

                  <div className="col-lg-12">

                    <div className="flex justify-start items-center mt-3">

                    <div>
                    <button className='bg-[#137CF7] p-2 rounded font-bold'>Gerar boleto</button>
                    </div>
               
                    <div>
                    <button className='bg-transparent border border-solid text-[#137CF7] border-blue-500 p-2 ml-3 rounded font-regular'>Voltar</button>
                    </div>

                    </div>

                  </div>


                </div>
              </form>

            </div>
      
          </div>
      
        </div>
              </div>

            </div>


          </div>

      </div>

      </div>


    </div>
 
    </div>
  );
}