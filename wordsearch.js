//transpose function from Ben and David
const transpose = function(letters) {

  const newMatrix = [];
  for (let i = 0;  i < letters[0].length; i++) {
    newMatrix[i] = [];
    for (let j = 0;  j < letters.length; j++) {
      newMatrix[i][j] = letters[j][i];
    }
  } return newMatrix;
};

//add vertical line join using transpose

//search for word in horizontal line join

//search for word in vertical line join

//Word search from Ilia and Ben

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (let j of verticalJoin) {
    if (j.includes(word)) return true;
  } return false;
};

module.exports = wordSearch;