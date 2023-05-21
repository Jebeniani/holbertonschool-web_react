import { shallow } from 'enzyme';
import Notifications from './Notifications'
import React from 'react';

let wrapper = null;
beforeEach(() => {
    wrapper = shallow(<Notifications />);
});

describe('Notification HTML', () => {
    it("checks if the first div is rendered properly without error", () => {
        expect(wrapper.exists('.Notifications')).toBeTruthy()
    });

    it("renders three list elements properly", () => {
        expect(wrapper.find('ul').children().length).toBe(3);
    });

    it("renders correct text", () => {
        expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
    });
});