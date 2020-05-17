import React, {Component} from 'react';
import Menu from "./MenuComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from "./HomeComponent";
import Contact from './ContactComponent';
import DishDetail from "./DishDetailComponent";
import About from "./AboutComponent";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const HomePage = () => {
            return(
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }
        const DishWithId = ({match}) => {
                    console.log(match);
            return(
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                             />
            );
        };

        return (
            <div className="App">
                <HeaderComponent />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={Contact} />} />
                    <Redirect to="/home" />
                </Switch>
                <FooterComponent/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
