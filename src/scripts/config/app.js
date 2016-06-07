export default {
  title: 'My SpoonX application',

  /* @see http://aurelia-api.spoonx.org/configuration.html */
  endpoints    : [
    {
      name    : 'api',                    // The name by which you reference this endpoint
      endpoint: 'http://127.0.0.1:1337/', // The URL for this endpoint (defaults to current url)
      // config  : {},                       // Use config for defaults (like headers).
      default : true                      // Set this to the default endpoint (defaults to false)
    },
    {
      name    : 'auth',                   // The name by which you reference this endpoint
      endpoint: 'http://127.0.0.1:1337/', // The URL for this endpoint (defaults to current url)
      // config  : {},                       // Use config for defaults (like headers).
    }
  ],

  /* i18n */
  defaultLocale: {
    language: 'nl',   // Used for translations from i18n.
    locale  : 'nl-NL' // Used by validator. e.g. nl-NL
  }
}
