import React, {Component} from 'react';
import CardBody from "reactstrap/es/CardBody";
import CardText from "reactstrap/es/CardText";
import Card from "reactstrap/es/Card";
import CardTitle from "reactstrap/es/CardTitle";



    function RenderDish({dish}) {
        if (dish != null) {
            return(
                <Card>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else
            return(
                <div></div>
            );
    }

    const DishDetail = (props) => {
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderDish dish = {props.dish}/>
                    </div>
                </div>
            );
        }
        else
            return(
                <div></div>
            );


}

export default DishDetail;
