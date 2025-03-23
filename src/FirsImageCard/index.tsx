import { furniturePictures } from '../Pictures/furniture/furniturePictures.jsx';
import ImageCard from './ImageCard.jsx';
import '../index.css';

import { root } from '@lynx-js/react';

function FirstImageCard() {
  const MyFirstPicture = furniturePictures[0];
  return (
    <view className='gallery-wrapper single-card'>
      <ImageCard picture={MyFirstPicture} />
    </view>
  );
}

root.render(<FirstImageCard />);
