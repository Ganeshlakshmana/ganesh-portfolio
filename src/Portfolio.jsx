import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileDown, ArrowUp } from 'lucide-react';

export default function Portfolio() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    document.title = "Ganesh Lakshmana - Portfolio";

    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Titanic Survival Prediction (ML Project)",
      description: "A full machine learning pipeline to predict Titanic passenger survival using logistic regression. Includes data cleaning, missing value handling, EDA with Seaborn, model training and evaluation, and submission output.",
      link: "https://github.com/Ganeshlakshmana/Titanic-Survival-ML"
    },
    {
      title: "ETL Pipeline: NASA APOD API",
      description: "Automated ETL pipeline using Apache Airflow, Docker, and PostgreSQL.",
      link: "https://github.com/Ganeshlakshmana/ETL-Pipeline-with-Apache-Airflow-NASA-APOD-API-PostgreSQL"
    },
    {
      title: "Web Scraping with Python",
      description: "Projects using BeautifulSoup to collect and process web data.",
      link: "https://github.com/Ganeshlakshmana/WEB-SCRAPING"
    },
    {
      title: "Entertainment Recommendation System",
      description: "A content-based filtering engine for movies and shows.",
      link: "https://github.com/Ganeshlakshmana/Entertainment-Recommendation-System"
    },
    {
      title: "Sugarcane Production Analysis",
      description: "Data visualization project using Python to study agricultural trends.",
      link: "https://github.com/Ganeshlakshmana/Sugarcane-Production-Analysis"
    },
    {
      title: "Python Function Mapping",
      description: "Least-square error based ideal function selector and data mapper built for DLMDSPWP01. Features SQLite persistence, Bokeh visualization, and unit tests.",
      link: "https://github.com/ganeshlakshmana/python-function-mapping"
    }
  ];

  return (
    <div className="text-white font-sans min-h-screen bg-gray-900 bg-cover bg-center" style={{ backgroundImage: "url('/banner.jpg')" }}>
      <div className="bg-black/80 min-h-screen">
        {/* Header */}
        <header className="text-center py-20">
          <motion.h1 className="text-4xl md:text-6xl font-bold" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Ganesh Lakshmana
          </motion.h1>
          <motion.p className="text-lg md:text-2xl mt-4 text-blue-300" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            Data Analyst & Data Engineer | Turning complex datasets into actionable insights and solutions.
          </motion.p>
          <motion.img src="/profile.jpg" alt="Ganesh Lakshmana" className="w-32 h-32 rounded-full mx-auto mt-6 border-4 border-blue-400 shadow-lg" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5 }} />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-6">
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
              <FileDown size={18} /> Download Resume
            </a>
          </motion.div>
        </header>

        {/* Other sections... */}

      </div>
    </div>
  );
}
