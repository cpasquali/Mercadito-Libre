import { useState, useEffect } from "react";
import "./ProductScrollbar.css";

export const ProductScrollbar = ({ type, name, classMain, searchValue }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const API_URL_BY_TYPE = `https://api.mercadolibre.com/sites/MLA/search?category=${type}`;
  const API_URL_BY_SEARCH = `https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}`;

  const fetchData = async () => {
    setIsloading(true);
    const API = searchValue ? API_URL_BY_SEARCH : API_URL_BY_TYPE;
    try {
      const response = await fetch(API);
      if (!response.ok) {
        console.log(
          `Error al obtener datos: ${response.status} ${response.statusText}`
        );
        return;
      }
      const dataApi = await response.json();
      setData(dataApi.results);
    } catch (error) {
      console.log("Error al realizar la solicitud", error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchValue, type]);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <section className="container">
      <h2>{name}</h2>
      <section className={`cards ${classMain}`}>
        {data.map((product, index) => {
          if (index <= 5) {
            const imageUrl = product.thumbnail.startsWith("http://")
              ? product.thumbnail.replace("http://", "https://")
              : product.thumbnail;
            return (
              <article key={product.id} className="card">
                <img
                  src={imageUrl}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    ${parseInt(product.price).toLocaleString("es-ES")}
                  </p>
                  <button className="btn btn-primary">View product</button>
                </div>
              </article>
            );
          }
        })}
      </section>
    </section>
  );
};
