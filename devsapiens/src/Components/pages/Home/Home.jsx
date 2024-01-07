import savings from "../../../img/savings.svg";
import "./home.css";

const Home = () => {
  return (
    <div className="body">
      <div>
        <img src={savings} />
      </div>
      <div>
        <p className="text">
          Bem-vindo ao DevSapiens! Explore cursos de programação para todos os
          níveis de habilidade.
          <br /> Transforme-se em um mestre da codificação conosco.{" "}
          <a href="/cursos">Vamos começar!</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
