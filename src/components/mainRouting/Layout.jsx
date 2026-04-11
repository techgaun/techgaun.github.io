import { Outlet } from "react-router-dom";
import Navbar from "../subComponent/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}