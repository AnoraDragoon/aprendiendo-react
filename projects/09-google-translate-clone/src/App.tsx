import { useReducer } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import type { Action, State } from "./types";

// 1. Create initial state
const initialState: State = {
  fromLanguage: "auto",
  toLanguage: "es",
  fromText: "",
  result: "",
  loading: false,
};

// 2. Create reducer
function reducer(state: State, action: Action): State {
  const { type } = action;

  if (type === "INTERCHANGE_LANGUAGES") {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }

  if (type === "SET_FROM_LANGUAGE") {
    return {
      ...state,
      fromLanguage: action.payload,
    };
  }

  if (type === "SET_TO_LANGUAGE") {
    return {
      ...state,
      toLanguage: action.payload,
    };
  }

  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
    };
  }

  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: action.payload,
    };
  }

  return state;
}

function App() {
  // 3. Usar el hook useReducer
  const [{ fromLanguage }, dispatch] = useReducer(reducer, initialState);

  console.log({ fromLanguage });

  return (
    <div className="App">
      <h1>Google Translate</h1>
      <Button
        onClick={() => dispatch({ type: "SET_FROM_LANGUAGE", payload: "es" })}
      >
        Cambiar a Español
      </Button>
      <p>{fromLanguage}</p>
    </div>
  );
}

export default App;
