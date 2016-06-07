module.exports = {
  "bundles": {
    "scripts/app-build": {
      "includes": [
        "aurelia-orm/**/*.html!text",
        "humane-js/themes/jackedup.css!text",
        "aurelia-api",
        "aurelia-authentication",
        "aurelia-dependency-injection",
        "aurelia-fetch-client",
        "aurelia-framework",
        "aurelia-history-browser",
        "aurelia-i18n",
        "aurelia-logging-console",
        "aurelia-notification",
        "aurelia-orm",
        "aurelia-pal",
        "aurelia-pal-browser",
        "aurelia-polyfills",
        "aurelia-router",
        "aurelia-templating-binding",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-validation",
        "aurelia-loader",
        "aurelia-loader-default",
        "aurelia-bootstrapper",
        "text",
        "**/*.js",
        "**/*.html!text"
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
