import { decrement, increment } from "modules/counter";
import { RootState } from "modules/store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {count}
      <button onClick={() => dispatch(increment({ value: 1 }))}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
    </div>
  );
}

export default App;
