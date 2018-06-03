import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { MainNav } from './components/global/mainNav';

export const Home = () => <div>Home!</div>;
export const Contact = () => <div>Contact</div>;

export const Router = () => (
    <BrowserRouter >
        <div>
            <MainNav />
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
        </div>
    </BrowserRouter>
);

render(<Router />, document.getElementById('content'));
