import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import UserProfileScreen from './screens/UserProfileScreen'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'

function App() {
  return (
    <Router>
      <Header />

      <main className="py-3">
          <Container>
            <Routes>
                <Route path='/' element={<HomeScreen />} exact />
                <Route path='user-profile' element={<UserProfileScreen />} exact />
                <Route path='sign-in' element={<SignIn />}/>
                <Route path='sign-up' element={<SignUp />}/>
            </Routes>
          </Container>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
