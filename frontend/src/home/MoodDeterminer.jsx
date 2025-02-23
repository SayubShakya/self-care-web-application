import React, { useState } from "react";
import "./MoodDeterminer.css";

function MoodDeterminer() {
  const [responses, setResponses] = useState({});
  const [moodResult, setMoodResult] = useState(null);

  const questions = [
    { id: "q1", text: "How are you feeling today?" },
    { id: "q2", text: "What's been the best part of your day so far?" },
    { id: "q3", text: "Is there anything you're looking forward to?" },
    {
      id: "q4",
      text: "Describe your current energy level (e.g., high, low, moderate).",
    },
    {
      id: "q5",
      text: "How would you rate your overall mood on a scale of 1 to 10 (1 being very negative, 10 being very positive)?",
    },
  ];

  const handleInputChange = (questionId, value) => {
    setResponses({ ...responses, [questionId]: value });
  };

  const getMoodEmoji = (mood) => {
    switch (mood) {
      case "positive":
        return "😊";
      case "negative":
        return "😔";
      case "neutral":
        return "😐";
      default:
        return "😶";
    }
  };

  const analyzeMood = () => {
    let moodScore = 0;

    const positiveKeywords = {
      happy: 2,
      excited: 3,
      good: 1,
      great: 2,
      amazing: 3,
      wonderful: 3,
      fantastic: 3,
      love: 2,
      like: 1,
      enjoy: 2,
      positive: 2,
      optimistic: 2,
      hopeful: 2,
      grateful: 2,
      satisfied: 1,
      content: 1,
    };

    const negativeKeywords = {
      sad: -2,
      unhappy: -2,
      depressed: -3,
      bad: -1,
      terrible: -2,
      awful: -3,
      frustrated: -2,
      angry: -2,
      stressed: -2,
      tired: -1,
      low: -1,
      exhausted: -2,
      anxious: -2,
      overwhelmed: -2,
    };

    Object.values(responses).forEach((response) => {
      const words = response.toLowerCase().split(/\s+/);
      words.forEach((word) => {
        if (positiveKeywords[word]) {
          moodScore += positiveKeywords[word];
        }
        if (negativeKeywords[word]) {
          moodScore += negativeKeywords[word];
        }
      });
    });

    const moodRating = parseInt(responses.q5);
    if (!isNaN(moodRating)) {
      if (moodRating >= 7) {
        moodScore += 3;
      } else if (moodRating <= 4) {
        moodScore -= 3;
      }
    }

    let mood = "neutral";
    if (moodScore > 3) {
      mood = "positive";
    } else if (moodScore < -3) {
      mood = "negative";
    }

    setMoodResult(mood);
  };

  return (
    <div className="mood-determiner">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>Mood Determiner</h2>
      {questions.map((q) => (
        <div key={q.id} className="question">
          <label>{q.text}</label>
          <input
            type="text"
            onChange={(e) => handleInputChange(q.id, e.target.value)}
          />
        </div>
      ))}
      <button onClick={analyzeMood}>Determine Mood</button>
      {moodResult && (
        <div className="mood-result">
          <h3>
            Your Mood: {moodResult} {getMoodEmoji(moodResult)}
          </h3>
        </div>
      )}
    </div>
  );
}

export default MoodDeterminer;
