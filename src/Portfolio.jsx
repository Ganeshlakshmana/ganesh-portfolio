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

        {/* About Me */}
        <motion.section className="px-6 md:px-20 py-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">About Me</h2>
          <p className="mb-4">I’m Ganesh Lakshmana — a driven and detail-oriented Data Analyst with a deep-rooted passion for uncovering insights from data and building systems that scale. With a background in full-stack development and experience in automating data pipelines, I bring a hybrid skill set that bridges engineering precision with analytical intuition.</p>
          <p className="mb-4">Currently pursuing my Master's in Data Science at IU International University of Applied Sciences, I specialize in data engineering, big data technologies, and cloud-based solutions. What excites me most is turning raw, chaotic datasets into meaningful narratives that empower decision-makers and improve lives. I thrive in fast-paced, collaborative environments where data is at the heart of innovation.</p>
        </motion.section>

        {/* Skills */}
        <motion.section className="px-6 md:px-20 py-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">Skills</h2>
          <ul className="grid md:grid-cols-3 gap-4 text-lg text-gray-200">
            <li>✔️ Python (Pandas, NumPy, Scikit-learn)</li>
            <li>✔️ SQL, PostgreSQL, MySQL</li>
            <li>✔️ Shell Scripting, Bash</li>
            <li>✔️ Apache Airflow, Apache Kafka</li>
            <li>✔️ Docker, Kubernetes (basics)</li>
            <li>✔️ ETL/ELT Pipelines (manual + orchestrated)</li>
            <li>✔️ AWS S3, Lambda, EC2</li>
            <li>✔️ Google BigQuery, Snowflake (familiar)</li>
            <li>✔️ Spark (PySpark - beginner)</li>
            <li>✔️ Matplotlib, Seaborn, Plotly</li>
            <li>✔️ Power BI (basics), Excel</li>
            <li>✔️ Jupyter Notebook, VS Code</li>
            <li>✔️ Git, GitHub, GitHub Actions</li>
            <li>✔️ CI/CD fundamentals</li>
            <li>✔️ Agile/Scrum methodology</li>
          </ul>
        </motion.section>

        {/* Projects */}
        <motion.section className="px-6 md:px-20 py-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  className="bg-slate-800 border border-slate-600 hover:border-blue-500 transition duration-300 p-6 rounded-lg h-full"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h4 className="text-xl font-bold text-blue-300">{project.title}</h4>
                  <p className="mt-2 text-gray-300">{project.description}</p>
                  <span className="text-blue-400 hover:underline inline-block mt-4">
                    View Project
                  </span>
                </motion.div>
              </a>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section className="px-6 md:px-20 py-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">Contact Me</h2>
          <form action="https://formspree.io/f/xkgryybr" method="POST" className="space-y-4 bg-slate-800 p-6 rounded max-w-xl mx-auto">
            <input type="hidden" name="_next" value="/thank-you.html" />
            <input type="text" name="name" required placeholder="Your Name" className="w-full p-3 rounded bg-white text-black" />
            <input type="email" name="email" required placeholder="Your Email" className="w-full p-3 rounded bg-white text-black" />
            <textarea name="message" rows="5" required placeholder="Your Message" className="w-full p-3 rounded bg-white text-black"></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white font-semibold">
              Send Message
            </button>
          </form>
        </motion.section>

        {/* Scroll to Top Button */}
        {showTop && (
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg">
            <ArrowUp />
          </button>
        )}

        {/* Footer */}
        <footer className="text-center text-gray-300 py-6 border-t border-slate-600">
          &copy; 2025 Ganesh Lakshmana
        </footer>
      </div>
    </div>
  );
}
