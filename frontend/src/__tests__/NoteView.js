import React from 'react';
import { shallow } from 'enzyme';

import NoteView from '../components/NoteView';

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    let mockedNote = {
      _id: '607eece2da54020015d31f10',
      topic: 'Test',
      url:
        'https://docs.google.com/document/d/1_YCkJl4Z3aTYT2aHnN7uOyohpKLNcbW-6NMhN4WYnw8/edit?usp=sharing',
      embedded:
        'https://docs.google.com/document/d/e/2PACX-1vQ-P1FOeBXWwQcG5ayFCoXo_vwjUm5m-rR84wCEVt51e28QuZhA_vyPC50QFcJfxRZ9g9OUWgxPUnJX/pub?embedded=true',
      done: false,
      createdAt: '2021-04-20T15:01:54.192Z',
      updatedAt: '2021-04-20T15:01:54.192Z',
    };

    let mockedModuleId = '606e4076d51106623096f8a4';
    shallow(<NoteView note={mockedNote} moduleId={mockedModuleId} />);
  });
});
