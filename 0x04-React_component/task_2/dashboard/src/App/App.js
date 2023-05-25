import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

class App extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === 'h') {
            alert('Logging you out');
            this.props.logOut();
        }
    };

    render() {
        const { isLoggedIn } = this.props;
        const listCourses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 }
        ];

        return (
            <div className="App">
                <Notifications />
                <Header />
                <div className="App-body">
                    {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
                </div>
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func
};

App.defaultProps = {
    isLoggedIn: false,
    logOut: () => { } // Empty function as the default value for logOut prop
};

export default App;
