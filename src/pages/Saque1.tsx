import { Link } from "react-router-dom";
import { CardMenu } from "../components/Dashboard/CardMenu";



export default function Saque1() {
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

            <div className="border-b border-gray-300 border-solid pb-4">
                <h1 className="text-black text-2xl font-bold">Saque</h1>
            </div>  

            <p className="text-black pt-3">
            Matheus, transfira seus recursos de volta para sua conta do banco.
            </p>


            <div className="row mt-5">

              <div className="col-lg-6">

              <div className="bg-[#F4F4F4] p-4 ">

              <p className="text-[#595959] font-semibold">Saldo disponível para saque</p>

              <h1 className="text-3xl text-[#595959] font-bold pt-2">BTC 0,0001264</h1>

              <p className="text-[#595959] ">USD$ 1.588,71</p>

              <div className="flex mt-4">
                <img src="saques.png" alt="" />
                <span className="text-[#595959] ">Saques recentes</span>
              </div>

              <div>
                <Link to="/saque2"><button className="bg-[#137CF7] p-2 rounded font-bold mt-3">Solicitar Saque</button></Link>
              </div>

              </div>

              </div>

              <div className="col-lg-6">

                <div className="bg-[#F4F4F4] p-4 ">
                    <img src="atencao.png" alt="" />

                    <p className="text-[#595959]">
                    Você ainda não possui uma conta cadastrada para realizar o saque.
                    Para sua segurança, cadastre uma conta que você é o (CPF) titular.
                    </p>

                    <div className="flex justify-start items-center mt-3">

                    <div>
                    <button className='bg-[#137CF7] p-2 rounded font-bold'>Cadastre sua conta</button>
                    </div>

                    <div>
                    <button className='bg-transparent border border-solid text-[#137CF7] border-blue-500 p-2 ml-3 rounded font-regular'>Voltar</button>
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

      </div>


    </div>
 
    </div>
  );
}