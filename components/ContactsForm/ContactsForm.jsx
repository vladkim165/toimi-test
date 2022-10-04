import Link from 'next/link';
import Image from "next/image";
import { useTranslation } from 'next-i18next';
import { useState, useEffect } from "react";

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

import telegramGradient from './images/telegram-gradient.svg';

const ContactsForm = () => {
  const { t } = useTranslation('common');
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <section className="container contacts">
      <Breadcrumbs aria-label="breadcrumb" />
      <h1 className="contacts__title text_blue">{t('we_are_close')}</h1>
      <p className="contacts__subtitle text_gray">
      {t('fill_the_form')} &nbsp;
        <a className="contacts__contact-mail text_blue" href="mailto:info@site.com">info@site.com</a>
      </p>

      <form
        className="contacts__form"
        onSubmit={handleSubmit}
      >
        <div className="input-placeholder contacts__input contacts__name">
          <input type="text" required />
          <div className="placeholder">
          {t('your_name')} <span>*</span>
          </div>
        </div>
        <div className="input-placeholder contacts__input contacts__mail">
          <label htmlFor="mail">{t('email')}<span>*</span></label>
          <input name="mail" type="email" />
        </div>
        <div className="input-placeholder contacts__input contacts__comments">
          <label htmlFor="comments">{t('comments')}<span>*</span></label>
          <input name="comments" type="text" />
        </div>
        <div className={`contacts__submit-button-container ${isSubmitted && 'contacts__submit-button-container_active'}`}>
          <button className={`contacts__submit-button text_blue ${isSubmitted && 'contacts__submit-button_active'}`} type="submit">
          <div className="contacts__telegram-gradient">
          <Image src={telegramGradient} height={41} width={57} alt="telegram-gradient" />
          </div>
            <p>{isSubmitted ? t('message_sent') : t('send')}</p>
          </button>
        </div>
        <div className="contacts__policy">
          <div className="contacts__policy-checkbox">
            <input type="checkbox" id="checkbox" required checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} />
            <label htmlFor="checkbox" />
          </div>
          <span className="contacts__agree">{t('agree_with')}&nbsp;</span>
          <Link href="/">
            <a className="text_blue contacts__privacy-policy">{t('policy')}</a>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default ContactsForm;
