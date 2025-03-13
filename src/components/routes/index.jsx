import { Routes, Route } from 'react-router-dom';
import Home from 'containers/Home';
import Contact from 'containers/Contact';
import About from 'containers/About';
import Projects from 'containers/Projects';
import Utilities from 'containers/utilities';

import SplitBill from 'containers/utilities/splitbill/Container';
import JSONVisualization from 'containers/utilities/jsonVisualization';

const Index = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="/projects" element={<Projects />} />
    <Route exact path="/utilities" element={<Utilities />} />

    {/* Utilities */}
    <Route exact path="/utilities/split-bill" element={<SplitBill />} />
    <Route exact path="/utilities/json-visualization" element={<JSONVisualization />} />
  </Routes>
);

export default Index;
