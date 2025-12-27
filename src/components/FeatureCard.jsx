import { useTranslation } from 'react-i18next';
import '../styles/FeatureCard.css';

const FeatureCard = ({ titleKey, descriptionKey, icon: IconComponent }) => {
    const { t } = useTranslation();

    return (
        <div className="feature-card">
            <div className="feature-icon">
                <IconComponent />
            </div>
            <h3 className="feature-title">{t(titleKey)}</h3>
            <p className="feature-description">{t(descriptionKey)}</p>
        </div>
    );
};

export default FeatureCard;