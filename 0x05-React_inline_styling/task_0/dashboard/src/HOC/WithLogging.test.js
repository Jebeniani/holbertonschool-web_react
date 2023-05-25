import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging', () => {
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, 'log');
        consoleLogSpy.mockImplementation(() => { });
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });

    it('should call console.log on mount and unmount with Component when wrapped element is pure HTML', () => {
        const WrappedComponent = () => <div>Wrapped component</div>;
        const ComponentWithLogging = WithLogging(WrappedComponent);

        const wrapper = mount(<ComponentWithLogging />);

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(consoleLogSpy).toHaveBeenCalledWith('Component is mounted.');

        wrapper.unmount();

        expect(consoleLogSpy).toHaveBeenCalledTimes(2);
        expect(consoleLogSpy).toHaveBeenCalledWith('Component is going to unmount.');
    });

    it('should call console.log on mount and unmount with the name of the component when wrapped element is the Login component', () => {
        const Login = () => <div>Login component</div>;
        Login.displayName = 'LoginComponent';
        const ComponentWithLogging = WithLogging(Login);

        const wrapper = mount(<ComponentWithLogging />);

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(consoleLogSpy).toHaveBeenCalledWith('Component LoginComponent is mounted.');

        wrapper.unmount();

        expect(consoleLogSpy).toHaveBeenCalledTimes(2);
        expect(consoleLogSpy).toHaveBeenCalledWith('Component LoginComponent is going to unmount.');
    });
});
