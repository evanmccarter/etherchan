$(document).ready(function()
{
	var receiver = "b3ecca9193c4027094efd77cdaa0c1797c39d946";
	
	addToLog("test");
	DiffieHellman.startConnection(receiver, receiver);
	addToLog("test");
	
	$("button.seta").click(function() {
		var a = parseInt($("input.aset").val(), 10);
		DiffieHellman.seta(receiver, a.toString());
		addToLog("DiffieHellman.seta(" + receiver + ", " + a.toString + ");");
	});
	
	$("button.setb").click(function() {
		var b = parseInt($("input.bset").val(), 10);
		DiffieHellman.setb(receiver, b.toString());
		addToLog("DiffieHellman.setb(" + receiver + ", " + b.toString + ");");
	});
	
	document.getElementsByClassName("get")[0].addEventListener('click', function() {
		var p = DiffieHellman.getp().toString();
		var g = DiffieHellman.getg().toString();
		$(".pget").html(p);
		$(".gget").html(g);
		addToLog("DiffieHellman.getp()");
		addToLog("DiffieHellman.getg()");
	});
	
	document.getElementsByClassName("getab")[0].addEventListener('click', function() {
		var a = DiffieHellman.geta().toNumber();
		var b = DiffieHellman.getb().toNumber();
		$(".aget").html(a);
		$(".bget").html(b);
		addToLog("DiffieHellman.geta()");
		addToLog("DiffieHellman.getb()");
	});
	
	var addToLog = function(txt) {
		$(".logs").append("<br>" + txt);
	}
});
