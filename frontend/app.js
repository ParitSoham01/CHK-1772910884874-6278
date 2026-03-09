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
                    <a onClick={() => onNavigate('/symptom-test')}>AI Triage</a>
                    <a onClick={() => onNavigate('/symptoms')}>Quick Check</a>
                    <a onClick={() => onNavigate('/doctors')}>Doctors</a>
                    <a onClick={() => onNavigate('/hospitals')}>Hospitals</a>
                    {user ? (
                        <>
                            <a onClick={() => onNavigate('/appointments')}>Appointments</a>
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
            <div className="hero">
                <h1>Your AI-Powered Healthcare Assistant</h1>
                <p>Find the right doctor, check symptoms, and manage your health all in one place</p>
                <button onClick={() => onNavigate('/symptom-test')} className="btn btn-primary" style={{ marginRight: '1rem' }}>
                    Start AI Triage Test
                </button>
                <button onClick={() => onNavigate('/symptoms')} className="btn btn-outline">
                    Quick Symptom Check
                </button>
            </div>

            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Services</h2>
            <div className="grid">
                <div className="card">
                    <div className="feature-icon">🔍</div>
                    <h3>AI Symptom Triage</h3>
                    <p>Complete 5-step assessment for accurate specialist recommendations.</p>
                </div>
                <div className="card">
                    <div className="feature-icon">🩺</div>
                    <h3>Quick Symptom Check</h3>
                    <p>Fast AI-powered symptom analysis for immediate guidance.</p>
                </div>
                <div className="card">
                    <div className="feature-icon">👨‍⚕️</div>
                    <h3>Find Doctors</h3>
                    <p>Search and book appointments with top specialists in your area.</p>
                </div>
                <div className="card">
                    <div className="feature-icon">🏥</div>
                    <h3>Hospital Directory</h3>
                    <p>Find nearby hospitals with real-time bed availability and emergency services.</p>
                </div>
                <div className="card">
                    <div className="feature-icon">📋</div>
                    <h3>Digital Health Records</h3>
                    <p>Store and manage your medical history securely in one place.</p>
                </div>
                <div className="card">
                    <div className="feature-icon">🚑</div>
                    <h3>Emergency Services</h3>
                    <p>Quick access to emergency care and ambulance services.</p>
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
                                onChange={(e) => setFormData({...formData, userType: e.target.value})}
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
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
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
        userType: 'patient' 
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
            type: formData.userType
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
                                onChange={(e) => setFormData({...formData, userType: e.target.value})}
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
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input 
                                type="password" 
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
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
            setAnalysis({
                specialization: spec,
                riskScore,
                recommendations: [
                    `Severity Level: ${answers.severity}/10`,
                    `Duration: ${answers.duration || 'Not specified'}`,
                    `Risk Score: ${riskScore}%`,
                    `Associated Symptoms: ${answers.associated.join(', ') || 'None'}`
                ]
            });
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
                <div className="card">
                    <h3>Assessment Complete</h3>
                    <p>
                        <strong>Recommended Specialist:</strong> {analysis.specialization}
                    </p>
                    <p>
                        <strong>Risk Score:</strong> 
                        <span style={{ 
                            color: analysis.riskScore >= 70 ? 'var(--danger)' : 
                                   analysis.riskScore >= 40 ? 'var(--warning)' : 
                                   'var(--success)',
                            marginLeft: '0.5rem',
                            fontWeight: 'bold',
                            fontSize: '1.2rem'
                        }}>
                            {analysis.riskScore}%
                        </span>
                    </p>
                    <h4 style={{ marginTop: '1rem' }}>Assessment Details:</h4>
                    <ul style={{ marginLeft: '1.5rem' }}>
                        {analysis.recommendations.map((rec, i) => (
                            <li key={i}>{rec}</li>
                        ))}
                    </ul>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                        <button onClick={() => onNavigate('/doctors')} className="btn btn-primary">
                            Find {analysis.specialization}
                        </button>
                        <button onClick={() => onNavigate('/hospitals')} className="btn btn-outline">
                            Find Nearby Hospital
                        </button>
                        {analysis.riskScore >= 70 && (
                            <button className="btn btn-danger" onClick={() => alert('Emergency services number: 911')}>
                                🚑 Emergency Call
                            </button>
                        )}
                        <button onClick={handleReset} className="btn btn-outline">
                            Start Over
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
                            onChange={(e) => setAnswers({...answers, symptom: e.target.value})}
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
                                        onChange={(e) => setAnswers({...answers, duration: e.target.value})}
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
                            onChange={(e) => setAnswers({...answers, severity: parseInt(e.target.value)})}
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
                                            setAnswers({...answers, associated: [...answers.associated, symptom]});
                                        } else {
                                            setAnswers({...answers, associated: answers.associated.filter(s => s !== symptom)});
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
                            onChange={(e) => setAnswers({...answers, history: e.target.value})}
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
                urgency: 'High - Please seek immediate medical attention if severe',
                recommendations: ['Visit nearest emergency room', 'Avoid physical exertion', 'Book cardiology appointment']
            };
        } else if (symptomLower.includes('head') || symptomLower.includes('migraine') || symptomLower.includes('dizzy')) {
            return {
                specialization: 'Neurologist',
                urgency: 'Medium',
                recommendations: ['Rest in dark room', 'Stay hydrated', 'Consult neurologist']
            };
        } else if (symptomLower.includes('skin') || symptomLower.includes('rash') || symptomLower.includes('itch')) {
            return {
                specialization: 'Dermatologist',
                urgency: 'Low to Medium',
                recommendations: ['Avoid scratching', 'Use gentle skin products', 'Book dermatology appointment']
            };
        } else if (symptomLower.includes('pain') || symptomLower.includes('joint') || symptomLower.includes('bone')) {
            return {
                specialization: 'Orthopedic',
                urgency: 'Medium',
                recommendations: ['Rest affected area', 'Apply ice if swollen', 'Consult orthopedic specialist']
            };
        } else {
            return {
                specialization: 'General Physician',
                urgency: 'Low to Medium',
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
                    <div className="card">
                        <h3>Analysis Results</h3>
                        <div className="symptom-results">
                            <p><strong>Recommended Specialist:</strong> {analysis.specialization}</p>
                            <p><strong>Urgency Level:</strong> {analysis.urgency}</p>
                            <h4>Recommendations:</h4>
                            <ul style={{ marginLeft: '1.5rem' }}>
                                {analysis.recommendations.map((rec, index) => (
                                    <li key={index}>{rec}</li>
                                ))}
                            </ul>
                            <div style={{ marginTop: '1.5rem' }}>
                                <button onClick={() => onNavigate('/doctors')} className="btn btn-primary" style={{ marginRight: '1rem' }}>
                                    Find {analysis.specialization}
                                </button>
                                <button onClick={() => onNavigate('/hospitals')} className="btn btn-outline">
                                    Find Nearby Hospitals
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// Doctors Page
const DoctorsPage = ({ onNavigate }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpecialization, setSelectedSpecialization] = useState('all');
    
    const specializations = ['all', ...new Set(mockDoctors.map(d => d.specialization))];
    
    const filteredDoctors = mockDoctors.filter(doctor => {
        const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpecialization = selectedSpecialization === 'all' || 
                                    doctor.specialization === selectedSpecialization;
        return matchesSearch && matchesSpecialization;
    });

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
                {filteredDoctors.map(doctor => (
                    <div key={doctor.id} className="card">
                        <h3>{doctor.name}</h3>
                        <p><strong>Specialization:</strong> {doctor.specialization}</p>
                        <p><strong>Hospital:</strong> {doctor.hospital}</p>
                        <p><strong>Rating:</strong> ⭐ {doctor.rating}/5</p>
                        <p><strong>Available Today:</strong> {doctor.availability.join(', ')}</p>
                        <button onClick={() => onNavigate('/appointments')} className="btn btn-primary" style={{ width: '100%' }}>
                            Book Appointment
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Hospitals Page
const HospitalsPage = ({ onNavigate }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);

    const filteredHospitals = mockHospitals.filter(hospital => {
        const matchesSearch = hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            hospital.address.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesEmergency = !showEmergencyOnly || hospital.emergency;
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
                {filteredHospitals.map(hospital => (
                    <div key={hospital.id} className="card">
                        <h3>{hospital.name}</h3>
                        <p><strong>Address:</strong> {hospital.address}</p>
                        <p>
                            <strong>Emergency:</strong> 
                            {hospital.emergency ? '✅ Available 24/7' : '❌ Not Available'}
                        </p>
                        <p><strong>Beds Available:</strong> {hospital.bedsAvailable}</p>
                        <p><strong>Rating:</strong> ⭐ {hospital.rating}/5</p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <button onClick={() => onNavigate('/appointments')} className="btn btn-primary" style={{ flex: 1 }}>
                                Book Appointment
                            </button>
                            {hospital.emergency && (
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
    const [appointments] = useState([
        { id: 1, doctor: "Dr. Sarah Johnson", date: "2026-03-20", time: "10:00 AM", status: "Confirmed" },
        { id: 2, doctor: "Dr. Michael Chen", date: "2026-03-22", time: "2:00 PM", status: "Pending" }
    ]);

    return (
        <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>My Appointments</h2>
            
            <div className="card" style={{ marginBottom: '2rem' }}>
                <h3>Book New Appointment</h3>
                <div className="grid" style={{ gridTemplateColumns: '2fr 1fr 1fr auto', gap: '1rem' }}>
                    <select style={{ padding: '0.75rem' }}>
                        <option>Select Doctor</option>
                        {mockDoctors.map(doctor => (
                            <option key={doctor.id}>{doctor.name} - {doctor.specialization}</option>
                        ))}
                    </select>
                    <input type="date" style={{ padding: '0.75rem' }} />
                    <select style={{ padding: '0.75rem' }}>
                        <option>Select Time</option>
                        <option>9:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>2:00 PM</option>
                        <option>3:00 PM</option>
                        <option>4:00 PM</option>
                    </select>
                    <button className="btn btn-primary">Book</button>
                </div>
            </div>

            <div className="grid">
                {appointments.map(appointment => (
                    <div key={appointment.id} className="card">
                        <h3>{appointment.doctor}</h3>
                        <p><strong>Date:</strong> {appointment.date}</p>
                        <p><strong>Time:</strong> {appointment.time}</p>
                        <p>
                            <strong>Status:</strong> 
                            <span style={{ 
                                color: appointment.status === 'Confirmed' ? 'var(--success)' : 'var(--warning)',
                                marginLeft: '0.5rem'
                            }}>
                                {appointment.status}
                            </span>
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <button className="btn btn-outline" style={{ flex: 1 }}>Reschedule</button>
                            <button className="btn btn-outline" style={{ flex: 1 }}>Cancel</button>
                        </div>
                    </div>
                ))}
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

// Main App Component
const App = () => {
    const [user, setUser] = useState(null);
    const [currentPage, setCurrentPage] = useState('/');

    const handleLogin = (userData) => {
        setUser(userData);
    };

    const handleLogout = () => {
        setUser(null);
        setCurrentPage('/');
    };

    const navigate = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        // Protected routes
        if (['/appointments', '/dashboard'].includes(currentPage) && !user) {
            navigate('/login');
            return <LoginPage onLogin={handleLogin} onNavigate={navigate} />;
        }

        switch(currentPage) {
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
            case '/doctors':
                return <DoctorsPage onNavigate={navigate} />;
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
            {renderPage()}
            <Footer />
        </div>
    );
};

// Render
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
