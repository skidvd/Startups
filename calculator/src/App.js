
import { useReducer } from 'react';

import './App.css';

import Header from "./header/Header";
import Calculator from './calculator/Calculator';
import Footer from './footer/Footer';
import { initialState, reducer } from './calculator/state/state'

function App() {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);

  return (
    <div className="App">
        <Header state={state} dispatch={dispatch}></Header>
        <hr/>
        <Calculator state={state} dispatch={dispatch}></Calculator>
        <hr/>
        <Footer state={state} dispatch={dispatch}></Footer>
    </div>
  );
}

export default App;
