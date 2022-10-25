type Point = {
    x: number,
    y: number
};

type ddPont = Point & {
    z: number
}

interface iPoint {
    x: number,
    y: number
};

interface i3dPOint extends iPoint{
    z: number
}

type stringOrNumber = string | number

function print(cord: Point){

}

interface Test {
    a: number;
}

interface Test {
    b: number
}

const myConvas = document.getElementById('convas') as HTMLCanvasElement