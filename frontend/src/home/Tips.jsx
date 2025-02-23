import React, { useState } from "react";
import Tips from "./Tips";

const MoodTracker = () => {
  const [mood, setMood] = useState("happy");

  return (
    <div>
      
      <h1>Mood Tracker</h1>
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="happy">😊 Happy</option>
        <option value="sad">😢 Sad</option>
        <option value="angry">😠 Angry</option>
        <option value="anxious">😰 Anxious</option>
        <option value="excited">😃 Excited</option>
        <option value="tired">😴 Tired</option>
        <option value="calm">🧘 Calm</option>
        <option value="confused">😕 Confused</option>
        <option value="bored">😑 Bored</option>
        <option value="grateful">🙏 Grateful</option>
        <option value="loved">🥰 Loved</option>
        <option value="lonely">🫂 Lonely</option>
        <option value="stressed">😫 Stressed</option>
        <option value="proud">😌 Proud</option>
        <option value="surprised">😲 Surprised</option>
        <option value="hopeful">🌟 Hopeful</option>
        <option value="disappointed">😞 Disappointed</option>
        <option value="curious">🤔 Curious</option>
        <option value="guilty">😔 Guilty</option>
        <option value="playful">😜 Playful</option>
      </select>
      <Tips mood={mood} />
    </div>
  );
};

export default MoodTracker;
