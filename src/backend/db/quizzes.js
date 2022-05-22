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
    _id: "3fe39675-140b-4075-82f3-949a4dc95d18",
    title: "Naruto",
    img: "lOxAXP8RrhU",
    totalScore: 20,
    mcqs: [
      {
        _id: "dddcd7a2-a479-482e-ae82-d55e2468534d",
        question: "Which season Harvey is the Most Badass One",
        options: ["Season 1", "Season 2", "Season 6", "Every Season"],
        answer: "Every Season",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb6",
        question: "In which season does Mike was imprisoned",
        options: ["Season 3", "Season 5", "Season 7", "Season 4"],
        answer: "Season 4",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ec54",
        question: "Harvey had what kind of emotional problems",
        options: ["Attachment Issues", "Panic Attack", "Trauma", "Stress"],
        answer: "Attachment Issues",
      },
    ],
    categoryName: "anime",
  },
  {
    _id: "3fe39675-140b-4075-82f3-949a4dc95d18",
    title: "CSS",
    img: "OEV8gMkCHXQ",
    totalScore: 20,
    mcqs: [
      {
        _id: "dddcd7a2-a479-482e-ae82-d55e2468534d",
        question: "Which season Harvey is the Most Badass One",
        options: ["Season 1", "Season 2", "Season 6", "Every Season"],
        answer: "Every Season",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb6",
        question: "In which season does Mike was imprisoned",
        options: ["Season 3", "Season 5", "Season 7", "Season 4"],
        answer: "Season 4",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ec54",
        question: "Harvey had what kind of emotional problems",
        options: ["Attachment Issues", "Panic Attack", "Trauma", "Stress"],
        answer: "Attachment Issues",
      },
    ],
    categoryName: "coding",
  },
];
