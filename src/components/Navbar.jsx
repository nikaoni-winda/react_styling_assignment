import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Navbar.css';

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    {t('navbar.logo')}
                </div>

                {/* Right side */}
                <div className="navbar-actions">
                    <LanguageSwitcher />
                    <button className="btn-signin">
                        {t('navbar.signIn')}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;