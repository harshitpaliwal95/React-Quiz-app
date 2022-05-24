import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: uuid(),
    title: "One Piece",
    img: "HYNfMOK9kvg",
    totalScore: 20,
    mcqs: [
      {
        _id: uuid(),
        question: "Zoro's most powerfull move",
        options: [
          "Kiki Kyuutoryu: Asura",
          "Santoryu Ougi: Rengoku Onigiri",
          "Santoryu Ougi: Sanzen Sekai",
          "Ichidai Sanzen Daisen Sekai",
        ],
        answer: "Ichidai Sanzen Daisen Sekai",
      },
      {
        _id: uuid(),
        question: "In Mock Town, how did Bellamy lose to Luffy?",
        options: [
          "yes he lose first",
          "luffy knocked out bellamy with one punch",
          "Zoro beat bellamy",
          "they walk away",
        ],
        answer: "luffy knocked out bellamy with one punch",
      },
      {
        _id: uuid(),
        question: "Luffy's devil fruit type",
        options: ["Logia type", "Zoan type", "Paramecia type", "Unknown"],
        answer: "Zoan type",
      },
      {
        _id: uuid(),
        question: "Whitebeard pirate first division commander was?",
        options: [
          "Fire Fist Portgas D. Ace",
          "Marco the Phoenix",
          "Thatch",
          "Kizuki Oden",
        ],
        answer: "Marco the Phoenix",
      },
      {
        _id: uuid(),
        question: "Who Kill Portgas D Ace",
        options: ["Akainu", "Kizaru", "Marshall D. Teach", "Crocodile"],
        answer: "Akainu",
      },
    ],
    categoryName: "anime",
  },

  {
    _id: uuid(),
    title: "Naruto",
    img: "lOxAXP8RrhU",
    totalScore: 20,
    mcqs: [
      {
        _id: uuid(),
        question:
          "Who tricks Naruto into stealing a scroll in the first episode of the series?",
        options: ["Iruka", "Mizuki", "Hiruzen", "Mitsuki"],
        answer: "Mizuki",
      },
      {
        _id: uuid(),
        question: "What is the name of Madara Uchiha's grand plan?",
        options: [
          "Project Tsukuyomi",
          "Project Tsukigakure",
          "Project Tsuki no Me",
          "Infinite Tsukuyomi",
        ],
        answer: "Infinite Tsukuyomi",
      },
      {
        _id: uuid(),
        question: "Who killed Jiraya",
        options: ["nagato", "yamato", "obito", "madara"],
        answer: "nagato",
      },
      {
        _id: uuid(),
        question: "What is the name of Zabuza's sword?",
        options: [
          "Haku",
          "Shark Skin/Samehada",
          "Helmsplitter/Kabutowari",
          "Executioner's Blade/Kubikiribocho",
        ],
        answer: "Executioner's Blade/Kubikiribocho",
      },
      {
        _id: uuid(),
        question: "Why is Kakashi always late?",
        options: [
          "He gets lost on the path of life",
          "He visits the Hokage daily",
          "He visits the Memorial Stone",
          "He's reading Jiraiya's novels",
        ],
        answer: "He's reading Jiraiya's novels",
      },
    ],
    categoryName: "anime",
  },
  {
    _id: uuid(),
    title: "CSS",
    img: "OEV8gMkCHXQ",
    totalScore: 20,
    mcqs: [
      {
        _id: uuid(),
        question: "What does CSS stand for?",
        options: [
          "Cascade sheets style",
          "Color and style sheets",
          "Cascading style sheets",
          "Coded Style Sheet",
        ],
        answer: "Cascading style sheets",
      },
      {
        _id: uuid(),
        question:
          "Which of the correct syntax to add the external stylesheet in CSS ?",
        options: [
          "<style src = quiz.css>",
          "<style src = 'quiz.css'>",
          "<stylesheet> quiz.css </stylesheet>",
          "<link rel='stylesheet' type='quiz/css' href='quiz.css'>",
        ],
        answer: "<link rel='stylesheet' type='quiz/css' href='quiz.css'>",
      },
      {
        _id: uuid(),
        question:
          "Which of the below CSS properties is used to change the background color of CSS ?",
        options: ["bg color", "color-background", "background-color", "color"],
        answer: "background-color",
      },
      {
        _id: uuid(),
        question:
          "Which of the below CSS class is used to change the text color of CSS ?",
        options: [
          "background-color",
          "color-background",
          "color",
          "None of the above",
        ],
        answer: "color",
      },
      {
        _id: uuid(),
        question:
          "Which of the below is correct syntax when we put a line over text in CSS ?",
        options: [
          "text-decoration: line",
          "text-decoration: none",
          "text-decoration: overline",
          "text-decoration: underline",
        ],
        answer: "text-decoration: overline",
      },
    ],
    categoryName: "coding",
  },
];
