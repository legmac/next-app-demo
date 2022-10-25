let c1: 'test' = 'test';

type actionsType = 'up'|'down';

function performAction(action:actionsType): -1|1{
switch(action){
    case 'down':
        return -1;
    case 'up':
        return 1;
}
}

interface CompexAction {
    s: string
}