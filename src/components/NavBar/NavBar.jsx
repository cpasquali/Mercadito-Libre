import { useState, useEffect, useContext } from "react";
import "./NavBar.css";
import { SelectTypeProductContext } from "../../context/SelectTypeProduct";
import { SearchProductContext } from "../../context/SearchProductContext";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [types, setTypes] = useState([]);
  const { setType, type } = useContext(SelectTypeProductContext);
  const { setSearchValue } = useContext(SearchProductContext);
  const [inputValue, setInputValue] = useState("");
  const API_URL = "https://api.mercadolibre.com/sites/MLA/categories";

  const inputHandle = (value) => {
    setSearchValue(value);
  };

  const getProductsType = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        console.log("Error en el servidor");
      }
      const data = await response.json();
      setTypes(data);
    } catch {
      console.error("Error en la ejecución");
    }
  };

  useEffect(() => {
    getProductsType();
  }, []);

  useEffect(() => {
    console.log(type);
  }, [type]);

  return (
    <header className={`navbar-container `}>
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand text-white">Marketify</a>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  onClick={() => {
                    setType(null);
                    setSearchValue("");
                  }}
                  className="nav-link active text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="nav-item dropdown movil">
                <a
                  className="nav-link dropdown-toggle text-white"
                  role="button"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Categories
                </a>
                <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                  {types.map((type) => (
                    <li
                      className="dropdown-item"
                      onClick={() => setType(type.id)}
                      key={type.name}
                    >
                      {type.name}
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown pc">
                <a
                  className="nav-link dropdown-toggle text-white"
                  role="button"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Categories
                </a>
                <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                  {types.map((type) => (
                    <li
                      className="dropdown-item"
                      onClick={() => setType(type.id)}
                      key={type.name}
                    >
                      {type.name}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  inputHandle(inputValue);
                  setInputValue("");
                }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};
