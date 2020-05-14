import React, { Component } from 'react'
import CardImg from "reactstrap/es/CardImg";
import CardTitle from "reactstrap/es/CardTitle";
import Card from "reactstrap/es/Card";
import CardImgOverlay from "reactstrap/es/CardImgOverlay";

    function RenderMenuItem({dish, onClick}) {
       return (
        <Card >
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
    }

    const Menu = (props) => {

        if (props.dishes != null) {
            const menu = props.dishes.map((dish) => {
                return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <RenderMenuItem dish={dish} />
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


export default Menu;
