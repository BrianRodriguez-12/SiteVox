'use client';
import { useTranslation } from 'next-i18next';

export default function Visas() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1>{t('visas.title')}</h1>
      <div className="content">
        <section>
          <h2>{t('visas.requiredDocuments.title')}</h2>
          <div>
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
          </div>
        </section>
        <section>
          <h2>{t('visas.commonQuestions.title')}</h2>
          <div>
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
          </div>
        </section>
        <section>
          <h2>{t('visas.tips.title')}</h2>
          <div>
            <li>{t('visas.tips.arriveEarly')}</li>
            <li>{t('visas.tips.prepareAnswers')}</li>
            <li>{t('visas.tips.avoidNervousness')}</li>
            <li>{t('visas.tips.checkDocuments')}</li>
            <li>{t('visas.tips.electronicDevices')}</li>
            <li>{t('visas.tips.metalObjects')}</li>
          </div>
        </section>
      </div>
    </div>
  );
}
