const { useState } = React;

// Mock Data
const mockDoctors = [
    { id: 1, name: "Dr. Sarah Johnson", specialization: "Cardiologist", hospital: "City General Hospital", rating: 4.8, availability: ["10:00 AM", "2:00 PM", "4:00 PM"] },
    { id: 2, name: "Dr. Michael Chen", specialization: "Neurologist", hospital: "St. Mary's Medical Center", rating: 4.9, availability: ["9:00 AM", "11:00 AM", "3:00 PM"] },
    { id: 3, name: "Dr. Emily Williams", specialization: "Pediatrician", hospital: "Children's Health Center", rating: 4.7, availability: ["10:30 AM", "1:00 PM", "4:30 PM"] },
    { id: 4, name: "Dr. James Brown", specialization: "Orthopedic", hospital: "Sports Medicine Institute", rating: 4.6, availability: ["8:00 AM", "12:00 PM", "2:30 PM"] },
    { id: 5, name: "Dr. Lisa Anderson", specialization: "Dermatologist", hospital: "Skin Care Clinic", rating: 4.8, availability: ["9:30 AM", "1:30 PM", "3:30 PM"] },
    { id: 6, name: "Dr. Robert Taylor", specialization: "General Physician", hospital: "Family Health Center", rating: 4.5, availability: ["8:30 AM", "11:30 AM", "4:00 PM"] }
];

const mockHospitals = [
    { id: 1, name: "City General Hospital", address: "123 Main St", emergency: true, bedsAvailable: 45, rating: 4.5 },
    { id: 2, name: "St. Mary's Medical Center", address: "456 Oak Ave", emergency: true, bedsAvailable: 30, rating: 4.8 },
    { id: 3, name: "Children's Health Center", address: "789 Pine St", emergency: false, bedsAvailable: 15, rating: 4.6 },
    { id: 4, name: "Sports Medicine Institute", address: "321 Elm St", emergency: false, bedsAvailable: 20, rating: 4.4 }
];

const mockTimeline = [
    { id: 1, date: "2026-03-10", type: "Blood Test", title: "Comprehensive Metabolic Panel", result: "Normal" },
    { id: 2, date: "2026-02-15", type: "Doctor Appointment", title: "Checkup with Dr. Sarah Johnson", result: "Completed" },
    { id: 3, date: "2026-01-05", type: "Prescription Upload", title: "Amoxicillin 500mg", result: "Added to records" }
];

const mockFamily = [
    { id: 1, name: "John Doe", relation: "Father", age: 65 },
    { id: 2, name: "Jane Doe", relation: "Mother", age: 62 },
    { id: 3, name: "Jimmy Doe", relation: "Child", age: 12 }
];

const mockLabs = [
    { id: 1, name: "Complete Blood Count", type: "Blood Test", price: "$50" },
    { id: 2, name: "MRI Brain", type: "Imaging", price: "$500" },
    { id: 3, name: "Chest X-Ray", type: "Imaging", price: "$100" }
];

// Navigation Component
const Navigation = ({ user, onLogout, onNavigate }) => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo" onClick={() => onNavigate('/')}>
                    Health<span>Connect</span> AI
                </div>
                <div className="nav-links">
                    <a onClick={() => onNavigate('/')}>Home</a>
                    <a onClick={() => onNavigate('/symptoms')}>Symptom Checker</a>
                    <a onClick={() => onNavigate('/home-cure')}>Home Cure Assistant</a>
                    <a onClick={() => onNavigate('/symptom-test')}>AI Test</a>
                    <a onClick={() => onNavigate('/doctors')}>Doctors</a>
                    <a onClick={() => onNavigate('/hospitals')}>Hospitals</a>
                    {user ? (
                        <>
                            <a onClick={() => onNavigate('/appointments')}>Appointments</a>
                            <a onClick={() => onNavigate('/teleconsultation')}>Teleconsultation</a>
                            <a onClick={() => onNavigate('/lab-tests')}>Lab Tests</a>
                            <a onClick={() => onNavigate('/health-timeline')}>Health Timeline</a>
                            <a onClick={() => onNavigate('/emergency-profile')} style={{ color: 'var(--danger)', fontWeight: 'bold' }}>Emergency Profile</a>
                            <a onClick={() => onNavigate('/dashboard')}>Dashboard</a>
                            <button onClick={onLogout} className="btn btn-outline">Logout</button>
                        </>
                    ) : (
                        <>
                            <a onClick={() => onNavigate('/login')} className="btn btn-outline">Login</a>
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
            <div className="footer-content">
                <p>&copy; 2026 HealthConnect AI. All rights reserved.</p>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                    Emergency: Call 911 for immediate medical assistance
                </p>
            </div>
        </footer>
    );
};

// Home Page
const HomePage = ({ onNavigate }) => {
    return (
        <div className="container">
            <div className="hero" style={{
                display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)',
                gap: '2rem', alignItems: 'center', textAlign: 'left', padding: '3rem 4rem',
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: 'white', borderRadius: 'var(--border-radius)'
            }}>
                <div>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>Your AI-Powered <br /> Healthcare Assistant</h1>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>Find the right doctor, check symptoms, and manage your health seamlessly in India.</p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <button onClick={() => onNavigate('/symptom-test')} className="btn btn-primary" style={{ background: 'var(--accent)', color: 'white', border: 'none' }}>
                            Start AI Symptom Test
                        </button>
                        <button onClick={() => onNavigate('/symptoms')} className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
                            Quick Symptom Check
                        </button>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    <img src="./doctor.png" alt="Indian Doctor helping patient" style={{ width: '100%', maxWidth: '450px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', objectFit: 'cover', height: '350px' }} />
                </div>
            </div>

            <h2 style={{ textAlign: 'center', margin: '4rem 0 2rem' }}>Our Services</h2>
            <div className="grid">
                <div className="card" onClick={() => onNavigate('/home-cure')} style={{ cursor: 'pointer' }}>
                    <div className="feature-icon">🏠</div>
                    <h3>Home Cure Assistant</h3>
                    <p>Treat minor health issues safely at home with AI-guided remedies.</p>
                </div>
                <div className="card" onClick={() => onNavigate('/teleconsultation')} style={{ cursor: 'pointer' }}>
                    <div className="feature-icon">💻</div>
                    <h3>Telemedicine</h3>
                    <p>Consult with doctors remotely via video and chat.</p>
                </div>
                <div className="card" onClick={() => onNavigate('/lab-tests')} style={{ cursor: 'pointer' }}>
                    <div className="feature-icon">🧪</div>
                    <h3>Lab Tests</h3>
                    <p>Book diagnostic tests like MRI, CBC, and X-Rays easily.</p>
                </div>
                <div className="card" onClick={() => onNavigate('/pharmacy')} style={{ cursor: 'pointer' }}>
                    <div className="feature-icon">💊</div>
                    <h3>Pharmacy</h3>
                    <p>Order medicines online and upload your prescriptions.</p>
                </div>
                <div className="card" onClick={() => onNavigate('/health-timeline')} style={{ cursor: 'pointer' }}>
                    <div className="feature-icon">📅</div>
                    <h3>Smart Timeline</h3>
                    <p>View your complete chronological medical history.</p>
                </div>
                <div className="card" onClick={() => onNavigate('/health-library')} style={{ cursor: 'pointer' }}>
                    <div className="feature-icon">📚</div>
                    <h3>Health Library</h3>
                    <p>Access educational resources and disease prevention guides.</p>
                </div>
                <div className="card" onClick={() => onNavigate('/health-programs')} style={{ cursor: 'pointer' }}>
                    <div className="feature-icon">🏃‍♂️</div>
                    <h3>Health Programs</h3>
                    <p>Join guided programs for weight loss and diabetes tracking.</p>
                </div>
                <div className="card" onClick={() => onNavigate('/family-members')} style={{ cursor: 'pointer' }}>
                    <div className="feature-icon">👨‍👩‍👧‍👦</div>
                    <h3>Family Health</h3>
                    <p>Manage medical records and appointments for your family.</p>
                </div>
                <div className="card" onClick={() => onNavigate('/insurance')} style={{ cursor: 'pointer' }}>
                    <div className="feature-icon">🛡️</div>
                    <h3>Insurance integration</h3>
                    <p>Upload your policy to check coverage and claim assistance.</p>
                </div>
            </div>

            <h2 style={{ textAlign: 'center', margin: '4rem 0 2rem' }}>Nearby Healthcare Facilities</h2>
            <div className="card" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', marginBottom: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr' }} onClick={() => onNavigate('/health-map')}>
                <div style={{ background: '#e5e3df', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s' }} onMouseOver={(e) => e.currentTarget.style.background = '#d5d3cf'} onMouseOut={(e) => e.currentTarget.style.background = '#e5e3df'}>
                    <div style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '4rem' }}>🗺️</span>
                        <h3 style={{ margin: '1rem 0 0.5rem' }}>Interactive Health Map</h3>
                        <p style={{ color: '#555', maxWidth: '300px', margin: '0 auto' }}>Navigate locally to hospitals, clinics, and pharmacies with real-time routing.</p>
                        <button className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Open Full Map</button>
                    </div>
                </div>
                <div style={{ height: '400px', overflow: 'hidden' }}>
                    <img src="./hospital.png" alt="Modern Indian Hospital" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        </div>
    );
};

