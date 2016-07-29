module.exports = {
  "bundles": {
    "scripts/app-build": {
      "includes": [
        "[**/*.js]",
        "**/*.html!text",
        "**/*.css!text"
      ],
      "options": {
        "inject":   true,
        "minify":   true,
        "depCache": true,
        "rev":      false
      }
    },
   "scripts/vendor": {
      "includes": [
        "aurelia-orm/**/*.html!text",
        "humane-js/themes/jackedup.css!text",
        "aurelia-api",
        "aurelia-authentication",
        "[aurelia-authentication/**/*.js]",
        "aurelia-dependency-injection",
        "aurelia-fetch-client",
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-polyfills",
        "aurelia-history-browser",
        "aurelia-i18n",
        "aurelia-loader",
        "aurelia-loader-default",
        "aurelia-logging-console",
        "aurelia-notification",
        "aurelia-orm",
        "[aurelia-orm/**/*.js]",
        "aurelia-pal",
        "aurelia-pal-browser",
        "aurelia-polyfills",
        "aurelia-router",
        "aurelia-templating-binding",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-validation",
        "bootstrap",
        "bootstrap/css/bootstrap.css!text",
        "fetch",
        "i18next-xhr-backend",
        "jquery"
      ],
      "options":  {
        "inject":   true,
        "minify":   true,
        "depCache": false,
        "rev":      false
      }
    }
  }
};
