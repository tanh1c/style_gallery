import { useState, useEffect } from 'react';
import { 
  Star, 
  ChevronDown, 
  BarChart3, 
  BookOpen, 
  Users, 
  Rocket, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

type TabType = 'analyse' | 'train' | 'testing' | 'deploy';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('analyse');

  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: 'analyse', label: 'Analyse', icon: BarChart3 },
    { id: 'train', label: 'Train', icon: BookOpen },
    { id: 'testing', label: 'Testing', icon: Users },
    { id: 'deploy', label: 'Deploy', icon: Rocket },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.findIndex((t) => t.id === prev);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex].id;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const renderOverlay = () => {
    const overlays = {
      analyse: (
        <div className="w-[90%] max-w-md bg-white rounded-2xl shadow-2xl p-6 animate-slide-up-overlay">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Set Up Your AI Workspace</h3>
            <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">Step 1 of 4</span>
          </div>
          <div className="space-y-4">
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-1/4 transition-all duration-500"></div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: 'Connect Data Sources', done: true },
                { label: 'Define Model Parameters', done: false },
                { label: 'Configure API Endpoints', done: false },
                { label: 'Set Access Permissions', done: false },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50/50">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${step.done ? 'bg-purple-500 text-white' : 'border-2 border-gray-200'}`}>
                    {step.done && <CheckCircle2 className="w-3 h-3" />}
                  </div>
                  <span className={`text-sm ${step.done ? 'font-medium text-black' : 'text-gray-500'}`}>{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      train: (
        <div className="w-[90%] max-w-md bg-white rounded-2xl shadow-2xl p-6 animate-slide-up-overlay">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">AI Model Training</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-orange-600">Training in progress</span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200">
                    Progress
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-orange-600">
                    67%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-200">
                <div style={{ width: "67%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500 transition-all duration-500"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Accuracy', value: '94.2%' },
                { label: 'Loss', value: '0.024' },
                { label: 'Epochs', value: '128/200' },
                { label: 'Time Left', value: '14m 20s' },
              ].map((metric, i) => (
                <div key={i} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">{metric.label}</p>
                  <p className="text-lg font-semibold text-black">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      testing: (
        <div className="w-[90%] max-w-md bg-white rounded-2xl shadow-2xl p-6 animate-slide-up-overlay">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-semibold">Test Suite Results</h3>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">All Passed</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full border-8 border-green-500 flex items-center justify-center mb-6 relative">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
              <div className="absolute -inset-4 border-2 border-green-100 rounded-full animate-ping opacity-20"></div>
            </div>
            <h4 className="text-2xl font-bold mb-2">127 / 127</h4>
            <p className="text-sm text-gray-500 mb-6">Automated test cases completed successfully across all environments.</p>
            <div className="w-full grid grid-cols-3 gap-2">
              <div className="h-1 bg-green-500 rounded-full"></div>
              <div className="h-1 bg-green-500 rounded-full"></div>
              <div className="h-1 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      ),
      deploy: (
        <div className="w-[90%] max-w-md bg-white rounded-2xl shadow-2xl p-6 animate-slide-up-overlay">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Deploy to Production</h3>
            <Rocket className="w-5 h-5 text-blue-500" />
          </div>
          <div className="space-y-4 mb-8">
            {[
              'Security audit passed',
              'Performance benchmarks met',
              'CDN cache invalidated',
              'Database migrations synced'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                </div>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <button className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group">
            Deploy Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      ),
    };

    return (
      <div key={activeTab} className="absolute inset-0 bg-black/10 animate-fade-in-overlay">
        {overlays[activeTab]}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav 
        className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto animate-fade-in-up"
        style={{ animationDelay: '0.1s', opacity: 0 }}
      >
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 fill-black" />
          <span className="text-lg font-semibold tracking-tight">Stellar.ai</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-black transition-colors">
            Solutions <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-black transition-colors">
            For Teams <ChevronDown className="w-4 h-4" />
          </button>
          <button className="text-sm text-gray-700 hover:text-black transition-colors">About Us</button>
          <button className="text-sm text-gray-700 hover:text-black transition-colors">Learn Hub</button>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-sm text-gray-700 hover:text-black transition-colors">Login</button>
          <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all active:scale-95">
            Get started free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-6 pt-24 pb-32 max-w-7xl mx-auto text-center">
        {/* Reviews Badge */}
        <div 
          className="inline-flex items-center gap-2 mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          <div className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center">
            <Star className="w-3.5 h-3.5 fill-black" />
          </div>
          <span className="text-sm font-medium text-black">4.9 rating from 18.3K+ users</span>
        </div>

        {/* Main Heading */}
        <h1 
          className="text-6xl md:text-7xl lg:text-[80px] font-normal leading-[1.1] tracking-tight mb-5 animate-fade-in-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          Work Smarter. Move Faster.<br />
          <span className="bg-gradient-to-r from-black via-gray-500 to-gray-400 bg-clip-text text-transparent">
            AI Powers You Up.
          </span>
        </h1>

        {/* Subheading */}
        <p 
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          Intelligent automation syncs with the tools you love to streamline tasks, boost output, and save time.
        </p>

        {/* CTA Button */}
        <div 
          className="animate-fade-in-up mb-12"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <button className="bg-black text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-all active:scale-95">
            Begin Free Trial
          </button>
        </div>

        {/* Tab Bar */}
        <div 
          className="max-w-xl mx-auto mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          <div className="bg-gray-100 rounded-lg p-1">
            {/* Mobile Grid */}
            <div className="grid grid-cols-2 gap-1 md:hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab.id 
                      ? 'bg-white text-black shadow-sm' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Desktop Row */}
            <div className="hidden md:flex items-center justify-between">
              {tabs.map((tab, index) => (
                <div key={tab.id} className="flex items-center flex-1">
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-medium transition-all w-full ${
                      activeTab === tab.id 
                        ? 'bg-white text-black shadow-sm' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                  {index < tabs.length - 1 && (
                    <div className="w-px h-5 bg-gray-300 mx-1"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video + Overlay Section */}
        <div 
          className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] animate-fade-in-up group"
          style={{ animationDelay: '0.7s', opacity: 0 }}
        >
          <video 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_165750_358b1e72-c921-48b7-aaac-f200994f32fb.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          {renderOverlay()}
        </div>

        {/* Company Logos */}
        <div 
          className="mt-24 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 animate-fade-in-up"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          <span className="text-xl font-bold tracking-tighter text-gray-400 hover:text-black transition-colors cursor-default">INTERSCOPE</span>
          <div className="flex items-center gap-1 text-gray-400 hover:text-black transition-colors cursor-default">
            <div className="w-6 h-6 bg-current rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">SPOTIFY</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400 hover:text-black transition-colors cursor-default">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">Nexera</span>
          </div>
          <span className="text-2xl font-serif italic font-bold text-gray-400 hover:text-black transition-colors cursor-default">M3</span>
          <div className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors cursor-default">
            <div className="w-8 h-8 border-2 border-current rounded-full flex items-center justify-center text-[10px] font-bold">LC</div>
            <span className="text-lg font-bold tracking-widest uppercase">Laura Cole</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400 hover:text-black transition-colors cursor-default">
            <div className="flex gap-0.5">
              <div className="w-1 h-1 bg-current rounded-full"></div>
              <div className="w-1 h-1 bg-current rounded-full"></div>
              <div className="w-1 h-1 bg-current rounded-full"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">vertex</span>
          </div>
        </div>
      </main>
    </div>
  );
}
