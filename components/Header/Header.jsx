import Link from "next/link"
import { useRouter } from 'next/router'
import Image from "next/image";
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

import burgerMenu from './images/burger-menu.svg';

const Header = () => {
  const { t, i18n } = useTranslation('common');
  const [currentLang, setCurrentLang] = useState('');
  const router = useRouter()
  const currentRoute = router.pathname;

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  useEffect(() => {
    console.log(currentRoute)
  }, [currentRoute])

  useEffect(() => {
    setCurrentLang(i18n.language)
  }, [i18n.language])

  return (
    <header className="header">
      <Link href="/">
        <a className="header__logo text_black">LOGO</a>
      </Link>

      <nav className="header__navigation">
        <ul className="header__links text_light-gray">
          <li>
            <Link href="/">
              <a className={`header__link ${currentRoute === '/' && 'header__link_active'}`}>{t('projects')}</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={`header__link ${currentRoute === '/about' && 'header__link_active'}`}>{t('about_company')}</a>
            </Link>
          </li>
          <li>
            <Link href="/contacts">
              <a className={`header__link ${currentRoute === '/contacts' && 'header__link_active'}`}>{t('contacts')}</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header__menu">
        <div className="header__language-buttons text_light-gray">
          <Link href={`/ru${currentRoute}`} locale={false}>
            <button className={`header__button header__language-button ${currentLang === 'ru' && 'header__language-button_active'}`} onClick={() => changeLanguage("ru")}>RU</button>
          </Link>
          <Link href={`/en${currentRoute}`} locale={false}>
            <button className={`header__button header__language-button ${currentLang === 'en' && 'header__language-button_active'}`} onClick={() => changeLanguage("en")}>EN</button>
          </Link>
        </div>

        <button className="header__button header__start-button text_blue">{t('start_project')} <span>&rarr;</span></button>
      </div>

      <button className="header__burger-button">
        <Image src={burgerMenu} height={7} width={31} alt="burger-menu" />
      </button>
    </header>
  );
};

export default Header;
