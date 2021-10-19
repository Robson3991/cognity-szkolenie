let animal = 'kot';
let info = '';
const age = 80;

if (animal == 'kot') {
    info = 'to jest kot';
} else if(animal == 'pies' || animal == 'pies') {
} else if(animal == 'pies' && animal == 'pies') {
} else if(animal == 'pies' || animal == 'pies') {
} 
else { 

}

switch (true) {
    case animal == 'pies' && animal == 'kot': //false
        info = 'to jest większe niż 20';
        break;
    case 'pies':
        info = "to jest większe niż 60";
        break;
    case 'pies':
        info = "to jest większe niż 60";
        break;
    case 'pies':
        info = "to jest większe niż 60";
        break;
    case 'pies':
        info = "to jest większe niż 60";
        break;
    case 'pies':
        info = "to jest większe niż 60";
        break;
    default:
        info = 'nie wiem co to za zwierzę';
}


// ==============================

const age = 10;

switch(true) {
    case age < 18:
        console.log('jesteś dzieckiem');
        break;
    case age > 60 && age < 80:
        console.log('jesteś dziadkiem');
        break;
    case age > 80:
        console.log('jesteś starym dziadkiem');
        break;
    default:
        console.log('jesteś dorosły');
}

// ternary operator

var person = '';

if (age < 18) {
    person = 'dzieciak'
} else {
    person = 'dorosły'
}

const a = age < 18 ? 'dzieciak' : 'dorosły'