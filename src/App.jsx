import { Route, Routes } from 'react-router';
import BasicLayout from './layout';
import HomePage from './pages/Home';
import ResumePage from './pages/Resume';
import './reset.css';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<HomePage />} />
        <Route path=":username" element={<ResumePage />} />
      </Route>
    </Routes>
  );
}

export default App;
