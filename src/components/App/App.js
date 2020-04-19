import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from '../Header/Header';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Info from '../Pages/Info/Info';
import Footer from '../Footer/Footer';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home></Home>
    }, {
        path: "/about/",
        main: () => <About></About>
    }, {
        path: "/info/",
        main: () => <Info></Info>
    }
];

function App() {
    return (
        <Router>
            <div className="App">
                <Header></Header>
                {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}/>))}
                <Footer></Footer>
            </div>
        </Router>
    );
}

export default App;
