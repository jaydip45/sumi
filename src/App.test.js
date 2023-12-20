import { createRoot } from 'react-dom';
import App from './App'; // Import your App component

it('renders without crashing', () => {
  const div = document.createElement('div');
  createRoot(div).render(<App />);
});
