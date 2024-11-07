import './App.scss';
import { Button } from "./components";
import { NativeBaseProvider } from "native-base";
import Index from './routes';

const App: React.FC = function App() {
  return (
    <NativeBaseProvider>
      <Index/>
    </NativeBaseProvider>

  );
}

export default App;
