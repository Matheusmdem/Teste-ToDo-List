import { BrowserRouter } from "react-router-dom";
import { TasksProvider } from "./context/TaskContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/GlobalStyle";

export function App() {

  return (
    <>
      <BrowserRouter>
        <TasksProvider>
          <Router />
        </TasksProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}
