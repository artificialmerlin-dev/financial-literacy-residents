import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'

const Accounts = lazy(() => import('./pages/Accounts'))
const IndexFunds = lazy(() => import('./pages/IndexFunds'))
const Fees = lazy(() => import('./pages/Fees'))
const Taxes = lazy(() => import('./pages/Taxes'))
const Loans = lazy(() => import('./pages/Loans'))
const Insurance = lazy(() => import('./pages/Insurance'))
const CreditCards = lazy(() => import('./pages/CreditCards'))
const Calculator = lazy(() => import('./pages/Calculator'))
const Resources = lazy(() => import('./pages/Resources'))
const NotFound = lazy(() => import('./pages/NotFound'))

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
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/investing" element={<IndexFunds />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/taxes" element={<Taxes />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/credit-cards" element={<CreditCards />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
