enum Direction {
    Up = "Up",
    down= "DOW",
    left = "L",
    right= "R"
}

enum Descision {
    Yes = 1,
    No = calcEnum()
}

function calcEnum(){
    return 2;
}

function runEnum(obj: {Up: string}){

}

runEnum(Direction)

enum Test1 {
    A
}

let test1 = Test1.A
let nameA = Test1[test1] // A

const enum ConstEnum {
    a,
    b
}
let cc = ConstEnum.a


enum Dice{
    One = 1,
    Two,
    Tree
}

function ruDice(dice: Dice){
    switch(dice){
        case Dice.One:
            return 'one';
        case Dice.Two:
            return 'two'
        case Dice.Tree:
            return 'tree'
        default:
            const a:never = dice
    }
}