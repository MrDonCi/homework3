function change() {
    var str = "hello world";
    var arr = str.split(" ");
    for (var i = 0; i <= arr.length - 1; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    str = arr.join(" ");
    document.write(str + "<br>");
}
change()

function sort_bubble(arr) {
    var temp;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

var result = sort_bubble([1, 3, 5, 2, 32, 4]);
document.write(result + "<br>");