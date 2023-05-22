import { shallow } from 'enzyme';
import App from './App';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import React from 'react';

let wrapper = null;
beforeEach(() => {
    wrapper = shallow(<App />);
});


describe('App HTML', () => {
    it("Checks if App is rendered properly without error", () => {
        expect(wrapper.exists('.App')).toBeTruthy()
    });

    it("renders App-Notifications properly", () => {
        expect(wrapper.exists(<Notifications />));
    });

    it("renders App-header properly", () => {
        expect(wrapper.exists(<Header />));
    });

    it("renders App-footer properly", () => {
        expect(wrapper.exists(<Footer />));
    });

    it("renders App-Login properly", () => {
        expect(wrapper.exists(<Login />));
    });
});