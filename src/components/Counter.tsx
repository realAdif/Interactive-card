import { useAppContext } from '../context/appContext';

export default function Counter() {
  const { counter, setCounter } = useAppContext() as {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
  };

  return (
    <div className="w-fit mx-auto my-4">
      <h1>Counter: {counter}</h1>

      <button
        className="btn btn-outline mx-1"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <button
        className="btn btn-outline mx-1"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
    </div>
  );
}
