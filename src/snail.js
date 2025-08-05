/*The snail climbs up 7 feet each day and slips back 2 feet each night.
How many days will it take the snail to get out of a well with the given depth?

Sample Input:
31

Sample Output:
6

Explanation: Let's break down the distance the snail covers each day:
Day 1: 7-2=5
Day 2: 5+7-2=10
Day 3: 10+7-2=15
Day 4: 15+7-2=20
Day 5: 20+7-2=25
Day 6: 25+7=32
So, on Day 6 the snail will reach 32 feet and get out of the well at day, without slipping back that night.
*/

function snail() {
    /* 
    snail() How it works:
    Each loop simulates a day: the snail climbs up, check if it escapes, then slips back if not.
    The loop stops as soon as the snail reaches or exceeds the well's height.
    The answer is printed to the console.
    */

    var height = 1024; // You can change this value for different inputs
    var dayClimb = 7;
    var nightSlip = 2;
    var distance = 0;
    var days = 0;

    while (true) {
        days++;
        distance = distance + dayClimb;
        if (distance >= height) {
            break;
        }
        distance = distance - nightSlip;
    }
    console.log(days);
}

export default snail;