	var childWindow;
	function toQzoneLogin()
	{
		childWindow=window.open("http://user.ynshangji.com/qq/redirect.asp");
	} 
	
	function closeChildWindow()
	{
		childWindow.close();
	}


function checkform(form)
{
var flag=true;
if(form("seekword").value=="请输入招商、产品信息关键词"){alert("请输入招商、产品信息关键词");form("seekword").focus();return false;}
if(form("seekword").value==""){alert("请输入招商、产品信息关键词");form("seekword").focus();return false;}
return flag;
}

function killErrors() {
return true;
}
window.onerror = killErrors;