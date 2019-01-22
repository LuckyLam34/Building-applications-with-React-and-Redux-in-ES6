import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return(
            <div className="jumbotron">
                <h1>Just an PS Administration</h1>
                <p>Lucky is learning ReactJS</p>
                <Link to="about" className="btn btn-primary btn-lg">Lucky is awesome asf!</Link>
            </div>
        );
    }
}

export default HomePage;