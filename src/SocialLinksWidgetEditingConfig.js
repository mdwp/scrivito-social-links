import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('SocialLinksWidget', {
    title: 'Social Links',

    attributes: {
        title: {
            title: 'Title',
            description: 'Title above the social links. e.g. "Share this"',

        },
        url: {
            title: 'Page slug',
            description: 'URL to this page with http(s).',

        },
        textToShare: {
            title: 'Text',
            description: 'Text you want to share',

        },
    },
    properties: [
        'title',
        'url',
        'textToShare',
    ]
});