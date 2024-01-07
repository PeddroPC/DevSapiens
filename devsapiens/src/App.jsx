import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/pages/Home/Home";
import Contact from "./Components/pages/Contact/Contact";
import Company from "./Components/pages/Company/Company";
import NewProject from "./Components/pages/NewProject/NewProject";
import SideBar from "./Components/SideBar/SideBar";
import Footer from "./Components/footer/Footer";
import Cursos from "./Components/pages/cursos/Cursos";
import axios from "axios";

function App() {
  const [dados, setDados] = useState([])

  const addDados = (titulo, descricao, instrutor, carga, categoria) => {
    const newDados = [
      ...dados,
      {
        id: Math.floor(Math.random() * 100000),
        titulo,
        descricao,
        instrutor,
        carga,
        categoria,
      },
    ];
    setDados(newDados);
    console.log(dados);
  };
  const fetchDados = async () => {
    try{
      const response = await axios.put("http://localhost:8080/cursos/list");
      setDados(response.data)
    } catch(error){
      console.error("Erro no fetch", error)
    }
  }
  useEffect(() => {
    fetchDados();
  }, []);
  return (
    <div>
      <SideBar />
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/company" element={<Company />}></Route>
          {dados.map((dado) => (
            <Route
              key={dado.id}
              path="/cursos"
              element={<Cursos dados={dados} />}
            ></Route>
          ))}
          <Route
            path="/newProject"
            element={<NewProject addDados={addDados} />}
          ></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
