// 매개변수 기본값

function getTrapezoidArea(upper = 1, lower = 1, height = 1) { // 매개변수에 default value 설정
    return (upper + lower) * height / 2;
}

console.log(getTrapezoidArea(10, 5, 3));
console.log(getTrapezoidArea(10, 5));
console.log(getTrapezoidArea(10));


function getTrapezoidArea1(upper = 1, lower = upper, height = upper) { // 매개변수에 default value 설정
    return (upper + lower) * height / 2;
}

console.log(getTrapezoidArea1(10, 5, 3));
console.log(getTrapezoidArea1(10, 5));
console.log(getTrapezoidArea1(10));

