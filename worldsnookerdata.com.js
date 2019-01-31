var frames = {"p1": 0, "p2": 0};

$("table.frame-data tbody tr").each(function() {
	var tr = $(this);
	
	var p1 = +tr.find("td:eq(1)").text();
	var p2 = +tr.find("td:eq(3)").text();
	
	(p1 > p2) ?	frames.p1++ : frames.p2++;
	
	tr.find("td:eq(2)").append("<br />" + frames.p1 + ":" + frames.p2);
});

$("#label-timer").each(function() {
	
	var second = 1000;
	var counter = 15;
	var elem = $(this).attr("id","my-timer").text(counter);
	
	setTimeout(function(){
	   window.location.reload();
	}, counter * second);
	
	setInterval(function() {
	    counter--;
	    elem.text(counter);
	}, second);
});
