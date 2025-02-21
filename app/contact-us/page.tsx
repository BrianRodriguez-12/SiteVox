'use client';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

// Services
import { sendContactData } from '@/services/api';

// Styles
import styles from './styles.module.css';

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendContactData(formData);
      alert(t('messageSent'));
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert(`${t('messageError')}, ${error}`);
    }
  };

  return (
    <div className={styles.divContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h1>{t('contactFormTitle')}</h1>
        <h4 className={styles.formLabel}>
          {t('name')}:
          <input
            className={styles.formInput}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </h4>
        <h4 className={styles.formLabel}>
          {t('email.title')}:
          <input
            className={styles.formInput}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </h4>
        <h4 className={styles.formLabel}>
          {t('message')}:
          <textarea
            className={styles.formInput}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </h4>
        <button className={styles.formButton} type="submit">
          {t('send')}
        </button>
      </form>
    </div>
  );
}
