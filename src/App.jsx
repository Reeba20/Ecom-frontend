
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
// import MyList from './pages/MyList'
import Cart from './pages/Cart'
import ExploreAll from './pages/ExploreAll'
import NewIn from './pages/NewIn'
import TopDeals from './pages/TopDeals'
import Header from './components/Header'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/explore" element={<ExploreAll/>} />
            <Route path="/new" element={<NewIn/>} />
            <Route path="/deals" element={<TopDeals/>} />
            <Route path="/cart" element={<Cart/>} />
            {/* <Route path="/list" element={<MyList/>} /> */}
            <Route path="/*" element={<PageNotFound/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </CartProvider>
  )
}

export default App