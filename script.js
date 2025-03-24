:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    --bg-color: #ffffff;
    --accent-bg: #f3f4f6;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
}

header {
    background-color: var(--bg-color);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

nav {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo span {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
}

nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
}

nav a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    transition: color 0.3s ease;
}

nav a:hover {
    color: var(--primary-color);
}

.hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
    background-color: var(--accent-bg);
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
}

.hero p {
    font-size: 1.25rem;
    color: #4b5563;
    margin-bottom: 2rem;
}

.cta-button {
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: var(--secondary-color);
}

.about, .contact {
    padding: 5rem 1rem;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.about {
    background-color: var(--bg-color);
}

.contact {
    background-color: var(--accent-bg);
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
}

.contact-links a {
    text-decoration: none;
    color: var(--primary-color);
    font-weight: 500;
    transition: color 0.3s ease;
}

.contact-links a:hover {
    color: var(--secondary-color);
}

footer {
    text-align: center;
    padding: 2rem 1rem;
    background-color: var(--text-color);
    color: white;
}

@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }

    nav {
        flex-direction: column;
        gap: 1rem;
    }

    nav ul {
        gap: 1rem;
    }
}
