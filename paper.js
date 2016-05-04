function check() {
    var myClass = document.getElementById("myClass").value;
    var mySno = document.getElementById("mySno").value;
    var myName = document.getElementById("myName").value;
    if (!myClass) {
        alert("请输入班级!");
    }
    if (!mySno) {
        alert("请输入学号!");
    }
    if (!myName) {
        alert("请输入姓名!");
    }
    else {
        var sum = 0;
        if (document.getElementById("answer1").value === "统一建模语言")
            sum += 5;
        if (document.getElementById("answer2").value === "封装性")
            sum += 5;
        if (document.getElementById("answer3").value === "继承性")
            sum += 5;
        if (document.getElementById("answer4").value === "多态性")
            sum += 5;
        var element_1_1 = document.getElementById("element-1-1");
        var element_1_2 = document.getElementById("element-1-2");
        var element_2_1_1 = document.getElementById("element-2-1-1");
        var element_2_1_2 = document.getElementById("element-2-1-2");
        var element_2_1_3 = document.getElementById("element-2-1-3");
        var element_2_2_1 = document.getElementById("element-2-2-1");
        var element_2_2_2 = document.getElementById("element-2-2-2");
        var element_2_2_3 = document.getElementById("element-2-2-3");
        var element_3_1 = document.getElementById("element-3-1");
        var element_3_2 = document.getElementById("element-3-2");
        if (element_1_1.checked) {
            sum += 5;
        }
        if (element_1_2.checked) {
            sum += 5;
        }
        if (element_2_1_1.checked) {
            sum += 5;
        }
        if (element_2_1_2.checked) {
            sum += 5;
        }
        if (element_2_1_3.checked) {
            sum += 5;
        }
        if (element_2_2_1.checked) {
            sum += 5;
        }
        if (element_2_2_2.checked) {
            sum += 5;
        }
        if (element_2_2_3.checked) {
            sum += 5;
        }
        if (element_3_1.checked) {
            sum += 5;
        }
        if (element_3_2.checked) {
            sum += 5;
        }
        document.getElementById("result").value = sum;

    }
}

function formReset() {
    document.getElementById("myForm").reset();

}