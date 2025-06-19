import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./Home";
import CursorFollower from "./components/cursorFollower";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
    )
  )
  return (
    <>
      <CursorFollower/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
