import { AppContextProvider } from './context/appContext';
import Counter from './components/Counter';
import Navbar from './layout/Navbar';

function App() {
  return (
    <main className="px-5 container mx-auto">
      <AppContextProvider>
        <Navbar />
        <div className="text-center">
          <h1 className=" underline">React App</h1>
          <p>React app with TypeScript</p>
        </div>
        <Counter />
      </AppContextProvider>
    </main>
  );
}

export default App;
