import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/FAQItem.css';

const FAQItem = ({ questionKey, answerKey }) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className="faq-question" onClick={toggleOpen}>
                <span>{t(questionKey)}</span>
                <span className={`faq-icon ${isOpen ? 'rotate' : ''}`}>+</span>
            </button>

            <div className={`faq-answer ${isOpen ? 'show' : ''}`}>
                <p>{t(answerKey)}</p>
            </div>
        </div>
    );
};

export default FAQItem;