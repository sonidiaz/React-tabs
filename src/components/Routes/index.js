import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import Console from '../Console/Console'


const Routes = () => {
    return(
        <Switch>
            <Route path="/:id">
               <Console />
            </Route>
            <Route path="/">
               <Home/>
            </Route>
        </Switch>
    )
}
export {Routes}
