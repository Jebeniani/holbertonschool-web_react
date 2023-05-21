import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'

function App() {
    return (
        <React.Fragment>
            <root-notifications>
                <Notifications />
            </root-notifications>
            <div className="App">
                <Header />
                <div className='App-body'>
                    <p>Login to access the full dashboard</p>
                    <Login />
                </div>
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default App;