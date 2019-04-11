import React from 'react';
import {shallow} from 'enzyme';
import FunctionalKey from '../../../src/components/keyboard/FunctionalKey';


test('test render FunctionalKey', () => {
    const mockButtonClick = jest.fn();
    const props = {
        button: {name: 'Accept', color: 'green'},
        onButtonClick: mockButtonClick,
    };
    const wrapper = shallow(
        <FunctionalKey {...props}/>
    );
    expect(wrapper).toMatchSnapshot();
    const key = wrapper.find('.keyboard-key');
    expect(key.hasClass('green')).toBeTruthy();
    expect(key.text()).toBe('Accept');
    key.simulate('click');
    expect(mockButtonClick).toHaveBeenCalled();
});
