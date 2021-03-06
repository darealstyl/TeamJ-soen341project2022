import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BrowsingScreen from './screens/BrowsingScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import UserEditScreen from './screens/UserEditScreen'
import SellerProfileScreen from './screens/SellerProfileScreen'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import ProfileScreen from './screens/ProfileScreen';
import AdminProductListScreen from './screens/AdminProductListScreen'
import UserListScreen from './screens/UserListScreen'

function App() {
  return (
    <Router>
      <Header />

      <main className="py-3">
          <Container>
            <Routes>
                <Route path='/' element={<BrowsingScreen />} exact />
                <Route path="/browse" element={<BrowsingScreen />} exact />
                <Route path='/seller/profile' element={<SellerProfileScreen />} exact />
                <Route path='/sign-in' element={<SignInScreen />} exact />
                <Route path='/sign-up' element={<SignUpScreen />} exact />
                <Route path='/profile' element={<ProfileScreen />} />
                <Route path='/product/:id' element={<ProductScreen/>} /> 
                <Route path='/seller/product/:id/edit' element={<ProductEditScreen/>} /> 
                <Route path='/seller/product-list' element={<ProductListScreen/>} /> 
                <Route path='/cart/:id' element={<CartScreen/>} /> 
                <Route path="cart" element={<CartScreen />} />
                <Route path=":id" element={<CartScreen />} />
                <Route path='/shipping' element={<ShippingScreen />} />
                <Route path='/payment' element={<PaymentScreen/>} /> 
                <Route path='/placeorder' element={<PlaceOrderScreen/>} /> 
                <Route path='/order/:id' element={<OrderScreen/>} /> 
                <Route path='/admin/product-list' element={<AdminProductListScreen/>} />
                <Route path='/admin/user-list' element={<UserListScreen/>} /> 
                <Route path='/admin/user/:id/edit' element={<UserEditScreen/>} /> 
            </Routes>
          </Container>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;

