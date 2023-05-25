import {useRoutes, BrowserRouter} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MyAccount from './pages/MyAccount'
import CartPage from './pages/CartPage'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function AppRoutes() {

  let routers = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/myaccount', element: <MyAccount /> },
    { path: '/cart', element: <CartPage /> },
    { path: '/products', element: <Products /> },
    { path: '/*', element: <NotFound /> }
  ])
  return routers

}

function App() {

  return (

       <BrowserRouter>
      <div className='principalContainer'>
      <NavBar />
      <div className='containerViews'>
      <AppRoutes />
      </div>
       
      </div>
       </BrowserRouter>
  )
}

export default App
