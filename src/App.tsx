import './App.scss';
import Index from './routes';
import AppProvider from './Context';


const App: React.FC = function App() {
  return (
      <AppProvider>
         <Index/>
      </AppProvider>
     
  );
}

export default App;
