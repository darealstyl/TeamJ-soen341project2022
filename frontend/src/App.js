import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BrowsingScreen from './screens/BrowsingScreen';
import UserProfileScreen from './screens/UserProfileScreen'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
import ProductScreen from './screens/ProductScreen'

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
                <Route path='/sign-in' element={<SignInScreen />} exact />
                <Route path='/sign-up' element={<SignUpScreen />} exact />
                <Route path='/product/:id' element={<ProductScreen/>} /> 
            </Routes>
          </Container>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
