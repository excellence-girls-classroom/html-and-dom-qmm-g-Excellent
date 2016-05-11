function check() {
    var myClass = $("#myClass").val();
    var mySno = $("#mySno").val();
    var myName = $("#myName").val();
    var answer = ['统一建模语言','封装性','继承性','多态性'];
    
    
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
        if ( gapFilling(answer,$("#answer1").val()))
            sum += 5;
        if (gapFilling(answer,$("#answer2").val()))
            sum += 5;
        if (gapFilling(answer,$("#answer3").val()))
            sum += 5;
        if (gapFilling(answer,$("#answer4").val()))
            sum += 5;
        var element_1_1 = $("#element-1-1");
        var element_1_2 = $("#element-1-2");
        var element_2_1_1 = $("#element-2-1-1");
        var element_2_1_2 = $("#element-2-1-2");
        var element_2_1_3 = $("#element-2-1-3");
        var element_2_2_1 = $("#element-2-2-1");
        var element_2_2_2 = $("#element-2-2-2");
        var element_2_2_3 = $("#element-2-2-3");
        var element_3_1 = $("#element-3-1");
        var element_3_2 = $("#element-3-2");
        if (element_1_1.prop("checked")) {
            sum += 5;
        }
        if (element_1_2.prop("checked")) {
            sum += 5;
        }
        if (element_2_1_1.prop("checked")) {
            sum += 5;
        }
        if (element_2_1_2.prop("checked")) {
            sum += 5;
        }
        if (element_2_1_3.prop("checked")) {
            sum += 5;
        }
        if (element_2_2_1.prop("checked")) {
            sum += 5;
        }
        if (element_2_2_2.prop("checked")) {
            sum += 5;
        }
        if (element_2_2_3.prop("checked")) {
            sum += 5;
        }
        if (element_3_1.prop("checked")) {
            sum += 5;
        }
        if (element_3_2.prop("checked")) {
            sum += 5;
        }
        $("#result").val(sum);
    }
}

 function gapFilling(answer,myAnswer){
      for(var i = 0 ; i < answer.length ; i++){
         if(myAnswer === answer[i]){
             return true;
         }
     }
 }