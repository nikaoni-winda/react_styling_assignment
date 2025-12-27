import { useTranslation } from 'react-i18next';
import FeatureCard from './FeatureCard';
import '../styles/Features.css';

const Features = ({ features }) => {
    const { t } = useTranslation();

    return (
        <section className="features">
            <div className="features-container">
                <h2 className="features-title">{t('features.title')}</h2>

                <div className="features-grid">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            titleKey={feature.titleKey}
                            descriptionKey={feature.descriptionKey}
                            icon={feature.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
