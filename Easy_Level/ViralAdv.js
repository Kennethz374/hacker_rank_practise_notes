let day = 4;

const viralAd = n => {
  let sum = 0;
  let todayRecipents = 5;
  let todayLikes = 0;
  for (let i = 1; i <= n; i++) {
    todayLikes = Math.floor(todayRecipents / 2);
    sum = sum + todayLikes;
    todayRecipents = todayLikes * 3;
  }
  console.log(sum, todayLikes);
  return sum;
};

console.log(viralAd(day));

d;
