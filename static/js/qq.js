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
if(form("seekword").value=="���������̡���Ʒ��Ϣ�ؼ���"){alert("���������̡���Ʒ��Ϣ�ؼ���");form("seekword").focus();return false;}
if(form("seekword").value==""){alert("���������̡���Ʒ��Ϣ�ؼ���");form("seekword").focus();return false;}
return flag;
}

function killErrors() {
return true;
}
window.onerror = killErrors;