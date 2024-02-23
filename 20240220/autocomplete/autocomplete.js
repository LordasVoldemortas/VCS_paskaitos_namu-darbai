const phrases = [
    'What is my IP',
    'How many weeks in a year',
    'How many ounces in a cup',
    'How to screenshot on Mac',
    'When is the Super Bowl',
    'When is Easter',
    'When is Father\'s Day',
    'What is Juneteenth',
    'How do I register to vote',
    'When is Thanksgiving'
];
const clicks = [];
for(let i =0; i<10; i++) {
    clicks.push(0)
}
console.log(clicks)

const input = document.querySelector('input');
const newinput = (e) => {

    const text = e.target.value.toLowerCase();
    const filterPhrases = phrases.filter(sentence => sentence.toLowerCase().includes(text)).slice(0, 5);

    const html = filterPhrases.map(value => `<li onclick="newclick(event)">${value}</li>`).join('');
    document.querySelector('.autocomplete').innerHTML = html;

    // document.querySelectorAll('li').forEach(el => {
    //     el.newclick = (e) => {
    //         // console.log(e.target.textContent);
    //         input.value = e.target.textContent;
    //         document.querySelector('.autocomplete').innerHTML = '';
    //     };
    // });
};

const newclick = (e) => {
    input.value = e.target.textContent;
    document.querySelector('.autocomplete').innerHTML = '';
// phrases.indexOf(e.target.textContent)
clicks[phrases.indexOf(e.target.textContent)]++
console.log(clicks)

const results = [...phrases]
results.sort((a, b) => {
   return clicks[phrases.indexOf(b)] - clicks[phrases.indexOf(a)]
});
console.log(results);

//document.querySelector('.results').innerHTML = results
document.querySelector('.results').innerHTML = ''
  results.forEach((text) => {
    return document.querySelector('.results').innerHTML += `<li>${text}</li>`
 })

}


// toplistas