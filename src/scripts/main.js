import routes from 'config/routes';
import appConfig from 'config/app';
import * as entities from 'config/entities';
import {HttpClient} from 'aurelia-fetch-client';
import {Router} from 'aurelia-router';
import {TWBootstrapViewStrategy} from 'aurelia-validation/strategies/twbootstrap-view-strategy';
import {ViewLocator} from 'aurelia-framework';
import 'bootstrap';

export function configure (aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('spoonx/aurelia-api', builder => {
      builder.useStandardConfiguration().withBaseUrl(appConfig.endpoints.server);
    })
    .plugin('spoonx/aurelia-orm', builder => {
      builder.registerEntities(entities);
    })
    .plugin('aurelia-validation', config => {
      config.useLocale(appConfig.defaultLocale.locale);
      config.useViewStrategy(TWBootstrapViewStrategy.AppendToInput);
    })
    .plugin('aurelia-i18n', (instance) => {
      // adapt options to your needs (see http://i18next.com/pages/doc_init.html)
      instance.setup({
        resGetPath : 'scripts/config/locale/__lng__/__ns__.json',
        lng        : appConfig.defaultLocale.language,
        attributes : ['t'],
        getAsync   : true,
        sendMissing: false,
        fallbackLng: appConfig.defaultLocale.language,
        debug      : false
      });
    })
    //removeIf(production)
    .developmentLogging()
    //endRemoveIf(production)
    ;

  aurelia.start().then(a => {
    a.container.get(Router).configure(configureRouter);
    a.setRoot('app');
  });
}

function configureRouter (config) {
  config.title = appConfig.title;

  config.map(routes);
}
