UrbanCycle/
├── README.md
├── LICENSE
├── frontend/                 # React Native mobile app
│   ├── public/               # Static assets (images, icons)
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── screens/          # App screens (Home, Map, GroupRide)
│   │   ├── services/         # API and Firebase services
│   │   ├── utils/            # Utility functions (helpers)
│   │   ├── App.js            # Main app file
│   │   └── index.js          # Entry point
│   └── package.json
├── backend/                  # Flask or Django backend
│   ├── app/
│   │   ├── models/           # Data models (Hazard, User, Route)
│   │   ├── routes/           # API routes (hazard reporting, ride coordination)
│   │   ├── services/         # Integration services (Firebase, Qiskit)
│   │   ├── templates/        # HTML templates (if needed)
│   │   ├── __init__.py
│   │   └── app.py            # Main backend application
│   ├── requirements.txt      # Python dependencies
│   └── venv/                 # Python virtual environment (optional)
├── quantum/                  # Quantum computing scripts
│   ├── route_optimization.py # QAOA implementation for route optimization
│   └── safety_scoring.py     # Quantum-enhanced safety score calculation
├── firebase/                 # Firebase configuration and functions
│   ├── firebaseConfig.js
│   └── functions/            # Cloud functions (if needed)
└── docs/                     # Documentation (design, notes)
    └── architecture.md