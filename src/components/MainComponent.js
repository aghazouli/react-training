import React, {Component} from 'react';
import Menu from "./MenuComponent";
import {DISHES} from "../shared/dishes";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from "./HomeComponent";
import Contact from './ContactComponent';
import {COMMENTS} from "../shared/comments";
import {Promotions} from "../shared/promotions";
import {Leaders} from "../shared/leaders";
import DishDetail from "./DishDetailComponent";
import About from "./AboutComponent";

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: Promotions,
            leaders: Leaders
        };
    }

    render() {
        const HomePage = () => {
            return(
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }
        const DishWithId = ({match}) => {
                    console.log(match);
            return(
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                             />
            );
        };

        return (
            <div className="App">
                <HeaderComponent />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route exact path='/aboutus' component={() => <About leaders={this.state.leaders} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={Contact} />} />
                    <Redirect to="/home" />
                </Switch>
                <FooterComponent/>
            </div>
        );
    }
}

export default Main;
