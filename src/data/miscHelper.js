const READING_SPEED = 100; // wpm
const measureReadingTime = (str) => {
  const nWords = str.trim().split(/\s+/).length;
  return parseInt(nWords / READING_SPEED);
};

module.exports = {
  measureReadingTime,
};
