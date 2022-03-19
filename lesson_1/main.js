var hovatens =[
    {
        tên:'thiện',
        họ: 'phạm',
    },
    {
        tên:'hoang',
        họ: 'phạm',
    },
    {
        tên:'hiền',
        họ: 'nguyễn',
    }
];
var arr = [
    1,
    2,
    [3,4],
    5
];
var newarr = arr.reduce(function(a,b){
    return a.concat(b);
},[]);
console.log(newarr)
