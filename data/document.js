﻿$axure.loadDocument(
(function() {
    var _ = function() { var r={},a=arguments; for(var i=0; i<a.length; i+=2) r[a[i]]=a[i+1]; return r; }
    var _creator = function() { return _(b,_(c,d,e,f,g,d,h,d,i,d,j,k,l,d,m,f,n,f,o,f,p,f,q,[],r,f),s,_(t,[_(u,v,w,x,y,z),_(u,A,w,x,y,B)]),C,_(D,E),F,_(G,H,I,_(J,K,L,K),M,N),O,[],P,_(Q,_(R,S,T,U,V,W,X,Y,Z,ba,bb,f,bc,_(bd,be,bf,bg,bh,bi),bj,bk,bl,W,bm,_(bn,K,bo,K),I,_(J,K,L,K),bp,d,bq,f,br,S,bs,_(bd,be,bf,bt),bu,_(bd,be,bf,bv),bw,bx,by,be,bh,bx,bz,bA,bB,bC,bD,bE,bF,bE,bG,bE,bH,bE,bI,_(),bJ,bA,bK,bA,bL,_(bM,f,bN,bO,bP,bO,bQ,bO,bf,_(bR,bS,bT,bS,bU,bS,bV,bW)),bX,_(bM,f,bN,K,bP,bO,bQ,bO,bf,_(bR,bS,bT,bS,bU,bS,bV,bW)),bY,_(bM,f,bN,bi,bP,bi,bQ,bO,bf,_(bR,bS,bT,bS,bU,bS,bV,bZ))),ca,_(cb,_(R,cc),cd,_(R,ce,bw,bA,bs,_(bd,be,bf,cf)),cg,_(R,ch),ci,_(R,cj,bw,bA),ck,_(R,cl,bc,_(bd,be,bf,bt,bh,bi),bw,bA,bz,cm,bs,_(bd,be,bf,cn)),co,_(R,cp,Z,cq,T,cr,bw,bA,bs,_(bd,be,bf,cs),bj,ct,bB,cu,bD,bA,bF,bA,bG,bA,bH,bA),cv,_(R,cw,Z,cx,T,cr,bw,bA,bs,_(bd,be,bf,cs),bj,ct,bB,cu,bD,bA,bF,bA,bG,bA,bH,bA),cy,_(R,cz,Z,cA,T,cr,bw,bA,bs,_(bd,be,bf,cs),bj,ct,bB,cu,bD,bA,bF,bA,bG,bA,bH,bA),cB,_(R,cC,Z,cD,T,cr,bw,bA,bs,_(bd,be,bf,cs),bj,ct,bB,cu,bD,bA,bF,bA,bG,bA,bH,bA),cE,_(R,cF,T,cr,bw,bA,bs,_(bd,be,bf,cs),bj,ct,bB,cu,bD,bA,bF,bA,bG,bA,bH,bA),cG,_(R,cH,Z,cI,T,cr,bw,bA,bs,_(bd,be,bf,cs),bj,ct,bB,cu,bD,bA,bF,bA,bG,bA,bH,bA),cJ,_(R,cK,Z,cD,bw,bA,bs,_(bd,be,bf,cs),bj,ct,bB,cu,bD,bA,bF,bA,bG,bA,bH,bA),cL,_(R,cM,bw,bA,bs,_(bd,be,bf,cs),bj,ct,bB,cu,bD,bA,bF,bA,bG,bA,bH,bA),cN,_(R,cO,bs,_(bd,cP,cQ,[_(bf,bt),_(bf,cR),_(bf,cS),_(bf,bt)]))),cT,_()));}; 
var b="configuration",c="showPageNotes",d=true,e="showPageNoteNames",f=false,g="showAnnotations",h="showAnnotationsSidebar",i="showConsole",j="linkStyle",k="displayMultipleTargetsOnly",l="linkFlowsToPages",m="linkFlowsToPagesNewWindow",n="hideAddress",o="preventScroll",p="useLabels",q="enabledViewIds",r="loadFeedbackPlugin",s="sitemap",t="rootNodes",u="pageName",v="index",w="type",x="Wireframe",y="url",z="index.html",A="Home",B="home.html",C="globalVariables",D="onloadvariable",E="",F="defaultAdaptiveView",G="name",H="Base",I="size",J="width",K=0,L="height",M="condition",N="<=",O="adaptiveViews",P="stylesheet",Q="defaultStyle",R="id",S="627587b6038d43cca051c114ac41ad32",T="fontWeight",U="400",V="fontStyle",W="normal",X="fontName",Y="'Arial Normal', 'Arial'",Z="fontSize",ba="13px",bb="underline",bc="foreGroundFill",bd="fillType",be="solid",bf="color",bg=0xFF333333,bh="opacity",bi=1,bj="horizontalAlignment",bk="center",bl="lineSpacing",bm="location",bn="x",bo="y",bp="visible",bq="limbo",br="baseStyle",bs="fill",bt=0xFFFFFFFF,bu="borderFill",bv=0xFF797979,bw="borderWidth",bx="1",by="linePattern",bz="cornerRadius",bA="0",bB="verticalAlignment",bC="middle",bD="paddingLeft",bE="2",bF="paddingTop",bG="paddingRight",bH="paddingBottom",bI="stateStyles",bJ="rotation",bK="textRotation",bL="outerShadow",bM="on",bN="offsetX",bO=5,bP="offsetY",bQ="blurRadius",bR="r",bS=0,bT="g",bU="b",bV="a",bW=0.349019607843137,bX="innerShadow",bY="textShadow",bZ=0.647058823529412,ca="customStyles",cb="box_1",cc="4b7bfc596114427989e10bb0b557d0ce",cd="box_3",ce="0882bfcd7d11450d85d157758311dca5",cf=0xFFD7D7D7,cg="ellipse",ch="eff044fe6497434a8c5f89f769ddde3b",ci="image",cj="75a91ee5b9d042cfa01b8d565fe289c0",ck="primary_button",cl="cd64754845384de3872fb4a066432c1f",cm="5",cn=0xFF169BD5,co="heading_1",cp="1111111151944dfba49f67fd55eb1f88",cq="32px",cr="bold",cs=0xFFFFFF,ct="left",cu="top",cv="heading_2",cw="b3a15c9ddde04520be40f94c8168891e",cx="24px",cy="heading_3",cz="8c7a4c5ad69a4369a5f7788171ac0b32",cA="18px",cB="heading_4",cC="e995c891077945c89c0b5fe110d15a0b",cD="14px",cE="heading_5",cF="386b19ef4be143bd9b6c392ded969f89",cG="heading_6",cH="fc3b9a13b5574fa098ef0a1db9aac861",cI="10px",cJ="label",cK="2285372321d148ec80932747449c36c9",cL="paragraph",cM="4988d43d80b44008a4a415096f1632af",cN="flow_shape",cO="df01900e3c4e43f284bafec04b0864c4",cP="linearGradient",cQ="colors",cR=0xFFF2F2F2,cS=0xFFE4E4E4,cT="duplicateStyles";
return _creator();
})());