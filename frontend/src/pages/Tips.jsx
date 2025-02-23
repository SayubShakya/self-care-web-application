import React from "react";
import "./Tips.css";



const moodData = {
  happy: {
    emoji: "😊",
    description: "You're feeling joyful and content!",
    tips: [
      "Write down three things you're grateful for.",
      "Share your happiness with someone else—it’s contagious!",
      "Celebrate the small wins in your life.",
    ],
    actions: [
      "Call a friend and share your good mood.",
      "Do something creative, like painting or writing.",
      "Take a walk and enjoy nature.",
    ],
    resources: [
      { text: "How to Stay Happy", link: "https://example.com/stay-happy" },
      {
        text: "The Science of Happiness",
        link: "https://example.com/science-of-happiness",
      },
    ],
  },
  sad: {
    emoji: "😢",
    description: "You're feeling down or upset.",
    tips: [
      "It's okay to feel sad—allow yourself to process your emotions.",
      "Talk to a friend or loved one about how you're feeling.",
      "Write in a journal to express your thoughts.",
    ],
    actions: [
      "Listen to your favorite music or watch a comforting movie.",
      "Practice self-compassion—be kind to yourself.",
      "Take a warm bath or shower to relax.",
    ],
    resources: [
      {
        text: "Coping with Sadness",
        link: "https://example.com/coping-sadness",
      },
      { text: "How to Lift Your Mood", link: "https://example.com/lift-mood" },
    ],
  },
  angry: {
    emoji: "😠",
    description: "You're feeling frustrated or irritated.",
    tips: [
      "Take a deep breath and count to 10.",
      "Channel your anger into something productive, like exercise.",
      "Write down what’s bothering you and why.",
    ],
    actions: [
      "Go for a run or do a quick workout.",
      "Practice mindfulness or meditation.",
      "Talk to someone you trust about your feelings.",
    ],
    resources: [
      { text: "Managing Anger", link: "https://example.com/managing-anger" },
      {
        text: "Mindfulness Techniques",
        link: "https://example.com/mindfulness",
      },
    ],
  },
  anxious: {
    emoji: "😰",
    description: "You're feeling nervous or worried.",
    tips: [
      "Focus on your breathing—inhale for 4 seconds, hold for 4, exhale for 4.",
      "Write down your worries and set them aside for later.",
      "Remind yourself that you’re safe in this moment.",
    ],
    actions: [
      "Try a guided meditation or breathing exercise.",
      "Distract yourself with a calming activity, like reading or drawing.",
      "Talk to someone who can offer support.",
    ],
    resources: [
      { text: "Calming Anxiety", link: "https://example.com/calming-anxiety" },
      {
        text: "Breathing Exercises",
        link: "https://example.com/breathing-exercises",
      },
    ],
  },
  excited: {
    emoji: "😃",
    description: "You're feeling enthusiastic and thrilled!",
    tips: [
      "Channel your energy into something creative or productive.",
      "Share your excitement with someone—it’s even more fun together!",
      "Make a plan to turn your excitement into action.",
    ],
    actions: [
      "Start a new project or hobby.",
      "Celebrate your excitement with a small treat.",
      "Write down your goals and take the first step.",
    ],
    resources: [
      {
        text: "Turning Excitement into Action",
        link: "https://example.com/excitement-action",
      },
      {
        text: "Creative Project Ideas",
        link: "https://example.com/creative-projects",
      },
    ],
  },
  tired: {
    emoji: "😴",
    description: "You're feeling exhausted or sleepy.",
    tips: [
      "Take a short nap or rest—your body needs it.",
      "Drink some water and stretch to feel more awake.",
      "Prioritize sleep tonight—it’s essential for your well-being.",
    ],
    actions: [
      "Set a bedtime routine to improve your sleep.",
      "Take a 20-minute power nap.",
      "Avoid caffeine and screens before bed.",
    ],
    resources: [
      {
        text: "Tips for Better Sleep",
        link: "https://example.com/better-sleep",
      },
      {
        text: "Power Napping Benefits",
        link: "https://example.com/power-napping",
      },
    ],
  },
  calm: {
    emoji: "🧘",
    description: "You're feeling peaceful and at ease.",
    tips: [
      "Enjoy this peaceful moment—you deserve it.",
      "Practice mindfulness to stay grounded and present.",
      "Take a walk in nature to enhance your calm.",
    ],
    actions: [
      "Do some light stretching or yoga.",
      "Write in a journal about how you’re feeling.",
      "Listen to calming music or sounds.",
    ],
    resources: [
      {
        text: "Mindfulness Practices",
        link: "https://example.com/mindfulness",
      },
      {
        text: "Calming Music Playlist",
        link: "https://example.com/calming-music",
      },
    ],
  },
  confused: {
    emoji: "😕",
    description: "You're feeling unsure or puzzled.",
    tips: [
      "Write down your thoughts to clarify what’s bothering you.",
      "Ask for help or advice—it’s okay not to have all the answers.",
      "Break the problem into smaller, manageable steps.",
    ],
    actions: [
      "Talk to someone who can offer guidance.",
      "Research the topic that’s confusing you.",
      "Take a step back and revisit the problem later.",
    ],
    resources: [
      {
        text: "How to Make Decisions",
        link: "https://example.com/make-decisions",
      },
      {
        text: "Problem-Solving Techniques",
        link: "https://example.com/problem-solving",
      },
    ],
  },
  bored: {
    emoji: "😑",
    description: "You're feeling uninterested or unengaged.",
    tips: [
      "Try a new hobby or activity to spark your interest.",
      "Read a book, watch a documentary, or learn something new.",
      "Use this time to reflect on your goals and dreams.",
    ],
    actions: [
      "Explore a new skill or topic online.",
      "Plan a fun outing or activity.",
      "Reorganize or redecorate your space.",
    ],
    resources: [
      { text: "Fun Hobby Ideas", link: "https://example.com/hobby-ideas" },
      {
        text: "Online Learning Platforms",
        link: "https://example.com/online-learning",
      },
    ],
  },
  grateful: {
    emoji: "🙏",
    description: "You're feeling thankful and appreciative.",
    tips: [
      "Share your gratitude with someone you care about.",
      "Write a thank-you note to someone who has made a difference in your life.",
      "Take a moment to appreciate the little things around you.",
    ],
    actions: [
      "Start a gratitude journal.",
      "Volunteer or give back to your community.",
      "Reflect on the positive aspects of your day.",
    ],
    resources: [
      {
        text: "Benefits of Gratitude",
        link: "https://example.com/gratitude-benefits",
      },
      {
        text: "How to Start a Gratitude Journal",
        link: "https://example.com/gratitude-journal",
      },
    ],
  },
  loved: {
    emoji: "🥰",
    description: "You're feeling cherished and valued.",
    tips: [
      "Spread the love! Do something kind for someone else.",
      "Call or text someone you love and let them know you’re thinking of them.",
      "Write down what you love about yourself—it’s important too!",
    ],
    actions: [
      "Plan a special date or activity with a loved one.",
      "Write a love letter to someone important to you.",
      "Practice self-love by treating yourself kindly.",
    ],
    resources: [
      { text: "The Power of Love", link: "https://example.com/power-of-love" },
      { text: "Self-Love Practices", link: "https://example.com/self-love" },
    ],
  },
  lonely: {
    emoji: "🫂",
    description: "You're feeling isolated or disconnected.",
    tips: [
      "Reach out to a friend or family member—you're not alone.",
      "Join a community or group that shares your interests.",
      "Volunteer—helping others can help you feel connected.",
    ],
    actions: [
      "Schedule a call or meetup with someone you miss.",
      "Attend a local event or workshop.",
      "Adopt a pet for companionship.",
    ],
    resources: [
      {
        text: "How to Overcome Loneliness",
        link: "https://example.com/overcome-loneliness",
      },
      { text: "Finding Community", link: "https://example.com/find-community" },
    ],
  },
  stressed: {
    emoji: "😫",
    description: "You're feeling overwhelmed or under pressure.",
    tips: [
      "Take a break and do something relaxing, like listening to music.",
      "Prioritize your tasks—what’s most important right now?",
      "Practice self-compassion—you’re doing the best you can.",
    ],
    actions: [
      "Try a 5-minute meditation or breathing exercise.",
      "Declutter your workspace to reduce distractions.",
      "Talk to someone who can offer support.",
    ],
    resources: [
      {
        text: "Stress Management Tips",
        link: "https://example.com/stress-management",
      },
      {
        text: "Quick Relaxation Techniques",
        link: "https://example.com/relaxation-techniques",
      },
    ],
  },
  proud: {
    emoji: "😌",
    description: "You're feeling accomplished and confident.",
    tips: [
      "Celebrate your achievement—you deserve it!",
      "Share your success with someone who supports you.",
      "Reflect on how far you’ve come—you’ve worked hard!",
    ],
    actions: [
      "Treat yourself to something special.",
      "Write down your accomplishments in a journal.",
      "Set a new goal to keep the momentum going.",
    ],
    resources: [
      {
        text: "How to Stay Motivated",
        link: "https://example.com/stay-motivated",
      },
      {
        text: "Celebrating Success",
        link: "https://example.com/celebrating-success",
      },
    ],
  },
  surprised: {
    emoji: "😲",
    description: "You're feeling shocked or caught off guard.",
    tips: [
      "Embrace the unexpected—it might lead to something great.",
      "Take a moment to process what’s happening.",
      "Use this surprise as an opportunity to learn something new.",
    ],
    actions: [
      "Write down your thoughts about the surprise.",
      "Talk to someone about how you’re feeling.",
      "Stay open to new possibilities.",
    ],
    resources: [
      {
        text: "Dealing with Surprises",
        link: "https://example.com/dealing-with-surprises",
      },
      {
        text: "Embracing Change",
        link: "https://example.com/embracing-change",
      },
    ],
  },
  hopeful: {
    emoji: "🌟",
    description: "You're feeling optimistic about the future.",
    tips: [
      "Visualize your goals and take one small step toward them.",
      "Write down your hopes and dreams—it makes them feel more real.",
      "Surround yourself with positive, supportive people.",
    ],
    actions: [
      "Create a vision board for your goals.",
      "Start a new project or hobby that excites you.",
      "Reflect on past successes to boost your confidence.",
    ],
    resources: [
      { text: "How to Stay Hopeful", link: "https://example.com/stay-hopeful" },
      { text: "Goal-Setting Tips", link: "https://example.com/goal-setting" },
    ],
  },
  disappointed: {
    emoji: "😞",
    description: "You're feeling let down or unsatisfied.",
    tips: [
      "Remember, setbacks are temporary—learn from this experience.",
      "Talk to someone who can offer perspective and encouragement.",
      "Focus on what you can control and let go of the rest.",
    ],
    actions: [
      "Write down what you’ve learned from this situation.",
      "Do something kind for yourself to lift your spirits.",
      "Set a new goal to move forward.",
    ],
    resources: [
      {
        text: "Dealing with Disappointment",
        link: "https://example.com/dealing-disappointment",
      },
      { text: "How to Bounce Back", link: "https://example.com/bounce-back" },
    ],
  },
  curious: {
    emoji: "🤔",
    description: "You're feeling interested and eager to learn.",
    tips: [
      "Explore something new today—read, watch, or try something different.",
      "Ask questions and seek answers—curiosity fuels growth.",
      "Dive into a topic that fascinates you.",
    ],
    actions: [
      "Start a new book or online course.",
      "Visit a museum or attend a workshop.",
      "Talk to someone knowledgeable about your interest.",
    ],
    resources: [
      {
        text: "The Benefits of Curiosity",
        link: "https://example.com/benefits-curiosity",
      },
      {
        text: "Learning Resources",
        link: "https://example.com/learning-resources",
      },
    ],
  },
  guilty: {
    emoji: "😔",
    description: "You're feeling remorseful or regretful.",
    tips: [
      "Forgive yourself—everyone makes mistakes.",
      "Apologize if needed, then let it go—you’re only human.",
      "Focus on what you can do better next time.",
    ],
    actions: [
      "Write a letter of apology (even if you don’t send it).",
      "Practice self-compassion—be kind to yourself.",
      "Reflect on what you’ve learned from the situation.",
    ],
    resources: [
      {
        text: "How to Forgive Yourself",
        link: "https://example.com/forgive-yourself",
      },
      {
        text: "Moving Past Guilt",
        link: "https://example.com/moving-past-guilt",
      },
    ],
  },
  playful: {
    emoji: "😜",
    description: "You're feeling fun-loving and lighthearted.",
    tips: [
      "Have some fun—laughter is the best medicine!",
      "Do something silly or spontaneous—it’s good for the soul.",
      "Play a game or engage in a creative activity.",
    ],
    actions: [
      "Invite friends over for a game night.",
      "Try a new hobby or craft project.",
      "Watch a comedy or funny videos.",
    ],
    resources: [
      {
        text: "The Importance of Play",
        link: "https://example.com/importance-of-play",
      },
      {
        text: "Fun Activities to Try",
        link: "https://example.com/fun-activities",
      },
    ],
  },
};

