import "./Products.css";
import { categories } from "./types";
import { ProductScrollbar } from "./ProductScrollbar/ProductScrollbar.jsx";
import { SelectTypeProductContext } from "../../context/SelectTypeProduct";
import { SearchProductContext } from "../../context/SearchProductContext";
import { useContext } from "react";

export const Products = () => {
  const { type } = useContext(SelectTypeProductContext);
  const { searchValue } = useContext(SearchProductContext);

  const classMain = type || searchValue ? "product-selected" : "";

  const render = type ? (
    <ProductScrollbar
      typeId={type}
      name={type}
      key={type}
      classMain={classMain}
    />
  ) : searchValue ? (
    <ProductScrollbar
      key={type}
      classMain={classMain}
      searchValue={searchValue}
    />
  ) : (
    categories.map((type) => (
      <ProductScrollbar typeId={type.id} name={type.name} key={type.id} />
    ))
  );

  return <section className="main-product-content">{render}</section>;
};
