import { db } from "./firebase";

const addSampleData = async () => {
  try {
    console.log("Adding sample sessions...");
    const sessionsData = [
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

    for (const session of sessionsData) {
      await db.collection("sessions").add(session);
    }
    console.log("Sessions added successfully!");

    console.log("Adding sample decks...");
    const decksData = [
      {
        name: "Red Deck Wins",
        owner: "Player A",
        colors: ["red"],
        description:
          "Aggressive red deck focused on quick damage and burn spells",
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

    for (const deck of decksData) {
      await db.collection("decks").add(deck);
    }
    console.log("Decks added successfully!");

    console.log("All sample data added successfully!");
  } catch (error) {
    console.error("Error adding sample data:", error);
  }
};

export { addSampleData };
