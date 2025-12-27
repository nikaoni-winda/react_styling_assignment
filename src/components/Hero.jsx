import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Hero.css';

const Hero = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        alert(`Email submitted: ${email}`);
    };

    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">
                    {t('hero.title')}
                </h1>
                <p className="hero-subtitle">
                    {t('hero.subtitle')}
                </p>
                <div className="hero-cta">
                    <p className="hero-cta-text">
                        {t('hero.cta.text')}
                    </p>
                    <form className="hero-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            className="hero-email-input"
                            placeholder={t('hero.cta.email')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="hero-cta-button">
                            {t('hero.cta.button')}
                            <span className="arrow-icon">›</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Hero;