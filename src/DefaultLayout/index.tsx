import { Outlet } from "react-router-dom";
import { NavBar } from "../components";
import { LayoutContainer } from "./styles";


export function DefaultLayout() {
  return (
    <LayoutContainer>
      <NavBar />
      <Outlet />
    </LayoutContainer>
  )
}