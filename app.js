let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];

for(let a of pronoun) {
    for(let b of adj) {
        for(let c of noun) {
            console.log(`${a}${b}${c}.com`);
        }
    }
}