/**
 * Internationalization configuration.
 * https://docs.expo.io/versions/latest/sdk/localization/
 */
import { Localization } from 'expo';
import i18n from 'i18n-js';
import en from '../constants/en';
import ru from '../constants/ru';

i18n.fallbacks = true;
i18n.translations = { en, ru };
i18n.locale = Localization.locale;
/**
 * Entire i18n configuration object.
 * @property {function} i18n.t Translate function.
 */
export default i18n;
