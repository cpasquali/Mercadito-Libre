import "./App.css";
import { Layout } from "./components/Layout.jsx";
import { SelectTypeProductProvider } from "./context/SelectTypeProduct.jsx";
import { SearchProductProvider } from "./context/SearchProductContext.jsx";
function App() {
  return (
    <SearchProductProvider>
      <SelectTypeProductProvider>
        <Layout />
      </SelectTypeProductProvider>
    </SearchProductProvider>
  );
}

export default App;
