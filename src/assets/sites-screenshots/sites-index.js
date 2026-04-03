import larderToTable from "./larder-to-table.png";
import underTheShelf from "./under-the-shelf.png";
import piddleTogether from "./piddle-together.png";
import financeTracker from "./finance-tracker.png";
import snakeGame from "./snake-game.png";
import magicCardGame from "./magic-card-game.png";

export function SitesData() {
  let data = [
    {
      src: larderToTable,
      link: "https://larder-to-table.shelbyshipley.dev",
      alt: "Lyre Front",
      title: "Larder to Table",
      description:
        "Build your recipe collection using Larder to Table. Search for your favorite meals by title or ingredients! Never lose your dear old Granny's Famous Sugar Cookie recipe again!",
    },
    {
      src: underTheShelf,
      link: "https://under-the-shelf.shelbyshipley.dev",
      alt: "Lyre Back",
      title: "Under the Shelf",
      description:
        "A place to catalog all the word mountains you've summited and your thoughts about the journey. Rate 'em, log 'em, categorize 'em!",
    },
    {
      src: piddleTogether,
      link: "https://piddle-together.shelbyshipley.dev",
      alt: "Lyre Front",
      title: "Piddle Together",
      description:
        "Conveniently organize all of your projects using Piddle Together. Assign tasks to teammates. Your whole team can keep its work up to date and moving forward!",
    },
    {
      src: financeTracker,
      link: "https://finance-tracker.shelbyshipley.dev",
      alt: "Lyre Back",
      title: "Finance Tracker",
      description:
        "Wondering where all your money is going? Use the Finance Tracker to list out all your transactions! Easily view and edit your purchases.",
    },
    {
      src: snakeGame,
      link: "https://snake-game-27ff9.web.app/",
      alt: "Lyre Front",
      title: "Snake Game",
      description:
        "This is my take on the classic Snake Game. No need for a bulgy Nokia phone! Eat snake kibble to grow long.",
    },
    {
      src: magicCardGame,
      link: "https://magic-card-game-5aaf6.web.app/",
      alt: "Lyre Back",
      title: "Magic Card Game",
      description:
        "A classic card matching game to sharpen your memory with a few clicks!",
    },
  ];
  return data;
}
