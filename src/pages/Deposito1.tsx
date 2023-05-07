import { Link } from "react-router-dom";
import { CardMenu } from "../components/Dashboard/CardMenu";


export default function Deposito1() {
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
                <h1 className="text-black text-2xl font-bold">Depósito por boleto</h1>
            </div>  

            <p className="text-black pt-3">
            Mais controle e agilidade na hora de gerar seus boletos. Com o Depósito por boleto você pode gerar boletos gratuitos. Tudo sem custos e com a praticidade.
            </p>


            <div className="row mt-5">

              <div className="col-lg-4">

              <div className="bg-[#F4F4F4] p-4 ">

              <p className="text-[#595959] font-semibold">Gerar boletos de pagamentos</p>


              <p className="text-[#595959] ">
                Com um clique você pode gerar boletos 
                de pagamentos
              </p>



              </div>

              </div>

              <div className="col-lg-4">

                <div className="bg-[#F4F4F4] p-4 ">

                <p className="text-[#595959] font-semibold">Evite atrasos</p>


                <p className="text-[#595959] ">
                Os boletos podem ser pagos na hora ou agendados para outra data.
                </p>



                </div>

                </div>

                <div className="col-lg-4">

              <div className="bg-[#F4F4F4] p-4 h-[18vh] ">

              <p className="text-[#595959] font-semibold">Segurança em seus pagamentos</p>


              <p className="text-[#595959] ">
              Tenha segurança do iníco ao fim 
              </p>



              </div>

              </div>


            </div>
    
            <div className="mt-3">

              <Link to="/deposito2">
              <button className="bg-[#137CF7] p-2 rounded font-bold text-white">
                Novo Boleto
              </button>

              </Link>
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