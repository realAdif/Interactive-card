import { useAppContext } from '../context/appContext';

export default function Navbar() {
  const { theme, setTheme } = useAppContext() as {
    theme: string;
    setTheme: (theme: string) => void;
  };

  return (
    <nav className="flex justify-between items-center py-4">
      <h1>React + TS</h1>

      <button onClick={() => setTheme(theme === 'winter' ? 'dark' : 'winter')}>
        {theme === 'winter' ? '🌞' : '🌚'}
      </button>
    </nav>
  );
}
