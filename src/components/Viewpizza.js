import React, { Component } from 'react';
import {InfoConsumer} from "./context";
import View from "./View";


class Viewpizza extends Component {
    render() {
        return (

                    <div className="container">
                        <div className="row mt-5">
                            <InfoConsumer>
                                {value => {
                                    return value.info.map(item => {
                                        return <View key={item.id} item={item} />;
                                    });
                                }}
                            </InfoConsumer>
                        </div>
                    </div>

        );
    }
}

export default Viewpizza;
