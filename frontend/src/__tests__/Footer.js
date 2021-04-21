import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../components/Footer';

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    shallow(<Footer />);
  });
});
