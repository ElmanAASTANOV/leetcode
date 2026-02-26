
    /**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let output = 0;
    const romans = [
        {
            roman: 'M',
            value: 1000
        },
        {
            roman: 'CM',
            value: 900
        },
        {
            roman: 'D',
            value: 500
        },
        {
            roman: 'CD',
            value: 400
        },
        {
            roman: 'C',
            value: 100
        },
        {
            roman: 'XC',
            value: 90
        },
        {
            roman: 'L',
            value: 50
        },
        {
            roman: 'XL',
            value: 40
        },
        {
            roman: 'X',
            value: 10
        },
        {
            roman: 'IX',
            value: 9
        },
        {
            roman: 'V',
            value: 5
        },
        {
            roman: 'IV',
            value: 4
        },
        {
            roman: 'I',
            value: 1
        },
    ]

    for(const roman of romans){
        if(s.indexOf(roman.roman) === 0){
            while(s.indexOf(roman.roman) === 0){
                output+=roman.value;
                s = s.substring(roman.roman.length);
            }

        }
    }

    return output;
};

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));

/*
var romanToInt = function(s) {
    let sum=0

    if(s.includes("IV")){
        sum=sum+4
        s = s.replaceAll("IV", "");
    }
    if(s.includes("IX")){
        sum=sum+9
         s = s.replaceAll("IX", "");
    }
    if(s.includes("XL")){
        sum=sum+40
         s = s.replaceAll("XL", "");
    }
    if(s.includes("XC")){
        sum=sum+90
         s = s.replaceAll("XC", "");
    }
    if(s.includes("CD")){
        sum=sum+400
         s = s.replaceAll("CD", "");
    }
    if(s.includes("CM")){
        sum=sum+900
         s = s.replaceAll("CM", "");
    }

    for (let i of s){
        if(i=="I"){
            sum+=1
        }
        if(i=="V"){
            sum+=5
        }
        if(i=="X"){
            sum+=10
        }
        if(i=="L"){
            sum+=50
        }
        if(i=="C"){
            sum+=100
        }
        if(i=="D"){
            sum+=500
        }
        if(i=="M"){
            sum+=1000
        }
    }

    return sum
};
*/