/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Emmanuel Diaz Leal Hernandez - Portfolio',
  author: 'Emmanuel Diaz Leal Hernandez',
  headerTitle: 'EmmanuelHDev',
  description: 'Portfolio personal y blog de Emmanuel Diaz Leal Hernandez (emmanuelhdev, bysmax). Explorando el desarrollo web, la tecnología y más.',
  language: 'es', // Set default language to Spanish
  theme: 'system', // system, dark or light
  siteUrl: 'https://emmanuelh.dev', // Replace with actual domain if different
  siteRepo: 'https://github.com/emmanuelhdev/emmanuelh.dev', // Replace with actual repo URL
  siteLogo: '/static/images/logo.png', // Keep or update logo path
  socialBanner: '/static/images/twitter-card.png', // Keep or update banner path
  // mastodon: 'https://mastodon.social/@mastodonuser', // Uncomment and update if used
  email: 'contact@emmanuelh.dev', // Replace with actual email
  github: 'https://github.com/emmanuelhdev', // Replace with actual GitHub profile
  // x: 'https://twitter.com/x', // Uncomment and update if used
  // twitter: 'https://twitter.com/Twitter', // Uncomment and update if used
  // facebook: 'https://facebook.com', // Uncomment and update if used
  // youtube: 'https://youtube.com', // Uncomment and update if used
  linkedin: 'https://www.linkedin.com/in/emmanuel-diaz-leal-hernandez/', // Replace with actual LinkedIn profile
  // threads: 'https://www.threads.net', // Uncomment and update if used
  // instagram: 'https://www.instagram.com', // Uncomment and update if used
  locale: 'es', // Set default locale to Spanish
  keywords: ['Emmanuel Diaz Leal Hernandez', 'emmanuelhdev', 'bysmax', 'portfolio', 'blog', 'desarrollo web', 'software engineer', 'ingeniero de software', 'programacion', 'tecnologia'], // Add Spanish keywords
  multiauthors: false, // Set based on whether multiple authors contribute
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    /*umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    },*/
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: undefined, // Set to undefined or remove if no newsletter
  },
  iscomments: true, // Enable comments if desired
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'es', // Set giscus language to Spanish
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
  // formspree support :
  //if set to false, simple "mailto"
  // if set to true, get a free account there : https://formspree.io/ and go to read.me doc
  formspree: false, // Set to true if using Formspree
  // waline support
  iswaline: false,
  walineServer: '',
}

module.exports = siteMetadata
