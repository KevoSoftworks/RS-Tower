$(document).ready(function(){
	initGrid();
	$(".number").on("mousedown", function(){
		num = $(this).attr('data-num');
		row = $(this).attr('data-row');
		col = $(this).attr('data-col');
		switch($("input[name='e_type']:checked").val()){
			case "set":
				$("span[data-num='" + num + "'][data-col='" + col + "']:not([data-row='" + row + "'])").css('visibility', 'hidden');
				$("span[data-num='" + num + "'][data-row='" + row + "']:not([data-col='" + col + "'])").css('visibility', 'hidden');
				$("span[data-row='" + row + "'][data-col='" + col + "']:not([data-num='" + num + "'])").css('visibility', 'hidden');
				break;
			case "rem":
				$(this).css('visibility', 'hidden');
				break;
		}
		updateGraphics();
	});
});

function initGrid(){
	innerhtml = "<table>";
	content = "<div class='cell'><span class='number'>1</span><span class='number'>2</span><span class='number'>3</span><span class='number'>4</span><span class='number'>5</span></div>";
	for(i = 0; i < 5; i++){
		innerhtml += "<tr>";
		for(j = 0; j < 5; j++){
			innerhtml += "<td data-row='" + i + "' data-col='" + j + "'><div class='cell'>" + 
				"<span data-num='1' data-row='" + i + "' data-col='" + j + "' class='number'>1</span>"+ 
				"<span data-num='2' data-row='" + i + "' data-col='" + j + "' class='number'>2</span>"+ 
				"<span data-num='3' data-row='" + i + "' data-col='" + j + "' class='number'>3</span>"+ 
				"<span data-num='4' data-row='" + i + "' data-col='" + j + "' class='number'>4</span>"+ 
				"<span data-num='5' data-row='" + i + "' data-col='" + j + "' class='number'>5</span>"+ 
			"</div></td>";
		}
		innerhtml += "</tr>";
	}
	innerhtml += "</table>";
	$("#grid").append(innerhtml);
}

function updateGraphics(){
	$("td").removeClass('good');
	$("td").removeClass('error');
	for(i = 0; i < 5; i++){
		for(j = 0; j < 5; j++){
			len = 0;
			$("span[data-row='" + i + "'][data-col='" + j + "']").each(function(){
				if($(this).css("visibility") == "visible") len++;
			});
			if(len == 1) $("td[data-row='" + i + "'][data-col='" + j + "']").addClass('good');
			if(len == 0) $("td[data-row='" + i + "'][data-col='" + j + "']").addClass('error');
		}
	}
}