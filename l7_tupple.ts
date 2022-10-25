const aa:[number, string, number] = [0,'a',1]

aa.push(1)

aa.map(s => {
    switch(typeof s){
        case 'string':

        break;
    }
})

const [c2,d2,f2] = aa;

const [c33, ...rest] = aa;

aa[1].charAt