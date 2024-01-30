import viteLogo from '/vite.svg'
import './App.css'
import {increaseCounter, selectCount} from "./store/slices/customization.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "./store";

function App() {
    const dispatch: AppDispatch = useDispatch();

    const handleClick = () => {
      dispatch(increaseCounter())
    }

    const count = useSelector(selectCount)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
