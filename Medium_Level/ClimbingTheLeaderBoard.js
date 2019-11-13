// Question

// sample input array one: leaderboard: 100, 100, 50, 40, 40, 20, 10
// array of alice: 5, 25, 50, 120 (in ascending order)

// ouput has to be an array of alice's ranking each game
// 6,4,2,1

const climbingLeaderboard = function(scores, alice) {
  let result = [];
  const newScores = [...new Set(scores)];
  let size = newScores.length - 1;

  for (let i = 0; i < alice.length; i++) {
    while (newScores[size] <= alice[i]) {
      size--;
    }
    result.push(size + 2);
  }
  return result;
};

console.log(climbingLeaderboard([100,100,50,40,40,20,10],[5,25,50,120]));