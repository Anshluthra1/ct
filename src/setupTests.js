import '@testing-library/jest-dom/extend-expect';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
configure({adapter: new Adapter()});
