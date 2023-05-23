import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'

const App = ({ isLoggedIn }) => {
    return (
        <div className="App">
            <Notifications />
            <Header />
            <div className="App-body">
                {isLoggedIn ? <CourseList /> : <Login />}
            </div>
            <Footer />
        </div>
    );
};

App.propTypes = {
    isLoggedIn: PropTypes.bool
};

App.defaultProps = {
    isLoggedIn: false
};

export default App;