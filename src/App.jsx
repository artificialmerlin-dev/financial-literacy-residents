import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Accounts from './pages/Accounts'
import IndexFunds from './pages/IndexFunds'
import Fees from './pages/Fees'
import Taxes from './pages/Taxes'
import Loans from './pages/Loans'
import Insurance from './pages/Insurance'
import CreditCards from './pages/CreditCards'
import Calculator from './pages/Calculator'
import Resources from './pages/Resources'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/index-funds" element={<IndexFunds />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/taxes" element={<Taxes />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
