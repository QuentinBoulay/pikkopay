import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./pages/Payment";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
