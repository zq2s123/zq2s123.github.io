
<!--
//图片按比例缩放
var flag=false;
function DrawImage(ImgD,iwidth,iheight){
 var image=new Image();
 var iwidth = 153;  //定义允许图片宽度
 var iheight =153;  //定义允许图片高度
 image.src=ImgD.src;
 if(image.width>0 && image.height>0){
 flag=true;
 if(image.width/image.height>= iwidth/iheight){
  if(image.width>iwidth){  
  ImgD.width=iwidth;
  ImgD.height=(image.height*iwidth)/image.width;
  }else{
  ImgD.width=image.width;  
  ImgD.height=image.height;
  }
  //ImgD.alt=image.width+"×"+image.height;
  }
 else{
  if(image.height>iheight){  
  ImgD.height=iheight;
  ImgD.width=(image.width*iheight)/image.height;  
  }else{
  ImgD.width=image.width;  
  ImgD.height=image.height;
  }
  //ImgD.alt=image.width+"×"+image.height;
  }
 }
} 

function DrawImage1(ImgD,iwidth,iheight){
 var image=new Image();
 var iwidth = 125;  //定义允许图片宽度
 var iheight =105;  //定义允许图片高度
 image.src=ImgD.src;
 if(image.width>0 && image.height>0){
 flag=true;
 if(image.width/image.height>= iwidth/iheight){
  if(image.width>iwidth){  
  ImgD.width=iwidth;
  ImgD.height=(image.height*iwidth)/image.width;
  }else{
  ImgD.width=image.width;  
  ImgD.height=image.height;
  }
  //ImgD.alt=image.width+"×"+image.height;
  }
 else{
  if(image.height>iheight){  
  ImgD.height=iheight;
  ImgD.width=(image.width*iheight)/image.height;  
  }else{
  ImgD.width=image.width;  
  ImgD.height=image.height;
  }
  //ImgD.alt=image.width+"×"+image.height;
  }
 }
} 

function DrawImage_hf(ImgD,iwidth,iheight){
 var image=new Image();
 var iwidth = 1200;  //定义允许图片宽度
 var iheight =1200;  //定义允许图片高度
 image.src=ImgD.src;
 if(image.width>0 && image.height>0){
 flag=true;
 if(image.width/image.height>= iwidth/iheight){
  if(image.width>iwidth){  
  ImgD.width=iwidth;
  ImgD.height=(image.height*iwidth)/image.width;
  }else{
  ImgD.width=image.width;  
  ImgD.height=image.height;
  }
  //ImgD.alt=image.width+"×"+image.height;
  }
 else{
  if(image.height>iheight){  
  ImgD.height=iheight;
  ImgD.width=(image.width*iheight)/image.height;  
  }else{
  ImgD.width=image.width;  
  ImgD.height=image.height;
  }
  //ImgD.alt=image.width+"×"+image.height;
  }
 }
} 
//-->

