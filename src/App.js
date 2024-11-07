import './App.scss';
import { Button } from "./components";
import { NativeBaseProvider } from "native-base";

function App() {
  return (
    <NativeBaseProvider>
      <Button />
    </NativeBaseProvider>

  );
}

export default App;
