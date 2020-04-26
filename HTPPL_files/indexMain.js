"use strict";

let mainHeaderRus= '<div class=\"mainHeader\"><a id=icoLogo  class=\"icoLogo\"></a></div><div class=\"mainHeader\"><a  class=\"fontNameLab\">Лаборатория физики высокотемператруной плазмы</a><a  href=\"http://www.ioffe.ru/pti_ppap.html\" class=\"fontNameDiv\">Отеление физики плазмы, атомной физики и астрофизики <br> Физико-технический институт имени А.Ф. Иоффе Российской академии наук</a></div><a id=icoEng class=\"icoEng\"></a>';	


let mainHeaderEng	= '<div class=\"mainHeader\"><a id=icoLogo  class=\"icoLogo\"></a></div><div class=\"mainHeader\"><a  class=\"fontNameLab\">High Temperature Plasma Physics Lab</a><a  href=\"http://www.ioffe.ru/pti_ppap.html\" class=\"fontNameDiv\">Division of Plasma Physics, Atomic Physics and Astrophysics<br>Ioffe Institute, Russian Academy of Science</a></div> <a id=icoRus  class=\"icoRus\"></a>';		


let mainHeader	= mainHeaderEng;		

let arrMenuItemsEng = ["Structure", "Tokamaks", "Seminars", "Conferences","Journals","History"];
let arrMenuItemsRus = ["Структура", "Токамаки", "Семинары", "Конференции","Обозрение","История"];

let arrMenuItemsLang =arrMenuItemsEng ;

let arrMenuItems = ["Structure", "Tokamaks", "Seminars", "Conferences","Journals","History"];

let menuItemsFocusId = 'menuActivities';	 
let arrLinkPages = ["Tokamaks/Structure.html","Tokamaks/Tokamaks.html", "Seminars/Seminars.html", "Conferences/Conferences.html","Journals/Journals.html", "History/History.html"];


document.write(mainHeader+menuStringFind(menuItemsFocusId) );	
document.body.style.class="parquet";
	
function menuStringFind(menuItemsFocusId) {
    let menuString= '<div id=\"menu\" class=\"menu_header\" align=\"center\">';	
	let indexFind=0;
	arrMenuItems.forEach(function(item, index, array) {	
		if (menuItemsFocusId=='menu'+item)
			{
				menuString=menuString+'<a  id=\"menu'+item+'\"class=\"button_menu_focus\"  >'+arrMenuItemsLang[index]+'</a>';
				indexFind=index;
			}
		else	menuString=menuString+'<a  id=\"menu'+item+'\"  class=\"button_menu\"  >'+arrMenuItemsLang[index]+'</a>';
	});
	
	menuString=menuString+"</div>";
	
	let drawBodyBegin = '<div class="\separator"\ > </div> <div'+ ' id=\"load'+menuItemsFocusId+'\"'+' class="\block_body"\ align="\left"\><iframe src="\ ';	 
    let drawBodyEnd =  ' \" width=\" 1100px \"  height=\"80% \"  frameborder=\"no\"></div> ';
	
	let mainReturnString='<body class="\parquet"\>' + menuString+drawBodyBegin +arrLinkPages[indexFind] +drawBodyEnd+'</body>';	 

	return mainReturnString
}

			
document.body.onclick = function(evt) {
	if (evt.target.id) {
		if (evt.target.id=='icoRus')  {mainHeader=mainHeaderRus;  arrMenuItemsLang=arrMenuItemsRus };
		if (evt.target.id=='icoEng')  {mainHeader=mainHeaderEng;  arrMenuItemsLang=arrMenuItemsEng };		
		arrMenuItems.forEach(function(item, index, array) {	
			if (evt.target.id=='menu'+item) 	menuItemsFocusId=evt.target.id;
		});
	 document.body.innerHTML=mainHeader+menuStringFind(menuItemsFocusId) ;
	}
}
