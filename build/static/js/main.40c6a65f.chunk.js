(this.webpackJsonppersonalwebsite=this.webpackJsonppersonalwebsite||[]).push([[0],{128:function(e){e.exports=JSON.parse('{"nodes":[{"id":"Microsoft Azure","size":1000,"renderLabel":false,"svg":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1280px-Microsoft_Azure_Logo.svg.png"},{"id":"Azure Data Factory","size":500,"renderLabel":false,"svg":"https://symbols.getvecta.com/stencil_28/27_data-factory.c99c3eee98.svg"},{"id":"Databricks","size":1000,"renderLabel":false,"svg":"https://i.pinimg.com/originals/05/8a/16/058a16cd476728f2780b761f77575cdf.png"},{"id":"Apache Spark","size":1000,"renderLabel":false,"svg":"https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg"},{"id":"Scala","size":1000,"renderLabel":false,"svg":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Scala-full-color.svg/800px-Scala-full-color.svg.png"}],"links":[{"source":"Microsoft Azure","target":"Databricks"},{"source":"Microsoft Azure","target":"Azure Data Factory"},{"source":"Databricks","target":"Apache Spark"},{"source":"Databricks","target":"Scala"},{"source":"Apache Spark","target":"Scala"}]}')},129:function(e){e.exports=JSON.parse('{"nodes":[{"id":"Microsoft Azure","size":1000,"renderLabel":false,"svg":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1280px-Microsoft_Azure_Logo.svg.png"},{"id":"Azure Data Factory","size":500,"renderLabel":false,"svg":"https://symbols.getvecta.com/stencil_28/27_data-factory.c99c3eee98.svg"},{"id":"Databricks","size":1000,"renderLabel":false,"svg":"https://i.pinimg.com/originals/05/8a/16/058a16cd476728f2780b761f77575cdf.png"}],"links":[{"source":"Microsoft Azure","target":"Databricks"},{"source":"Microsoft Azure","target":"Azure Data Factory"}]}')},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},327:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(32),o=a.n(s),r=(a(139),a(140),a(141),a(142),a(143),a(144),a(145),a(146),a(147),a(8)),c=a(9),l=a(14),d=a(11),h=a(10),u=a(356),p=a.p+"static/media/EN.fd46970f.svg",b=a.p+"static/media/IT.52701962.svg",j=a(3),g=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={lan:"EN",lan_logo:p},i.changeLan=i.changeLan.bind(Object(l.a)(i)),i}return Object(c.a)(a,[{key:"changeLan",value:function(e){this.setState({lan:e}),"EN"===e&&(this.setState({lan_logo:p}),this.props.handler("en")),"IT"===e&&(this.setState({lan_logo:b}),this.props.handler("it"))}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"LanguageButton",children:Object(j.jsxs)(u.a,{onSelect:this.changeLan,children:[Object(j.jsxs)(u.a.Toggle,{variant:"success",id:"dropdown-basic",className:"DropDown",children:[this.state.lan," ",Object(j.jsx)("img",{src:this.state.lan_logo,alt:"\\logo\\",className:"flagIcon"})]}),Object(j.jsxs)(u.a.Menu,{children:[Object(j.jsx)(u.a.Item,{href:"#/action-1",eventKey:"EN",children:"Eglish"}),Object(j.jsx)(u.a.Item,{href:"#/action-2",eventKey:"IT",children:"Italiano"})]})]})})}}]),a}(n.a.Component),m=a.p+"static/media/libreria.9675502d.jpg",f=a(36),v=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={title:f.presentation.title.en,text:f.presentation.body.en},i}return Object(c.a)(a,[{key:"changeText",value:function(e){this.setState({title:f.presentation.title[e]}),this.setState({text:f.presentation.body[e]})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"Presentation",children:[Object(j.jsx)("img",{src:m,alt:"Logo",className:"PresentationImmagine"}),Object(j.jsxs)("div",{className:"PresentationText",children:[Object(j.jsx)("h1",{children:this.state.title}),Object(j.jsx)("p",{children:this.state.text})]})]})}}]),a}(n.a.Component),O=a(131),x=a(122),k=a(352),C=a(357),y=a(67),L=a.n(y),w=a(66),S=a(350),N=a(349),T=a(351),z=a(124),A=a.n(z),I=a(125),D=a.n(I),V=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return null}}]),a}(n.a.Component),R=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).icons={keyboardArrowDown:L.a,workOutline:A.a,school:D.a},e.connector={true:N.a,false:V},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.icons[this.props.iconName||"fastfoodIcon"],t=this.connector[this.props.withConnector||"true"];return Object(j.jsxs)(S.a,{children:[Object(j.jsx)(T.a,{color:"inherit",children:Object(j.jsx)(e,{})}),Object(j.jsx)(t,{})]})}}]),a}(n.a.Component),E=a(18),P=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={showHidePaper:!1,block:!0},e.hideComponent=e.hideShowComponent.bind(Object(l.a)(e)),e}return Object(c.a)(a,[{key:"hideShowComponent",value:function(){this.setState({block:!1}),this.setState({showHidePaper:!this.state.showHidePaper})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(C.a,{className:"TimelineItem",children:[Object(j.jsx)("div",{className:"TimelineOppositeItem",children:Object(j.jsx)("div",{children:this.props.secondaryText})}),Object(j.jsx)(R,{iconName:this.props.iconName,withConnector:this.props.withConnector}),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"TimelinePaper",children:[Object(j.jsxs)("div",{className:"TimelineTitleContainer",onClick:function(){return e.hideShowComponent()},children:[Object(j.jsx)("div",{className:"TimelineTitleText",children:this.props.titleContent}),Object(j.jsx)(E.Spring,{native:!0,force:!0,immediate:this.state.block,from:{rotate:this.state.showHidePaper?0:180},to:{rotate:this.state.showHidePaper?180:0},children:function(t){var a=t.rotate;return Object(j.jsx)(E.animated.div,{style:{transform:Object(E.interpolate)([a],(function(e){return"rotate(".concat(e,"deg)")}))},children:Object(j.jsx)(L.a,{className:"TimelineOpenButton",onClick:function(){return e.hideShowComponent()}})})}})]}),Object(j.jsx)(E.Spring,{native:!0,force:!0,immediate:this.state.block,from:{height:this.state.showHidePaper?0:"auto",opacity:this.state.showHidePaper?0:1},to:{height:this.state.showHidePaper?"auto":0,opacity:this.state.showHidePaper?1:0},children:function(t){return Object(j.jsxs)(E.animated.div,{style:t,id:"TimelineContentContainer",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("div",{onClick:function(){return e.hideShowComponent()},style:{"padding-left":"5%","padding-right":"5%"},children:[e.props.paperContent," ",e.props.paperContent," ",e.props.paperContent," ",e.props.paperContent," ",e.props.paperContent," ",e.props.paperContent]})}),Object(j.jsx)("div",{className:"TimelineButton",children:Object(j.jsxs)(w.a,{children:[e.props.buttonContent," "]})})]})}})]})})]})}}]),a}(n.a.Component),_=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={language:"en",selected_index:-1},i}return Object(c.a)(a,[{key:"changeTimelineText",value:function(e){this.setState({language:e})}},{key:"render",value:function(){var e,t=f.timeline.timelineItems,a=[],i=Object(x.a)(t.entries());try{for(i.s();!(e=i.n()).done;){var n=Object(O.a)(e.value,1)[0],s="true";n===t.length-1&&(s="false"),a.push(Object(j.jsx)(P,{index:n,selected_index:this.state.selected_index,titleContent:t[n].titleContent[this.state.language],paperContent:t[n].paperContent[this.state.language],secondaryText:t[n].secondaryText[this.state.language],buttonContent:t[n].buttonText[this.state.language],iconName:t[n].icon,withConnector:s}))}}catch(o){i.e(o)}finally{i.f()}return Object(j.jsx)("div",{className:"paper",children:Object(j.jsxs)("div",{className:"Timeline",children:[Object(j.jsx)("div",{className:"jumboTitle",children:f.timeline.timelineTitle[this.state.language]}),Object(j.jsx)("div",{className:"TimelineComponent",children:Object(j.jsx)(k.a,{align:"left",children:a})})]})})}}]),a}(n.a.Component),H=a(126),G=a(128),M=a(129),B=a(354),J=a(355),q=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={radioValue:0,radios:[{name:"Data Engineer",short:"data",value:0},{name:"Front End",short:"front",value:1}]},e}return Object(c.a)(a,[{key:"setRadioValue",value:function(e){this.setState({radioValue:e});var t=this.state.radios[e].short;this.props.handler(t)}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"GraphMultiSelector",children:Object(j.jsx)("div",{className:"ButtonGroup",children:Object(j.jsx)(B.a,{toggle:!0,children:this.state.radios.map((function(t,a){return Object(j.jsx)(J.a,{type:"radio",variant:"secondary",name:"radio",value:t.value,checked:e.state.radioValue===t.value,onChange:function(t){return e.setRadioValue(t.currentTarget.value)},children:t.name},a)}))})})})}}]),a}(n.a.Component),F=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={lan:"en",text:"click a node to show details"},i.changeText=i.changeText.bind(Object(l.a)(i)),i.changeLanguage=i.changeLanguage.bind(Object(l.a)(i)),i}return Object(c.a)(a,[{key:"changeText",value:function(e){this.setState({text:e})}},{key:"changeLanguage",value:function(e){this.setState({lan:e})}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"GraphDescription",children:Object(j.jsxs)("div",{children:[this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER",this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER"]})})}}]),a}(n.a.Component),Q=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={graph:"data",width:window.innerWidth},i.graphVisualizationRef=n.a.createRef(),i.changeGraph=i.changeGraph.bind(Object(l.a)(i)),i.handleResize=i.handleResize.bind(Object(l.a)(i)),i.onClickNode=i.onClickNode.bind(Object(l.a)(i)),window.addEventListener("resize",i.handleResize),i}return Object(c.a)(a,[{key:"changeGraph",value:function(e){console.log(e),this.setState({graph:e})}},{key:"handleResize",value:function(e){console.log("ciao"),this.setState({width:window.innerWidth})}},{key:"onClickNode",value:function(e){this.graphVisualizationRef.current.changeText(e),this.graphVisualizationRef.current.changeLanguage(e)}},{key:"onClickLink",value:function(e,t){window.alert("Clicked link between ".concat(e," and ").concat(t))}},{key:"render",value:function(){var e={width:this.state.width<1080?90*this.state.width*935/1e3/100:1080,nodeHighlightBehavior:!0,staticGraph:!1,automaticRearrangeAfterDropNode:!0,highlightDegree:2,highlightOpacity:.3,initialZoom:.8,maxZoom:.8,minZoom:.8,d3:{gravity:-1e3,linkLength:160},node:{color:"lightgreen",size:120,highlightStrokeColor:"blue"},link:{highlightColor:"lightblue"}},t=null;return"front"==this.state.graph&&(t=M),"data"==this.state.graph&&(t=G),Object(j.jsx)("div",{className:"paper",children:Object(j.jsxs)("div",{className:"GraphVisualization",children:[Object(j.jsx)("div",{className:"jumboTitle",children:"Tools and skill"}),Object(j.jsxs)("div",{className:"GraphMaster",children:[Object(j.jsx)(q,{handler:this.changeGraph}),Object(j.jsxs)("div",{className:"GraphContainer",children:[Object(j.jsx)(H.Graph,{className:"GraphContent",id:"graph-id",data:t,config:e,onClickNode:this.onClickNode,onClickLink:this.onClickLink}),Object(j.jsx)(F,{ref:this.graphVisualizationRef})]})]})]})})}}]),a}(n.a.Component),W=a(130),Z=a.n(W),K=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).particlesInit=i.particlesInit.bind(Object(l.a)(i)),i.particlesLoaded=i.particlesLoaded.bind(Object(l.a)(i)),i}return Object(c.a)(a,[{key:"particlesInit",value:function(e){console.log(e)}},{key:"particlesLoaded",value:function(e){console.log(e)}},{key:"render",value:function(){return Object(j.jsx)(Z.a,{id:"tsparticles",init:this.particlesInit,loaded:this.particlesLoaded,height:1.2*window.outerHeight,options:{background:{color:{value:"#0d47a1"}},fpsLimit:30,interactivity:{detectsOn:"window",events:{onClick:{enable:!1,mode:"push"},onHover:{enable:!1,mode:"grab"},resize:!0},modes:{bubble:{distance:200,duration:2,opacity:.8,size:40},push:{quantity:1},repulse:{distance:100,duration:.4},grab:{distance:200}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:200,enable:!0,opacity:1,width:1},collisions:{enable:!1},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:2,straight:!1},number:{density:{enable:!0,value_area:400},value:40},opacity:{value:1},shape:{type:"circle"},size:{random:!1,value:0}},detectRetina:!0}})}}]),a}(n.a.Component),U=a(50),X=a.n(U),Y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={isVisible:!1},i.onVisible=i.onVisible.bind(Object(l.a)(i)),i.width=0,i}return Object(c.a)(a,[{key:"onVisible",value:function(e){e&&(this.width=this.props.customWidth,this.setState({isVisible:!0}))}},{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(X.a,{onChange:this.onVisible,active:!this.state.isVisible,partialVisibility:!0,children:Object(j.jsxs)("div",{class:"LanguageGridContainer",children:[Object(j.jsx)("div",{class:"LanguageA1",children:"A1"}),Object(j.jsx)("div",{class:"LanguageA2",children:"A2"}),Object(j.jsx)("div",{class:"LanguageB1",children:"B1"}),Object(j.jsx)("div",{class:"LanguageB2",children:"B2"}),Object(j.jsx)("div",{class:"LanguageC1",children:"C1"}),Object(j.jsx)("div",{class:"LanguageC2",children:"C2"}),Object(j.jsx)("div",{class:"LanguageL1",children:"L1"}),Object(j.jsx)("div",{class:"LanguageName",children:this.props.name}),Object(j.jsx)(E.Spring,{config:E.config.molasses,reset:this.state.isVisible,delay:100,immediate:!this.state.isVisible,from:{number:0},to:{number:this.width},children:function(e){return Object(j.jsx)(E.animated.div,{class:"LanguageBar",style:{width:e.number+"%"}})}}),Object(j.jsx)("div",{class:"LanguageDescription",children:this.props.description})]})})})}}]),a}(n.a.Component),$=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={isVisible:!1},i}return Object(c.a)(a,[{key:"getRandomInt",value:function(e){return Math.floor(Math.random()*Math.floor(e))}},{key:"render",value:function(){for(var e=[],t="With the continuous improvement of information ",a=0;a<4;a++){var i=100/7*(this.getRandomInt(7)+1);t=t+"ciao"+t;e.push(Object(j.jsx)(Y,{customWidth:i,description:t,name:"English Reading"}))}return Object(j.jsxs)("div",{className:"paper",children:[Object(j.jsx)("div",{className:"jumboTitle",children:"Lingue"}),Object(j.jsx)("div",{className:"Language",children:e})]})}}]),a}(n.a.Component),ee=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={isVisible:!1},i.onVisible=i.onVisible.bind(Object(l.a)(i)),i.width=0,i}return Object(c.a)(a,[{key:"onVisible",value:function(e){e&&(this.width=this.props.customWidth,this.setState({isVisible:!0}))}},{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(X.a,{onChange:this.onVisible,active:!this.state.isVisible,partialVisibility:!0,children:Object(j.jsxs)("div",{class:"Sport-grid-container",children:[Object(j.jsx)("img",{src:m,alt:"IMG",class:"SportImage"}),Object(j.jsx)("div",{class:"SportName",children:this.props.name}),Object(j.jsx)("div",{class:"SportDate",children:this.props.date}),Object(j.jsx)("div",{class:"SportDescription",children:this.props.description})]})})})}}]),a}(n.a.Component),te=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){for(var e=[],t="CIAO",a=0;a<4;a++){t="sport fantastico bellissimo sport fantastico bellissimo"+t+t;e.push(Object(j.jsx)(ee,{description:t,name:"Sport Name",date:"2019"}))}return Object(j.jsxs)("div",{className:"paper",children:[Object(j.jsx)("div",{className:"jumboTitle",children:"Sport"}),Object(j.jsx)("div",{className:"Sport",children:e})]})}}]),a}(n.a.Component),ae=(n.a.Component,function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={language:"en"},i.presentationRef=n.a.createRef(),i.timelineRef=n.a.createRef(),i.updateLanguage=i.updateLanguage.bind(Object(l.a)(i)),i}return Object(c.a)(a,[{key:"updateLanguage",value:function(e){this.setState({language:e}),this.presentationRef.current.changeText(e),this.timelineRef.current.changeLanguage(e)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"all",children:[Object(j.jsx)(K,{className:"particelsAsBackground"}),Object(j.jsxs)("div",{className:"WholeSite",children:[Object(j.jsx)(g,{handler:this.updateLanguage}),Object(j.jsx)(v,{language:this.state.language,ref:this.presentationRef}),Object(j.jsx)(_,{ref:this.timelineRef,language:this.state.language}),Object(j.jsx)(Q,{language:this.state.language}),Object(j.jsx)($,{}),Object(j.jsx)(te,{})]})]})}}]),a}(n.a.Component));var ie=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(ae,{})})};o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(ie,{})}),document.getElementById("root"))},36:function(e){e.exports=JSON.parse('{"presentation":{"title":{"it":"Filippo Adessi","en":"Filippo Adessi"},"body":{"it":"CIAO mi piace l\'informatica e i placeholder. Faccio questo, quello e quell\'altro. CIAO mi piace l\'informatica e i placeholder. Faccio questo, quello e quell\'altro. CIAO mi piace l\'informatica e i placeholder. Faccio questo, quello e quell\'altro","en":"Looking at all the rows   all these records look like big zeros   got your picture on the back of a forty-five   a placeholder till you take up mine   a placeholder till you take up mine  Looking at all the rows   all these records look like big zeros   got your picture on the back of a forty-five   a placeholder till you take up mine   a placeholder till you take up mine  Looking at all the rows   all these records look like big zeros   got your picture on the back of a forty-five   a placeholder till you take up mine   a placeholder till you take up mine   Looking at all the rows   all these records look like big zeros   got your picture on the back of a forty-five   a placeholder till you take up mine   a placeholder till you take up mine"}},"header":{"place_1":{"it":"1","en":"1"},"place_2":{"it":"2","en":"2"},"place_3":{"it":"3","en":"3"},"place_4":{"it":"4","en":"4"}},"timeline":{"timelineTitle":{"it":"Esperienze Lavorative & Studio","en":"Job & Educational Experiences"},"timelineItems":[{"titleContent":{"it":"Certificazione Databricks Corso vario bellissimo ","en":"Certification Databricks placeholder placeholder "},"paperContent":{"it":"Ho studiato matematica, fisica, C, Java, C#, SQL, Prolog... e tanto altro come asd asd asd asd asd asd asd","en":"I studied math, C, Java, SQL, prolog and did a lot of thigs such"},"secondaryText":{"it":"2020","en":"2020"},"buttonText":{"it":"Vai alla pagina del corso","en":"Go to Course website"},"icon":"school"},{"titleContent":{"it":"Certificazione Databricks assds sss ss. ","en":"Certificazione Databricks asdasd gdfss "},"paperContent":{"it":"Ho studiato matematica, fisica, C, Java, C#, SQL, Prolog... e tanto altro come asd asd asd asd asd asd asd","en":"I studied math, C, Java, SQL, prolog and did a lot of thigs such"},"secondaryText":{"it":"2020","en":"2020"},"buttonText":{"it":"Vai alla pagina del corso","en":"Go to Course website"},"icon":"school"},{"titleContent":{"it":"Data engineer presso Bitbang SRL","en":"Data engineer in Bitbang SRL"},"paperContent":{"it":"ho fatto questo, quello e quell\'altro. Qui ho potuto fare ci\xf2 e ci\xf2. Progetti tipo a, b e c ma anche D e F. ho lavorato er diversi clienti come a bsdas c dasd e ","en":"I DID this that them a lot of placeholder. I used this tool and others but also that. I did project like a, b, c, d. I worked for different client such"},"secondaryText":{"it":"2019 - presente","en":"2019 - now"},"buttonText":{"it":"Vai al Sito","en":"Go to Website"},"icon":"workOutline"},{"titleContent":{"it":"Ingegneria Informatica presso Alma mater studiorum Bologna","en":"Computer Engineer in Alma Mater Studiorum Bologna"},"paperContent":{"it":"Ho studiato matematica, fisica, C, Java, C#, SQL, Prolog... e tanto altro come asd asd asd asd asd asd asd","en":"I studied math, C, Java, SQL, prolog and did a lot of thigs such"},"secondaryText":{"it":"2014 - 2019","en":"2014 - 2019"},"buttonText":{"it":"Vai alla pagina del corso","en":"Go to Course website"},"icon":"school"},{"titleContent":{"it":"Steward Bologna","en":"Steward Bologna"},"paperContent":{"it":"Ho studiato matematica, fisica, C, Java, C#, SQL, Prolog... e tanto altro come asd asd asd asd asd asd asd","en":"I studied math, C, Java, SQL, prolog and did a lot of thigs such"},"secondaryText":{"it":"2017","en":"2017"},"buttonText":{"it":"Vai alla pagina del azienda","en":"Go to company website"},"icon":"workOutline"},{"titleContent":{"it":"bagnino","en":"bagnino"},"paperContent":{"it":"Ho studiato matematica, fisica, C, Java, C#, SQL, Prolog... e tanto altro come asd asd asd asd asd asd asd","en":"I studied math, C, Java, SQL, prolog and did a lot of thigs such"},"secondaryText":{"it":"2012 & 2013","en":"2012 & 2013"},"buttonText":{"it":"Vai alla pagina del azienda","en":"Go to company website"},"icon":"workOutline"}]}}')}},[[327,1,2]]]);
//# sourceMappingURL=main.40c6a65f.chunk.js.map