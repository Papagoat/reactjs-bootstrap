import React from 'react';
import './Home.css';

import Button from '../../Button/Button';

function Home() {
    return (
        <div>
            <main role="main" className="container">
                <div className="jumbotron">
                    <h1>Home Page</h1>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore consectetur nisi odit maiores vero expedita laboriosam quis ipsam. Nesciunt voluptatibus quam provident nisi illum modi maxime quas illo assumenda.</p>
                    <Button className="btn btn-lg btn-primary" name="View More &raquo;"></Button>
                </div>
            </main>
        </div>
    );
}

export default Home;
