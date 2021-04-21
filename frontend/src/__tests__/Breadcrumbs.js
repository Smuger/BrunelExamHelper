import React from 'react';
import { shallow } from 'enzyme';

import BreadcrumbsView from '../components/BreadcrumbsView';

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    let testPathname = 'test-me/test-second/test-third';
    shallow(<BreadcrumbsView pathname={testPathname} />);
  });
});
