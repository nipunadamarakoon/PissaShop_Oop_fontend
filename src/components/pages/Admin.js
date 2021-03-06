import React, { Component } from 'react';
//import styled from 'styled-components';
import Reviews from '../Reviews';
import AddPizza from "../AddPizza";
import Viewpizza from "../Viewpizza";
import Veiwusers from "../Veiwusers";


class Admin extends Component {
    render() {
        return (
                         <div className="container">
                                <ul className="nav nav-tabs">
                                    {/* Add pizza Link */}
                                    <li className="nav-item">
                                        <a
                                            href="#aboutPlace"
                                            className="nav-link active"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            Add Pizza
                                        </a>
                                    </li>



                                    <li className="nav-item">
                                        <a
                                            href="#aboutPlace"
                                            className="nav-link"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            View Order
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a
                                            href="#aboutPlace"
                                            className="nav-link"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            View sales
                                        </a>
                                    </li>

                                    {/* Reviews Link */}
                                    <li className="nav-item">
                                        <a
                                            href="#reviews"
                                            className="nav-link"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            View Feedback
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a
                                            href="#reviews"
                                            className="nav-link"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            View Users
                                        </a>
                                    </li>

                                </ul>
                                {/* Tab Pane */}
                                <div className="tab-content mb-5">
                                    {/* Add pizza Tab */}
                                    <div
                                        id="aboutPlace"
                                        className="tab-pane in active text-center mt-5"
                                        role="tabpanel"
                                    >
                                    <AddPizza/>
                                    <Viewpizza/>

                                    </div>

                                    {/* View pizza Tab */}
                                    {/*<div className="tab-pane" id="reviews" role="tabpanel">*/}
                                    {/*    /!*<Viewpizza/>*!/*/}
                                    {/*</div>*/}


                                    {/* View order Tab */}



                                    <div
                                        id="View order"
                                        className="tab-pane in active text-center mt-5"
                                        role="tabpanel"
                                    >


                                    </div>

                                    {/* View sales Tab */}

                                    <div
                                        id="View sales"
                                        className="tab-pane in active text-center mt-5"
                                        role="tabpanel"
                                    >
                                    </div>

                                    {/* Reviews */}
                                    <div className="tab-pane" id="reviews" role="tabpanel">
                                        <Reviews />
                                    </div>

                                    <div
                                        id="View users"
                                        className="tab-pane in active text-center mt-5"
                                        role="tabpanel"
                                    >
                                        <Veiwusers/>
                                    </div>


                                </div>
                            </div>





        );
    }
}

export default Admin;

// const HeaderDetails = styled.header`
// background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
//   height: 100vh;
//   text-transform: uppercase;
//   color: var(--mainWhite);
//   text-align: center;
//
//   h1 {
//     padding-top: 10%;
//     color: var(--mainDark);
//   }
//
//   h4 {
//     color: var(--mainDark);
//   }
//
//   p {
//     padding-left: 10%;
//     padding-right: 10%;
//     margin-bottom: 10%;
//     color: var(--mainDark);
//   }
//
//   i {
//     font-size: 1.875rem;
//     color: var(--mainDark);
//   }
//
//   i:hover {
//     color: var(--mainBlue);
//     cursor: pointer;
//   }
//
//   .nav-item {
//     height: 18.75rem;
//   }
//
//   @media (max-width: 760px) {
//     h1,
//     h4 {
//       color: var(--mainWhite);
//     }
//   }
//
// `;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           