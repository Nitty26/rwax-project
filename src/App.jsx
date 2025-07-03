import { useState } from "react";

export default function App() {
  const [day, setDay] = useState(1);
  const [reflection, setReflection] = useState("");
  const totalDays = 30;

  const dailyChallenges = [
    {
      title: "Who Are You, Really?",
      mission:
        "Write a letter to yourself explaining who you think you are, without using your name, age, or achievements.",
    },
    {
      title: "The Mask",
      mission:
        "List 3 versions of yourself: the one people see, the one you show to friends, and the real one you hide.",
    },
  ];

  const currentChallenge = dailyChallenges[day - 1] || {
    title: "Coming Soon",
    mission: "More days will be added soon!",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        RWAX - Project You
      </h1>
      <div className="max-w-2xl mx-auto bg-slate-700 p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold">
          Day {day}: {currentChallenge.title}
        </h2>
        <p className="mt-4 text-lg">Mission: {currentChallenge.mission}</p>

        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          className="w-full mt-6 p-4 text-black rounded-lg min-h-[120px]"
          placeholder="Write your reflection here..."
        />

        <div className="flex justify-between items-center mt-6">
          <button
            disabled={day === 1}
            onClick={() => {
              setDay(day - 1);
              setReflection("");
            }}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            Previous
          </button>

          <span>{Math.round((day / totalDays) * 100)}% Complete</span>

          <button
            disabled={day === totalDays}
            onClick={() => {
              setDay(day + 1);
              setReflection("");
            }}
            className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