// Function to get a random mood
const getRandomMood = () => {
  const moods = Object.keys(moodData); // Get all mood keys
  const randomMood = moods[Math.floor(Math.random() * moods.length)]; // Pick a random mood
  return randomMood;
};

const Tips = () => {
  const [mood, setMood] = React.useState(getRandomMood()); // Set a random mood on load

  const { emoji, description, tips, actions, resources } = moodData[mood] || {
    emoji: "🧘",
    description: "Take a moment to reflect on how you're feeling.",
    tips: ["Breathe deeply and focus on the present moment."],
    actions: [],
    resources: [],
  };

  return (
    <>
    
      <div className="tips-container-bg">
            
      <br />
      <br />
      <br />
      <br />
      <div className="tips-container">
        {/* Big Mood Emoji */}
        <div className="mood-emoji">{emoji}</div>

        {/* Mood Description */}
        <h2 className="mood-description">{description}</h2>

        {/* Tips Section */}
        <div className="section">
          <h3>Tips for This Mood</h3>
          <ul>
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* Actionable Steps Section */}
        <div className="section">
          <h3>What You Can Do</h3>
          <ul>
            {actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>

        {/* Resources Section */}
        <div className="section">
          <h3>Learn More</h3>
          <ul>
            {resources.map((resource, index) => (
              <li key={index}>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>

    </>
  );
};

export default Tips;
