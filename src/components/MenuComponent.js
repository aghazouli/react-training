import React from 'react'
import CardImg from "reactstrap/es/CardImg";
import CardTitle from "reactstrap/es/CardTitle";
import Card from "reactstrap/es/Card";
import CardImgOverlay from "reactstrap/es/CardImgOverlay";
import { Link } from 'react-router-dom';
import Breadcrumb from "reactstrap/es/Breadcrumb";
import BreadcrumbItem from "reactstrap/es/BreadcrumbItem";
import {Loading} from "./LoadingComponent";
import { baseUrl } from '../shared/baseUrl';

    function RenderMenuItem({dish}) {
       return (
           <Card>
               <Link to={`/menu/${dish.id}`} >
                   <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                   <CardImgOverlay>
                       <CardTitle>{dish.name}</CardTitle>
                   </CardImgOverlay>
               </Link>
           </Card>
    );
    }

    const Menu = (props) => {

        if (props.dishes != null) {
            const menu = props.dishes.dishes.map((dish) => {
                if (props.dishes.isLoading) {
                    return(
                        <div className="container">
                            <div className="row">
                                <Loading />
                            </div>
                        </div>
                    );
                }
                else if (props.dishes.errMess) {
                    return(
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h4>{props.dishes.errMess}</h4>
                                </div>
                            </div>
                        </div>
                    );
                }
                else
                return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <RenderMenuItem dish={dish} />
                    </div>
                );
            });

            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />
                        </div>
                    </div>
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
