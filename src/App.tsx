
import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Layout from "./components/template/Layout";
import HomePage from './components/home/HomePage';
import ArithmeticGame from './components/games/arithmetic/ArithmeticGame';
import Signin from './components/signin/Signin';
import UsernamePasswordSignin from './components/signin/UsernamePasswordSignin';
//https://blog.logrocket.com/how-to-use-react-context-typescript/
//https://www.bezkoder.com/react-typescript-authentication-example/



const NotFound = () => <h1>Page Not Found</h1>;
export default function App() {
    return (
        <div className="App" id="page">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path='games' element={<ArithmeticGame />} />

                        <Route path='signin' element={<UsernamePasswordSignin />} />
                        <Route path='confirmation' element={<Signin />} />

                        {/* <Route path="create" element={<NewCoursePage/>} />
            <Route path="edit/:id" element={<EditCourseg/>} /> */}
                        <Route path='' element={<HomePage />} />
                        <Route element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}


