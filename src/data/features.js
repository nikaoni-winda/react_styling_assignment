import { FaTv, FaDownload, FaGlobeAmericas, FaChild } from 'react-icons/fa';

export const features = [
    {
        id: 1,
        titleKey: "features.tv.title",
        descriptionKey: "features.tv.description",
        icon: FaTv  // Component reference, bukan JSX!
    },
    {
        id: 2,
        titleKey: "features.download.title",
        descriptionKey: "features.download.description",
        icon: FaDownload
    },
    {
        id: 3,
        titleKey: "features.watch.title",
        descriptionKey: "features.watch.description",
        icon: FaGlobeAmericas
    },
    {
        id: 4,
        titleKey: "features.kids.title",
        descriptionKey: "features.kids.description",
        icon: FaChild
    }
];