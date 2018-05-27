import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export const MainNav = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
);

export const Home = () => <div>Home!</div>;
export const Contact = () => <div>Contact</div>;

export const Router = () => (
    <BrowserRouter >
        <Fragment>
            <MainNav />
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
        </Fragment>
    </BrowserRouter>
);

render(<Router />, document.getElementById('content'));
