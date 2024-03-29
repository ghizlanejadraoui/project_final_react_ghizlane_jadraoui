import { Home } from './pages/Home/home.jsx';
import { AboutUs } from './pages/AboutUs/aboutUs.jsx';
import { ContactUs } from './pages/ContactUs/contactUs.jsx';
import { Route, Routes } from 'react-router-dom';
import { Error } from './pages/Errors/error.jsx';
import { Header } from './layouts/Header.jsx';
import { Footer } from './layouts/Footer.jsx';
import { Blog } from './pages/Blog/Blog.jsx';
import { Shop } from './pages/Shop/Shop.jsx';
import { MyProvider } from './utils/ContextProvider.jsx';
import { Show } from './pages/ShowProducts/Show.jsx';
import { CartProvider } from 'react-use-cart';
import { Authentification } from './pages/Authentification/Authentification.jsx';



function App() {
    return (
        <>  
        <MyProvider>
            <CartProvider>
        <Header/>
            <Routes>
                <Route path='*' element={<Error/>} />
                <Route path='/' element={<Home/>} />
                <Route path='/blog' element={<Blog/>} />
                <Route path='/shop' element={<Shop/>} />
                <Route path='/about' element={<AboutUs/>} />
                <Route path='/shop/:id' element={<Show/>} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/auth' element={<Authentification/>} />
            </Routes>
            <Footer/>
            </CartProvider>
        </MyProvider>
        </>
    );
}

export default App;
