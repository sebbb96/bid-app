
import './App.css'
import { Router, Navbar } from './providers'
const links = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Register',
    path: '/register'
  },
  {
    name: 'Login',
    path: '/login'
  },
  {
    name: 'Products',
    path: '/products'
  }
]
function App() {

  return (
    <>
      <Navbar links={links} />
      <Router />
    </>
  )
}

export default App
