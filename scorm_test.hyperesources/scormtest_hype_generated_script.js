//	HYPE.documents["scorm_test"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="scorm_test.hyperesources",c="scorm_test",e="scormtest_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/scormtest_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_601","HYPE_dtl_601",!0==(null!=a&&10>a||false==!0)?"HYPE-601.full.min.js":"HYPE-601.thin.min.js"),false==!0&&(a=a||l("HYPE_w_601","HYPE_wdtl_601","HYPE-601.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"scorm_setup",source:"function(hypeDocument, element, event) {\t//initialize communication with the LMS\r\n\tScormProcessInitialize();\r\n\n}",identifier:"11"},{name:"lesson_complete",source:"function(hypeDocument, element, event) {\r\nScormProcessSetValue(\"cmi.core.lesson_status\", \"passed\");\r\n\n\nScormProcessSetValue(\"cmi.core.score.raw\", 73);\r\nScormProcessSetValue(\"cmi.core.score.min\", \"0\");\r\nScormProcessSetValue(\"cmi.core.score.max\", \"100\");\n        \n        \n}",identifier:"12"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_601(c,e,{"1":{n:"scormfunctions.js"},"-2":{n:"blank.gif"},"-1":{n:"PIE.htc"},"0":{p:1,n:"Comp_2.gif",g:"5",t:"@1x"}},h,[],d,[{n:"Untitled Scene",o:"1",X:[0]}],[{A:{a:[{p:4,h:"11"}]},o:"3",p:"600px",cA:false,Y:600,Z:400,c:"#FFFFFF",L:[],bY:1,d:600,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0.15,b:[],a:[{f:"c",p:2,y:0,z:0.15,i:"ActionHandler",e:{a:[{p:7,b:"kTimelineDefaultIdentifier",symbolOid:"2"}]},s:{a:[{p:7,b:"kTimelineDefaultIdentifier",symbolOid:"2"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"15"},{y:0.15,i:"e",s:1,z:0,o:"15",f:"c"},{f:"c",p:2,y:0.15,z:0,i:"ActionHandler",s:{a:[{p:7,b:"kTimelineDefaultIdentifier",symbolOid:"2"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["13","14","15"],n:"Untitled Layout","_":0,v:{"15":{G:"#000000",aU:8,aV:8,r:"inline",e:0,s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"Correct!",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:2,aS:8,aT:8,a:263,F:"center",b:336},"14":{h:"5",p:"no-repeat",x:"visible",a:229,q:"100% 100%",b:141,j:"absolute",dB:"img",aA:{a:[{b:"kTimelineDefaultIdentifier",p:8,z:false,symbolOid:"2",J:false},{p:4,h:"12"}]},k:"div",z:1,d:179,c:142,r:"inline",aP:"pointer"},"13":{G:"#000000",aU:8,c:584,aV:8,d:18,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"Can you click on the person below?",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:0,F:"center",b:64}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
