import "./sideBar.css";
import logo from "../../img/logo.png";

const SideBar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} />
        <h1>
          <a href="/">DevSapiens</a>
        </h1>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <a href="/Contact">Contato</a>
          </li>
          <li>
            <a href="/Company">Empresa</a>
          </li>
          <li>
            <a href="/cursos">Cursos</a>
          </li>
          <li>
            <a href="/NewProject">Novo Projeto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
