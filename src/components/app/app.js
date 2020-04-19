import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage, ErrorPage } from '../pages';
import ShopHeader from '../shop-header';

const App = () => {
    return (
        <main role='main' className='container'>
            <ShopHeader numItems={5} total={210} />
            <Switch>
                <Route path='/' component={HomePage} exact />

                <Route path='/cart' component={CartPage} />

                <Route render={() => <ErrorPage />} />
            </Switch>
        </main>
    );
};

export default App;
