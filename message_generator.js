//Message Generator

const introString = ['I think', 'I calculate that', 'I saw in my dreams that', 'A little bird told me that', 'My virtual cards said'];
const firstString = ['you should', 'it\'d be good if you could', 'you should not', 'you have to', 'you absolutely can\'t'];
const secondString = ['trust', 'forget about', 'love', 'ignore', 'be friends with', 'work hard for', 'enjoy', 'have fun with'];
const thirdString = ['anyone', 'everything', 'your heart', 'your job', 'your head', 'your family', 'nature'];

const randomMessage = (randStringIntro, randString1, randString2, randString3) => {
    return `${randStringIntro} ${randString1} ${randString2} ${randString3}!`;
}

const selectRandomString = arr => {
    const randNum = Math.floor(Math.random() * arr.length);
    return arr[randNum];
}

console.log(randomMessage(selectRandomString(introString), selectRandomString(firstString), selectRandomString(secondString), selectRandomString(thirdString)));