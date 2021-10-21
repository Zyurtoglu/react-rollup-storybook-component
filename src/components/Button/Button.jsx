import { rest } from 'lodash';
import React from 'react';
import {StyledButton ,  LeftIcon} from './styles/Button.style';



export const Button=({
  
  color="primary",
  
  leftIcon=null,
  children,
  ...rest
  
})=>{
      
          return(
            <div>
              <StyledButton 
                  color={color}
                 
                  {...rest}
                  
              
              >
               <LeftIcon size="small">{leftIcon}</LeftIcon>{children}
              </StyledButton>
            </div>
          );
      
      
}

  
export default  Button;