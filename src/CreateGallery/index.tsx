import { furniturePictures } from '../Pictures/furniture/furniturePictures.jsx';
import Gallery from './Gallery.jsx';

export default function GalleryScreen() {
  return (
    <view>
      <Gallery pictureData={furniturePictures} />
    </view>
  );
}
