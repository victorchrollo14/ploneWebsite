import {
  SliderBlockView,
  SliderBlockEdit,
  ReleaseBlockEdit,
  ReleaseBlockView,
  ListingGridVariation,
} from './components/';
import heroSVG from '@plone/volto/icons/hero.svg';
import PloneReleaseView from './components/Views/PloneReleaseView';

const applyConfig = (config) => {
  // overriding title block to make it deletable
  config.blocks.requiredBlocks = [];

  // config for new Block named Slider.
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

  // config for a new block that can be changed by editor.
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

  // adding new Variations called grid to listing block
  config.blocks.blocksConfig.listing.variations = [
    ...config.blocks.blocksConfig.listing.variations,
    {
      id: 'listingGrid',
      title: 'Grid',
      template: ListingGridVariation,
    },
  ];

  // creating a new content_type called plone_release
  config.views.contentTypesViews.plone_release = PloneReleaseView

  return config;
};

export default applyConfig;
