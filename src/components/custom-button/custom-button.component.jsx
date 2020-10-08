import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

//stateless button
const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;