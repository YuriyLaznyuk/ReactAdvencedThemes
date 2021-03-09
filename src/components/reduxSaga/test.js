function* generatorFunc() {
    for (let i = 0; i <5 ; i++) {
        yield i

    }

}
let gener=generatorFunc();
console.log(gener.next())
console.log(gener.next())
console.log(gener.next())
console.log(gener.next())
console.log(gener.next())
