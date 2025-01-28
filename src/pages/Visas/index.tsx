import React from 'react';
import { useTranslation } from 'react-i18next';

// Styles
import './styles.css';

const Visas: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1>{t('visas.title')}</h1>
      <div className="content">
        <section>
          <h2 className="title">{t('visas.requiredDocuments.title')}</h2>
          <div>
            <ul>
              <li>
                <h3>{t('visas.requiredDocuments.passport')}</h3>
                {t('visas.requiredDocuments.passportDetails')}
              </li>
              <li>
                <h3>{t('visas.requiredDocuments.photo')}</h3>
                {t('visas.requiredDocuments.photoDetails')}
              </li>
              <li>
                <h3>{t('visas.requiredDocuments.applicationForm')} </h3>
                {t('visas.requiredDocuments.applicationFormDetails')}
              </li>
              <li>
                <h3> {t('visas.requiredDocuments.paymentReceipt')} </h3>
                {t('visas.requiredDocuments.paymentReceiptDetails')}
              </li>
              <li>
                <h3>{t('visas.requiredDocuments.supportingDocuments')}</h3>
                {t('visas.requiredDocuments.supportingDocumentsDetails')}
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="title">{t('visas.commonQuestions.title')}</h2>
          <div>
            <ul>
              <li>
                <h3>{t('visas.commonQuestions.q1.question')}</h3>
                <p>{t('visas.commonQuestions.q1.answer')}</p>
              </li>
              <li>
                <h3>{t('visas.commonQuestions.q2.question')}</h3>
                <p>{t('visas.commonQuestions.q2.answer')}</p>
              </li>
              <li>
                <h3>{t('visas.commonQuestions.q3.question')}</h3>
                <p>{t('visas.commonQuestions.q3.answer')}</p>
              </li>
              <li>
                <h3>{t('visas.commonQuestions.q4.question')}</h3>
                <p>{t('visas.commonQuestions.q4.answer')}</p>
              </li>
              <li>
                <h3>{t('visas.commonQuestions.q5.question')}</h3>
                <p>{t('visas.commonQuestions.q5.answer')}</p>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2 className="title">{t('visas.tips.title')}</h2>
          <ul>
            <li>{t('visas.tips.arriveEarly')}</li>
            <li>{t('visas.tips.prepareAnswers')}</li>
            <li>{t('visas.tips.avoidNervousness')}</li>
            <li>{t('visas.tips.checkDocuments')}</li>
            <li>{t('visas.tips.electronicDevices')}</li>
            <li>{t('visas.tips.metalObjects')}</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Visas;
