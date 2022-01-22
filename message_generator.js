//Message Generator

const firstString = ['You should', 'It\'d be good if you could', 'You should not', 'You have to', 'You absolutely can\'t'];
const secondString = ['trust', 'forget about', 'love', 'ignore', 'be friends with'];
const thirdString = ['anyone', 'everything', 'your heart', 'your job', 'your head'];

const randomMessage = (randString1, randString2, randString3) => {
    return `${randString1} ${randString2} ${randString3}!`;
}

const selectRandomString = arr => {
    const randNum = Math.floor(Math.random() * arr.length);
    return arr[randNum];
}

console.log(randomMessage(selectRandomString(firstString), selectRandomString(secondString), selectRandomString(thirdString)));