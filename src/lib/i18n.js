/**
 * https://docs.expo.io/versions/latest/sdk/localization/
 */
import { Localization } from 'expo';
import i18n from 'i18n-js';

const en = {
  foo: 'this is a foo',
  bar: 'Bar {{someValue}}',
};
const fr = {
  foo: 'como telle fous',
  bar: 'chatouiller {{someValue}}',
};

i18n.fallbacks = true;
i18n.translations = { fr, en };
i18n.locale = Localization.locale;

export default i18n;
