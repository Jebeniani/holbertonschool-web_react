import { shallow } from 'enzyme';
import App from './App';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import React from 'react';

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it("renders App component properly without error", () => {
        expect(wrapper.exists('.App')).toBeTruthy();
    });

    it("renders Notifications component properly", () => {
        expect(wrapper.exists(<Notifications />)).toBeTruthy();
    });

    it("renders Header component properly", () => {
        expect(wrapper.exists(<Header />)).toBeTruthy();
    });

    it("renders Footer component properly", () => {
        expect(wrapper.exists(<Footer />)).toBeTruthy();
    });

    it("renders Login component when isLoggedIn is false", () => {
        expect(wrapper.exists(<Login />)).toBeTruthy();
    });

    it("does not display CourseList when isLoggedIn is false", () => {
        expect(wrapper.find('#CourseList')).toHaveLength(0);
    });
});

describe('App (isLoggedIn = true)', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App isLoggedIn={true} />);
    });

    it("does not display Login component when isLoggedIn is true", () => {
        expect(wrapper.find('.login-form')).toHaveLength(0);
    });

    it("displays CourseList component when isLoggedIn is true", () => {
        expect(wrapper.find('#CourseList')).toHaveLength(1);
    });
});
