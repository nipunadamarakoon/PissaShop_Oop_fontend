import React, { Component } from 'react';
import {Link} from "react-router-dom";

class SignUp extends Component {
    render() {
        return (
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">

                    </div>

                    <div className="row">
                        <div className="col-md-7">
                            <iframe
                                src="https://www.youtube.com/watch?v=sv3TXMSv6Lw"
                                style={{
                                    border: '0',
                                    width: '100%',
                                    height: '315px',
                                    frameborder: '0'
                                }}
                                allowFullscreen
                            />
                        </div>
                        <div className="col-md-5">
                            <h4>
                                <strong>Sign In</strong>
                            </h4>
                            <form>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Psssword"
                                    />
                                </div>


                                <button
                                    className="btn btn-outline-primary  my-2 my-sm-0"

                                    type="submit"
                                >
                                    Sign In
                                </button>

                                <div>
                                    <p>If you don't have an account!</p>
                                </div>

                                <Link

                                    to="/register"
                                    className="btn btn-outline-primary text-uppercase"
                                >
                                    Register
                                </Link>

                                {/*<button*/}
                                {/*    className="btn btn-outline-primary  my-2 my-sm-0"*/}
                                {/*    type="submit"*/}
                                {/*>*/}
                                {/*    Register*/}
                                {/*</button>*/}

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SignUp ;
