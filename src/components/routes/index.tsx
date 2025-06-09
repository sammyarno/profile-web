import { Route, Routes } from 'react-router-dom';

import About from 'containers/About';
import Contact from 'containers/Contact';
import Home from 'containers/Home';
import Projects from 'containers/Projects';
import Utilities from 'containers/utilities';
import JSONVisualization from 'containers/utilities/jsonVisualization';
import SplitBill from 'containers/utilities/splitbill/Container';

const Index = () => (
  <Routes>
    <Route path="" element={<Home />} />
    <Route path="/about" element={<About />} />
    {/* <Route path="/contact" element={<Contact />} /> */}
    {/* <Route path="/projects" element={<Projects />} /> */}
    {/* <Route path="/utilities" element={<Utilities />} /> */}

    {/* Utilities */}
    {/* <Route path="/utilities/split-bill" element={<SplitBill />} /> */}
    {/* <Route path="/utilities/json-visualization" element={<JSONVisualization />} /> */}
  </Routes>
);

export default Index;
