const { useState, useEffect } = React;

// Mock Data
const mockDoctors = [
    { id: 1, name: "Dr. Sanjay Deshmukh", specialization: "Radiology", hospital: "Lifeline Hospital", rating: 4.7, fee: 800 },
    { id: 2, name: "Dr. Manjusha Deshmukh", specialization: "Obstetrics", hospital: "Lifeline Hospital", rating: 4.8, fee: 700 }
];

const mockHospitals = [
    { id: 1, name: "Lifeline Hospital", address: "Pandharpur", rating: 4.7, bedsAvailable: 50 },
    { id: 2, name: "Dr Nikam's Hospital", address: "Pandharpur", rating: 4.5, bedsAvailable: 35 }
];

// Navigation Component
const Navigation = ({ user, onLogout, onNavigate }) => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo" onClick={() => onNavigate('/')}>🏥 CurePoint</div>
                <div className="nav-links">
                    <a onClick={() => onNavigate('/')}>Home</a>
                    <a onClick={() => onNavigate('/doctors')}>Doctors</a>
                    <a onClick={() => onNavigate('/hospitals')}>Hospitals</a>
                    <a onClick={() => onNavigate('/symptoms')}>Symptoms</a>
                    {user ? (
                        <>
                            <a onClick={() => onNavigate('/dashboard')}>Dashboard</a>
                            <button onClick={onLogout} className="btn btn-outline">Logout</button>
                        </>
                    ) : (
                        <>
                            <a href="login.html" className="btn btn-outline">Login</a>
                            <a onClick={() => onNavigate('/register')} className="btn btn-primary">Register</a>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2026 CurePoint. All rights reserved.</p>
        </footer>
    );
};

// Home Page
const HomePage = ({ onNavigate }) => {
    return (
        <div className="container">
            <div className="hero">
                <h1>Your AI-Powered Healthcare Assistant</h1>
                <p>Find the right doctor, check symptoms, and manage your health seamlessly.</p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                    <button onClick={() => onNavigate('/symptoms')} className="btn btn-primary">Check Symptoms</button>
                    <button onClick={() => onNavigate('/doctors')} className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Find Doctors</button>
                </div>
            </div>

            <h2 style={{ textAlign: 'center', margin: '4rem 0 2rem' }}>Our Services</h2>
            <div className="grid">
                <div className="card">
                    <h3>🏠 Home Remedies</h3>
                    <p>Treat minor health issues safely at home.</p>
                </div>
                <div className="card">
                    <h3>💻 Telemedicine</h3>
                    <p>Consult with doctors remotely via video.</p>
                </div>
                <div className="card">
                    <h3>🧪 Lab Tests</h3>
                    <p>Book diagnostic tests easily.</p>
                </div>
                <div className="card">
                    <h3>💊 Pharmacy</h3>
                    <p>Order medicines online.</p>
                </div>
            </div>
        </div>
    );
};

