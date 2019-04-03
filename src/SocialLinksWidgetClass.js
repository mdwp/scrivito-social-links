import * as Scrivito from 'scrivito';

const SocialLinksWidget = Scrivito.provideWidgetClass('SocialLinksWidget', {
  attributes: {
    title: 'string',
    url: 'string',
    textToShare: 'string',
  },
});

export default SocialLinksWidget;
