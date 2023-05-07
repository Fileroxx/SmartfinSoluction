import React from 'react';
import { CardMenu } from '../components/Dashboard/CardMenu';
import { Header } from '../components/Header';
import { CardBit } from '../components/Transacoes/CardBit';
import { CarteiraCard } from '../components/Transacoes/Carteira';
import { CotacaoBit } from '../components/Transacoes/CotacaoBit';
import { DepositoBoleto } from '../components/Transacoes/DepositoBoleto';
import { LucroCard } from '../components/Transacoes/Lucro';
import { Extrato } from '../components/Transacoes/Extrato';
import { Wallet } from '../components/Transacoes/Wallets.';

export default function Transacoes() {
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

              <div className="col-lg-4">
                <CarteiraCard />
              </div>


              <div className="col-lg-4">
              <CardBit /> 
              </div>

              <div className="col-lg-4">
              <CotacaoBit />
              </div>

              <div className="col-lg-4 mt-10">
              <DepositoBoleto />
              </div>

              <div className="col-lg-4 mt-10">
                <LucroCard />
              </div>


              <div className="col-lg-4 mt-10">
                <Extrato />
              </div>


              <div className="col-lg-12 mt-10 mb-5">
                <Wallet />
              </div>

            </div>


          </div>

      </div>

      </div>


    </div>
 
    </div>
  );
}