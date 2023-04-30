const words = [
    'sefgdsgsdfbdfaasda',
    'awfsdffawfgdfbdfgs',
    'tytsdus',
    'sfsgasdgdfes',
    'sdfbsdfdsfbsdfhdr',
    'sdfgasdfasdgadsE',
    'SDFSDFEDBDFSRE',
    'fgsdturtdersdfgkre4rsssssss',
    'dgsdfgfgsadfhsdrsfgfggfsdfbdfgsgfger',
    'swfyu sdfn uaesinf dsk fasydu mpgfds iu'
];

// const longWords = words.filter(function(word){
//     if(word.length >= 20){
//         return true
//     }
//     else{
//         return false
//     }
// });

const containsVowel = function(word){
    for(let char of word){
       if( isVowel(char)) return true;
    }
    return false;
}
const isVowel = function(char) {
    return 'aeiou'.indexOf(char) !== -1;
};
const longWords =  words.filter(function(word){
    return word.length >= 20;
});

const cOrUWords = words.filter(function(w){
    return w[0] === 'u' || w[0] === 'c'
});

const containVowels = words.filter(containsVowel);
const noVowels = words.filter(function(word) {
    return !containsVowel(word);
});

const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

const checked = Array.from(allCheckboxes).filter(function(box){
    return box.checked;
});

const completedItems = checked.map(function(checkbox){
    return checkbox.parentElement.innerText;
});


function extraCompletedTodos(){
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    return Array.from(allCheckboxes)
    .filter(function(box){
        return box.checked;
    })
    .map(function(checkbox){
        return checkbox.parentElement.innerText;
    });
}


function myFilter(arr,callback){
    const fillteredArray = [];
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
         fillteredArray.push(arr[i]);
        }
    }
    return fillteredArray;
}

const shorties = myFilter(words,function(word){
    return word.length <- 10;
})

const everyOtherWord = myFilter(words,function(word,i){
    return i % 2 === 0
})