// Login Page
const LoginPage = ({ onLogin, onNavigate }) => {
    const [formData, setFormData] = useState({ email: '', password: '', userType: 'patient' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({
            name: formData.email.split('@')[0],
            email: formData.email,
            type: formData.userType
        });
        onNavigate('/dashboard');
    };

    return (
        <div className="container">
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Login to HealthConnect AI</h2>
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Login as</label>
                            <select
                                value={formData.userType}
                                onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                            >
                                <option value="patient">Patient</option>
                                <option value="hospital">Hospital/Provider</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                            Login
                        </button>
                    </form>
                    <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                        Don't have an account? <a onClick={() => onNavigate('/register')} style={{ color: 'var(--secondary)', cursor: 'pointer' }}>Register here</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

// Register Page
const RegisterPage = ({ onLogin, onNavigate }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType: 'patient',
        age: '',
        gender: '',
        height: '',
        weight: '',
        allergies: '',
        medicalConditions: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        onLogin({
            name: formData.name,
            email: formData.email,
            type: formData.userType,
            age: formData.age,
            gender: formData.gender,
            height: formData.height,
            weight: formData.weight,
            allergies: formData.allergies,
            medicalConditions: formData.medicalConditions
        });
        onNavigate('/dashboard');
    };

    return (
        <div className="container">
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Create Account</h2>
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Register as</label>
                            <select
                                value={formData.userType}
                                onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                            >
                                <option value="patient">Patient</option>
                                <option value="hospital">Hospital/Provider</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        {formData.userType === 'patient' && (
                            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div className="form-group">
                                    <label>Age</label>
                                    <input type="number" value={formData.age} onChange={e => setFormData({ ...formData, age: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label>Gender</label>
                                    <select value={formData.gender} onChange={e => setFormData({ ...formData, gender: e.target.value })}>
                                        <option value="">Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Height (cm)</label>
                                    <input type="number" value={formData.height} onChange={e => setFormData({ ...formData, height: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label>Weight (kg)</label>
                                    <input type="number" value={formData.weight} onChange={e => setFormData({ ...formData, weight: e.target.value })} />
                                </div>
                            </div>
                        )}
                        {formData.userType === 'patient' && (
                            <>
                                <div className="form-group">
                                    <label>Medical Conditions</label>
                                    <input type="text" placeholder="e.g. Asthma, Diabetes" value={formData.medicalConditions} onChange={e => setFormData({ ...formData, medicalConditions: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label>Allergies</label>
                                    <input type="text" placeholder="e.g. Peanuts, Penicillin" value={formData.allergies} onChange={e => setFormData({ ...formData, allergies: e.target.value })} />
                                </div>
                            </>
                        )}
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                            Register
                        </button>
                    </form>
                    <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                        Already have an account? <a onClick={() => onNavigate('/login')} style={{ color: 'var(--secondary)', cursor: 'pointer' }}>Login here</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

// AI Symptom Triage Test Page
const SymptomTriageTestPage = ({ onNavigate }) => {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({
        symptom: "",
        duration: "",
        severity: 5,
        associated: [],
        history: ""
    });
    const [analysis, setAnalysis] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleNext = () => {
        if (step < 5) setStep(step + 1);
        else analyzeData();
    };

    const handlePrev = () => {
        if (step > 1) setStep(step - 1);
    };

    const analyzeData = () => {
        setLoading(true);
        setTimeout(() => {
            const specializations = {
                'chest': 'Cardiologist', 'heart': 'Cardiologist',
                'head': 'Neurologist', 'migraine': 'Neurologist',
                'skin': 'Dermatologist', 'rash': 'Dermatologist',
                'joint': 'Orthopedic', 'bone': 'Orthopedic'
            };

            let spec = 'General Physician';
            for (const [key, value] of Object.entries(specializations)) {
                if (answers.symptom.toLowerCase().includes(key)) {
                    spec = value;
                    break;
                }
            }

            const riskScore = Math.min(100, (parseInt(answers.severity) || 0) * 12 + (answers.duration === 'days' ? 20 : answers.duration === 'weeks' ? 25 : 10));
            const urgency = riskScore >= 70 ? 'High' : riskScore >= 40 ? 'Medium' : 'Low';

            const resultObj = {
                specialization: spec,
                condition: spec === 'Cardiologist' ? 'Possible Cardiac Issue / Respiratory Infection' : spec === 'Neurologist' ? 'Possible Migraine / Neurological Issue' : spec === 'Dermatologist' ? 'Skin Infection / Allergic Reaction' : spec === 'Orthopedic' ? 'Musculoskeletal Strain' : 'General Viral/Bacterial Disease',
                riskScore,
                urgency,
                recommendations: [
                    `Severity Level: ${answers.severity}/10`,
                    `Duration: ${answers.duration || 'Not specified'}`,
                    `Priority: ${urgency}`,
                    `Associated Symptoms: ${answers.associated.join(', ') || 'None'}`
                ]
            };
            setAnalysis(resultObj);
            localStorage.setItem('triageResult', JSON.stringify(resultObj));
            setLoading(false);
        }, 1500);
    };

    const handleReset = () => {
        setStep(1);
        setAnswers({ symptom: "", duration: "", severity: 5, associated: [], history: "" });
        setAnalysis(null);
    };

    const progressPercentage = (step / 5) * 100;

    if (analysis) {
        return (
            <div className="container">
                <h2 style={{ marginBottom: '2rem' }}>AI Triage Results</h2>
                <div className="card" style={{ borderTop: analysis.urgency === 'High' ? '4px solid var(--danger)' : analysis.urgency === 'Medium' ? '4px solid var(--warning)' : '4px solid var(--success)' }}>
                    <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {analysis.urgency === 'High' ? '🚨' : analysis.urgency === 'Medium' ? '⚠️' : '✅'} Assessment Complete
                    </h3>

                    <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                        <div>
                            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}><strong>Possible Condition:</strong></p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--primary)' }}>{analysis.condition}</p>
                        </div>
                        <div>
                            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}><strong>Severity Level:</strong></p>
                            <p style={{
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                color: analysis.urgency === 'High' ? 'var(--danger)' : analysis.urgency === 'Medium' ? 'var(--warning)' : 'var(--success)'
                            }}>
                                {analysis.urgency} Action Required
                            </p>
                        </div>
                    </div>

                    <div style={{ background: 'var(--light)', padding: '1.5rem', borderRadius: 'var(--border-radius)', marginBottom: '2rem' }}>
                        <h4 style={{ marginBottom: '1rem' }}>Recommended Specialist</h4>
                        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--dark)' }}>{analysis.specialization}</p>
                        <p style={{ marginTop: '0.5rem', color: '#666' }}>Based on your symptoms, we highly recommend consulting a {analysis.specialization.toLowerCase()}.</p>
                    </div>

                    {analysis.urgency === 'High' && (
                        <div className="alert alert-danger" style={{ marginBottom: '2rem' }}>
                            <strong>URGENT:</strong> Please seek immediate medical attention or visit the nearest hospital emergency room.
                        </div>
                    )}

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <button onClick={() => onNavigate('/recommended-doctors')} className="btn btn-primary" style={{ flex: 1, minWidth: '200px' }}>
                            Find {analysis.specialization}s
                        </button>
                        <button onClick={() => onNavigate('/hospitals')} className={analysis.urgency === 'High' ? "btn btn-danger" : "btn btn-outline"} style={{ flex: 1, minWidth: '200px' }}>
                            Find Nearby Hospital
                        </button>
                        <button onClick={handleReset} className="btn btn-secondary">
                            Retake Test
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>AI Symptom Triage Assessment</h2>

            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
            </div>

            <div className="step-indicator">
                <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Main Symptom</div>
                <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Duration</div>
                <div className={`step ${step >= 3 ? 'active' : ''}`}>3. Severity</div>
                <div className={`step ${step >= 4 ? 'active' : ''}`}>4. Associated</div>
                <div className={`step ${step >= 5 ? 'active' : ''}`}>5. History</div>
            </div>

            <div className="card">
                {step === 1 && (
                    <>
                        <h3>What's your main symptom?</h3>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="e.g., Chest pain, headache, fever..."
                            value={answers.symptom}
                            onChange={(e) => setAnswers({ ...answers, symptom: e.target.value })}
                            style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: 'var(--border-radius)' }}
                        />
                    </>
                )}

                {step === 2 && (
                    <>
                        <h3>How long have you had this?</h3>
                        <div className="radio-group">
                            {['minutes', 'hours', 'days', 'weeks'].map(option => (
                                <label key={option}>
                                    <input
                                        type="radio"
                                        name="duration"
                                        value={option}
                                        checked={answers.duration === option}
                                        onChange={(e) => setAnswers({ ...answers, duration: e.target.value })}
                                    />
                                    {option.charAt(0).toUpperCase() + option.slice(1)}
                                </label>
                            ))}
                        </div>
                    </>
                )}

                {step === 3 && (
                    <>
                        <h3>Rate your pain/severity (1-10)</h3>
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={answers.severity}
                            onChange={(e) => setAnswers({ ...answers, severity: parseInt(e.target.value) })}
                            style={{ width: '100%', marginBottom: '1rem' }}
                        />
                        <p style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>{answers.severity}/10</p>
                    </>
                )}

                {step === 4 && (
                    <>
                        <h3>Any associated symptoms?</h3>
                        {['fever', 'fatigue', 'nausea', 'dizziness'].map(symptom => (
                            <label key={symptom} style={{ display: 'block', margin: '0.75rem 0', cursor: 'pointer' }}>
                                <input
                                    type="checkbox"
                                    checked={answers.associated.includes(symptom)}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setAnswers({ ...answers, associated: [...answers.associated, symptom] });
                                        } else {
                                            setAnswers({ ...answers, associated: answers.associated.filter(s => s !== symptom) });
                                        }
                                    }}
                                />
                                {' ' + symptom.charAt(0).toUpperCase() + symptom.slice(1)}
                            </label>
                        ))}
                    </>
                )}

                {step === 5 && (
                    <>
                        <h3>Any relevant medical history?</h3>
                        <textarea
                            placeholder="e.g., Diabetes, high blood pressure..."
                            rows="4"
                            value={answers.history}
                            onChange={(e) => setAnswers({ ...answers, history: e.target.value })}
                            style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: 'var(--border-radius)', fontFamily: 'inherit' }}
                        />
                    </>
                )}

                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', justifyContent: 'space-between' }}>
                    <button
                        onClick={handlePrev}
                        disabled={step === 1}
                        className="btn btn-outline"
                        style={{ flex: 1 }}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={!answers.symptom && step === 1}
                        className="btn btn-primary"
                        style={{ flex: 1 }}
                    >
                        {step === 5 ? 'Get Results' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
};

// Quick Symptom Checker Page
const QuickSymptomCheckerPage = ({ onNavigate }) => {
    const [symptoms, setSymptoms] = useState('');
    const [analysis, setAnalysis] = useState(null);
    const [loading, setLoading] = useState(false);

    const analyzeSymptoms = (symptoms) => {
        const symptomLower = symptoms.toLowerCase();

        if (symptomLower.includes('chest') || symptomLower.includes('heart') || symptomLower.includes('breath')) {
            return {
                specialization: 'Cardiologist',
                condition: 'Cardiac or Respiratory Distress',
                urgency: 'High',
                recommendations: ['Visit nearest emergency room immediately', 'Avoid physical exertion']
            };
        } else if (symptomLower.includes('head') || symptomLower.includes('migraine') || symptomLower.includes('dizzy')) {
            return {
                specialization: 'Neurologist',
                condition: 'Neurological Symptom / Migraine',
                urgency: 'Medium',
                recommendations: ['Rest in dark room', 'Stay hydrated', 'Consult neurologist']
            };
        } else if (symptomLower.includes('skin') || symptomLower.includes('rash') || symptomLower.includes('itch')) {
            return {
                specialization: 'Dermatologist',
                condition: 'Dermatological Reaction',
                urgency: 'Low',
                recommendations: ['Avoid scratching', 'Use gentle skin products', 'Book dermatology appointment']
            };
        } else if (symptomLower.includes('pain') || symptomLower.includes('joint') || symptomLower.includes('bone')) {
            return {
                specialization: 'Orthopedic',
                condition: 'Musculoskeletal Strain',
                urgency: 'Medium',
                recommendations: ['Rest affected area', 'Apply ice if swollen', 'Consult orthopedic specialist']
            };
        } else {
            return {
                specialization: 'General Physician',
                condition: 'General Viral/Bacterial Issue',
                urgency: 'Low',
                recommendations: ['Monitor symptoms', 'Rest adequately', 'Consult general physician']
            };
        }
    };

    const handleAnalyze = () => {
        setLoading(true);
        setTimeout(() => {
            const result = analyzeSymptoms(symptoms);
            setAnalysis(result);
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Quick Symptom Checker</h2>
            <div className="grid">
                <div className="card">
                    <h3>Describe Your Symptoms</h3>
                    <textarea
                        className="symptom-input"
                        rows="6"
                        placeholder="Describe your symptoms in detail..."
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                    />
                    <button
                        onClick={handleAnalyze}
                        className="btn btn-primary"
                        disabled={!symptoms || loading}
                        style={{ width: '100%' }}
                    >
                        {loading ? 'Analyzing...' : 'Analyze Symptoms'}
                    </button>
                </div>

                {analysis && (
                    <div className="card" style={{ borderTop: analysis.urgency === 'High' ? '4px solid var(--danger)' : analysis.urgency === 'Medium' ? '4px solid var(--warning)' : '4px solid var(--success)' }}>
                        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {analysis.urgency === 'High' ? '🚨' : analysis.urgency === 'Medium' ? '⚠️' : '✅'} Rapid Analysis Complete
                        </h3>

                        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <div>
                                <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}><strong>Possible Condition:</strong></p>
                                <p style={{ fontSize: '1.1rem', color: 'var(--primary)' }}>{analysis.condition}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}><strong>Severity Level:</strong></p>
                                <p style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    color: analysis.urgency === 'High' ? 'var(--danger)' : analysis.urgency === 'Medium' ? 'var(--warning)' : 'var(--success)'
                                }}>
                                    {analysis.urgency} Action Required
                                </p>
                            </div>
                        </div>

                        <div style={{ background: 'var(--light)', padding: '1.5rem', borderRadius: 'var(--border-radius)', marginBottom: '1.5rem' }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>Recommended Specialist</h4>
                            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--dark)' }}>{analysis.specialization}</p>
                        </div>

                        {analysis.urgency === 'High' && (
                            <div className="alert alert-danger" style={{ marginBottom: '1.5rem' }}>
                                <strong>URGENT:</strong> Please seek immediate medical attention or visit the nearest hospital emergency room.
                            </div>
                        )}

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <button onClick={() => onNavigate('/doctors')} className="btn btn-primary" style={{ flex: 1 }}>
                                Find {analysis.specialization}
                            </button>
                            <button onClick={() => onNavigate('/hospitals')} className={analysis.urgency === 'High' ? "btn btn-danger" : "btn btn-outline"} style={{ flex: 1 }}>
                                Find Nearby Hospitals
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Home Cure Assistant Page
const HomeCureAssistantPage = ({ onNavigate }) => {
    const [symptoms, setSymptoms] = useState('');
    const [duration, setDuration] = useState('Less than 1 day');
    const [severity, setSeverity] = useState('Mild');
    const [condition, setCondition] = useState('No');
    const [treatment, setTreatment] = useState('');
    const [medicineImage, setMedicineImage] = useState(null);
    const [output, setOutput] = useState(null);

    const analyzeSymptoms = () => {
        const symptomsLower = symptoms.toLowerCase();

        if (symptomsLower.includes("chest pain") ||
            symptomsLower.includes("breathing") ||
            severity === "Severe" ||
            duration === "More than 3 days") {
            setOutput({
                type: 'warning',
                content: `
                    <div class="warning">
                        ⚠ Serious symptoms detected.
                        Please consult a doctor immediately.
                        Emergency Actions:
                        • Visit nearest hospital
                        • Contact emergency services
                        • Book doctor consultation
                    </div>
                `
            });
            return;
        }

        let remedies = "";
        let conditionLevel = "Mild Condition";
        let medicine = "Paracetamol";

        if (symptomsLower.includes("cough") || symptomsLower.includes("cold")) {
            remedies = `
                <h3>Recommended Home Remedies</h3>
                <ul>
                    <li>Warm steam inhalation</li>
                    <li>Drink ginger tea</li>
                    <li>Honey with warm water</li>
                    <li>Stay hydrated</li>
                </ul>
            `;
        } else if (symptomsLower.includes("fever")) {
            remedies = `
                <h3>Recommended Home Remedies</h3>
                <ul>
                    <li>Drink plenty of fluids</li>
                    <li>Take rest</li>
                    <li>Cold compress</li>
                </ul>
            `;
        } else if (symptomsLower.includes("headache")) {
            remedies = `
                <h3>Recommended Home Remedies</h3>
                <ul>
                    <li>Rest in a dark room</li>
                    <li>Drink water</li>
                    <li>Light head massage</li>
                </ul>
            `;
        } else {
            remedies = `
                <h3>Recommended Home Remedies</h3>
                <ul>
                    <li>Rest properly</li>
                    <li>Drink warm fluids</li>
                    <li>Monitor symptoms</li>
                </ul>
            `;
        }

        setOutput({
            type: 'result',
            content: `
                <div class="result">
                    <h2>Condition Assessment</h2>
                    <p><b>Condition Level:</b> ${conditionLevel}</p>
                    <p><b>Possible Cause:</b> Common viral symptoms</p>
                    ${remedies}
                    <h3>Medicine Guidance</h3>
                    <p><b>Detected Medicine:</b> ${medicine}</p>
                    <p>Suggested dosage: 1 tablet after meals if fever persists.</p>
                </div>
            `
        });
    };

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center', color: '#1e88e5', marginBottom: '1rem' }}>Home Cure Assistant</h1>
            <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Treat minor health problems safely at home</p>

            <div className="card">
                <h3>Step 1 — Enter Symptoms</h3>

                <label style={{ fontWeight: 'bold', display: 'block', marginTop: '10px' }}>Describe your symptoms</label>
                <textarea
                    id="symptoms"
                    placeholder="Example: cough, mild fever, sore throat"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginTop: '5px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        fontFamily: 'inherit'
                    }}
                />

                <label style={{ fontWeight: 'bold', display: 'block', marginTop: '10px' }}>Duration of symptoms</label>
                <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginTop: '5px',
                        borderRadius: '5px',
                        border: '1px solid #ccc'
                    }}
                >
                    <option>Less than 1 day</option>
                    <option>1-3 days</option>
                    <option>More than 3 days</option>
                </select>

                <label style={{ fontWeight: 'bold', display: 'block', marginTop: '10px' }}>Severity level</label>
                <select
                    value={severity}
                    onChange={(e) => setSeverity(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginTop: '5px',
                        borderRadius: '5px',
                        border: '1px solid #ccc'
                    }}
                >
                    <option>Mild</option>
                    <option>Moderate</option>
                    <option>Severe</option>
                </select>

                <label style={{ fontWeight: 'bold', display: 'block', marginTop: '10px' }}>Existing medical condition</label>
                <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginTop: '5px',
                        borderRadius: '5px',
                        border: '1px solid #ccc'
                    }}
                >
                    <option>No</option>
                    <option>Diabetes</option>
                    <option>Heart disease</option>
                    <option>Asthma</option>
                </select>

                <label style={{ fontWeight: 'bold', display: 'block', marginTop: '10px' }}>Previous treatment taken?</label>
                <input
                    type="text"
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    placeholder="Example: paracetamol"
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginTop: '5px',
                        borderRadius: '5px',
                        border: '1px solid #ccc'
                    }}
                />
            </div>

            <div className="card">
                <h3>Step 2 — Upload Medicine Photo</h3>
                <p>Capture a clear photo of the medicine package.</p>
                <ul>
                    <li>medicine name visible</li>
                    <li>dosage information</li>
                    <li>expiry date</li>
                    <li>back label details</li>
                </ul>
                <input
                    type="file"
                    onChange={(e) => setMedicineImage(e.target.files[0])}
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginTop: '5px',
                        borderRadius: '5px',
                        border: '1px solid #ccc'
                    }}
                />
            </div>

            <button
                onClick={analyzeSymptoms}
                style={{
                    marginTop: '20px',
                    padding: '12px 20px',
                    background: '#1e88e5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    width: '100%'
                }}
                onMouseOver={(e) => e.target.style.background = '#1565c0'}
                onMouseOut={(e) => e.target.style.background = '#1e88e5'}
            >
                Analyze Health
            </button>

            {output && (
                <div
                    style={{ marginTop: '20px' }}
                    dangerouslySetInnerHTML={{ __html: output.content }}
                />
            )}
        </div>
    );
};

