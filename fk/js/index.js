function creat(i){
  $.ajax({
          type: "post",
          url: "creat.php?action=creat"+i,
          data: $("#form"+i).serialize(),
          success: function(data) {
            data=JSON.parse(data);
            data=data[0];
            if(data.code=="success"){
              switch(data.type){
                case "0":
                  $("#type").html("普通跳转");
                break;
                case "1":
                  $("#type").html("防红跳转");
                break;
                case "2":
                  $("#type").html("强开直链");
                break;
              }
              $("#link_body").show();
              $(".copy-button").attr("data-clipboard-text",data.short)
              $("#short").html(data.short);
              $("#long").html(data.long);
              $("#time").html(data.time);
                    qrcode.makeCode(data.short);
                    $("#msg"+i).html("");
                    if(data.vip==1){
                      $("#vip").hide();
                    }
            }else{
            	layer.alert(data.msg);
            }
          }
      })
}
$(".copy-button").click(function(){
    //layer.alert("已复制到剪贴板");
    $(".copy-toast").show();
    var clipBoard = new ClipboardJS('.copy-button');
    clipBoard.on('success', function(e) {
        e.clearSelection();
    });
});
var qrcode = new QRCode('billImage', {width: 90,height: 90,colorDark: '#000000',colorLight: '#ffffff',correctLevel: QRCode.CorrectLevel.H});