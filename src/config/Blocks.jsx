import { defineMessages } from 'react-intl';

import ViewTitleBlock from '@plone/volto/components/manage/Blocks/Title/View';
import ViewDescriptionBlock from '@plone/volto/components/manage/Blocks/Description/View';
import ViewTextBlock from '@plone/volto/components/manage/Blocks/Text/View';
import ViewImageBlock from '@plone/volto/components/manage/Blocks/Image/View';
import ViewVideoBlock from '@plone/volto/components/manage/Blocks/Video/View';
import ViewHeroImageLeftBlock from '@plone/volto/components/manage/Blocks/HeroImageLeft/View';
import ViewMapBlock from '@plone/volto/components/manage/Blocks/Maps/View';
import ViewHTMLBlock from '@plone/volto/components/manage/Blocks/HTML/View';
import ViewTableBlock from '@plone/volto/components/manage/Blocks/Table/View';

import EditTitleBlock from '@plone/volto/components/manage/Blocks/Title/Edit';
import EditDescriptionBlock from '@plone/volto/components/manage/Blocks/Description/Edit';
import EditTextBlock from '@plone/volto/components/manage/Blocks/Text/Edit';
import EditImageBlock from '@plone/volto/components/manage/Blocks/Image/Edit';
import EditVideoBlock from '@plone/volto/components/manage/Blocks/Video/Edit';
import EditHeroImageLeftBlock from '@plone/volto/components/manage/Blocks/HeroImageLeft/Edit';
import EditMapBlock from '@plone/volto/components/manage/Blocks/Maps/Edit';
import EditHTMLBlock from '@plone/volto/components/manage/Blocks/HTML/Edit';
import EditTableBlock from '@plone/volto/components/manage/Blocks/Table/Edit';

import descriptionSVG from '@plone/volto/icons/description.svg';
import titleSVG from '@plone/volto/icons/text.svg';
import textSVG from '@plone/volto/icons/subtext.svg';
import cameraSVG from '@plone/volto/icons/camera.svg';
import videoSVG from '@plone/volto/icons/videocamera.svg';
import globeSVG from '@plone/volto/icons/globe.svg';
import codeSVG from '@plone/volto/icons/code.svg';
import heroSVG from '@plone/volto/icons/hero.svg';
import tableSVG from '@plone/volto/icons/table.svg';

defineMessages({
  title: {
    id: 'title',
    defaultMessage: 'Title',
  },
  description: {
    id: 'description',
    defaultMessage: 'Description',
  },
  text: {
    id: 'text',
    defaultMessage: 'Text',
  },
  image: {
    id: 'image',
    defaultMessage: 'Image',
  },
  video: {
    id: 'video',
    defaultMessage: 'Video',
  },
  hero: {
    id: 'hero',
    defaultMessage: 'Hero',
  },
  table: {
    id: 'table',
    defaultMessage: 'Table',
  },
  maps: {
    id: 'maps',
    defaultMessage: 'Maps',
  },
  html: {
    id: 'html',
    defaultMessage: 'HTML',
  },
  // Groups
  mostUsed: {
    id: 'mostUsed',
    defaultMessage: 'Most used',
  },
  media: {
    id: 'media',
    defaultMessage: 'Media',
  },
  common: {
    id: 'common',
    defaultMessage: 'Common',
  },
});

const groupBlocksOrder = [
  { id: 'mostUsed', title: 'Most used' },
  { id: 'text', title: 'Text' },
  { id: 'media', title: 'Media' },
  { id: 'common', title: 'Common' },
];

const blocksConfig = {
  title: {
    id: 'title',
    title: 'Title',
    icon: titleSVG,
    group: 'text',
    view: ViewTitleBlock,
    edit: EditTitleBlock,
    restricted: true,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    sidebarTab: 0,
    security: {
      addPermission: [],
      view: [],
    },
  },
  description: {
    id: 'description',
    title: 'Description',
    icon: descriptionSVG,
    group: 'text',
    view: ViewDescriptionBlock,
    edit: EditDescriptionBlock,
    restricted: true,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    sidebarTab: 0,
    security: {
      addPermission: [],
      view: [],
    },
  },
  text: {
    id: 'text',
    title: 'Text',
    icon: textSVG,
    group: 'text',
    view: ViewTextBlock,
    edit: EditTextBlock,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    sidebarTab: 0,
    security: {
      addPermission: [],
      view: [],
    },
  },
  image: {
    id: 'image',
    title: 'Image',
    icon: cameraSVG,
    group: 'media',
    view: ViewImageBlock,
    edit: EditImageBlock,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  },
  video: {
    id: 'video',
    title: 'Video',
    icon: videoSVG,
    group: 'media',
    view: ViewVideoBlock,
    edit: EditVideoBlock,
    restricted: false,
    mostUsed: true,
    sidebarTab: 0,
    security: {
      addPermission: [],
      view: [],
    },
  },
  hero: {
    id: 'hero',
    title: 'Hero',
    icon: heroSVG,
    group: 'common',
    view: ViewHeroImageLeftBlock,
    edit: EditHeroImageLeftBlock,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    sidebarTab: 0,
    security: {
      addPermission: [],
      view: [],
    },
  },
  maps: {
    id: 'maps',
    title: 'Maps',
    icon: globeSVG,
    group: 'common',
    view: ViewMapBlock,
    edit: EditMapBlock,
    restricted: false,
    mostUsed: false,
    sidebarTab: 0,
    security: {
      addPermission: [],
      view: [],
    },
  },
  html: {
    id: 'html',
    title: 'HTML',
    icon: codeSVG,
    group: 'common',
    view: ViewHTMLBlock,
    edit: EditHTMLBlock,
    restricted: false,
    mostUsed: false,
    sidebarTab: 0,
    security: {
      addPermission: [],
      view: [],
    },
  },
  table: {
    id: 'table',
    title: 'Table',
    icon: tableSVG,
    group: 'common',
    view: ViewTableBlock,
    edit: EditTableBlock,
    restricted: false,
    mostUsed: false,
    blockHasOwnFocusManagement: true,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  },
};

const requiredBlocks = ['title'];

export { groupBlocksOrder, requiredBlocks, blocksConfig };
