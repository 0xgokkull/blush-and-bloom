import type { QuestionData } from '../types';

export const questionsData: QuestionData[] = [
  {
    id: 1,
    questionNumber: 1,
    title: "Question 1",
    question: "Be honest... do you think you're cute? 🥺",
    illustrationType: 'panda-mirror',
    primaryBtnText: "YES, obviously! 💗",
    secondaryBtnText: "NOPE 🙈",
    isDodging: true,
  },
  {
    id: 2,
    questionNumber: 2,
    title: "Question 2",
    question: "Do you know how special you are to someone? 🧸",
    illustrationType: 'teddy-heart',
    primaryBtnText: "I think so... 💕",
    secondaryBtnText: "Not really 🥺",
    isDodging: false,
  },
  {
    id: 3,
    questionNumber: 3,
    title: "Question 3",
    question: "Can I ask you to do one tiny thing for me? 🌸",
    illustrationType: 'panda-flower',
    primaryBtnText: "Of course! 💖",
    secondaryBtnText: "What is it? 👀",
    isDodging: false,
  },
  {
    id: 4,
    questionNumber: 4,
    title: "Question 4",
    question: "Can I tell you something without you making fun of me? 🥺💌",
    illustrationType: 'doll-heart',
    primaryBtnText: "Of course, tell me! 💗",
    secondaryBtnText: "Maybe... 👀",
    isDodging: false,
  },
];
