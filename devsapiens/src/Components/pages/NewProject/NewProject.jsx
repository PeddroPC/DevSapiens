import React, { useState } from "react";
import "./NewProject.css";

const NewProject = ({ addDados }) => {
  const categorias = [
    "Amazon Web Services (AWS)",
    "Angular",
    "Blockchain Basics",
    "Blockchain Security",
    "Continuous Integration/Continuous Deployment (CI/CD)",
    "Cryptography",
    "Deep Learning",
    "Django (Python)",
    "Docker",
    "Ethereum Development",
    "Ethical Hacking",
    "Firebase",
    "Flutter",
    "Google Cloud Platform",
    "HTML/CSS",
    "Java",
    "JavaScript",
    "Kotlin (Android)",
    "MEAN Stack (MongoDB, Express.js, Angular, Node.js)",
    "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    "Machine Learning",
    "MongoDB",
    "MySQL",
    "Natural Language Processing (NLP)",
    "Network Security",
    "PHP",
    "PostgreSQL",
    "Python",
    "Python for Data Science",
    "React.js",
    "React Native",
    "Responsive Web Design",
    "Ruby",
    "Ruby on Rails",
    "Serverless Architecture",
    "Smart Contracts",
    "Spring Boot (Java)",
    "Swift (iOS)",
    "UI/UX Design",
    "Vue.js",
    "Web Accessibility",
    "Web Design",
  ];

  const [titulo, setTitulo] = useState("");
  const [descricao, setdescricao] = useState("");
  const [instrutor, setInstrutor] = useState("");
  const [carga, setCarga] = useState();
  const [categoria, setCategoria] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (titulo && descricao && instrutor && carga && categoria) {
      try{
        const response = await fetch("http://localhost:8080/cursos" , {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({titulo, descricao, instrutor, carga, categoria})
        })
        if (response.ok) {
          const data = await response.json();
          addDados(titulo, descricao, instrutor, carga, categoria);
        }else{
          alert("Inválidado")
        }
      }catch (error){
        console.error("Erro no fetch", error)
      }
    }else{
      alert("Inválido")
    }
  }

  return (
    <form className="new-project-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="titulo">Título do curso:</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          required
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label htmlFor="descricao">Descrição:</label>
        <textarea
          id="descricao"
          name="descricao"
          rows="4"
          required
          onChange={(e) => setdescricao(e.target.value)}
        />

        <label htmlFor="instrutor">Instrutor:</label>
        <input
          type="text"
          id="instrutor"
          name="instrutor"
          required
          onChange={(e) => setInstrutor(e.target.value)}
        />

        <div className="two-fields">
          <div className="field">
            <label htmlFor="carga">Carga Horária:</label>
            <input
              type="number"
              id="carga"
              name="carga"
              required
              onChange={(e) => setCarga(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="categoria">Categoria:</label>
            <select
              id="categoria"
              name="categoria"
              defaultValue=""
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value={categoria} disabled>
                Selecionar
              </option>
              {categorias.map((categoria, index) => (
                <option key={`id_${index + 1}`} value={categoria}>
                  {categoria}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit">Cadastrar curso</button>
      </div>
    </form>
  );
};

export default NewProject;
