import { ComponentStyleConfig } from '@chakra-ui/react';
import { SystemStyleInterpolation } from '@chakra-ui/theme-tools';

const pressedStyle = (): SystemStyleInterpolation => ({
  top: '2px',
  borderBlock: '2px',
  borderColor: 'transparent',
  _after: {
    bottom: '4px',
  },
});

export const Button: ComponentStyleConfig = {
  baseStyle: {
    pos: 'relative',
    bg: 'transparent',
    borderColor: 'transparent',
    zIndex: 'docked',
    _before: {
      content: '""',
      pos: 'absolute',
      inset: 0,
      zIndex: 'hide',
      border: '2px',
    },
    _after: {
      content: '""',
      pos: 'absolute',
      zIndex: 'hide',
      left: '2px',
      right: '2px',
      top: '4px',
      bottom: '8px',
    },
    _active: {
      ...pressedStyle(),
    },
    _loading: {
      ...pressedStyle(),
    },
    _disabled: {
      ...pressedStyle(),
    },
  },
  sizes: {
    xl: {
      pt: '4px',
      pb: '8px',
      h: '76px',
      _after: {
        borderRadius: '14px',
      },
      _before: {
        borderRadius: '14px',
      },
    },
    lg: {
      pt: '4px',
      pb: '8px',
      h: '64px',
      _after: {
        borderRadius: '8px',
      },
      _before: {
        borderRadius: '11px',
      },
    },
    md: {
      h: '56px',

      _after: {
        borderRadius: '8px',
      },
      _before: {
        borderRadius: '11px',
        borderColor: 'transparent',
      },
    },
    sm: {
      h: '48px',
      px: '18px',
      _after: {
        borderRadius: '8px',
      },
      _before: {
        borderRadius: '11px',
      },
    },
  },
  variants: {
    green: {
      _before: {
        borderColor: 'blue.600',
        bgGradient: 'linear(to-b, green.600, green.700)',
        boxShadow: '0px 6px 0px rgba(0, 0, 0, 0.25)',
      },
      _after: {
        bg: 'purple.500',
        bgGradient: 'linear(to-bl, green.100, green.900)',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'green',
  },
};
