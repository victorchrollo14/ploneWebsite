import slider1 from './slider1.jpeg';
import slider2 from './slider2.jpeg';
import slider3 from './slider3.jpeg';
import ImageGallery from 'react-image-gallery';

const View = (props) => {
  const slides = [
    { original: slider1 },
    { original: slider2 },
    { original: slider3 },
  ];

  const invisibleNav = () => {
    return <> </>;
  };

  return (
    <div className="block slider full-width">
      <ImageGallery
        items={slides}
        showFullScreen={false}
        showPlayButton={false}
        showBullets
        renderLeftNav={invisibleNav}
        renderRightNav={invisibleNav}
      />
    </div>
  );
};

export default View;
