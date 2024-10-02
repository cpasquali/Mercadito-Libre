import { NavBar } from "./NavBar/NavBar.jsx";
import { Products } from "./Products/Products.jsx";
import { Switch, Route } from "wouter";
import { Footer } from "./Footer/Footer.jsx";

export const Layout = () => {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        <Switch>
          <Route path="/" component={Products} />
        </Switch>
      </main>
    </div>
  );
};
