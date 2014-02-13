
var imgMenu=new Array();
imgMenu[0]="images/pomme/pommeMenuHome.png";
imgMenu[1]="images/pomme/pommeMenuBrooklyn.png";
imgMenu[2]="images/pomme/pommeMenuBronx.png";
imgMenu[3]="images/pomme/pommeMenuManhattan.png";
imgMenu[4]="images/pomme/pommeMenuQueens.png";
imgMenu[5]="images/pomme/pommeMenuStatenIsland.png";

function preCharge()
{
	for (i=0;i<imgMenu.length;i++)
	{
		new Image().src = imgMenu[i];
	}
}

var lienMenu=new Array();
lienMenu[0]="#home";
lienMenu[3]="#manhattan";
lienMenu[4]="#queens";
lienMenu[1]="#brooklyn";
lienMenu[5]="#statenIsland";
lienMenu[2]="#bronx";

var reverseLinking=new Array();
reverseLinking["home"]=0;
reverseLinking["manhattan"]=3;
reverseLinking["queens"]=4;
reverseLinking["brooklyn"]=1;
reverseLinking["statenIsland"]=5;
reverseLinking["bronx"]=2;

var imgAnimation=new Array();
for (i=0;i<10;i++)
{
	var f=61+i;
	imgAnimation[i]="images/pomme/animation/P10205"+f+" copie.gif";
	new Image().src = "images/pomme/animation/P10205"+f+" copie.gif";
}

var cpt=0;

var cptAnimSuiv=0;
var cptAnimPrec=imgAnimation.length;
var x;
var lanceAnim=false;

function actualisePommeMenu(id)
{
	document.getElementById("menu").href=lienMenu[id];
	document.getElementById("ima").src=imgMenu[id];
	cpt=id;
}

function lanceAnimationPrec()
{
	if (lanceAnim)
	{
		cptAnimPrec--;
		if (cptAnimPrec<0)
		{
			cptAnimPrec=imgAnimation.length;
			lanceAnim=false;
			imagePrec();
			clearTimeout(x);
		}
		else
		{
			document.getElementById("ima").src=imgAnimation[cptAnimPrec];
		}
		x=setTimeout("lanceAnimationPrec()",50);
	}
}
function lanceAnimationSuiv()
{
	if (lanceAnim)
	{
		cptAnimSuiv++;
		if (cptAnimSuiv>9)
		{
			cptAnimSuiv=-1;
			lanceAnim=false;
			imageSuiv();
			clearTimeout(x);
		}
		else
		document.getElementById("ima").src=imgAnimation[cptAnimSuiv];
		x = setTimeout("lanceAnimationSuiv()",50);
	}
}

function imageSuiv()
{
	cpt++;
	if(cpt>=imgMenu.length) cpt=0;
		actualisePommeMenu(cpt);
}
function imagePrec()
{
	cpt--;
	if(cpt<0) cpt=imgMenu.length-1;
		actualisePommeMenu(cpt);
}

