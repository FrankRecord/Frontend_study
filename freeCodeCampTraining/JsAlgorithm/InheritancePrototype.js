function Human(name) {
    this.name = name
    this.kingdom = 'animal'
    this.color = ['yellow', 'white', 'brown', 'black']
}

function Chinese(name,age) {
    Human.call(this,name)
    this.age = age
    this.color = 'yellow'
}
// 代码
Human.prototype.getName = function (){
    return this.name
}
Chinese.prototype = new Human();
Chinese.prototype.getAge = function(){
    return this.age;
}
