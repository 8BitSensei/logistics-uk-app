import Layout from './layouts/Layout.js';
import Drivers from './components/Drivers.js';
import Vehicles from './components/Vehicles.js';
import About from './components/About.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<Drivers />}/>
            <Route index element={<Drivers />} />
            <Route path="drivers" element={<Drivers />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Drivers />} />
          </Routes>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
