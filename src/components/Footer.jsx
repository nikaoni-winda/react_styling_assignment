import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

const Footer = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Footer email submitted:', email);
        alert(`Email submitted: ${email}`);
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* CTA Section */}
                <div className="footer-cta">
                    <p className="footer-cta-text">{t('footer.cta.text')}</p>
                    <form className="footer-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            className="footer-email-input"
                            placeholder={t('footer.cta.email')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="footer-cta-button">
                            {t('footer.cta.button')}
                            <span className="arrow-icon">›</span>
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <p className="footer-contact">{t('footer.contact')}</p>

                {/* Links */}
                <div className="footer-links">
                    <div className="footer-column">
                        <a href="#" className="footer-link">{t('footer.links.faq')}</a>
                        <a href="#" className="footer-link">{t('footer.links.investor')}</a>
                        <a href="#" className="footer-link">{t('footer.links.plans')}</a>
                        <a href="#" className="footer-link">{t('footer.links.corporate')}</a>
                    </div>
                    <div className="footer-column">
                        <a href="#" className="footer-link">{t('footer.links.help')}</a>
                        <a href="#" className="footer-link">{t('footer.links.jobs')}</a>
                        <a href="#" className="footer-link">{t('footer.links.terms')}</a>
                        <a href="#" className="footer-link">{t('footer.links.contact')}</a>
                    </div>
                    <div className="footer-column">
                        <a href="#" className="footer-link">{t('footer.links.account')}</a>
                        <a href="#" className="footer-link">{t('footer.links.privacy')}</a>
                        <a href="#" className="footer-link">{t('footer.links.speed')}</a>
                    </div>
                    <div className="footer-column">
                        <a href="#" className="footer-link">{t('footer.links.media')}</a>
                        <a href="#" className="footer-link">{t('footer.links.cookies')}</a>
                        <a href="#" className="footer-link">{t('footer.links.legal')}</a>
                        <a href="#" className="footer-link">{t('footer.links.originals')}</a>
                    </div>
                </div>

                {/* Copyright */}
                <p className="footer-copyright">{t('footer.copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;