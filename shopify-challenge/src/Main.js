import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home'
import MyLikeImages from './components/MyLikeImages'


const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/mylikeimages' component={MyLikeImages}></Route>
    </Switch>
);


export default Main;