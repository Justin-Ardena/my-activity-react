import MainLayout from '../layouts/MainLayout';

function About() {
    return (
        <MainLayout>
            <h2>About</h2>
            <h3>Who We Are</h3>
            <p>We are a team of passionate developers building modern web applications with React.</p>

            <div className="card-container">
                <div className="card">
                    <h3>Our Mission</h3>
                    <p>To deliver clean, fast, and accessible web experiences for everyone.</p>
                </div>
                <div className="card">
                    <h3>Our Vision</h3>
                    <p>To become a leading platform for interactive and intuitive web solutions.</p>
                </div>
                <div className="card">
                    <h3>Our Values</h3>
                    <p>Integrity, innovation, and collaboration are at the core of everything we do.</p>
                </div>
            </div>
        </MainLayout>
    );
}

export default About;
