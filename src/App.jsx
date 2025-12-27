import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trending from './components/Trending';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import { movies } from './data/movies';
import { features } from './data/features';
import { faqs } from './data/faqs';

import './App.css';

function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <div className="app">
            <Navbar />
            <main className="main-content">
                <Hero />
                <Trending movies={movies} />
                <Features features={features} />
                <FAQ faqs={faqs} />
            </main>
            <Footer />
        </div>
    );
}

export default App;