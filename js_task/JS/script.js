let word = 'Salamii';
let count= 1;
let resultWord= [];

for (let i = 0; i < word.length; i++) {
    for (var n = i-1; n >= -1; n--) {
        if(word[i]==word[n]){
            break;
        }
    }
    if(word[i]!=word[n]){
        resultWord[i]=word[i];
    }
}

console.log(resultWord);

for (let i = 0; i < word.length; i++) {
    for (let j = i+1; j < word.length; j++) {
        if (word[i]==word[j]) {
            for (var k = i-1; k >= -1; k--) {
                if (word[i]==word[k]) {
                    break;
                }
            }
            if(word[i]!=word[k]){
                count++;
            }
        }
    }
    if(resultWord[i]!=undefined){
        console.log(resultWord[i],':',count);
        count=1;
    }
}