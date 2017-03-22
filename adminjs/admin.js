/*
*admin js v1.0

*/

//点击登录和注册切换
function changeTab(flag,obj)
{
	if(flag=="login")
	{
		$("#login").show();
		$("#register").hide();
		$(".login-tab a").removeClass("cur");
		$(obj).addClass("cur");
	}
	else
	{
		$("#register").show();
		$("#login").hide();
		$(".login-tab a").removeClass("cur");
		$(obj).addClass("cur");
	}
}