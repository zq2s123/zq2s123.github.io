// JavaScript Document




function g(t){return document.getElementById(t);}
function showmenu(n,tablist){
for(var i=1;i<=3;i++){
	g(tablist+'_'+i).className='off';
	g(tablist+i).className='cont1_flink';
}
	g(tablist+'_'+n).className='on';
	g(tablist+n).className='cont1_fhover';
}







function g(t){return document.getElementById(t);}
function showmenu(n,tablist){
for(var i=1;i<=10;i++){
	g(tablist+'_'+i).className='off';
	g(tablist+i).className='';
}
	g(tablist+'_'+n).className='on';
	g(tablist+n).className='';
}
function closemenu(n,tablist)
{
	g(tablist+'_'+n).className='off';	
}



