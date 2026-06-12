// ============================================================
// Mangalore AutoParts - Firebase Configuration
// ============================================================
// INSTRUCTIONS: Replace the placeholder values below with your
// actual Firebase project credentials from:
// https://console.firebase.google.com → Project Settings → General
// ============================================================

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Razorpay Configuration
// Get your key from https://dashboard.razorpay.com/app/keys
const RAZORPAY_KEY_ID = "YOUR_RAZORPAY_KEY_ID";

// ============================================================
// Demo Mode Detection
// If Firebase credentials are not configured, the app runs in
// demo mode using localStorage for all data persistence.
// ============================================================
const IS_DEMO_MODE = firebaseConfig.apiKey === "YOUR_API_KEY" ||
                     firebaseConfig.projectId === "YOUR_PROJECT_ID";

const IS_RAZORPAY_CONFIGURED = RAZORPAY_KEY_ID !== "YOUR_RAZORPAY_KEY_ID";

let auth = null;
let db = null;
let storage = null;

if (!IS_DEMO_MODE) {
    try {
        firebase.initializeApp(firebaseConfig);
        auth = firebase.auth();
        db = firebase.firestore();
        storage = firebase.storage();

        // Enable offline persistence
        db.enablePersistence({ synchronizeTabs: true }).catch(err => {
            if (err.code === 'failed-precondition') {
                console.warn('Firestore persistence unavailable: multiple tabs open.');
            } else if (err.code === 'unimplemented') {
                console.warn('Firestore persistence not supported in this browser.');
            }
        });

        console.log('🔥 Firebase initialized successfully for Mangalore AutoParts');
    } catch (e) {
        console.error('Firebase initialization error:', e);
    }
} else {
    console.log('🎮 Running in DEMO MODE - Firebase not configured');
    console.log('ℹ️  To connect Firebase, update credentials in firebase-config.js');
}
