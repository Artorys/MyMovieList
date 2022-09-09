import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { Provider } from './context/context';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Reset } from './style/global/globalstyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <ToastContainer/>
      <Provider>
          <App />
      </Provider>
      <Reset/>
    </BrowserRouter>
);