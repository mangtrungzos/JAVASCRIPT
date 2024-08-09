// Shuffle An Array
// recommend: Using a dedicated shuffle func
//            Because in a game it's likely we're going to shuffle sth
//            more than once throughout that game

// Fisher-Yate algorithm

const cards = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
shuffle(cards);

console.log(cards);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1)); // (i + 1) nhận số ngẫu nhiễn từ 0 - i

    [array[i], array[random]] = [array[random], array[i]];
  }
}
