function snail() {
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