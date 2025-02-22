import React from 'react';
import './Tips.css';

// Define tips for each mood with emojis
const moodTips = {
  happy: [
    "😊 Keep the positivity going! Write down three things you're grateful for.",
    "😊 Smile! It’s contagious and can brighten someone else’s day.",
    "😊 Celebrate the small wins—they add up to big happiness!",
  ],
  sad: [
    "😢 It's okay to feel down. Try talking to a friend or doing something you enjoy.",
    "😢 Allow yourself to feel your emotions—they’re valid and important.",
    "😢 Write in a journal to process your feelings.",
  ],
  angry: [
    "😠 Take a deep breath and count to 10. You've got this!",
    "😠 Channel your anger into something productive, like exercise or art.",
    "😠 Practice forgiveness—it’s a gift to yourself.",
  ],
  anxious: [
    "😰 Try a 5-minute breathing exercise to calm your mind.",
    "😰 Focus on the present moment. You’re safe right now.",
    "😰 Write down your worries and set them aside for later.",
  ],
  excited: [
    "😃 Channel your energy into something creative or productive!",
    "😃 Share your excitement with someone—it’s even more fun together!",
    "😃 Make a plan to turn your excitement into action.",
  ],
  tired: [
    "😴 Take a short nap or rest. Your body needs it.",
    "😴 Drink some water and stretch—it might help you feel more awake.",
    "😴 Prioritize sleep tonight—it’s essential for your well-being.",
  ],
  calm: [
    "🧘 Enjoy this peaceful moment. Maybe try some light stretching.",
    "🧘 Practice mindfulness to stay grounded and present.",
    "🧘 Take a walk in nature to enhance your calm.",
  ],
  confused: [
    "😕 Write down your thoughts to clarify what's bothering you.",
    "😕 Ask for help or advice—it’s okay not to have all the answers.",
    "😕 Break the problem into smaller, manageable steps.",
  ],
  bored: [
    "😑 Try a new hobby or activity to spark your interest.",
    "😑 Read a book, watch a documentary, or learn something new.",
    "😑 Use this time to reflect on your goals and dreams.",
  ],
  grateful: [
    "🙏 Share your gratitude with someone you care about.",
    "🙏 Write a thank-you note to someone who has made a difference in your life.",
    "🙏 Take a moment to appreciate the little things around you.",
  ],
  loved: [
    "🥰 Spread the love! Do something kind for someone else.",
    "🥰 Call or text someone you love and let them know you’re thinking of them.",
    "🥰 Write down what you love about yourself—it’s important too!",
  ],
  lonely: [
    "🫂 Reach out to a friend or family member. You're not alone.",
    "🫂 Join a community or group that shares your interests.",
    "🫂 Volunteer—helping others can help you feel connected.",
  ],
  stressed: [
    "😫 Take a break and do something relaxing, like listening to music.",
    "😫 Prioritize your tasks—what’s most important right now?",
    "😫 Practice self-compassion—you’re doing the best you can.",
  ],
  proud: [
    "😌 Celebrate your achievement! Treat yourself to something special.",
    "😌 Share your success with someone who supports you.",
    "😌 Reflect on how far you’ve come—you’ve worked hard!",
  ],
  surprised: [
    "😲 Embrace the unexpected and see where it takes you.",
    "😲 Take a moment to process—it’s okay to feel caught off guard.",
    "😲 Use this surprise as an opportunity to learn something new.",
  ],
  hopeful: [
    "🌟 Visualize your goals and take one small step toward them.",
    "🌟 Write down your hopes and dreams—it makes them feel more real.",
    "🌟 Surround yourself with positive, supportive people.",
  ],
  disappointed: [
    "😞 Remember, setbacks are temporary. Learn from this experience.",
    "😞 Talk to someone who can offer perspective and encouragement.",
    "😞 Focus on what you can control and let go of the rest.",
  ],
  curious: [
    "🤔 Explore something new today—read, watch, or try something different.",
    "🤔 Ask questions and seek answers—curiosity fuels growth.",
    "🤔 Dive into a topic that fascinates you.",
  ],
  guilty: [
    "😔 Forgive yourself. Everyone makes mistakes.",
    "😔 Apologize if needed, then let it go—you’re only human.",
    "😔 Focus on what you can do better next time.",
  ],
  playful: [
    "😜 Have some fun! Laughter is the best medicine.",
    "😜 Do something silly or spontaneous—it’s good for the soul.",
    "😜 Play a game or engage in a creative activity.",
  ],
};

const Tips = ({ mood = "calm" }) => {
  // Get a random tip based on the selected mood
  const randomTip =
    moodTips[mood][Math.floor(Math.random() * moodTips[mood].length)] ||
    "Take a moment to reflect on how you're feeling.";

  return (
    <>
    <br /><br /><br /><br /><br />
    <div className="tips-container">
      <h3>Self-Care Tip</h3>
      <p>{randomTip}</p>
    </div>
    </>
  );
};

export default Tips;