import React from 'react';
import { shallow } from 'enzyme';

import CardColumnsView from '../components/CardColumnsView';

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    let mockModules = [
      {
        _id: '606e4076d51106623096f8a4',
        name: 'Artificial Intelligence (CS3002)',
        description:
          'Unsupervised Learning, Supervised Learning, Neural Networks, Images and Vision, Expert Systems, Deep Learning Image Processing, Deep Learning Natural Language Processing, Bayesian Networks, Hidden Markov Models',
        examlenght: '3h',
        date: '2021-05-12T00:00:00.000Z',
        time: '09:30',
        notes: [
          {
            _id: '607eece2da54020015d31f10',
            topic: 'Past Papers',
            url:
              'https://docs.google.com/document/d/1_YCkJl4Z3aTYT2aHnN7uOyohpKLNcbW-6NMhN4WYnw8/edit?usp=sharing',
            embedded:
              'https://docs.google.com/document/d/e/2PACX-1vQ-P1FOeBXWwQcG5ayFCoXo_vwjUm5m-rR84wCEVt51e28QuZhA_vyPC50QFcJfxRZ9g9OUWgxPUnJX/pub?embedded=true',
            done: false,
            createdAt: '2021-04-20T15:01:54.192Z',
            updatedAt: '2021-04-20T15:01:54.192Z',
          },
        ],
        createdAt: '2021-04-07T23:29:58.410Z',
        updatedAt: '2021-04-20T15:01:54.193Z',
        __v: 14,
      },
      {
        _id: '606e4332e896793e104766eb',
        name: 'Network Computing (CS3004)',
        description:
          'Design and implementation, SOA, Grid Computing, Cloud, IoT, Evil Network Computing',
        examlenght: '3h',
        date: '2021-05-26T00:00:00.000Z',
        time: '09:30',
        notes: [
          {
            _id: '607a18fc034443513c061755',
            topic: 'Past Papers',
            url:
              'https://docs.google.com/document/d/1c8xo_YjG1teNQe2D061gTLHVl7MP35gajELzt6QAYGo/edit?usp=sharing',
            embedded:
              'https://docs.google.com/document/d/e/2PACX-1vRUMyt7NSIyvn_BgvnlCJccZnmCX6p4aIpzvXZRgmkxsL8uhQ31CtvQKnHbAHgwftgDla1dZkys0ZtC/pub?embedded=true',
            done: false,
            createdAt: '2021-04-16T23:08:44.788Z',
            updatedAt: '2021-04-17T00:13:01.752Z',
          },
        ],
        createdAt: '2021-04-07T23:29:58.410Z',
        updatedAt: '2021-04-20T15:01:54.193Z',
        __v: 14,
      },
    ];
    shallow(<CardColumnsView modules={mockModules} />);
  });
});
