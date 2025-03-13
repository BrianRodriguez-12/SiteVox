'use client';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

// Services
import { sendContactData } from '@/services/api';

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      await sendContactData(formData);
      alert(t('messageSent'));
      setFormData({ name: '', email: '', message: '' });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErrorMessage(t('messageError'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full items-center justify-center">
      <form
        className="pt-6 self-center p-6 rounded-lg shadow-lg w-11/12 bg-detailColor max-w-2xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-4">{t('contactFormTitle')}</h1>
        <h4 className="block pb-3 font-bold">
          {t('name')}:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </h4>
        <h4 className="block pb-3 font-bold">
          {t('email.title')}:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </h4>
        <h4 className="block pb-3 font-bold">
          {t('message')}:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </h4>
        {errorMessage && <p className="text-errorColor">{errorMessage}</p>}
        <button
          className="block w-full p-3 mt-4"
          type="submit"
          disabled={loading}
        >
          {loading ? t('sending') : t('send')}
        </button>
      </form>
    </div>
  );
}
