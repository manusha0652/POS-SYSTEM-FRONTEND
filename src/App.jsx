import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import{ Home, Auth, Orders, Tables, Menu } from './pages';
import Header from "./components/shared/Header";

function App() {
  return (
    <div className="bg-[#1f1f1f] min-h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<div>page not found</div> } />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
