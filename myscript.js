var Names = new Array("范冰冰","王思聪","马天宇","郑爽","孙杨","李晨","迪丽热巴","宁泽涛","傅园慧","鄢军","周立波","贾乃亮","吴亦凡","鹿晗","关晓彤","逐梦演艺圈","科比","李易峰","杨洋","张歆艺","华晨宇","蔡徐坤","赵薇");

String.prototype.myReplace = function(f,e) {
  var reg=new RegExp(f,"g");    
  return this.replace(reg,e); 
};

window.onload = function () { 
  for (i in Names)
    {	  
  document.body.innerHTML = document.body.innerHTML.myReplace(Names[i], "Somebody");
	}
}

