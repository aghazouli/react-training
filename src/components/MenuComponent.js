import React, { Component } from 'react'
import CardImg from "reactstrap/es/CardImg";
import CardTitle from "reactstrap/es/CardTitle";
import Card from "reactstrap/es/Card";
import CardImgOverlay from "reactstrap/es/CardImgOverlay";

class Menu extends Component {

    render() {
        if (this.props.dishes != null) {
            const menu = this.props.dishes.map((dish) => {
                return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <Card onClick={() => this.props.onClick(dish.id)}>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                );
            });

        return (
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );
        } else
            return (
                <div></div>
            )
        }
}

export default Menu;
