
import React from 'react';
import  Button  from './Button';
import { FiSave} from "react-icons/fi";

//const firstUpperModule = require("first_upper-module");

export default {
  title: 'Button',
  component: Button,
  argTypes: {

    color: {
      control: {
        type: 'select',
        labels: {
          primary: 'primary',
          warning: 'warning',
          success: 'success',
          error: 'error',
        },
      },
      options: ['primary', 'warning', 'success', 'error'],
    },
    shape: {
      control: {
        type: 'select',
        labels: {
          rectangle: 'rectangle',
          circular: 'circular',
        },
      },
      options: ['rectangle', 'circular'],
    },
  },
};

//const button_var_name="saVe";{firstUpperModule(button_var_name)}
const Template = (args) =><Button {...args}>save </Button>;




export const Rectangle = Template.bind({});
Rectangle.args = {
  shape: 'rectangle',
  children: 'Submit',

};

export const Circular = Template.bind({});
Circular.args = {
  shape: 'circular',
  children: <FiSave size={20} />,

};

export const WithIcon = Template.bind({});
  WithIcon.args = {
    leftIcon: <FiSave size={20} />,
    // children:'FiSave'
    
   
};