import React from 'react';
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Home from "./routs/Home";
import Category from "./routs/Category";
import ProductsRouter from "./routs/ProductsRouter";
import './routs/ReactRouterMenu.css'

function ReactRouterMenu(props) {
    return (
        <Router>
            <div className='ReactRouterMenu'>
                <h1>ReactRouterMenu</h1>
                <nav className='ReactRouterMenu__nav'>
                    <ul className='ReactRouterMenu__ul'>
                        <li className='ReactRouterMenu__li'><Link to="/">
                            Home
                        </Link></li>
                        <li className='ReactRouterMenu__li'><Link to="/category">
                            Category
                        </Link></li>
                        <li className='ReactRouterMenu__li'><Link to="/products">
                            Products
                        </Link></li>
                    </ul>
                </nav>

                <Switch>

                    <Route exact path="/"><Home/></Route>
                    <Route path="/category"><Category/></Route>
                    <Route path="/products"><ProductsRouter/></Route>

                </Switch>


            </div>
        </Router>
    );
}

export default ReactRouterMenu;