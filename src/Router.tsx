import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Fii from "./components/RendaVariavel/Fii";
import FiiDetalhes from "./components/RendaVariavel/FiiDetalhes";
import Cadastro from "./pages/Cadastro";
import Carteira from "./pages/Carteira";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import RendaVariavel, { FiiData } from "./pages/RendaVariavel";
import Transacoes from "./pages/Transacoes";
import MinhaConta from "./pages/MinhaConta";
import Saque1 from "./pages/Saque1";
import Saque2 from "./pages/Saque2";
import Deposito1 from "./pages/Deposito1";
import Deposito2 from "./pages/Deposito2";

export function Router() {

    
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
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro /> } />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/carteira" element={<Carteira />}/>
        <Route path="/transacoes" element={<Transacoes />} />
        <Route path="/minha-conta" element={<MinhaConta />} />
        <Route path="/renda-variavel" element={<RendaVariavel />} />
        <Route path="/saque1" element={<Saque1 />} />
        <Route path="/saque2" element={<Saque2 />} />
        <Route path="/deposito1" element={<Deposito1 />} />
        <Route path="/deposito2" element={<Deposito2 />} />
        <Route path="/fii/:id" element={<FiiDetalhes fiiData={fiiData}/>} />
    </Routes>
  );
}