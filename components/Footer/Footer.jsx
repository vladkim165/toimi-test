import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'next-i18next';

import telegramIcon from './images/telegram.svg';
import whatsAppIcon from './images/whats-app.svg';
import downloadArrow from './images/download-arrow.svg';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="footer text_white container">
      <div className="footer__logo-container">
        <Link href="/">
          <a className="footer__logo">LOGO</a>
        </Link>
        <small>&copy; Company 2022. All rights reserved.</small>
      </div>
      <div className="footer__column footer__services">
        <h3 className="footer__column-title">
          {t('services')}
          <span className="footer__dot" />
        </h3>
        <ul className="footer__list">
          <li>
            <Link href="/">
              <a>
                Support and development
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                UI/UX and product design
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                Progressive Web Applications (PWA)
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer__column footer__company">
        <h3 className="footer__column-title">
          {t('company')}
          <span className="footer__dot" />
        </h3>
        <ul className="footer__list">
          <li>
            <Link href="/">
              <a>
                {t('about_company')}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/"><a>{t('projects')}</a></Link>
          </li>
          <li>
            <Link href="/"><a>{t('contacts')}</a></Link>
          </li>
        </ul>
      </div>
      <div className="footer__column footer__contacts">
        <h3 className="footer__column-title">
        {t('contacts')}
          <span className="footer__dot" />
        </h3>
        <ul className="footer__list">
          <li>
            <a href="/" target="_blank">
            {t('download_presentation')} &nbsp;
              <Image src={downloadArrow} height={9} width={9} alt="whats-app" />
            </a>
          </li>
          <li>
          <a href="tel:+74999999999">
            +7 (499) 999-99-99
          </a>
          </li>
          <li>
            <a href="mailto:info@site.com">info@site.com</a>
          </li>
        </ul>
        <Link href="/">
          <a className="footer__policy">
          {t('privacy_policy')}
          </a>
        </Link>
      </div>
      <div className="footer__socials">
        <ul className="footer__list">
          <li>
            <a href="https://t.me/vladkim165" target="_blank" rel="noreferrer">
              <Image src={telegramIcon} height={30} width={30} alt="telegram" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/89895341121" target="_blank" rel="noreferrer">
              <Image src={whatsAppIcon} height={30} width={30} alt="whats-app" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
