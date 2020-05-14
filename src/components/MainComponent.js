import React, {Component} from 'react';
import Menu from "./MenuComponent";
import {DISHES} from "../shared/dishes";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./HomeComponent";

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
        };
    }

    render() {
        const HomePage = () => {
            return(
                <Home />
            );
        }
        return (
            <div className="App">
                <HeaderComponent />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <FooterComponent/>
            </div>
        );
    }
}

export default Main;
