import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const CustomAuraPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{purple.50}',
      100: '{purple.100}',
      200: '{purple.200}',
      300: '{purple.300}',
      400: '{purple.400}',
      500: '{purple.500}',
      600: '{purple.600}',
      700: '{purple.700}',
      800: '{purple.800}',
      900: '{purple.900}',
      950: '{purple.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}'
        },
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.700}',
          focusColor: '{primary.800}'
        }
      },
      dark: {
        primary: {
          color: '{primary.500}',  // ← Ajustei para 500
          contrastColor: '#ffffff',  // ← Branco puro
          hoverColor: '{primary.600}',  // ← Ajustei para 600
          activeColor: '{primary.400}'  // ← Ajustei para 400
        },
        highlight: {
          background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
          focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
          color: '#E0DAFF',  // ← Cor do design system
          focusColor: '#E0DAFF'
        },
        surface: {
          0: '#1C1B29',    // ← --bg
          50: '#2A273D',   // ← --surface
          100: '#2A273D',
          200: '#2A273D',
          300: '#2A273D',
          400: '#2A273D',
          500: '#2A273D',
          600: '#443F5E',  // ← --border
          700: '#443F5E',
          800: '#443F5E',
          900: '#1C1B29',
          950: '#1C1B29'
        }
      }
    }
  },
  primitive: {
    purple: {
      50: '#F5F3FF',
      100: '#EDE9FE',
      200: '#DDD6FE',
      300: '#C4B5FD',
      400: '#A78BFA',
      500: '#6B5DD3',   // ← --primary
      600: '#7B69E0',   // ← --primary-hover
      700: '#5B4DC0',
      800: '#4C3FA8',
      900: '#3D3289',
      950: '#2E256A'
    }
  }
});
