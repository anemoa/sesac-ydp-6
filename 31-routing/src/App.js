// import { Header } from "./components/Header";
// import { MainPage } from "./pages/MainPage";
// import { NotFound } from "./pages/NotFound";
// import { ProductDetail } from "./pages/ProductDetail";
// import { ProductPage } from "./pages/ProductPage";
// import {BrowserRouter, Routes, Route} from 'react-router-dom';


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<MainPage />}/>
//           <Route path="/products" element={<ProductPage />}/>
//           <Route path="/products/:productId" element={<ProductDetail />}/>
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route
                        path="/products/:productId"
                        element={<ProductDetail />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;