import React, {Component} from 'react';

class Page404 extends Component {
    render() {
        return (
            <div
                className="app flex-row align-items-center"
                style={{"justifyContent": "center"}}>
                <div>
                    <h1 className="float-left display-3 mr-4">404</h1>
                    <h4 className="pt-3">Oops! You're lost.</h4>
                    <p className="text-muted float-left">The page you are looking for was not found.</p>
                </div>
            </div>
        );
    }
}

export default Page404;
