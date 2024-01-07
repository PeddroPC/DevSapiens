import React from "react";
import "./cursos.css";

const Cursos = ({ dados }) => {
  return (
    <div className="cursos">
      <h2>Todos os Cursos</h2>
      <div className="cursos-container">
        {dados.map((curso) => (
          <div key={curso.id} className="curso-card">
            <h3>{curso.titulo}</h3>
            <p>{curso.descricao}</p>
            <p>Instrutor: {curso.instrutor}</p>
            <p>Carga Horária: {curso.carga} horas</p>
            <p>Categoria: {curso.categoria}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cursos;
