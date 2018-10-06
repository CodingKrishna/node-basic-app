var Student = function (id, name) {
    this.id = id;
    this.name = name;
    this.read = function () {
        console.log('Mr.'+this.name+' is reading');
    };
};

var s1 = new Student(1,'Krishna');
console.log(s1.id, s1.name);
s1.read();

var s2 = new Student(2,'Rama');
console.log(s2.id, s2.name);
s2.read();
