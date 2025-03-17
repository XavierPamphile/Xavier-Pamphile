import React from 'react';
import { useLocation } from '@docusaurus/router';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

interface LanguageConfig {
  htmlLang: string;
  label: string;
}

interface LocaleConfigs {
  [locale: string]: LanguageConfig;
}

export default function LanguageSwitcher(): JSX.Element {
  const location = useLocation();
  const history = useHistory();
  const {
    i18n: { currentLocale, locales, localeConfigs },
    siteConfig: { baseUrl },
  } = useDocusaurusContext();

  // Handle language change
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // If we're already on the selected locale, do nothing
    if (newLocale === currentLocale) {
      return;
    }

    // Get the current pathname and search params
    const { pathname, search, hash } = location;

    // Create the new URL with the selected locale
    let newPathname = pathname;

    if (newLocale === 'en') {
      // If switching to default locale (English), remove the locale prefix
      newPathname = pathname.replace(/^\/fr(?:\/|$)/, '/');
    } else if (currentLocale === 'en') {
      // If switching from default locale (English) to French, add the locale prefix
      newPathname = `/${newLocale}${pathname}`;
    } else {
      // If switching between non-default locales, replace the locale prefix
      newPathname = pathname.replace(/^\/[a-z]{2}(?:\/|$)/, `/${newLocale}$1`);
    }

    // Ensure we don't have double slashes
    newPathname = newPathname.replace(/\/+/g, '/');

    // Ensure we have a trailing slash for empty paths
    if (newPathname === '') {
      newPathname = '/';
    }

    // Navigate to the new URL
    const newUrl = `${newPathname}${search}${hash}`;
    console.log(`Switching language from ${currentLocale} to ${newLocale}. New URL: ${newUrl}`);
    history.push(newUrl);
  };

  return (
    <div className={styles.languageSwitcher}>
      <select
        onChange={handleLanguageChange}
        value={currentLocale}
        aria-label={translate({
          id: 'theme.navbar.languageDropdown.ariaLabel',
          message: 'Select language',
          description: 'Aria label for the language dropdown',
        })}
        className={styles.languageSelect}
      >
        {locales.map(locale => (
          <option key={locale} value={locale}>
            {localeConfigs[locale]?.label || locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
