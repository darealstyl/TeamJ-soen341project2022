import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BrowsingScreen from './screens/BrowsingScreen';
import UserProfileScreen from './screens/UserProfileScreen'
import SellerProfileScreen from './screens/SellerProfileScreen'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import ProductScreen from './screens/ProductScreen'
import ProductListScreen from './screens/ProductListScreen'

function App() {
  return (
    <Router>
      <Header /> 

      <main className="py-3">
          <Container>
            <Routes>
                <Route path='/' element={<BrowsingScreen />} />
                <Route path="/browse" element={<BrowsingScreen />} exact />
                <Route path='/user-profile' element={<UserProfileScreen />} exact />
                <Route path='/seller/profile' element={<SellerProfileScreen />} exact />
                <Route path='/sign-in' element={<SignInScreen />} exact />
                <Route path='/sign-up' element={<SignUpScreen />} exact />
                <Route path='/product/:id' element={<ProductScreen/>} /> 
                <Route path='/seller/product/:id/edit' element={<ProductEditScreen/>} /> 
                <Route path='/seller/product-list' element={<ProductListScreen/>} /> 
            </Routes>
          </Container>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
