import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('displays the menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    it('does not display the div.Notifications when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('div.Notifications').exists()).toBe(false);
    });

    it('displays the menu item when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    it('displays the div.Notifications when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div.Notifications').exists()).toBe(true);
    });
});
