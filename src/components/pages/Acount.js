import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Account extends Component {
    render() {
        return (
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">

                    </div>

                    <div className="row">

                        <div className="col-md-5">
                            <h4>
                                <strong>Account Settings</strong>
                            </h4>
                            <form>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Phone number"
                                    />
                                </div>


                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="password"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Address"
                                    />
                                </div>


                                <button
                                    className="btn btn-outline-primary  my-2 my-sm-0"

                                    type="submit"
                                >
                                    Save
                                </button>
                                <button
                                    className="btn btn-outline-primary  my-2 my-sm-0"

                                    type="submit"
                                >
                                    Delete Account
                                </button>





                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Account ;
