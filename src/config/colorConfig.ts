export const ColorI:ColorType = {
    colors: {
        primary: {
          DEFAULT: '#121927', 
          light: '#3B82F6',   
          dark: '#1E40AF',    
        },
        secondary: {
          DEFAULT: '#32D583', 
          light: '#34D399',   
          dark: '#065F46',    
        },
        customGray: {
          50: '#F5F6F7',
          100: '#ECEEF0',
          200: '#E6E8EB',
          300: '#E0E3E8', 
          400: '#BFC3C9',
          500: '#9FA4AD',
          600: '#7F858F',
          700: '#5F6671',
          800: '#3F4654',
          900: '#20232E',
        },
        background: {
          light: '#F9FAFB', 
          dark: '#1F2937',  
        },
        textColor: {
          primary: '#111827',  
          secondary: '#9CA3AF', 
        },
        
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        
        success: {
          light: '#D1FAE5',
          DEFAULT: '#10B981',
          dark: '#047857',
        },
        danger: {
          light: '#FEE2E2',
          DEFAULT: '#EF4444',
          dark: '#B91C1C',
        },
        warning: {
          light: '#FEF3C7',
          DEFAULT: '#F59E0B',
          dark: '#B45309',
        },
        info: {
          light: '#BFDBFE',
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8',
        },
      },
      
      textColor: {
        primary: '#1E40AF',
        secondary: '#32D583',
        muted: '#6B7280',
        white: '#fff'
      },
      backgroundColor: {
        page: '#f2f4f7', 
        darkPage: '#111827', 
      },
      borderColor: {
        primary: '#1E40AF',
        secondary: '#434445',
        light: '#E5E7EB',
        dark: '#374151',
      },
      
      boxShadow: {
        primary: '0 4px 6px -1px rgba(30, 64, 175, 0.1), 0 2px 4px -1px rgba(30, 64, 175, 0.06)',
        secondary: '0 4px 6px -1px rgba(217, 119, 6, 0.1), 0 2px 4px -1px rgba(217, 119, 6, 0.06)',
      },  
};



export type ColorType = {
  colors: {
    primary: {
      DEFAULT: string;
      light: string;
      dark: string;
    };
    secondary: {
      DEFAULT: string;
      light: string;
      dark: string;
    };
    customGray: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    background: {
      light: string;
      dark: string;
    };
    textColor: {
      primary: string;
      secondary: string;
    };
    neutral: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    success: {
      light: string;
      DEFAULT: string;
      dark: string;
    };
    danger: {
      light: string;
      DEFAULT: string;
      dark: string;
    };
    warning: {
      light: string;
      DEFAULT: string;
      dark: string;
    };
    info: {
      light: string;
      DEFAULT: string;
      dark: string;
    };
  };
  textColor: {
    primary: string;
    secondary: string;
    muted: string;
    white: string;
  };
  backgroundColor: {
    page: string;
    darkPage: string;
  };
  borderColor: {
    primary: string;
    secondary: string;
    light: string;
    dark: string;
  };
  boxShadow: {
    primary: string;
    secondary: string;
  };
};
