import React from 'react';
import App from './App';
import ItemPicker from './components/ItemPicker';
import MenuPreview from './components/MenuPreview';

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const items = [{
  id: 1001,
  name: 'Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens',
  dietaries: ['v', 've', 'df', 'gf', 'n!'],
},
{
  id: 1002,
  name: 'Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots',
  dietaries: ['gf', 'df', 'rsf'],
}];

describe('<App />', () => {
  it('renders', () => {
    const div = shallow(<App />);
    expect(div).toMatchSnapshot();
  });

  it('renders 20 <ItemPicker /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ItemPicker)).toHaveLength(20);
  });

  it('renders 1 MenuPreview', () => {
    const wrapper = shallow(<App />);
    const firstItemPicker = wrapper.find(ItemPicker).first();
    firstItemPicker.simulate('click', items[0]);
    expect(wrapper.find(MenuPreview)).toHaveLength(1);
  });

  it('renders correct item count', () => {
    const wrapper = shallow(<App />);
    const firstItemPicker = wrapper.find(ItemPicker).first();
    firstItemPicker.simulate('click', items[0]);
    const secondItemPicker = wrapper.find(ItemPicker).at(1);
    secondItemPicker.simulate('click', items[1]);
    expect(wrapper.find('.menu-summary-left span').text()).toEqual('2 items');
  });

  it('renders correct dietary info', () => {
    const wrapper = shallow(<App />);
    const firstItemPicker = wrapper.find(ItemPicker).first();
    firstItemPicker.simulate('click', items[0]);
    const secondItemPicker = wrapper.find(ItemPicker).at(1);
    secondItemPicker.simulate('click', items[1]);
    expect(wrapper.find('.menu-summary-right').text()).toEqual('1xv1xve2xdf2xgf1xn!1xrsf');
  });

  it('renders & deletes 1 MenuPreview', () => {
    const wrapper = mount(<App />);
    const firstItemPicker = wrapper.find(ItemPicker).first();
    firstItemPicker.simulate('click', items[0]);
    const firstMenuPreviewRemoveButton = wrapper.find('.remove-item');
    firstMenuPreviewRemoveButton.simulate('click');
    expect(wrapper.find(MenuPreview)).toHaveLength(0);
  });
});
