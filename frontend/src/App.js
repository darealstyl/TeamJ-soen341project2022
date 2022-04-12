import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BrowsingScreen from './screens/BrowsingScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import UserProfileScreen from './screens/UserProfileScreen'
import SellerProfileScreen from './screens/SellerProfileScreen'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import AdminProductListScreen from './screens/AdminProductListScreen'

function App() {
  return (
    <Router>
      <Header />

      <main className="py-3">
          <Container>
            <Routes>
                <Route path='/' element={<BrowsingScreen />} exact />
                <Route path="/browse" element={<BrowsingScreen />} exact />
                <Route path='/user-profile' element={<UserProfileScreen />} exact />
                <Route path='/seller/profile' element={<SellerProfileScreen />} exact />
                <Route path='/sign-in' element={<SignInScreen />} exact />
                <Route path='/sign-up' element={<SignUpScreen />} exact />
                <Route path='/product/:id' element={<ProductScreen/>} /> 
                <Route path='/seller/product/:id/edit' element={<ProductEditScreen/>} /> 
                <Route path='/seller/product-list' element={<ProductListScreen/>} /> 
                <Route path='/cart/:id' element={<CartScreen/>} /> 
                <Route path="cart" element={<CartScreen />} />
                <Route path=":id" element={<CartScreen />} />
                <Route path='/shipping' element={<ShippingScreen />} />
                <Route path='/payment' element={<PaymentScreen/>} /> 
                <Route path='/placeorder' element={<PlaceOrderScreen/>} /> 
                <Route path='/admin/product-list' element={<AdminProductListScreen/>} /> 
            </Routes>
          </Container>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
