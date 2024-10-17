import Home from "./components/home"
import Footer from "./components/footer"
import Menu from "./components/menu"
import About from "./components/about"
import Work from "./components/work"

function App() {
  return (
    < div className='pt-[40px]'>
      <Home />
      <About />
      <Work />
      <Footer />
      <Menu />
    </div>
  )
}

export default App
