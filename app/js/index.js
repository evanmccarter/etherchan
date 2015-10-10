$(document).ready(function()
{
	$("button.set").click(function() {
		var p = parseInt($("input.pset").val(), 10);
		var g = parseInt($("input.gset").val(), 10);
		SimpleStorage.setpg(p, g);
		addToLog("SimpleStorage.set("+p+", "+g+")");
	});
	
	$("button.seta").click(function() {
		var a = parseInt($("input.aset").val(), 10);
		SimpleStorage.seta(a);
		addToLog("SimpleStorage.seta("+a+")");
	});
	
	$("button.setb").click(function() {
		var b = parseInt($("input.bset").val(), 10);
		SimpleStorage.setb(b);
		addToLog("SimpleStorage.set("+b+")");
	});
	
	document.getElementsByClassName("get")[0].addEventListener('click', function() {
		var p = SimpleStorage.getp().toNumber();
		var g = SimpleStorage.getg().toNumber();
		$(".pget").html(p);
		$(".gget").html(g);
		addToLog("SimpleStorage.getp()");
		addToLog("SimpleStorage.getg()");
	});
	
	document.getElementsByClassName("getab")[0].addEventListener('click', function() {
		var a = SimpleStorage.geta().toNumber();
		var b = SimpleStorage.getb().toNumber();
		$(".aget").html(a);
		$(".bget").html(b);
		addToLog("SimpleStorage.geta()");
		addToLog("SimpleStorage.getb()");
	});
	
	var addToLog = function(txt) {
		$(".logs").append("<br>" + txt);
	}
});
