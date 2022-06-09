var editor = ace.edit("code");
editor.setTheme("ace/theme/textmate");
editor.getSession().setMode("ace/mode/c_cpp");
editor.setShowPrintMargin(false);
editor.setOptions({
  maxLines: Infinity,
  fontSize:"12pt",
});
editor.$blockScrolling=Infinity;

// const button=document.getElementById("run");
// alert(button);
// sessionStorage.setItem('change',"no");
// function changeText(){
// 	sessionStorage.setItem('change',"yes");
// }
// button.onclick=changeText();