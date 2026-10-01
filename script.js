:root {
  --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
  --card-bg: #1e293b;
  --card-border: #334155;
  --primary: #818cf8;
  --primary-hover: #6366f1;
  --accent: #38bdf8;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --option-bg: #0f172a;
  --option-hover: #1e1b4b;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-heading: 'Outfit', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: var(--bg-gradient);
  color: var(--text-main);
  font-family: var(--font-sans);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
}

.app-container {
  width: 100%;
  max-width: 780px;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  font-family: var(--font-heading);
  font-size: 2rem;
  color: var(--text-main);
}

.logo-icon {
  width: 36px;
  height: 36px;
  color: var(--accent);
}

.logo strong {
  color: var(--primary);
}

.tagline {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-top: 0.3rem;
}

/* Cards */
.card {
  background-color: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: 2.2rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
  animation: fadeIn 0.4s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Hero Section */
.hero-content h2 {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  line-height: 1.3;
  margin: 1rem 0 0.8rem 0;
}

.hero-content p {
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1.8rem;
}

.badge {
  background-color: rgba(129, 140, 248, 0.15);
  color: var(--primary);
  border: 1px solid rgba(129, 140, 248, 0.3);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

@media (max-width: 600px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

.feature-item {
  background-color: var(--option-bg);
  border: 1px solid var(--card-border);
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-main);
  text-align: center;
}

.feature-item i {
  color: var(--accent);
  width: 24px;
  height: 24px;
}

/* Quiz Section */
.quiz-header {
  margin-bottom: 1.8rem;
}

.progress-bar-container {
  width: 100%;
  height: 8px;
  background-color: var(--option-bg);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.8rem;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  transition: width 0.3s ease;
}

.question-counter {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 600;
}

.question-title {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.options-container {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.option-btn {
  background-color: var(--option-bg);
  border: 1px solid var(--card-border);
  color: var(--text-main);
  padding: 1rem 1.2rem;
  border-radius: 10px;
  font-size: 0.95rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.option-btn:hover {
  border-color: var(--primary);
  background-color: var(--option-hover);
  transform: translateX(4px);
}

.quiz-footer {
  margin-top: 1.8rem;
  display: flex;
  justify-content: flex-start;
}

/* Buttons */
.btn {
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: var(--primary);
  color: #fff;
  padding: 0.85rem 1.5rem;
}

.btn-primary:hover {
  background-color: var(--primary-hover);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}

.btn-large {
  width: 100%;
  padding: 1rem;
  font-size: 1.05rem;
}

.btn-secondary {
  background-color: var(--option-bg);
  color: var(--text-main);
  border: 1px solid var(--card-border);
  padding: 0.7rem 1.2rem;
}

.btn-secondary:hover {
  border-color: var(--text-muted);
}

/* Result Section */
.result-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--card-border);
}

.result-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background-color: rgba(56, 189, 248, 0.15);
  color: var(--accent);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.result-header h2 {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  color: var(--primary);
  margin-bottom: 0.6rem;
}

.result-header p {
  color: var(--text-muted);
  line-height: 1.6;
}

.result-section {
  margin-bottom: 1.8rem;
}

.result-section h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-main);
}

.careers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.career-card {
  background-color: var(--option-bg);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  padding: 1.2rem;
}

.career-card h4 {
  color: var(--accent);
  font-size: 1rem;
  margin-bottom: 0.4rem;
}

.career-card p {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.4;
}

.courses-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.courses-list li {
  background-color: var(--option-bg);
  border: 1px solid var(--card-border);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--text-main);
}

.steps-box {
  background-color: var(--option-bg);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  padding: 1.2rem 1.5rem;
}

.action-steps {
  padding-left: 1.2rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.7;
}

.result-actions {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.hidden {
  display: none !important;
}

/* Footer */
.footer {
  text-align: center;
  color: var(--text-muted);
  font-size: 0.8rem;
  margin-top: 1.8rem;
}
