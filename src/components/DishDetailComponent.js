import React, {Component} from 'react';
import CardTitle from "./MenuComponent";
import CardBody from "reactstrap/es/CardBody";
import CardText from "reactstrap/es/CardText";
import Card from "reactstrap/es/Card";
import BreadcrumbItem from "reactstrap/es/BreadcrumbItem";
import Breadcrumb from "reactstrap/es/Breadcrumb";
import CardImg from "reactstrap/es/CardImg";

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

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

                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <p>{this.props.dish.description}</p>
                        </div>
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
