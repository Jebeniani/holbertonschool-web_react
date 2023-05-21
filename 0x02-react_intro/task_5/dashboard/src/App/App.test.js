import { shallow } from 'enzyme';
import App from './App';
import React from 'react';

let wrapper = null;
beforeEach(() => {
    wrapper = shallow(<App />);
});


describe('App HTML', () => {
    it("checks if the first div is rendered properly without error", () => {
        expect(wrapper.exists('.App')).toBeTruthy()
    });

    it("renders App-header properly", () => {
        expect(wrapper.find('.App-header').length).toBe(1);
    });

    it("renders App-body properly", () => {
        expect(wrapper.find('.App-body').length).toBe(1);
    });

    it("renders App-footer properly", () => {
        expect(wrapper.find('.App-footer').length).toBe(1);
    });

});