function Header(){
    return(
        <header className="header">
            <h1>My React Application</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/dashboard">Dashboard</a>
            </nav>
        </header>
    );
}

export default Header;