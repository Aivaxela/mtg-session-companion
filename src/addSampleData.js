import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

// Sample sessions data
const sampleSessions = [
  {
    date: "2024-01-25",
    contenderOne: "Player A",
    contenderTwo: "Player B",
    contenderOneWon: false,
  },
  {
    date: "2024-01-24",
    contenderOne: "Player A",
    contenderTwo: "Player B",
    contenderOneWon: true,
  },
];

// Sample decks data
const sampleDecks = [
  {
    name: "Red Deck Wins",
    owner: "Player A",
    colors: ["red"],
    description: "Aggressive red deck focused on quick damage and burn spells",
    wins: 3,
    losses: 2,
  },
  {
    name: "Blue Control",
    owner: "Player B",
    colors: ["blue"],
    description: "Control deck with counterspells and card draw",
    wins: 2,
    losses: 3,
  },
  {
    name: "Green Ramp",
    owner: "Player A",
    colors: ["green"],
    description: "Mana ramp deck with big creatures",
    wins: 1,
    losses: 1,
  },
  {
    name: "White Weenie",
    owner: "Player B",
    colors: ["white"],
    description: "Small white creatures with equipment and auras",
    wins: 2,
    losses: 1,
  },
  {
    name: "Jeskai Control",
    owner: "Player A",
    colors: ["white", "blue", "red"],
    description: "Three-color control deck with removal and counterspells",
    wins: 4,
    losses: 1,
  },
];

export const addSampleData = async () => {
  try {
    // Add sessions
    console.log("Adding sample sessions...");
    for (const session of sampleSessions) {
      await addDoc(collection(db, "sessions"), session);
    }
    console.log("Sessions added successfully!");

    // Add decks
    console.log("Adding sample decks...");
    for (const deck of sampleDecks) {
      await addDoc(collection(db, "decks"), deck);
    }
    console.log("Decks added successfully!");

    console.log("All sample data added successfully!");
  } catch (error) {
    console.error("Error adding sample data:", error);
  }
};

// Uncomment the line below to run the script
// addSampleData();
