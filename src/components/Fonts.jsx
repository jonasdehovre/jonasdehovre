import { createGlobalStyle } from 'styled-components';

import HelveticaNowBold from '../../static/fonts/HelveticaNow/HelveticaNowMicro-Bold.woff2';
import HelveticaNowBoldItalic from '../../static/fonts/HelveticaNow/HelveticaNowMicro-BoldItalic.woff2';
import HelveticaNowMedium from '../../static/fonts/HelveticaNow/HelveticaNowMicro-Medium.woff2';
import HelveticaNowMediumItalic from '../../static/fonts/HelveticaNow/HelveticaNowMicro-MedIta.woff2';
import HelveticaNowRegular from '../../static/fonts/HelveticaNow/HelveticaNowMicro-Regular.woff2';
import HelveticaNowThin from '../../static/fonts/HelveticaNow/HelveticaNowMicro-Light.woff2';

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica-Bold';
    src: url(${HelveticaNowBold}) format('woff2');
  }

  @font-face {
    font-family: 'Helvetica-BoldItalic';
    src: url(${HelveticaNowBoldItalic}) format('woff2');
  }

  @font-face {
    font-family: 'Helvetica-Medium';
    src: url(${HelveticaNowMedium}) format('woff2');
  }

  @font-face {
    font-family: 'Helvetica-MediumItalic';
    src: url(${HelveticaNowMediumItalic}) format('woff2');
  }

  @font-face {
    font-family: 'Helvetica-Regular';
    src: url(${HelveticaNowRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Helvetica-Thin';
    src: url(${HelveticaNowThin}) format('woff2');
  }

`;
export default Fonts;
