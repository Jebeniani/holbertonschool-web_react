import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem.js';
import React from 'react';

let wrapper = null;


describe('App HTML', () => {
    wrapper = shallow(<NotificationItem />);
    it("Checks if the NotificationItem is rendered properly without error", () => {
        expect(wrapper.exists(<NotificationItem />));
    });

    it("Checks if NotificationItem is rendered with a dummy 'type' and 'value'", () => {
        wrapper = shallow(<NotificationItem type='default' value='test' />);
        expect(wrapper.prop('data-priority')).toBe('default');
        expect(wrapper.text()).toBe('test');
    });

    it("Checks if NotificationItem is rendered with a dummy custom html set'", () => {
        wrapper = shallow(<NotificationItem type='default' html='<u>test</u>' />);
        expect(wrapper.prop('data-priority')).toBe('default');
        expect(wrapper.html()).toBe('<li data-priority=\"default\"><u>test</u></li>');
    });
});