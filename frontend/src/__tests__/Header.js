import React from 'react';
import { shallow } from 'enzyme';

import Header from '../components/Header';

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    
    shallow(<Header />);
  });
});
