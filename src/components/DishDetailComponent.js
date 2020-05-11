import React, {Component} from 'react';
import CardBody from "reactstrap/es/CardBody";
import CardText from "reactstrap/es/CardText";
import Card from "reactstrap/es/Card";
import CardTitle from "reactstrap/es/CardTitle";

class DishDetail extends Component {

    renderDish(dish) {
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

    render() {
        if (this.props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                    </div>
                </div>
            );
        }
        else if (this.props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (this.props.dish != null) {
            console.log(this.props.dish);
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                    </div>
                </div>
            );
        }
        else
            return(
                <div></div>
            );

    }
}

export default DishDetail;
