import { root } from '@lynx-js/react';

import './index.css';
import GalleryScreen from './CreateGallery/index.jsx';

root.render(<GalleryScreen />);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
