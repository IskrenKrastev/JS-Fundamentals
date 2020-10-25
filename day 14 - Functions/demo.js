var student = (function () {
    var name = 'ico';
    var getName = function () {
        return name;
    }
    return {
        getName: getName
    };
})();
console.log(student.getName());