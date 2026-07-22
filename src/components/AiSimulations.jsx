import React, { useState } from 'react';
import { Terminal, Bot, Play, RefreshCw, CheckCircle2, Cpu, FileText, ArrowRight, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export default function AiSimulations() {
  const [activeTab, setActiveTab] = useState('multi-agent'); // 'multi-agent' | 'ocr-pipeline'
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([]);
  const [selectedPrompt, setSelectedPrompt] = useState('Find running shoes under $120 with high shock absorption');

  const multiAgentPrompts = [
    'Find running shoes under $120 with high shock absorption',
    'Compare Sony WH-1000XM5 noise cancelling specs',
    'Recommend ergonomic home office chairs for lower back pain'
  ];

  const ocrPrompts = [
    'Upload Lab PDF: Complete Blood Count (CBC) Patient #88492',
    'Upload Lab PDF: Thyroid Function Test (TSH, T3, T4)',
    'Upload Lab PDF: Lipid Profile & Fasting Glucose Report'
  ];

  const runMultiAgentDemo = (promptText) => {
    setIsRunning(true);
    setLogs([]);

    const steps = [
      { agent: 'SYSTEM', msg: `Initializing OpenAI Agents SDK multi-agent orchestrator...`, type: 'info' },
      { agent: 'IntentClassifierAgent', msg: `Classifying query intent for: "${promptText}"`, type: 'process' },
      { agent: 'IntentClassifierAgent', msg: `Intent resolved: CATEGORY_ECOM_RECOMMENDATION | Confidence: 99.2%`, type: 'success' },
      { agent: 'Router', msg: `Routing request to ProductRecommendationAgent & Custom DB Tool Calling...`, type: 'info' },
      { agent: 'ProductRecommendationAgent', msg: `Executing tool: query_product_db({ category: 'shoes', max_price: 120, tags: ['shock-absorption'] })`, type: 'tool' },
      { agent: 'DatabaseTool', msg: `DB Response: 3 matched items found (Nike Pegasus 40, Brooks Ghost 15, Asics Gel-Nimbus).`, type: 'success' },
      { agent: 'WebRecommendationAgent', msg: `Fetching latest customer reviews & cross-verifying ratings from web API...`, type: 'process' },
      { agent: 'FollowUpAgent', msg: `Synthesizing final response with structured tool data & context history.`, type: 'success' },
      { agent: 'SYSTEM', msg: `Workflow execution finished in 342ms. 5 agents synchronized successfully.`, type: 'done' }
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step]);
        if (index === steps.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 450);
    });
  };

  const runOcrDemo = (promptText) => {
    setIsRunning(true);
    setLogs([]);

    const steps = [
      { agent: 'SYSTEM', msg: `Receiving document stream: ${promptText}`, type: 'info' },
      { agent: 'OCR_Engine', msg: `Extracting text coordinates via OCR & Vision Model...`, type: 'process' },
      { agent: 'OpenAI_Extractor', msg: `Structuring unstructured PDF data to JSON schema (Patient ID, Hemoglobin, WBC, Platelets)...`, type: 'tool' },
      { agent: 'ValidationPipeline', msg: `Verifying clinical reference ranges & schema integrity... PASS (100% valid)`, type: 'success' },
      { agent: 'PlaywrightAutomation', msg: `Launching headless browser runner to automate lab portal form submission...`, type: 'process' },
      { agent: 'PlaywrightAutomation', msg: `Filled 14 form fields in portal, bypass captchas & triggered submission...`, type: 'success' },
      { agent: 'SYSTEM', msg: `End-to-end automation complete. Manual data entry eliminated (99% reduction).`, type: 'done' }
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step]);
        if (index === steps.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 450);
    });
  };

  const handleRun = () => {
    if (activeTab === 'multi-agent') {
      runMultiAgentDemo(selectedPrompt);
    } else {
      runOcrDemo(selectedPrompt);
    }
  };

  return (
    <section id="ai-simulator" className="py-24 relative bg-[#050811] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/60 text-purple-400 text-xs font-mono mb-3">
            <Bot className="w-3.5 h-3.5" />
            INTERACTIVE AI DEMO & AGENT TERMINAL
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live AI Agent Workflow Simulator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Test live simulations of Sumit's production OpenAI multi-agent workflows and healthtech document processing pipelines.
          </p>

          {/* Mode Tabs */}
          <div className="flex items-center gap-2 mt-8 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => {
                setActiveTab('multi-agent');
                setSelectedPrompt(multiAgentPrompts[0]);
                setLogs([]);
              }}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'multi-agent'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              5-Agent OpenAI SDK Architecture
            </button>
            <button
              onClick={() => {
                setActiveTab('ocr-pipeline');
                setSelectedPrompt(ocrPrompts[0]);
                setLogs([]);
              }}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                activeTab === 'ocr-pipeline'
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              OCR + Playwright Automation
            </button>
          </div>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Controls Box */}
          <div className="lg:col-span-5 glass-card p-6 rounded-2xl border border-slate-800 space-y-6">
            <div>
              <label className="text-xs font-mono text-slate-400 block mb-2">
                SELECT SAMPLE INPUT WORKFLOW
              </label>
              <div className="space-y-2">
                {(activeTab === 'multi-agent' ? multiAgentPrompts : ocrPrompts).map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPrompt(prompt)}
                    className={`w-full text-left p-3 rounded-xl text-xs font-medium border transition-all ${
                      selectedPrompt === prompt
                        ? 'bg-purple-950/60 border-purple-500/80 text-purple-200'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Workflow Architecture Overview */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-2">
              <div className="font-mono text-cyan-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {activeTab === 'multi-agent' ? '5 Orchestrated Agents:' : 'Pipeline Mechanics:'}
              </div>
              {activeTab === 'multi-agent' ? (
                <ul className="text-slate-400 space-y-1 pl-2 font-mono text-[11px]">
                  <li>1. Query Intent Classifier</li>
                  <li>2. Product Recommendation Engine</li>
                  <li>3. Structured DB Tool Calling</li>
                  <li>4. Web Search Recommendation Agent</li>
                  <li>5. Follow-up Context Agent</li>
                </ul>
              ) : (
                <ul className="text-slate-400 space-y-1 pl-2 font-mono text-[11px]">
                  <li>1. PDF & Scanned Image OCR Extraction</li>
                  <li>2. OpenAI JSON Schema Validation</li>
                  <li>3. Playwright Headless Web Automation</li>
                  <li>4. 99% Data Entry Time Reduction</li>
                </ul>
              )}
            </div>

            {/* Execute Button */}
            <button
              onClick={handleRun}
              disabled={isRunning}
              className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-lg ${
                isRunning
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : activeTab === 'multi-agent'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white shadow-purple-500/25 hover:scale-[1.02]'
                  : 'bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-black shadow-cyan-500/25 hover:scale-[1.02]'
              }`}
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Simulating Workflow...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  Execute Live Simulation
                </>
              )}
            </button>
          </div>

          {/* Right Live Terminal Display */}
          <div className="lg:col-span-7 bg-[#070b16] rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            
            {/* Terminal Header */}
            <div className="bg-[#0b101f] px-4 py-3 border-b border-slate-800/90 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-2 font-mono text-xs text-slate-400">
                  agent-sdk-orchestrator.py
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                ACTIVE SIMULATION
              </span>
            </div>

            {/* Terminal Logs Output Area */}
            <div className="p-4 sm:p-6 font-mono text-xs min-h-[340px] max-h-[380px] overflow-y-auto space-y-3">
              {logs.length === 0 ? (
                <div className="h-full min-h-[280px] flex flex-col items-center justify-center text-slate-600 space-y-2">
                  <Terminal className="w-8 h-8 text-slate-700" />
                  <p>Click "Execute Live Simulation" to start agent trace...</p>
                </div>
              ) : (
                logs.map((log, i) => (
                  <div key={i} className="flex items-start gap-2.5 leading-relaxed animate-in fade-in duration-150">
                    <span className="text-slate-500 flex-shrink-0">[{new Date().toLocaleTimeString().split(' ')[0]}]</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold flex-shrink-0 ${
                      log.type === 'tool' ? 'bg-cyan-950 text-cyan-400 border border-cyan-800/60' :
                      log.type === 'success' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/60' :
                      log.type === 'done' ? 'bg-purple-950 text-purple-300 border border-purple-800/60' :
                      'bg-slate-900 text-slate-300'
                    }`}>
                      {log.agent}
                    </span>
                    <span className={`${
                      log.type === 'done' ? 'text-purple-300 font-bold' :
                      log.type === 'success' ? 'text-emerald-300' :
                      log.type === 'tool' ? 'text-cyan-300' : 'text-slate-300'
                    }`}>
                      {log.msg}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Terminal Footer Bar */}
            <div className="bg-[#0b101f] px-4 py-2.5 border-t border-slate-800/90 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Status: {isRunning ? 'Running Agent Trace...' : logs.length > 0 ? 'Simulation Finished' : 'Idle'}</span>
              <span>OpenAI SDK v0.4 • Python 3.11</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
