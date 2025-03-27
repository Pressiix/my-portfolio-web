import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";

function App() {
  const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  };

  return <AppRouter />;
}

export default App;
