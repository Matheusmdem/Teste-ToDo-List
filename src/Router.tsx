import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./defaultLayout";
import { Home } from "./pages/Home";
import { Todo } from "./pages/Todo";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Route>
    </Routes>
  )
}