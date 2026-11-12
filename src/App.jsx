import { useState } from 'react';
import FlexCarousel from './components/FlexCarousel';
import './App.css';

const B = import.meta.env.BASE_URL;
const projects = [
  { img: 'p1.png', title: 'Udemy Course Recommender', tag: 'Streamlit · Python · PostgreSQL', desc: 'End-to-end pipeline for 3,600+ courses with a TF-IDF recommender and an analytics dashboard.', url: 'https://udemy-courses-recommendation-system.streamlit.app/' },
  { img: 'p2.jpg', title: 'Finnova Finance Training App', tag: 'Flutter · Real-time data', desc: 'Finance learning app with live market data, calculators and a paper-trading feature.', url: 'https://github.com/Whirls19/Finnova' },
  { img: 'p3.png', title: 'Jobs Search Analysis', tag: 'SQL · PostgreSQL', desc: 'Advanced SQL on 2023 job postings to find in-demand skills and hiring trends.', url: 'https://github.com/Whirls19/SQL-Jobs-Search-Project' },
  { img: 'p4.png', title: 'Airplanes vs Wildlife', tag: 'Tableau', desc: 'U.S. wildlife strike data: incident frequency, damage and trends over time.', url: 'https://public.tableau.com/app/profile/aman.rukhsar/viz/AirplanesVs_Wildlife/Dashboard1' },
  { img: 'p5.png', title: 'NYC Tree Census', tag: 'Tableau', desc: 'Interactive dashboards on species diversity, tree health and geography.', url: 'https://public.tableau.com/app/profile/aman.rukhsar/viz/TreesNYC_17580032183300/Dashboard' },
  { img: 'p6.png', title: 'Nashville Housing Cleaning', tag: 'SQL Server', desc: 'Standardised dates, filled missing addresses, split fields and removed duplicates.', url: 'https://github.com/Whirls19/Nashville-Housing-Data-Cleaning-and-Analysis' },
  { img: 'p7.png', title: 'COVID-19 Vaccination Analysis', tag: 'SQL Server', desc: 'Coverage metrics and trends using aggregation, cleaning and integrity checks.', url: 'https://github.com/Whirls19/COVID-19-Vaccination-Data-Analysis' },
  { img: 'p8.png', title: 'Customer Churn Analysis', tag: 'Python · Pandas · Seaborn', desc: 'EDA on telecom churn data to find the factors behind customer retention.', url: 'https://github.com/Whirls19/Customer-Churn-Analysis' }
];
const items = projects.map(p => ({ src: `${B}projects/${p.img}`, alt: p.title, title: p.title, subtitle: p.tag }));
const skills = ['Python', 'SQL', 'PostgreSQL', 'Power BI', 'Tableau', 'Looker Studio', 'Grafana', 'Excel', 'Streamlit', 'Machine Learning', 'Deep Learning', 'Web Scraping', 'Flutter'];

export default function App() {
  const [i, setI] = useState(0);
  const p = projects[i];
  return (
    <>
      <nav className="nav"><a href="#top">AR</a><div><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div></nav>
      <header id="top" className="hero">
        <p className="eyebrow">Data Analyst · Christ University, Bangalore</p>
        <h1>Aman<br />Rukhsar</h1>
        <p className="sub">Analytics, insights, strategies. I turn raw data into things people can act on.</p>
        <a className="btn" href="#work">See my work</a>
      </header>
      <section id="work" className="work">
        <h2>Selected work</h2>
        <p className="hint">Drag, scroll or use the arrow keys. Click the centre card to zoom.</p>
        <div className="stage">
          <FlexCarousel items={items} preset="liquid" intro="rise" cardHeight={0.5} fit="landscape" gap={12} onChange={setI} />
        </div>
        <div className="info" key={i}>
          <p>{p.desc}</p>
          <a className="btn small" href={p.url} target="_blank" rel="noreferrer">View project ↗</a>
        </div>
      </section>
      <div className="marquee"><div>{[...skills, ...skills].map((s, k) => <span key={k}>{s}</span>)}</div></div>
      <section id="about" className="about">
        <h2>About</h2>
        <p>I am a BCA graduate and data analyst who likes finding the story inside a messy dataset. I work in Python and SQL, build dashboards in Power BI, Tableau and Grafana, and I am moving deeper into machine learning, including a first-author paper on neural networks for financial forecasting.</p>
      </section>
      <footer id="contact" className="contact">
        <h2>Let's talk</h2>
        <div><a href="mailto:aman.rukhsar.19@gmail.com">aman.rukhsar.19@gmail.com</a><a href="https://www.linkedin.com/in/aman-rukhsar/">LinkedIn</a><a href="https://github.com/Whirls19?tab=repositories">GitHub</a></div>
        <small>© 2026 Aman Rukhsar</small>
      </footer>
    </>
  );
}
