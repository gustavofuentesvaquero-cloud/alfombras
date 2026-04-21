"use client";
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const questions = [
  {
    question: "Which room is this rug for?",
    options: ["Living Room", "Bedroom", "Dining Room", "High-Traffic Area (Entry/Kitchen)"]
  },
  {
    question: "Do you have pets or young children?",
    options: ["Yes, both!", "Just pets", "Just kids", "No, neither"]
  },
  {
    question: "What's your preferred style?",
    options: ["Traditional / Vintage", "Modern Minimalist", "Boho / Natural", "Eclectic"]
  }
];

export default function RugFinder() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [complete, setComplete] = useState(false);

  const handleSelect = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setComplete(true);
    }
  };

  return (
    <section id="rug-finder" className="py-16 bg-white border-y border-sand/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-bold text-foreground">Rug Finder Quiz</h2>
          <p className="mt-4 text-lg text-foreground/80">Answer 3 quick questions to get personalized recommendations.</p>
        </div>

        <div className="bg-sand/5 border border-sand/20 rounded-xl p-8 shadow-sm">
          {!complete ? (
            <div>
              <div className="mb-8">
                <span className="text-xs font-bold tracking-wider text-sage uppercase">Step {currentStep + 1} of {questions.length}</span>
                <h3 className="font-serif text-2xl mt-2 text-foreground">{questions[currentStep].question}</h3>
              </div>
              <div className="space-y-3">
                {questions[currentStep].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(option)}
                    className="w-full text-left p-4 rounded-lg border border-sand/30 hover:border-mocha hover:bg-sand/10 transition-all font-medium text-foreground/90 flex justify-between items-center group focus:outline-none focus:border-mocha"
                  >
                    {option}
                    <ArrowRight className="w-5 h-5 text-mocha opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <h3 className="font-serif text-2xl mb-4 text-foreground">We found your match!</h3>
              <p className="text-foreground/80 mb-6">Based on your answers, we highly recommend looking into our <strong className="text-mocha">Washable Rugs</strong> collection or a highly durable <strong className="text-mocha">Wool Rug</strong>.</p>
              <button 
                onClick={() => { setComplete(false); setCurrentStep(0); setAnswers([]); }}
                className="text-mocha font-medium underline hover:text-mocha/80"
              >
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
