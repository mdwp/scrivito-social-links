import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('SocialLinksWidget', {
    title: 'Social Links',

    attributes: {
        url: {
            title: 'Page slug',
            description: 'URL to this page. Format as slug',

        },
        textToShare: {
            title: 'Text',
            description: 'Text you want to share',

        },
    },
    properties: [
        'url',
        'textToShare',
    ]
});