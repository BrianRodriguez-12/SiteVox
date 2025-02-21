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
    <div className="flex items-center justify-center">
      <form
        className="pt-6 self-center p-6 rounded-lg shadow-lg w-11/12 bg-white max-w-2xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-4">{t('contactFormTitle')}</h1>
        <h4 className="block pb-3 font-bold">
          {t('name')}:
          <input
            className="w-full p-3 border border-primaryColor rounded-lg mt-1"
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
            className="w-full p-3 border border-primaryColor rounded-lg mt-1"
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
            className="w-full p-3 border border-primaryColor rounded-lg mt-1"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </h4>
        <button
          className="block w-full p-3 bg-primaryColor text-white font-bold rounded-lg mt-4"
          type="submit"
        >
          {t('send')}
        </button>
      </form>
    </div>
  );
}
