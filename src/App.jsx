import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Terms from './Terms'; // import the component
import Legal from './Legal'; // import the component


function Home() {
  return (
    <>
      <img src="/logo.png" alt="LXQ Logo" className="logo" />
      <h1>Neural Networks with 1.3–7ns Latency</h1>

      <div className="benchmarks">
        <p><strong>CERN Fast Inference Benchmark:</strong><br />JSC 72% in 1.3 ns</p>
        <p><strong>Standard AI Benchmarks:</strong><br />MNIST 99.3% in 6.1 ns<br />CIFAR-10 69% in 6.9 ns</p>
      </div>

      <a className="email-button" href="mailto:contact@lxq.ai">contact@lxq.ai</a>
    </>
  );
}

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>

      <footer>
        <Link to="/terms">Terms of Use</Link> &nbsp;
        <Link to="/legal">Legal</Link>
      </footer>
    </div>
  );
}

export default App;