import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = () => {
        const newLang = i18n.language === 'id' ? 'en' : 'id';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            className="language-switcher"
            onClick={changeLanguage}
            aria-label="Switch Language"
        >
            <span className="globe-icon">🌐</span>
            <span className="language-text">
                {i18n.language === 'id' ? 'English' : 'Bahasa Indonesia'}
            </span>
        </button>
    );
};

export default LanguageSwitcher;