// Doctors Page
const DoctorsPage = ({ onNavigate }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filtered = mockDoctors.filter(d => 
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Find a Doctor</h2>
            
            <div className="card" style={{ marginBottom: '2rem' }}>
                <input
                    type="text"
                    placeholder="Search doctors by name or specialization..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ padding: '0.75rem', borderRadius: 'var(--border-radius)', border: '1px solid #ddd', width: '100%' }}
                />
            </div>

            <div className="grid">
                {filtered.map(doctor => (
                    <div key={doctor.id} className="card">
                        <h3>{doctor.name}</h3>
                        <p><strong>Specialization:</strong> {doctor.specialization}</p>
                        <p><strong>Hospital:</strong> {doctor.hospital}</p>
                        <p><strong>Rating:</strong> ⭐ {doctor.rating}/5</p>
                        <p><strong>Fee:</strong> ${doctor.fee}</p>
                        <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Book Appointment</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Hospitals Page
const HospitalsPage = ({ onNavigate }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filtered = mockHospitals.filter(h =>
        h.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        h.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Find Hospitals</h2>

            <div className="card" style={{ marginBottom: '2rem' }}>
                <input
                    type="text"
                    placeholder="Search hospitals by name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ padding: '0.75rem', borderRadius: 'var(--border-radius)', border: '1px solid #ddd', width: '100%' }}
                />
            </div>

            <div className="grid">
                {filtered.map(hospital => (
                    <div key={hospital.id} className="card">
                        <h3>{hospital.name}</h3>
                        <p><strong>Address:</strong> {hospital.address}</p>
                        <p><strong>Beds Available:</strong> {hospital.bedsAvailable}</p>
                        <p><strong>Rating:</strong> ⭐ {hospital.rating}/5</p>
                        <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Book Appointment</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Symptoms Page
const SymptomsPage = ({ onNavigate }) => {
    const [symptoms, setSymptoms] = useState('');
    const [result, setResult] = useState(null);

    const analyze = () => {
        if (!symptoms) return;
        
        let specialist = 'General Physician';
        if (symptoms.toLowerCase().includes('chest') || symptoms.toLowerCase().includes('heart')) {
            specialist = 'Cardiologist';
        } else if (symptoms.toLowerCase().includes('head') || symptoms.toLowerCase().includes('migraine')) {
            specialist = 'Neurologist';
        } else if (symptoms.toLowerCase().includes('skin') || symptoms.toLowerCase().includes('rash')) {
            specialist = 'Dermatologist';
        }

        setResult({
            specialist: specialist,
            message: `Based on your symptoms, we recommend consulting a ${specialist}.`
        });
    };

    return (
        <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Symptom Checker</h2>

            <div className="card">
                <textarea
                    placeholder="Describe your symptoms..."
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    rows="6"
                    style={{ width: '100%', padding: '1rem', borderRadius: 'var(--border-radius)', border: '1px solid #ddd', marginBottom: '1rem' }}
                />
                <button onClick={analyze} className="btn btn-primary" style={{ width: '100%' }}>
                    Analyze Symptoms
                </button>
            </div>

            {result && (
                <div className="card" style={{ marginTop: '2rem', borderTop: '4px solid var(--secondary)' }}>
                    <h3>Analysis Result</h3>
                    <p><strong>Recommended Specialist:</strong> {result.specialist}</p>
                    <p>{result.message}</p>
                    <button onClick={() => onNavigate('/doctors')} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                        Find {result.specialist}
                    </button>
                </div>
            )}
        </div>
    );
};

// Register Page
const RegisterPage = ({ onLogin, onNavigate }) => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({ name: formData.name, email: formData.email });
        onNavigate('/dashboard');
    };

    return (
        <div className="container">
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Create Account</h2>
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" required value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// Dashboard Page
const DashboardPage = ({ user, onNavigate }) => {
    return (
        <div className="container">
            <h2>Welcome, {user?.name}!</h2>
            <div className="grid" style={{ marginTop: '2rem' }}>
                <div className="card">
                    <h3>Upcoming Appointments</h3>
                    <p>You have no upcoming appointments.</p>
                </div>
                <div className="card">
                    <h3>Quick Actions</h3>
                    <button onClick={() => onNavigate('/symptoms')} className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>Check Symptoms</button>
                    <button onClick={() => onNavigate('/doctors')} className="btn btn-outline" style={{ width: '100%' }}>Find Doctors</button>
                </div>
            </div>
        </div>
    );
};

// Main App
const App = () => {
    const [user, setUser] = useState(null);
    const [history, setHistory] = useState(['/']);

    useEffect(() => {
        const stored = localStorage.getItem('userProfile');
        if (stored) {
            try {
                const profile = JSON.parse(stored);
                setUser({ name: profile.name, email: '' });
            } catch (e) {
                console.error('Error loading user:', e);
            }
        }
    }, []);

    const currentPage = history[history.length - 1] || '/';

    const navigate = (page) => {
        setHistory(prev => [...prev, page]);
        window.scrollTo(0, 0);
    };

    const goBack = () => {
        setHistory(prev => prev.length > 1 ? prev.slice(0, -1) : prev);
        window.scrollTo(0, 0);
    };

    const handleLogin = (userData) => {
        setUser(userData);
    };

    const handleLogout = () => {
        setUser(null);
        setHistory(['/']);
        localStorage.removeItem('userProfile');
    };

    const renderPage = () => {
        if (['/dashboard'].includes(currentPage) && !user) {
            return <HomePage onNavigate={navigate} />;
        }

        switch (currentPage) {
            case '/':
                return <HomePage onNavigate={navigate} />;
            case '/doctors':
                return <DoctorsPage onNavigate={navigate} />;
            case '/hospitals':
                return <HospitalsPage onNavigate={navigate} />;
            case '/symptoms':
                return <SymptomsPage onNavigate={navigate} />;
            case '/register':
                return <RegisterPage onLogin={handleLogin} onNavigate={navigate} />;
            case '/dashboard':
                return <DashboardPage user={user} onNavigate={navigate} />;
            default:
                return <HomePage onNavigate={navigate} />;
        }
    };

    return (
        <div className="app">
            <Navigation user={user} onLogout={handleLogout} onNavigate={navigate} />
            
            {currentPage !== '/' && (
                <div style={{ maxWidth: '1200px', margin: '1rem auto 0', padding: '0 2rem', width: '100%' }}>
                    <button onClick={goBack} className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
                        ← Back
                    </button>
                </div>
            )}

            {renderPage()}
            <Footer />
        </div>
    );
};

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
