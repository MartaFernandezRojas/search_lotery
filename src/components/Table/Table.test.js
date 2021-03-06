import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Table from './Table';

describe('Table', () => {
  let props;
  let shallowTable;
  let renderedTable;
  let mountedTable;

  const shallowTestComponent = () => {
    if (!shallowTable) {
      shallowTable = shallow(<Table {...props} />);
    }
    return shallowTable;
  };

  const renderTestComponent = () => {
    if (!renderedTable) {
      renderedTable = render(<Table {...props} />);
    }
    return renderedTable;
  };

  const mountTestComponent = () => {
    if (!mountedTable) {
      mountedTable = mount(<Table {...props} />);
    }
    return mountedTable;
  };  

  beforeEach(() => {
    props = {};
    shallowTable = undefined;
    renderedTable = undefined;
    mountedTable = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
