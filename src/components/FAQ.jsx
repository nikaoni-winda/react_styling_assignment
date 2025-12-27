import { useTranslation } from 'react-i18next';
import FAQItem from './FAQItem';
import '../styles/FAQ.css';

const FAQ = ({ faqs }) => {
    const { t } = useTranslation();

    return (
        <section className="faq">
            <div className="faq-container">
                <h2 className="faq-title">{t('faq.title')}</h2>

                <div className="faq-list">
                    {faqs.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            questionKey={faq.questionKey}
                            answerKey={faq.answerKey}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;