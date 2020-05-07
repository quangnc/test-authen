import React, {Component} from 'react';

class Page403 extends Component {
    render() {
        return (
            <div className="app flex-row align-items-center" style={{"justifyContent": "center"}}>
                <div>
                    <h1 className="float-left display-3 mr-4">403</h1>
                    <h4 className="pt-3">Oops! You don't have permission.</h4>
                    <p className="text-muted float-left">Please contact to administrator.</p>
                </div>
            </div>
        );
    }
}

export default Page403;
