import React, { Component } from 'react';


class AddPizza extends Component {
    render() {
        return (
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
                        allowFullScreen
                    />
                </div>
                <div className="col-md-5">
                    <h4>
                        <strong>Add Pizza</strong>
                    </h4>
                    <form>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Pizza ID"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Pizza Name"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Pizza Description"
                            />
                        </div>
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Pizza Price"
                        />
                    </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Pizza Type"
                            />
                        </div>

                        <button
                            className="btn btn-outline-primary  my-2 my-sm-0"
                            type="submit"
                        >
                            Submit
                        </button>
                        <button
                            className="btn btn-outline-primary  my-2 my-sm-0"
                            type="submit"
                        >
                            Cancel
                        </button>


                    </form>
                </div>
            </div>
        );
    }
}

export default AddPizza;