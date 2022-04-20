function copyToClipboard(val) {
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);
}

$('#copybtn1').click(function() {
  var account = $('#copy_board_1').val();
  if(!account){
    alert('계좌번호를 이용하지 않습니다.');
  }else{
    copyToClipboard(account);
    alert('계좌번호를 복사하였습니다');
  }

});

$('#copybtn2').click(function() {
  var account = $('#copy_board_2').val();
  if(!account){
    alert('계좌번호를 이용하지 않습니다.');
  }else{
    copyToClipboard(account);
    alert('계좌번호를 복사하였습니다');
  }
});

$('#copybtn3').click(function() {
  var account = $('#copy_board_3').val();
  if(!account){
    alert('계좌번호를 이용하지 않습니다.');
  }else{
    copyToClipboard(account);
    alert('계좌번호를 복사하였습니다');
  }
});

$('#copybtn4').click(function() {
  var account = $('#copy_board_4').val();
  if(!account){
    alert('계좌번호를 이용하지 않습니다.');
  }else{
    copyToClipboard(account);
    alert('계좌번호를 복사하였습니다');
  }
});

$('#copybtn5').click(function() {
  var account = $('#copy_board_5').val();
  if(!account){
    alert('계좌번호를 이용하지 않습니다.');
  }else{
    copyToClipboard(account);
    alert('계좌번호를 복사하였습니다');
  }
});

$('#copybtn6').click(function() {
  var account = $('#copy_board_6').val();
  if(!account){
    alert('계좌번호를 이용하지 않습니다.');
  }else{
    copyToClipboard(account);
    alert('계좌번호를 복사하였습니다');
  }
});
