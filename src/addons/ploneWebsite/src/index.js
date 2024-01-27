import {
  SliderBlockView,
  SliderBlockEdit,
  ReleaseBlockEdit,
  ReleaseBlockView,
} from './components/';
import heroSVG from '@plone/volto/icons/hero.svg';

const applyConfig = (config) => {
  config.blocks.requiredBlocks = [];

  config.blocks.blocksConfig.slider = {
    id: 'slider',
    title: 'Slider',
    icon: heroSVG,
    group: 'common',
    view: SliderBlockView,
    edit: SliderBlockEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };

  config.blocks.blocksConfig.release = {
    id: 'release',
    title: 'Release',
    icon: heroSVG,
    group: 'common',
    view: ReleaseBlockView,
    edit: ReleaseBlockEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };

  return config;
};

export default applyConfig;
