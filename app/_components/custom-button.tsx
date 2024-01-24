import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

type variant = 'primary' | 'secondary' | 'text';
type target = '_blank' | '_parent' | '_self' | '_top';

interface CustomButtonProps extends Omit<ButtonProps, 'variant'> {
    variant?: variant;
    children: React.ReactNode;
    target?: target
}

const CustomButton: React.FC<CustomButtonProps> = ({ variant = "primary", children, ...rest }) => {
    let buttonStyles = {};

    switch (variant) {
        case 'primary':
            buttonStyles = {
                backgroundColor: 'primary.main',
                color: 'common.white',
                "&:hover": {
                    backgroundColor: "primary.main",
                    boxShadow: 'none'
                },
            };
            break;
        case 'secondary':
            buttonStyles = {
                backgroundColor: 'common.white',
                color: 'secondary.main',
                "&:hover": {
                    backgroundColor: "primary.contrastText",
                    boxShadow: 'none'
                },
            };
            break;
        case 'text':
            buttonStyles = {
                backgroundColor: 'transparent',
                color: 'secondary.lighter',
                "&:hover": {
                    backgroundColor: "action.hover",
                    boxShadow: 'none'
                },
            };
            break;
        default:
            break;
    }

    return (
        <Button
            disableRipple
            sx={{
                py: 1.25,
                px: 2.5,
                borderRadius: 2,
                boxShadow: 'none',
                textTransform: 'none',
                whiteSpace: 'noWrap',
                ...buttonStyles
            }}
            {...rest}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