// Doctors Page
const DoctorsPage = ({ onNavigate }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpecialization, setSelectedSpecialization] = useState('all');
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    // Booking Wizard State
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [bookingStep, setBookingStep] = useState(1); // 1: Profile, 2: Date, 3: Time, 4: Confirm
    const [bookingData, setBookingData] = useState({ date: '', time: '' });

    React.useEffect(() => {
        fetch('http://localhost:8000/api/doctors/')
            .then(res => res.json())
            .then(data => {
                setDoctors(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching doctors:", err);
                // Fallback to mock data if backend fails
                setDoctors(mockDoctors);
                setLoading(false);
            });
    }, []);

    const specializations = ['all', ...new Set(doctors.map(d => d.specialization))];

    const filteredDoctors = doctors.filter(doctor => {
        // Map backend names if user array doesn't match mock exactly
        const docName = doctor.user ? `Dr. ${doctor.user.first_name} ${doctor.user.last_name}` : doctor.name;

        const matchesSearch = docName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialization = selectedSpecialization === 'all' ||
            doctor.specialization === selectedSpecialization;
        return matchesSearch && matchesSpecialization;
    });

    const handleBookingConfirm = () => {
        alert(`Appointment Confirmed for ${bookingData.date} at ${bookingData.time}!`);
        setSelectedDoctor(null);
        setBookingStep(1);
        setBookingData({ date: '', time: '' });
        onNavigate('/appointments');
    };

    if (selectedDoctor) {
        const docName = selectedDoctor.user ? `Dr. ${selectedDoctor.user.first_name} ${selectedDoctor.user.last_name}` : selectedDoctor.name;
        return (
            <div className="container">
                <button className="btn btn-outline" style={{ marginBottom: '2rem' }} onClick={() => { setSelectedDoctor(null); setBookingStep(1); }}>
                    &larr; Back to Doctors
                </button>

                <div className="grid" style={{ gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                    <div className="card">
                        <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>👨‍⚕️</div>
                        <h2 style={{ textAlign: 'center' }}>{docName}</h2>
                        <p style={{ textAlign: 'center', color: 'var(--primary)', fontWeight: 'bold' }}>{selectedDoctor.specialization}</p>
                        <hr style={{ margin: '1rem 0' }} />
                        <p><strong>Hospital:</strong> {selectedDoctor.hospital}</p>
                        <p><strong>Experience:</strong> {selectedDoctor.experience || '10+ Years'}</p>
                        <p><strong>Qualification:</strong> {selectedDoctor.qualification || 'MBBS, MD'}</p>
                        <p><strong>Consultation Fee:</strong> ${selectedDoctor.consultation_fee || '150'}</p>
                        <p><strong>Rating:</strong> ⭐ {selectedDoctor.rating}/5</p>
                    </div>

                    <div className="card">
                        {bookingStep === 1 && (
                            <div>
                                <h3>About {docName}</h3>
                                <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
                                    {selectedDoctor.bio || 'An experienced and compassionate specialist dedicated to providing the highest quality of patient care. Specializes in advanced diagnostics and comprehensive treatment plans.'}
                                </p>
                                <h4 style={{ marginTop: '1.5rem' }}>Availability Today</h4>
                                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                                    {(Array.isArray(selectedDoctor.availability) ? selectedDoctor.availability : []).map(time => (
                                        <span key={time} style={{ padding: '0.5rem 1rem', background: 'var(--light)', borderRadius: 'var(--border-radius)', fontSize: '0.9rem' }}>{time}</span>
                                    ))}
                                </div>
                                <button className="btn btn-primary" style={{ marginTop: '2rem', width: '100%' }} onClick={() => setBookingStep(2)}>
                                    Book Appointment
                                </button>
                            </div>
                        )}

                        {bookingStep === 2 && (
                            <div>
                                <h3>Step 1: Select Date</h3>
                                <div style={{ marginTop: '1.5rem' }}>
                                    <input
                                        type="date"
                                        style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', border: '1px solid #ddd', borderRadius: 'var(--border-radius)' }}
                                        value={bookingData.date}
                                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                    <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => setBookingStep(1)}>Back</button>
                                    <button className="btn btn-primary" style={{ flex: 1 }} disabled={!bookingData.date} onClick={() => setBookingStep(3)}>Next</button>
                                </div>
                            </div>
                        )}

                        {bookingStep === 3 && (
                            <div>
                                <h3>Step 2: Select Time Slot</h3>
                                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
                                    {['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'].map(time => (
                                        <button
                                            key={time}
                                            className={bookingData.time === time ? 'btn btn-primary' : 'btn btn-outline'}
                                            onClick={() => setBookingData({ ...bookingData, time })}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                    <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => setBookingStep(2)}>Back</button>
                                    <button className="btn btn-primary" style={{ flex: 1 }} disabled={!bookingData.time} onClick={() => setBookingStep(4)}>Review Booking</button>
                                </div>
                            </div>
                        )}

                        {bookingStep === 4 && (
                            <div>
                                <h3>Step 3: Confirm Booking</h3>
                                <div style={{ background: 'var(--light)', padding: '1.5rem', borderRadius: 'var(--border-radius)', marginTop: '1.5rem' }}>
                                    <p><strong>Doctor:</strong> {docName}</p>
                                    <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
                                    <p><strong>Date:</strong> {bookingData.date}</p>
                                    <p><strong>Time:</strong> {bookingData.time}</p>
                                    <p><strong>Consultation Fee:</strong> ${selectedDoctor.consultation_fee || '150'}</p>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                                    <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => setBookingStep(3)}>Back</button>
                                    <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleBookingConfirm}>Confirm Appointment</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Find a Doctor</h2>

            <div className="card" style={{ marginBottom: '2rem' }}>
                <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                    <input
                        type="text"
                        placeholder="Search by doctor name or hospital..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ padding: '0.75rem', borderRadius: 'var(--border-radius)', border: '1px solid #ddd' }}
                    />
                    <select
                        value={selectedSpecialization}
                        onChange={(e) => setSelectedSpecialization(e.target.value)}
                        style={{ padding: '0.75rem', borderRadius: 'var(--border-radius)', border: '1px solid #ddd' }}
                    >
                        {specializations.map(spec => (
                            <option key={spec} value={spec}>
                                {spec === 'all' ? 'All Specializations' : spec}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid">
                {loading ? <p>Loading doctors...</p> : filteredDoctors.map(doctor => {
                    const docName = doctor.user ? `Dr. ${doctor.user.first_name} ${doctor.user.last_name}` : doctor.name;
                    return (
                        <div key={doctor.id} className="card">
                            <h3>{docName}</h3>
                            <p><strong>Specialization:</strong> {doctor.specialization}</p>
                            <p><strong>Hospital:</strong> {doctor.hospital}</p>
                            <p><strong>Rating:</strong> ⭐ {doctor.rating}/5</p>
                            <p><strong>Available Today:</strong> {Array.isArray(doctor.availability) ? doctor.availability.join(', ') : 'Not Available'}</p>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button onClick={() => { setSelectedDoctor(doctor); setBookingStep(1); }} className="btn btn-outline" style={{ flex: 1 }}>
                                    View Profile
                                </button>
                                <button onClick={() => { setSelectedDoctor(doctor); setBookingStep(2); }} className="btn btn-primary" style={{ flex: 1 }}>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// Hospitals Page
const HospitalsPage = ({ onNavigate }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
    const [hospitals, setHospitals] = useState([]);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        fetch('http://localhost:8000/api/hospitals/')
            .then(res => res.json())
            .then(data => {
                setHospitals(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching hospitals:", err);
                setHospitals(mockHospitals); // fallback to mock
                setLoading(false);
            });
    }, []);

    const filteredHospitals = hospitals.filter(hospital => {
        const matchesSearch = hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            hospital.address.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesEmergency = !showEmergencyOnly || hospital.emergency_services || hospital.emergency;
        return matchesSearch && matchesEmergency;
    });

    return (
        <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Find Hospitals</h2>

            <div className="card" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <input
                        type="text"
                        placeholder="Search hospitals by name or location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ flex: 1, minWidth: '200px', padding: '0.75rem', borderRadius: 'var(--border-radius)', border: '1px solid #ddd' }}
                    />
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input
                            type="checkbox"
                            checked={showEmergencyOnly}
                            onChange={(e) => setShowEmergencyOnly(e.target.checked)}
                        />
                        Emergency Services Only
                    </label>
                </div>
            </div>

            <div className="grid">
                {loading ? <p>Loading hospitals...</p> : filteredHospitals.map(hospital => (
                    <div key={hospital.id} className="card">
                        <h3>{hospital.name}</h3>
                        <p><strong>Address:</strong> {hospital.address}</p>
                        <p>
                            <strong>Emergency:</strong>
                            {hospital.emergency || hospital.emergency_services ? '✅ Available 24/7' : '❌ Not Available'}
                        </p>
                        <p><strong>Beds Available:</strong> {hospital.beds_available ?? hospital.bedsAvailable}</p>
                        <p><strong>Rating:</strong> ⭐ {hospital.rating}/5</p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <button onClick={() => onNavigate('/appointments')} className="btn btn-primary" style={{ flex: 1 }}>
                                Book Appointment
                            </button>
                            {(hospital.emergency || hospital.emergency_services) && (
                                <button className="btn btn-danger" style={{ flex: 1 }}>
                                    Emergency
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Appointments Page
const AppointmentsPage = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState('upcoming');

    // Combine some mock data to show different states
    const [appointments, setAppointments] = useState([
        { id: 1, doctor: "Dr. Sarah Johnson", date: "2026-03-20", time: "10:00 AM", status: "Upcoming", priority: "Low" },
        { id: 2, doctor: "Dr. Michael Chen", date: "2026-03-24", time: "2:00 PM", status: "Upcoming", priority: "Medium" },
        { id: 3, doctor: "Dr. Emily Wong", date: "2026-03-10", time: "11:30 AM", status: "Completed", priority: "Low" },
        { id: 4, doctor: "Dr. James Brown", date: "2026-03-05", time: "09:15 AM", status: "Cancelled", priority: "Medium" }
    ]);

    const filteredAppointments = appointments.filter(app => app.status.toLowerCase() === activeTab);

    return (
        <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Appointment Dashboard</h2>

            <div className="card" style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', padding: '0.5rem' }}>
                <button
                    className={`btn ${activeTab === 'upcoming' ? 'btn-primary' : 'btn-outline'}`}
                    style={{ flex: 1, border: 'none', background: activeTab === 'upcoming' ? 'var(--primary)' : 'transparent', color: activeTab === 'upcoming' ? 'white' : 'inherit' }}
                    onClick={() => setActiveTab('upcoming')}
                >
                    Upcoming
                </button>
                <button
                    className={`btn ${activeTab === 'completed' ? 'btn-primary' : 'btn-outline'}`}
                    style={{ flex: 1, border: 'none', background: activeTab === 'completed' ? 'var(--primary)' : 'transparent', color: activeTab === 'completed' ? 'white' : 'inherit' }}
                    onClick={() => setActiveTab('completed')}
                >
                    Completed
                </button>
                <button
                    className={`btn ${activeTab === 'cancelled' ? 'btn-primary' : 'btn-outline'}`}
                    style={{ flex: 1, border: 'none', background: activeTab === 'cancelled' ? 'var(--primary)' : 'transparent', color: activeTab === 'cancelled' ? 'white' : 'inherit' }}
                    onClick={() => setActiveTab('cancelled')}
                >
                    Cancelled
                </button>
            </div>

            <div className="grid">
                {filteredAppointments.length === 0 ? (
                    <div className="card" style={{ textAlign: 'center', padding: '3rem', gridColumn: '1 / -1' }}>
                        <p style={{ color: '#666' }}>No appointments found in this category.</p>
                        {activeTab === 'upcoming' && (
                            <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => onNavigate('/doctors')}>
                                Book New Appointment
                            </button>
                        )}
                    </div>
                ) : (
                    filteredAppointments.map(appointment => (
                        <div key={appointment.id} className="card">
                            <h3>{appointment.doctor}</h3>
                            <p><strong>Date:</strong> {appointment.date}</p>
                            <p><strong>Time:</strong> {appointment.time}</p>
                            <p><strong>Priority Level:</strong>
                                <span style={{
                                    color: appointment.priority === 'High' ? 'var(--danger)' : appointment.priority === 'Medium' ? 'var(--warning)' : 'var(--success)',
                                    fontWeight: 'bold', marginLeft: '0.5rem'
                                }}>
                                    {appointment.priority}
                                </span>
                            </p>
                            <p>
                                <strong>Status:</strong>
                                <span style={{
                                    color: appointment.status === 'Completed' ? 'var(--success)' : appointment.status === 'Cancelled' ? 'var(--danger)' : 'var(--primary)',
                                    fontWeight: 'bold', marginLeft: '0.5rem'
                                }}>
                                    {appointment.status}
                                </span>
                            </p>
                            {activeTab === 'upcoming' && (
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                                    <button className="btn btn-outline" style={{ flex: 1 }}>Reschedule</button>
                                    <button
                                        className="btn btn-outline"
                                        style={{ flex: 1, color: 'var(--danger)', borderColor: 'var(--danger)' }}
                                        onClick={() => {
                                            if (window.confirm('Are you sure you want to cancel this appointment?')) {
                                                setAppointments(appointments.map(a => a.id === appointment.id ? { ...a, status: 'Cancelled' } : a));
                                            }
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                            {activeTab === 'completed' && (
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                                    <button className="btn btn-outline" style={{ flex: 1 }}>View Report</button>
                                    <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => onNavigate('/doctors')}>Book Again</button>
                                </div>
                            )}
                            {activeTab === 'cancelled' && (
                                <button className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%' }} onClick={() => onNavigate('/doctors')}>
                                    Re-book Appointment
                                </button>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

// Dashboard Page
const DashboardPage = ({ user, onNavigate }) => {
    const [healthRecords] = useState([
        { id: 1, date: "2026-03-15", type: "Blood Test", doctor: "Dr. Sarah Johnson", result: "Normal" },
        { id: 2, date: "2026-03-10", type: "X-Ray", doctor: "Dr. James Brown", result: "Pending" }
    ]);

    return (
        <div className="container">
            <h2>Welcome back, {user?.name}!</h2>

            <div className="grid" style={{ marginTop: '2rem' }}>
                <div className="card">
                    <h3>Health Summary</h3>
                    <p><strong>Upcoming Appointments:</strong> 2</p>
                    <p><strong>Medical Records:</strong> {healthRecords.length}</p>
                    <p><strong>Last Visit:</strong> 2026-03-15</p>
                </div>

                <div className="card">
                    <h3>Quick Actions</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <button onClick={() => onNavigate('/symptom-test')} className="btn btn-primary">Check Symptoms</button>
                        <button onClick={() => onNavigate('/doctors')} className="btn btn-outline">Find Doctors</button>
                        <button onClick={() => onNavigate('/appointments')} className="btn btn-outline">View Appointments</button>
                    </div>
                </div>
            </div>

            <div className="card" style={{ marginTop: '2rem' }}>
                <h3>Recent Medical Records</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #ddd' }}>
                            <th style={{ textAlign: 'left', padding: '1rem' }}>Date</th>
                            <th style={{ textAlign: 'left', padding: '1rem' }}>Type</th>
                            <th style={{ textAlign: 'left', padding: '1rem' }}>Doctor</th>
                            <th style={{ textAlign: 'left', padding: '1rem' }}>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {healthRecords.map(record => (
                            <tr key={record.id} style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '1rem' }}>{record.date}</td>
                                <td style={{ padding: '1rem' }}>{record.type}</td>
                                <td style={{ padding: '1rem' }}>{record.doctor}</td>
                                <td style={{ padding: '1rem' }}>{record.result}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// New Features

const RecommendedDoctorsPage = ({ onNavigate }) => {
    const [triageData, setTriageData] = useState(null);
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('triageResult');
        if (saved) {
            const parsed = JSON.parse(saved);
            setTriageData(parsed);

            // Filter by specialization, sort by rating and availability
            const filtered = mockDoctors
                .filter(d => d.specialization === parsed.specialization)
                .sort((a, b) => {
                    const scoreA = a.rating + (a.availability.length * 0.1);
                    const scoreB = b.rating + (b.availability.length * 0.1);
                    return scoreB - scoreA;
                })
                .slice(0, 3); // top 3
            setDoctors(filtered);
        }
    }, []);

    return (
        <div className="container">
            <h2 style={{ marginBottom: '1rem' }}>Recommended Doctors</h2>
            {triageData && (
                <div className="alert alert-warning" style={{ marginBottom: '2rem' }}>
                    <strong>Based on your symptoms:</strong> We recommend seeing a {triageData.specialization}.
                </div>
            )}

            {doctors.length === 0 ? (
                <p>No doctors found matching this specialization.</p>
            ) : (
                <div className="grid">
                    {doctors.map(doctor => (
                        <div key={doctor.id} className="card" style={{ borderTop: '4px solid var(--secondary)' }}>
                            <h3>{doctor.name}</h3>
                            <p><strong>Specialization:</strong> {doctor.specialization}</p>
                            <p><strong>Hospital:</strong> {doctor.hospital}</p>
                            <p><strong>AI Score:</strong> ⭐ {doctor.rating}/5</p>
                            <p><strong>Availability:</strong> {doctor.availability.join(', ')}</p>
                            <button onClick={() => onNavigate('/appointments')} className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                                Book Priority Appointment
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const HealthTimelinePage = () => {
    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2>Smart Health Timeline & Vault</h2>
                <button className="btn btn-primary" onClick={() => alert('Record uploaded successfully to your vault!')}>
                    + Upload Record
                </button>
            </div>

            <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem', background: 'var(--light)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ fontSize: '2rem' }}>☁️</div>
                <div style={{ flex: 1 }}>
                    <h3 style={{ marginBottom: '0.5rem' }}>Secure Health Vault</h3>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>Upload prescriptions, lab reports, and scans. AI will automatically organize them into your timeline.</p>
                </div>
                <div>
                    <input type="file" id="recordUpload" style={{ display: 'none' }} onChange={() => alert('File selected!')} />
                    <label htmlFor="recordUpload" className="btn btn-outline" style={{ cursor: 'pointer' }}>Select File</label>
                </div>
            </div>

            <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '3px solid var(--secondary)' }}>
                {mockTimeline.map(item => (
                    <div key={item.id} className="card" style={{ marginBottom: '1.5rem', position: 'relative' }}>
                        <div style={{
                            position: 'absolute', left: '-2.6rem', top: '1.5rem',
                            width: '1rem', height: '1rem', borderRadius: '50%',
                            background: 'var(--secondary)', border: '4px solid var(--white)',
                            boxShadow: '0 0 0 2px var(--secondary)'
                        }}></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{item.date}</h3>
                                <h4 style={{ marginBottom: '0.5rem' }}>{item.type}</h4>
                                <p style={{ color: '#444' }}>{item.title}</p>
                            </div>
                            <span style={{
                                padding: '0.25rem 0.75rem',
                                borderRadius: 'var(--border-radius)',
                                fontSize: '0.85rem',
                                background: item.type === 'Diagnosis' ? '#e3f2fd' : item.type === 'Lab Test' ? '#f3e5f5' : '#e8f5e9',
                                color: item.type === 'Diagnosis' ? '#1565c0' : item.type === 'Lab Test' ? '#7b1fa2' : '#2e7d32'
                            }}>
                                {item.result}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TeleconsultationPage = ({ onNavigate }) => {
    const [callState, setCallState] = useState('waiting'); // waiting, active, ended
    const [chat, setChat] = useState([]);
    const [message, setMessage] = useState('');

    const startCall = () => setCallState('active');
    const endCall = () => setCallState('ended');

    const sendMessage = () => {
        if (!message) return;
        setChat([...chat, { sender: 'You', text: message }]);
        setMessage('');
        setTimeout(() => {
            setChat(prev => [...prev, { sender: 'Dr. John Doe', text: 'I understand. Let\'s review your symptoms.' }]);
        }, 1000);
    };

    if (callState === 'ended') {
        return (
            <div className="container">
                <h2 style={{ marginBottom: '2rem' }}>Consultation Summary</h2>
                <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📝</div>
                    <h3>Consultation Completed</h3>
                    <p style={{ margin: '1rem 0' }}>The doctor has generated your electronic prescription and clinical notes.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                        <button className="btn btn-primary" onClick={() => onNavigate('/health-timeline')}>View in Timeline</button>
                        <button className="btn btn-outline" onClick={() => onNavigate('/pharmacy')}>Order Medicines</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2>Telemedicine Consultation</h2>
                {callState === 'active' && (
                    <span style={{ padding: '0.25rem 0.75rem', background: '#ffebee', color: '#c62828', borderRadius: 'var(--border-radius)', fontWeight: 'bold' }}>
                        🔴 Live
                    </span>
                )}
            </div>

            <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '1rem', height: '500px' }}>
                <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#111', color: '#fff', position: 'relative' }}>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {callState === 'waiting' ? (
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🩺</div>
                                <h3>Waiting for Dr. John Doe...</h3>
                                <button className="btn btn-primary" style={{ marginTop: '1.5rem' }} onClick={startCall}>Mock Doctor Join</button>
                            </div>
                        ) : (
                            <div style={{ position: 'relative', width: '100%', height: '100%', background: '#333' }}>
                                {/* Doctor Video Mock */}
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                                    <div style={{ fontSize: '6rem' }}>👨‍⚕️</div>
                                    <p style={{ marginTop: '1rem' }}>Dr. John Doe</p>
                                </div>
                                {/* PIP User Video Mock */}
                                <div style={{ position: 'absolute', bottom: '20px', right: '20px', width: '120px', height: '160px', background: '#000', border: '2px solid white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ fontSize: '3rem' }}>👤</div>
                                </div>
                            </div>
                        )}
                    </div>
                    {callState === 'active' && (
                        <div style={{ padding: '1rem', background: '#000', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <button className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff', background: 'transparent' }}>🎤 Mute</button>
                            <button className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff', background: 'transparent' }}>📹 Video Stop</button>
                            <button className="btn btn-danger" onClick={endCall}>📞 End Call</button>
                        </div>
                    )}
                </div>

                <div className="card" style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Live Chat</h3>
                    <div style={{ flex: 1, border: '1px solid #ddd', borderRadius: 'var(--border-radius)', padding: '1rem', marginBottom: '1rem', background: 'var(--light)', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <p style={{ fontSize: '0.8rem', color: '#666', textAlign: 'center', marginBottom: '1rem' }}>Secure end-to-end encrypted chat</p>
                        {chat.map((msg, idx) => (
                            <div key={idx} style={{
                                alignSelf: msg.sender === 'You' ? 'flex-end' : 'flex-start',
                                background: msg.sender === 'You' ? 'var(--primary)' : '#e0e0e0',
                                color: msg.sender === 'You' ? '#fff' : '#333',
                                padding: '0.5rem 1rem', borderRadius: '1rem', maxWidth: '80%'
                            }}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            style={{ flex: 1, padding: '0.6rem', border: '1px solid #ddd', borderRadius: 'var(--border-radius)' }}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                            disabled={callState !== 'active'}
                        />
                        <button className="btn btn-primary" onClick={sendMessage} disabled={callState !== 'active'}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LabTestsPage = () => {
    const [bookingState, setBookingState] = useState({}); // { testId: 'date' }

    const handleBook = (testId, name) => {
        if (!bookingState[testId]) {
            alert('Please select a date first.');
            return;
        }
        alert(`Successfully booked ${name} for ${bookingState[testId]}! You will receive a confirmation shortly.`);
        setBookingState({ ...bookingState, [testId]: '' });
    };

    return (
        <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Book Diagnostic Tests</h2>
            <div className="grid">
                {mockLabs.map(lab => (
                    <div key={lab.id} className="card">
                        <h3>{lab.name}</h3>
                        <p><strong>Type:</strong> {lab.type}</p>
                        <p><strong>Price:</strong> {lab.price}</p>
                        <div style={{ marginTop: '1rem', padding: '1rem', background: 'var(--light)', borderRadius: 'var(--border-radius)' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Select Date</label>
                            <input
                                type="date"
                                style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: 'var(--border-radius)' }}
                                value={bookingState[lab.id] || ''}
                                onChange={(e) => setBookingState({ ...bookingState, [lab.id]: e.target.value })}
                                min={new Date().toISOString().split('T')[0]}
                            />
                            <button
                                className="btn btn-primary"
                                style={{ width: '100%' }}
                                onClick={() => handleBook(lab.id, lab.name)}
                            >
                                Book Home Collection
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const HealthMapPage = () => {
    return (
        <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Nearby Healthcare Facilities</h2>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ background: '#e5e3df', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '3rem' }}>🗺️</span>
                        <h3>Interactive Map Placeholder</h3>
                        <p>Shows Hospitals, Clinics, and Pharmacies near you (Requires Maps API integration)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EmergencyProfilePage = () => {
    return (
        <div className="container">
            <h2 style={{ marginBottom: '2rem', color: 'var(--danger)' }}>Emergency Health Profile</h2>
            <div className="card" style={{ border: '2px solid var(--danger)' }}>
                <h3>Critical Information</h3>
                <p>This profile is visible to emergency responders instantly.</p>
                <form style={{ marginTop: '1.5rem' }}>
                    <div className="grid" style={{ gap: '1rem', marginTop: 0 }}>
                        <div className="form-group">
                            <label>Blood Group</label>
                            <input type="text" defaultValue="O+" />
                        </div>
                        <div className="form-group">
                            <label>Allergies</label>
                            <input type="text" defaultValue="Penicillin, Peanuts" />
                        </div>
                        <div className="form-group">
                            <label>Chronic Diseases</label>
                            <input type="text" defaultValue="Asthma" />
                        </div>
                        <div className="form-group">
                            <label>Current Medications</label>
                            <input type="text" defaultValue="Albuterol Inhaler" />
                        </div>
                        <div className="form-group">
                            <label>Emergency Contact Name</label>
                            <input type="text" defaultValue="Jane Doe" />
                        </div>
                        <div className="form-group">
                            <label>Emergency Contact Phone</label>
                            <input type="text" defaultValue="555-0199" />
                        </div>
                    </div>
                    <button type="button" className="btn btn-danger" style={{ marginTop: '1rem' }}>Save Emergency Profile</button>
                </form>
            </div>
        </div>
    );
};

const PharmacyPage = () => {
    const [cart, setCart] = useState([]);
    const [checkoutState, setCheckoutState] = useState('idle'); // idle, validating, success, rejected

    const medicines = [
        { id: 1, name: 'Paracetamol 500mg', desc: 'Fever and Pain Relief', price: 5.00, requiresPrescription: false },
        { id: 2, name: 'Amoxicillin 250mg', desc: 'Antibiotic', price: 12.50, requiresPrescription: true },
        { id: 3, name: 'Vitamin C', desc: 'Immunity Booster', price: 8.00, requiresPrescription: false }
    ];

    const addToCart = (med) => setCart([...cart, med]);

    const handleCheckout = () => {
        const needsPrescription = cart.some(item => item.requiresPrescription);

        if (needsPrescription) {
            setCheckoutState('validating');
            setTimeout(() => {
                // Mock AI Validation randomly passing/failing or just passing for demo
                const isApproved = Math.random() > 0.3; // 70% pass rate
                if (isApproved) {
                    setCheckoutState('success');
                    setCart([]);
                } else {
                    setCheckoutState('rejected');
                }
            }, 2500);
        } else {
            setCheckoutState('success');
            setCart([]);
        }
    };

    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2>Smart E-Pharmacy</h2>
                {cart.length > 0 && (
                    <button className="btn btn-primary" onClick={handleCheckout} disabled={checkoutState === 'validating'}>
                        Checkout ({cart.length} items) - ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                    </button>
                )}
            </div>

            {checkoutState === 'validating' && (
                <div className="card" style={{ textAlign: 'center', marginBottom: '2rem', border: '2px solid var(--secondary)' }}>
                    <div className="spinner"></div>
                    <h3>AI Prescription Validation</h3>
                    <p>Verifying prescription details for restricted medicines (e.g. Antibiotics)...</p>
                </div>
            )}

            {checkoutState === 'success' && (
                <div className="card" style={{ textAlign: 'center', marginBottom: '2rem', background: '#e8f5e9', color: '#2e7d32' }}>
                    <h3>✅ Order Confirmed</h3>
                    <p>Your medicines will be delivered in 2 hours.</p>
                    <button className="btn btn-outline" style={{ marginTop: '1rem' }} onClick={() => setCheckoutState('idle')}>Continue Shopping</button>
                </div>
            )}

            {checkoutState === 'rejected' && (
                <div className="card" style={{ textAlign: 'center', marginBottom: '2rem', background: '#ffebee', color: '#c62828' }}>
                    <h3>❌ Prescription Invalid</h3>
                    <p>The AI could not verify a valid prescription for antibiotics in your health vault. Please consult a doctor first.</p>
                    <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => { setCheckoutState('idle'); setCart([]); }}>Clear Cart & Try Again</button>
                </div>
            )}

            <div className="card" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <input type="text" placeholder="Search for medicines..." style={{ flex: 1, padding: '0.75rem', borderRadius: 'var(--border-radius)', border: '1px solid #ddd' }} />
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>

            <div className="grid">
                {medicines.map(med => (
                    <div key={med.id} className="card" style={{ position: 'relative' }}>
                        {med.requiresPrescription && (
                            <span style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--warning)', color: '#fff', padding: '0.2rem 0.5rem', fontSize: '0.7rem', borderRadius: '4px' }}>
                                Rx Required
                            </span>
                        )}
                        <h3>{med.name}</h3>
                        <p style={{ color: '#666' }}>{med.desc}</p>
                        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '0.5rem 0' }}>${med.price.toFixed(2)}</p>
                        <button className="btn btn-outline" style={{ width: '100%', marginTop: '1rem' }} onClick={() => addToCart(med)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const HealthLibraryPage = () => {
    return (
        <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Health Education Hub</h2>
            <div className="grid">
                <div className="card">
                    <div style={{ fontSize: '2rem' }}>❤️</div>
                    <h3>Heart Health</h3>
                    <p>Learn about cardiovascular disease prevention and care.</p>
                    <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read Articles</button>
                </div>
                <div className="card">
                    <div style={{ fontSize: '2rem' }}>🩸</div>
                    <h3>Diabetes Management</h3>
                    <p>Tips for managing blood sugar and diet.</p>
                    <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read Articles</button>
                </div>
                <div className="card">
                    <div style={{ fontSize: '2rem' }}>🧠</div>
                    <h3>Mental Health</h3>
                    <p>Resources for stress, anxiety, and mental well-being.</p>
                    <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read Articles</button>
                </div>
            </div>
        </div>
    );
};

const FamilyMembersPage = ({ onNavigate }) => {
    const [members, setMembers] = useState(mockFamily);
    const [showForm, setShowForm] = useState(false);
    const [newMember, setNewMember] = useState({ name: '', relation: '', age: '' });

    const handleAdd = (e) => {
        e.preventDefault();
        setMembers([...members, { ...newMember, id: Date.now() }]);
        setShowForm(false);
        setNewMember({ name: '', relation: '', age: '' });
    };

    return (
        <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Family Health Management</h2>
            <button className="btn btn-primary" style={{ marginBottom: '2rem' }} onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancel' : '+ Add Family Member'}
            </button>

            {showForm && (
                <div className="card" style={{ marginBottom: '2rem' }}>
                    <h3>Add New Family Member</h3>
                    <form onSubmit={handleAdd}>
                        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                            <div className="form-group">
                                <label>Name</label>
                                <input required type="text" value={newMember.name} onChange={e => setNewMember({ ...newMember, name: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Relation (e.g. Father, Child)</label>
                                <input required type="text" value={newMember.relation} onChange={e => setNewMember({ ...newMember, relation: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Age</label>
                                <input required type="number" value={newMember.age} onChange={e => setNewMember({ ...newMember, age: e.target.value })} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-secondary">Save Member</button>
                    </form>
                </div>
            )}

            <div className="grid">
            
                {members.map(member => (
                    <div key={member.id} className="card" style={{ position: 'relative' }}>
                        <button className="btn btn-danger" style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.25rem 0.5rem', fontSize: '0.8rem' }} onClick={() => alert('Emergency access activated for ' + member.name)}>
                            Emergency Access
                        </button>
                        <h3 style={{ paddingRight: '100px' }}>{member.name}</h3>
                        <p><strong>Relation:</strong> {member.relation}</p>
                        <p><strong>Age:</strong> {member.age}</p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                            <button className="btn btn-outline" style={{ flex: 1 }}>Health Records</button>
                            <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => onNavigate('/appointments')}>Book Appt</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const HealthProgramsPage = () => {
    return (
        <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Preventive Health Programs</h2>
            <div className="grid">
                <div className="card">
                    <h3>Weight Loss Program</h3>
                    <p>Includes diet suggestions, exercise plan, and monthly doctor consultation.</p>
                    <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Join Program</button>
                </div>
                <div className="card">
                    <h3>Diabetes Prevention</h3>
                    <p>Track your vitals, get nutrition planning, and continuous monitoring.</p>
                    <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Join Program</button>
                </div>
            </div>
        </div>
    );
};

const InsurancePage = () => {
    return (
        <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Health Insurance Integration</h2>
            <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                <span style={{ fontSize: '3rem' }}>🛡️</span>
                <h3>No Active Policies Found</h3>
                <p>Upload your health insurance policy to check hospital coverage and claim assistance.</p>
                <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Upload Policy Document</button>
            </div>
        </div>
    );
};

// Main App Component
const App = () => {
    const [user, setUser] = useState(null);
    const [history, setHistory] = useState(['/']);

    const currentPage = history[history.length - 1] || '/';

    const handleLogin = (userData) => {
        setUser(userData);
    };

    const handleLogout = () => {
        setUser(null);
        setHistory(['/']);
    };

    const navigate = (page) => {
        setHistory(prev => [...prev, page]);
        window.scrollTo(0, 0);
    };

    const goBack = () => {
        setHistory(prev => prev.length > 1 ? prev.slice(0, -1) : prev);
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        // Protected routes
        if (['/appointments', '/dashboard'].includes(currentPage) && !user) {
            navigate('/login');
            return <LoginPage onLogin={handleLogin} onNavigate={navigate} />;
        }

        switch (currentPage) {
            case '/':
                return <HomePage onNavigate={navigate} />;
            case '/login':
                return <LoginPage onLogin={handleLogin} onNavigate={navigate} />;
            case '/register':
                return <RegisterPage onLogin={handleLogin} onNavigate={navigate} />;
            case '/symptom-test':
                return <SymptomTriageTestPage onNavigate={navigate} />;
            case '/symptoms':
                return <QuickSymptomCheckerPage onNavigate={navigate} />;
            case '/home-cure':
                return <HomeCureAssistantPage onNavigate={navigate} />;
            case '/doctors':
                return <DoctorsPage onNavigate={navigate} />;
            case '/recommended-doctors':
                return <RecommendedDoctorsPage onNavigate={navigate} />;
            case '/health-timeline':
                return <HealthTimelinePage onNavigate={navigate} />;
            case '/teleconsultation':
                return <TeleconsultationPage onNavigate={navigate} />;
            case '/lab-tests':
                return <LabTestsPage onNavigate={navigate} />;
            case '/health-map':
                return <HealthMapPage onNavigate={navigate} />;
            case '/emergency-profile':
                return <EmergencyProfilePage onNavigate={navigate} />;
            case '/pharmacy':
                return <PharmacyPage onNavigate={navigate} />;
            case '/health-library':
                return <HealthLibraryPage onNavigate={navigate} />;
            case '/family-members':
                return <FamilyMembersPage onNavigate={navigate} />;
            case '/health-programs':
                return <HealthProgramsPage onNavigate={navigate} />;
            case '/insurance':
                return <InsurancePage onNavigate={navigate} />;
            case '/hospitals':
                return <HospitalsPage onNavigate={navigate} />;
            case '/appointments':
                return <AppointmentsPage onNavigate={navigate} />;
            case '/dashboard':
                return <DashboardPage user={user} onNavigate={navigate} />;
            default:
                return <HomePage onNavigate={navigate} />;
        }
    };

    return (
        <div className="app">
            <Navigation user={user} onLogout={handleLogout} onNavigate={navigate} />

            {/* Global Back Button */}
            {currentPage !== '/' && !['/login', '/register'].includes(currentPage) && (
                <div style={{ maxWidth: '1200px', margin: '1rem auto 0 auto', padding: '0 2rem', width: '100%' }}>
                    <button onClick={goBack} className="btn" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.5rem 1rem', border: '1px solid #ddd',
                        background: 'var(--white)', color: 'var(--dark)',
                        fontWeight: '500', borderRadius: 'var(--border-radius)', cursor: 'pointer'
                    }}>
                        &larr; Back
                    </button>
                </div>
            )}

            {renderPage()}
            <Footer />
        </div>
    );
};

// Render
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
