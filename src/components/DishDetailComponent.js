import React from 'react';
import CardBody from "reactstrap/es/CardBody";
import CardText from "reactstrap/es/CardText";
import Card from "reactstrap/es/Card";
import CardTitle from "reactstrap/es/CardTitle";
import Breadcrumb from "reactstrap/es/Breadcrumb";
import BreadcrumbItem from "reactstrap/es/BreadcrumbItem";
import { Link } from 'react-router-dom';



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
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
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

export default DishDetail;
