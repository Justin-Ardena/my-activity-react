import MainLayout from '../layouts/MainLayout';

function Dashboard() {
    return (
        <MainLayout>
            <h2>Dashboard</h2>
            <p>Welcome to the main dashboard.</p>

            <div className="card-container">
                <div className="card">
                    <h3>Students</h3>
                    <p>Total enrolled students and their current status.</p>
                </div>
                <div className="card">
                    <h3>Courses</h3>
                    <p>Browse and manage all available courses.</p>
                </div>
                <div className="card">
                    <h3>Reports</h3>
                    <p>View activity reports and performance summaries.</p>
                </div>
            </div>
            
        </MainLayout>
    );
}

export default Dashboard;
