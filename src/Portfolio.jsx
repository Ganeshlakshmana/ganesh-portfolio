import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileDown } from 'lucide-react';

export default function Portfolio() {
  useEffect(() => {
    document.title = "Ganesh Lakshmana - Portfolio";
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <header className="text-center py-20 relative overflow-hidden">
        <motion.h1 className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          Ganesh Lakshmana
        </motion.h1>
        <motion.p className="text-lg md:text-2xl mt-4 text-blue-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}>
          Data Analyst & Aspiring Data Engineer | Turning complex datasets into actionable insights and solutions.
        </motion.p>
        <motion.img
          src="/profile.jpg"
          alt="Ganesh Lakshmana"
          className="w-32 h-32 rounded-full mx-auto mt-6 border-4 border-blue-400 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
          >
            <FileDown size={18} /> Download Resume
          </a>
        </motion.div>
      </header>

      <section className="px-6 md:px-20 py-10">
        <motion.h2 className="text-3xl font-semibold mb-6 text-blue-400">About Me</motion.h2>
        <p className="mb-4">I’m Ganesh Lakshmana — a driven and detail-oriented Data Analyst with a deep-rooted passion for uncovering insights from data and building systems that scale. With a background in full-stack development and experience in automating data pipelines, I bring a hybrid skill set that bridges engineering precision with analytical intuition.</p>
        <p className="mb-4">Currently pursuing my Master's in Data Science at IU International University of Applied Sciences, I specialize in data engineering, big data technologies, and cloud-based solutions. What excites me most is turning raw, chaotic datasets into meaningful narratives that empower decision-makers and improve lives. I thrive in fast-paced, collaborative environments where data is at the heart of innovation.</p>
      </section>

      <section className="px-6 md:px-20 py-10">
        <motion.h2 className="text-3xl font-semibold mb-6 text-blue-400">Skills</motion.h2>
        <ul className="grid md:grid-cols-3 gap-4 text-lg text-gray-200">
          <li>✔️ Python, JavaScript (React, Node.js)</li>
          <li>✔️ SQL, PostgreSQL, MongoDB</li>
          <li>✔️ Apache Airflow, Docker</li>
          <li>✔️ Git, GitHub, Vercel</li>
          <li>✔️ TailwindCSS, Bootstrap</li>
          <li>✔️ Data Visualization (Matplotlib, Seaborn)</li>
        </ul>
      </section>

      <section className="px-6 md:px-20 py-10">
        <motion.h2 className="text-3xl font-semibold mb-6 text-blue-400">Projects</motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
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
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 border border-slate-600 hover:border-blue-500 transition duration-300 p-6 rounded-lg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h4 className="text-xl font-bold text-blue-300">{project.title}</h4>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline inline-block mt-4"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-20 py-10">
        <motion.h2 className="text-3xl font-semibold mb-6 text-blue-400">Contact</motion.h2>
        <ul className="space-y-2 text-lg">
          <li>Email: <a href="mailto:gani2001guddi@gmail.com" className="text-blue-300 hover:underline">gani2001guddi@gmail.com</a></li>
          <li className="flex items-center gap-2">
            <Linkedin size={20} /> <a href="https://www.linkedin.com/in/ganesh-lakshmana-71085b224/" target="_blank" className="text-blue-300 hover:underline">LinkedIn</a>
          </li>
          <li className="flex items-center gap-2">
            <Github size={20} /> <a href="https://github.com/Ganeshlakshmana" target="_blank" className="text-blue-300 hover:underline">GitHub</a>
          </li>
        </ul>
      </section>

      <footer className="text-center text-gray-300 py-6 border-t border-slate-600">
        &copy; 2025 Ganesh Lakshmana
      </footer>
    </div>
  );
}
