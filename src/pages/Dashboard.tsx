import { useEffect, useState } from "react";
import FiiCards from "../components/Dashboard/FIICard";
import { Header } from "../components/Header";
import axios from 'axios';
import { CardMenu } from "../components/Dashboard/CardMenu";
import { CardGanhos } from "../components/Dashboard/CardGanhos";
import { CardVisaoGeral } from "../components/Dashboard/CardVisaoGeral";
import { CardNoticias } from "../components/Dashboard/CardNoticias";
import { CardBitcoin } from "../components/Dashboard/CardBitcoin";
import { CardWallet } from "../components/Dashboard/CardWallet";
import { CardAtivos } from "../components/Dashboard/CardAtivo";
import { Extrato } from "../components/Transacoes/Extrato";
import { CardExtrato } from "../components/Dashboard/CardExtrato";


export type FiiData = {
  id: number;
  C_digodo_fundo: string;
  Setor: string;
  Preco_Atual: number;
  Liquidez_Diaria: number;
  Dividendo: number;
  DividendYield: number;
  DY_3M_Acumulado: number;
  DY_6M_Acumulado: number;
  DY_12M_Acumulado: number;
  DY_3M_M_dia: number;
  DY_6M_M_dia: number;
  DY_12M_M_dia: number;
  DY_Ano: number;
  variacao_preco: number;
  Rentab_Periodo: number;
  Rentab_Acumulada: number;
  PatrimonioLiq: number;
  VPA: number;
  P_VPA: number;
  DYPatrimonial: number;
  VariacaoPatrimonial: number;
  Rentab_Patrimonio_Periodo: number;
  Rentab_Patr_Acumulada: number;
  VacanciaFisica: number;
  VacanciaFinanceira: number;
  QuantidadeAtivos: number;
  slug: string;
};

export default function Dashboard() {

  const [fiiData, setFiiData] = useState<FiiData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://x8ki-letl-twmt.n7.xano.io/api:R98tRgF0:v1/dados_fiis"
        );
        console.log(response.data)
        setFiiData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="h-[110vh] w-[90%] m-auto bg-[#fff]">

    <div className="m-0 rounded p-0 bg-[#fff]">
      <div className="container-fluid">

      <h1 className="text-white mb-3 text-3xl text-left font-bold">Dashboard</h1>

      <div className="row">

          <div className="col-lg-2">
            <CardMenu />
          </div>

          <div className="col-lg-9">

            <div className="row">

              <div className="col-lg-8">
                <CardBitcoin />
              </div>


              <div className="col-lg-4">
                <CardWallet />
              </div>

              <div className="col-lg-4">
              <CardAtivos />
              </div>

              <div className="col-lg-4">
                <CardGanhos /> 
              </div>

              <div className="col-lg-4 mt-4">
                <CardExtrato/>
              </div>


            </div>


          </div>

      </div>

      </div>


    </div>
 
    </div>

    </>

  );
}
    