var relatedLink = [
	{phrase: "The Waste Land", link: "http://www.firstworldwar.com/features/trenchlife.htm"},
	{phrase: "I. The Burial of the Dead", link: "https://www.youtube.com/watch?v=surDt5jYd1Q"},
	{phrase: "April is the cruellest month", link: "http://takemeback.to/24-September-1994#.VX1o-vlViko"},
	{phrase: "breeding", link: "https://www.youtube.com/watch?v=ZDP_ewMDxCo"},
	{phrase: "Lilacs", link: "https://s-media-cache-ak0.pinimg.com/474x/6b/c9/46/6bc946b85c23c4e79951345ff185af70.jpg"},
	{phrase: "out of the dead land", link: "https://www.google.com/maps/place/Rose+Hill+Cemetery/@37.957715,-121.871026,17z/data=!3m1!4b1!4m2!3m1!1s0x8085589331eaa85d:0xacbd945df7a3c752"}, 
	{phrase: "mixing Memory", link: "https://www.youtube.com/watch?v=4o-VplYrqBs"},
	{phrase: "and desire", link: "http://static1.squarespace.com/static/52570e72e4b087f3368a1d41/t/525d9b24e4b0fe5f66888aee/1381866315072/Katie+Dwyer+at+Crater+Lake.JPG"}, 
	{phrase: "stirring Dull roots", link: "http://rememberthatonetimei.tumblr.com/post/121640784102/untitled"}, 
	{phrase: "with spring rain", link: "https://soundcloud.com/ohwondermusic/the-rain"},
	{phrase: "Winter kept us warm", link: "https://vimeo.com/2193639"}, 
	{phrase: "covering Earth", link: "http://hisz.rsoe.hu/alertmap/index2.php"}, 
	{phrase: "in forgetful snow", link: "https://www.google.com/maps/place/Lake+Tahoe/data=!4m2!3m1!1s0x809978a1b91f1151:0x8c3f1fafeeafb520?sa=X&ved=0CB0Q8gEwAGoVChMItr6s9I-TxgIVFhiSCh3S2ACz"}, 
	{phrase: "feeding A little life with dried tubers", link: "http://3.bp.blogspot.com/-gRsby0eMFlU/UJgIBzFL6cI/AAAAAAAAEa4/Np5wQBnZYDo/s640/frida-kahlo-without-hope.jpg"},
	{phrase: "Summer", link: "https://www.youtube.com/watch?v=UFatVn1hP3o"}, 
	{phrase: "surprised us", link: "http://knowyourmeme.com/memes/surprise-bitch"}, 
	{phrase: "coming over the Starnbergersee", link: "http://www.bavaria.travel/data/mediadb/cms_pictures/%7B1bd1c0aa-c876-bbae-692a-6dfdf9b0e2e7%7D.jpg"},
	{phrase: "With a shower of rain", link: "https://www.youtube.com/watch?v=w40ushYAaYA"}, 
	{phrase: "we stopped in the colonnade", link: "https://upload.wikimedia.org/wikipedia/commons/4/44/Wikimedia_Conference_2015_photo_by_Pine_-_28.jpg"},
	{phrase: "And went on in sunlight", link: "http://www.nobelprize.org/nobel_prizes/literature/laureates/1995/poems-1-e.html"}, 
	{phrase: "into the Hofgarten", link: "http://edwardbgordon.blogspot.com/2014/12/im-hofgarten.html"},
	{phrase: "And drank coffee", link: "https://en.wikipedia.org/wiki/Cafe_Terrace_at_Night"}, 
	{phrase: "and talked for an hour", link: "https://www.youtube.com/watch?v=0snNB1yS3IE"},
	{phrase: "Bin gar keine Russin, stamm’ aus Litauen, echt deutsch", link: "https://www.youtube.com/watch?v=O8YXLP-aY90"},
	{phrase: "And when we were children", link: "https://vimeo.com/84477259"}, 
	{phrase: "staying at the arch-duke’s", link: "https://www.youtube.com/watch?v=eNj53-mu7xw"},
	{phrase: "My cousin’s", link: "https://www.facebook.com/photo.php?fbid=638758142810259&l=86707cf6b8"}, 
	{phrase: "he took me out on a sled", link: "https://www.youtube.com/watch?v=Nj1p02iE0t4"},
	{phrase: "And I was frightened", link: "https://www.youtube.com/watch?v=OwgWkUIm9Gc"}, 
	{phrase: "He said, Marie, Marie, hold on tight", link: "https://www.youtube.com/watch?v=exppByLkZ04"}, 
	{phrase: "And down we went", link: "https://en.wikipedia.org/wiki/Jack_and_Jill_(nursery_rhyme)"},
	{phrase: "In the mountains", link: "http://www.sixwordmemoirs.com/story.php"}, 
	{phrase: "there you feel free", link: "https://media0.giphy.com/media/pYfEywOAolwnm/200_s.gif"},
	{phrase: "I read", link: "http://rememberthatonetimei.tumblr.com/post/121646980452/on-reading"},
	{phrase: "much of the night", link: "https://twitter.com/NovasDays/status/610672909812568064"},
	{phrase: "and go south in the winter", link: "http://vietnamveteransmemoral.homestead.com/files/_2b.jpg"}
];

function showLink(phrase) {
	for(var i = 0; i < relatedLink.length; i++) {
		var phraseIndex = relatedLink[i].phrase;
		var linkIndex = relatedLink[i].link;
		if(phrase === phraseIndex) {
			// console.log(linkIndex);
			// console.log(phraseIndex);
			$("#targetVideo").attr("src", linkIndex);
			return linkIndex;
		}
	}
}

$(document).ready(function(){
	$("span").on("click", function(){
		var phraseValue = $(this).attr("value");
		$("#title-name").html(phraseValue);
		console.log(phraseValue);
		var link = showLink(phraseValue);
		console.log(link);
	});

});