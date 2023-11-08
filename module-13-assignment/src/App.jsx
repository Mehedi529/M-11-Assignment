import About from "./Pages/About"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Project from "./Pages/Project"
import Service from "./Pages/Service"


function App() {

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <About/>
      <Home/>
      <Blog/>
      <Contact/>
      <Service/>
      <Project/>
    </>
  )
}

export default App
