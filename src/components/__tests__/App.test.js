import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import SampleComponent from 'components/SampleComponent';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a sample component', () => {
  expect(wrapped.find(SampleComponent).length).toEqual(1);
});
