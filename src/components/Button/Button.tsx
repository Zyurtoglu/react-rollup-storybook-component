//import { rest } from 'lodash';
import React, {ButtonHTMLAttributes,forwardRef, RefObject} from 'react';
import {StyledButton ,  LeftIcon} from './styles/Button.style';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'warning' | 'success' | 'error';
  shape?: 'rectangle' | 'circular';
  leftIcon?: React.ReactElement;
  children: React.ReactNode;
}


 const Button=({
  
    color="primary",
    shape="rectangle",
    leftIcon=null,
    children,
    ...rest
    
    }:ButtonProps,
    ref: RefObject<HTMLButtonElement>,
  ): JSX.Element=>{
            return(
              <div>
                <StyledButton 
                    ref={ref}
                    color={color}
                  
                    {...rest}
                    
                
                >
                <LeftIcon size="small">{leftIcon}</LeftIcon>{children} 
                </StyledButton>
              </div>
            );
        
      
};

  
export default  Button;