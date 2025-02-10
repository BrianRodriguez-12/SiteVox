import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Services
import { sendContactData } from '../../services/api';

// Styles
import './styles.module.css';

const ContactForm: React.FC = () => {
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
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{t('contactFormTitle')}</h1>
        <h4>
          {t('name')}:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </h4>
        <h4>
          {t('email')}:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </h4>
        <h4>
          {t('message')}:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </h4>
        <button className="formButton" type="submit">
          {t('send')}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
