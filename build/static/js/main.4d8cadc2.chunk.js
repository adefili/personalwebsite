(this.webpackJsonppersonalwebsite=this.webpackJsonppersonalwebsite||[]).push([[0],{126:function(e){e.exports=JSON.parse('{"nodes":[{"id":"Microsoft Azure","size":1000,"renderLabel":false,"svg":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1280px-Microsoft_Azure_Logo.svg.png"},{"id":"Azure Data Factory","size":500,"renderLabel":false,"svg":"https://symbols.getvecta.com/stencil_28/27_data-factory.c99c3eee98.svg"},{"id":"Databricks","size":1000,"renderLabel":false,"svg":"https://i.pinimg.com/originals/05/8a/16/058a16cd476728f2780b761f77575cdf.png"},{"id":"Apache Spark","size":1000,"renderLabel":false,"svg":"https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg"},{"id":"Scala","size":1000,"renderLabel":false,"svg":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Scala-full-color.svg/800px-Scala-full-color.svg.png"}],"links":[{"source":"Microsoft Azure","target":"Databricks"},{"source":"Microsoft Azure","target":"Azure Data Factory"},{"source":"Databricks","target":"Apache Spark"},{"source":"Databricks","target":"Scala"},{"source":"Apache Spark","target":"Scala"}]}')},127:function(e){e.exports=JSON.parse('{"nodes":[{"id":"Microsoft Azure","size":1000,"renderLabel":false,"svg":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1280px-Microsoft_Azure_Logo.svg.png"},{"id":"Azure Data Factory","size":500,"renderLabel":false,"svg":"https://symbols.getvecta.com/stencil_28/27_data-factory.c99c3eee98.svg"},{"id":"Databricks","size":1000,"renderLabel":false,"svg":"https://i.pinimg.com/originals/05/8a/16/058a16cd476728f2780b761f77575cdf.png"}],"links":[{"source":"Microsoft Azure","target":"Databricks"},{"source":"Microsoft Azure","target":"Azure Data Factory"}]}')},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},324:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(40),s=a.n(o),r=(a(138),a(139),a(140),a(141),a(142),a(143),a(144),a(10)),c=a(11),l=a(17),d=a(13),h=a(12),u=a(357),p=a.p+"static/media/EN.fd46970f.svg",g=a.p+"static/media/IT.52701962.svg",b=a(4),j=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={lan:"EN",lan_logo:p},i.changeLan=i.changeLan.bind(Object(l.a)(i)),i}return Object(c.a)(a,[{key:"changeLan",value:function(e){this.setState({lan:e}),"EN"===e&&(this.setState({lan_logo:p}),this.props.handler("en")),"IT"===e&&(this.setState({lan_logo:g}),this.props.handler("it"))}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"LanguageButton",children:Object(b.jsxs)(u.a,{onSelect:this.changeLan,children:[Object(b.jsxs)(u.a.Toggle,{variant:"success",id:"dropdown-basic",className:"DropDown",children:[this.state.lan," ",Object(b.jsx)("img",{src:this.state.lan_logo,alt:"\\logo\\",className:"flagIcon"})]}),Object(b.jsxs)(u.a.Menu,{children:[Object(b.jsx)(u.a.Item,{href:"#/action-1",eventKey:"EN",children:"Eglish"}),Object(b.jsx)(u.a.Item,{href:"#/action-2",eventKey:"IT",children:"Italiano"})]})]})})}}]),a}(n.a.Component),m=a.p+"static/media/libreria.9675502d.jpg",f=a(35),v=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={title:f.presentation.title.en,text:f.presentation.body.en},i}return Object(c.a)(a,[{key:"changeText",value:function(e){this.setState({title:f.presentation.title[e]}),this.setState({text:f.presentation.body[e]})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Presentation",children:[Object(b.jsx)("img",{src:m,alt:"Logo",className:"PresentationImmagine"}),Object(b.jsxs)("div",{className:"PresentationText",children:[Object(b.jsx)("h1",{children:this.state.title}),Object(b.jsx)("p",{children:this.state.text})]})]})}}]),a}(n.a.Component),O=a(130),x=a(120),k=a(353),C=a(358),y=a(350),L=a(349),w=a(351),S=a(83),N=a.n(S),T=a(122),z=a.n(T),A=a(123),D=a.n(A),I=a(352),R=a(63),E=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return null}}]),a}(n.a.Component),_=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).icons={keyboardArrowDown:N.a,workOutline:z.a,school:D.a},e.connector={true:L.a,false:E},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.icons[this.props.iconName||"fastfoodIcon"],t=this.connector[this.props.withConnector||"true"];return Object(b.jsxs)(y.a,{children:[Object(b.jsx)(w.a,{color:"inherit",children:Object(b.jsx)(e,{})}),Object(b.jsx)(t,{})]})}}]),a}(n.a.Component),P=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={showHidePaper:!1,rotation:0},e.hideComponent=e.hideShowComponent.bind(Object(l.a)(e)),e}return Object(c.a)(a,[{key:"hideShowComponent",value:function(){this.setState({showHidePaper:!this.state.showHidePaper}),this.state.showHidePaper?this.setState({rotation:0}):this.setState({rotation:180}),console.log(this.state.rotation)}},{key:"render",value:function(){var e=this,t=this.state.showHidePaper,a={transform:"rotate("+this.state.rotation+"deg)"};return Object(b.jsxs)(C.a,{className:"TimelineItem",children:[Object(b.jsx)("div",{className:"TimelineOppositeItem",children:Object(b.jsx)(I.a,{variant:"body2",color:"textSecondary",children:this.props.secondaryText})}),Object(b.jsx)(_,{iconName:this.props.iconName,withConnector:this.props.withConnector}),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"TimelinePaper",children:[Object(b.jsx)("div",{component:"h1",className:"TimelineTitleContainer",onClick:function(){return e.hideShowComponent()},children:Object(b.jsxs)("div",{className:"TimelineTitleText",children:[this.props.titleContent,Object(b.jsx)(N.a,{style:a,className:"TimelineOpenButton",onClick:function(){return e.hideShowComponent()}})]})}),t&&Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"\n"}),Object(b.jsx)("div",{className:"TimelineTextContainer",children:Object(b.jsx)("div",{onClick:function(){return e.hideShowComponent()},children:this.props.paperContent})}),Object(b.jsx)("p",{children:"\n"}),Object(b.jsx)("div",{className:"TimelineButton",children:Object(b.jsxs)(R.a,{children:[this.props.buttonContent," "]})})]})]})})]})}}]),a}(n.a.Component),H=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={language:"en",selected_index:-1},i}return Object(c.a)(a,[{key:"changeTimelineText",value:function(e){this.setState({language:e})}},{key:"render",value:function(){var e,t=f.timeline.timelineItems,a=[],i=Object(x.a)(t.entries());try{for(i.s();!(e=i.n()).done;){var n=Object(O.a)(e.value,1)[0],o="true";n===t.length-1&&(o="false"),a.push(Object(b.jsx)(P,{index:n,selected_index:this.state.selected_index,titleContent:t[n].titleContent[this.state.language],paperContent:t[n].paperContent[this.state.language],secondaryText:t[n].secondaryText[this.state.language],buttonContent:t[n].buttonText[this.state.language],iconName:t[n].icon,withConnector:o}))}}catch(s){i.e(s)}finally{i.f()}return Object(b.jsx)("div",{className:"paper",children:Object(b.jsxs)("div",{className:"Timeline",children:[Object(b.jsx)("div",{className:"jumboTitle",children:f.timeline.timelineTitle[this.state.language]}),Object(b.jsx)("div",{className:"TimelineComponent",children:Object(b.jsx)(k.a,{align:"left",children:a})})]})})}}]),a}(n.a.Component),G=a(124),M=a(126),J=a(127),V=a(355),B=a(356),q=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={radioValue:0,radios:[{name:"Data Engineer",short:"data",value:0},{name:"Front End",short:"front",value:1}]},e}return Object(c.a)(a,[{key:"setRadioValue",value:function(e){this.setState({radioValue:e});var t=this.state.radios[e].short;this.props.handler(t)}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"GraphMultiSelector",children:Object(b.jsx)("div",{className:"ButtonGroup",children:Object(b.jsx)(V.a,{toggle:!0,children:this.state.radios.map((function(t,a){return Object(b.jsx)(B.a,{type:"radio",variant:"secondary",name:"radio",value:t.value,checked:e.state.radioValue===t.value,onChange:function(t){return e.setRadioValue(t.currentTarget.value)},children:t.name},a)}))})})})}}]),a}(n.a.Component),F=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={lan:"en",text:"click a node to show details"},i.changeText=i.changeText.bind(Object(l.a)(i)),i.changeLanguage=i.changeLanguage.bind(Object(l.a)(i)),i}return Object(c.a)(a,[{key:"changeText",value:function(e){this.setState({text:e})}},{key:"changeLanguage",value:function(e){this.setState({lan:e})}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"GraphDescription",children:Object(b.jsxs)("div",{children:[this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER",this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER"]})})}}]),a}(n.a.Component),Q=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={graph:"data",width:window.innerWidth},i.graphVisualizationRef=n.a.createRef(),i.changeGraph=i.changeGraph.bind(Object(l.a)(i)),i.handleResize=i.handleResize.bind(Object(l.a)(i)),i.onClickNode=i.onClickNode.bind(Object(l.a)(i)),window.addEventListener("resize",i.handleResize),i}return Object(c.a)(a,[{key:"changeGraph",value:function(e){console.log(e),this.setState({graph:e})}},{key:"handleResize",value:function(e){console.log("ciao"),this.setState({width:window.innerWidth})}},{key:"onClickNode",value:function(e){this.graphVisualizationRef.current.changeText(e),this.graphVisualizationRef.current.changeLanguage(e)}},{key:"onClickLink",value:function(e,t){window.alert("Clicked link between ".concat(e," and ").concat(t))}},{key:"render",value:function(){var e={width:this.state.width<1080?90*this.state.width*935/1e3/100:1080,nodeHighlightBehavior:!0,staticGraph:!1,automaticRearrangeAfterDropNode:!0,highlightDegree:2,highlightOpacity:.3,initialZoom:.8,maxZoom:.8,minZoom:.8,d3:{gravity:-1e3,linkLength:160},node:{color:"lightgreen",size:120,highlightStrokeColor:"blue"},link:{highlightColor:"lightblue"}},t=null;return"front"==this.state.graph&&(t=J),"data"==this.state.graph&&(t=M),Object(b.jsx)("div",{className:"paper",children:Object(b.jsxs)("div",{className:"GraphVisualization",children:[Object(b.jsx)("div",{className:"jumboTitle",children:"Tools and skill"}),Object(b.jsxs)("div",{className:"GraphMaster",children:[Object(b.jsx)(q,{handler:this.changeGraph}),Object(b.jsxs)("div",{className:"GraphContainer",children:[Object(b.jsx)(G.Graph,{className:"GraphContent",id:"graph-id",data:t,config:e,onClickNode:this.onClickNode,onClickLink:this.onClickLink}),Object(b.jsx)(F,{ref:this.graphVisualizationRef})]})]})]})})}}]),a}(n.a.Component),W=a(128),Z=a.n(W),K=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).particlesInit=i.particlesInit.bind(Object(l.a)(i)),i.particlesLoaded=i.particlesLoaded.bind(Object(l.a)(i)),i}return Object(c.a)(a,[{key:"particlesInit",value:function(e){console.log(e)}},{key:"particlesLoaded",value:function(e){console.log(e)}},{key:"render",value:function(){return Object(b.jsx)(Z.a,{id:"tsparticles",init:this.particlesInit,loaded:this.particlesLoaded,height:1.2*window.outerHeight,options:{background:{color:{value:"#0d47a1"}},fpsLimit:45,interactivity:{detectsOn:"window",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"grab"},resize:!0},modes:{bubble:{distance:200,duration:2,opacity:.8,size:40},push:{quantity:1},repulse:{distance:100,duration:.4},grab:{distance:200}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:2,straight:!1},number:{density:{enable:!0,value_area:400},value:100},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:0}},detectRetina:!0}})}}]),a}(n.a.Component),U=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"getRandomInt",value:function(e){return Math.floor(Math.random()*Math.floor(e))}},{key:"render",value:function(){for(var e=[],t=0;t<4;t++){var a=20*(this.getRandomInt(4)+1)+"%";e.push(Object(b.jsxs)("div",{class:"grid-container",children:[Object(b.jsx)("div",{class:"LanguageName",children:"English Reading"}),Object(b.jsx)("div",{class:"LanguageBar",style:{width:a}}),Object(b.jsx)("div",{class:"LanguageDescription",children:"With the continuous improvement of information technology and increasing numbers of Web resources, the mode of English reading teaching has changed fundamentally, and the diversity and flexibility of English reading materials achieve a great progress. Because English reading materials were hand-election"})]}))}return Object(b.jsxs)("div",{className:"paper",children:[Object(b.jsx)("div",{className:"jumboTitle",children:"Lingue"}),Object(b.jsx)("div",{className:"Language",children:e})]})}}]),a}(n.a.Component),X=a(129),Y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"paper",children:[Object(b.jsx)("div",{className:"jumboTitle",children:"TestAnimation"}),Object(b.jsx)(X.Spring,{from:{opacity:0},to:{opacity:1},children:function(e){return Object(b.jsx)("div",{style:e,children:"hello"})}})]})}}]),a}(n.a.Component),$=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={language:"en"},i.presentationRef=n.a.createRef(),i.timelineRef=n.a.createRef(),i.updateLanguage=i.updateLanguage.bind(Object(l.a)(i)),i}return Object(c.a)(a,[{key:"updateLanguage",value:function(e){this.setState({language:e}),this.presentationRef.current.changeText(e),this.timelineRef.current.changeLanguage(e)}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"all",children:[Object(b.jsx)(K,{className:"particelsAsBackground"}),Object(b.jsxs)("div",{className:"WholeSite",children:[Object(b.jsx)(j,{handler:this.updateLanguage}),Object(b.jsx)(v,{language:this.state.language,ref:this.presentationRef}),Object(b.jsx)(H,{ref:this.timelineRef,language:this.state.language}),Object(b.jsx)(Q,{language:this.state.language}),Object(b.jsx)(U,{}),Object(b.jsx)(Y,{})]})]})}}]),a}(n.a.Component);var ee=function(){return Object(b.jsx)("div",{children:Object(b.jsx)($,{})})};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(ee,{})}),document.getElementById("root"))},35:function(e){e.exports=JSON.parse('{"presentation":{"title":{"it":"Filippo Adessi","en":"Filippo Adessi"},"body":{"it":"CIAO mi piace l\'informatica e i placeholder. Faccio questo, quello e quell\'altro. CIAO mi piace l\'informatica e i placeholder. Faccio questo, quello e quell\'altro. CIAO mi piace l\'informatica e i placeholder. Faccio questo, quello e quell\'altro","en":"Looking at all the rows   all these records look like big zeros   got your picture on the back of a forty-five   a placeholder till you take up mine   a placeholder till you take up mine  Looking at all the rows   all these records look like big zeros   got your picture on the back of a forty-five   a placeholder till you take up mine   a placeholder till you take up mine  Looking at all the rows   all these records look like big zeros   got your picture on the back of a forty-five   a placeholder till you take up mine   a placeholder till you take up mine   Looking at all the rows   all these records look like big zeros   got your picture on the back of a forty-five   a placeholder till you take up mine   a placeholder till you take up mine"}},"header":{"place_1":{"it":"1","en":"1"},"place_2":{"it":"2","en":"2"},"place_3":{"it":"3","en":"3"},"place_4":{"it":"4","en":"4"}},"timeline":{"timelineTitle":{"it":"Esperienze Lavorative & Studio","en":"Job & Educational Experiences"},"timelineItems":[{"titleContent":{"it":"Certificazione Databricks Corso vario bellissimo ","en":"Certification Databricks placeholder placeholder "},"paperContent":{"it":"Ho studiato matematica, fisica, C, Java, C#, SQL, Prolog... e tanto altro come asd asd asd asd asd asd asd","en":"I studied math, C, Java, SQL, prolog and did a lot of thigs such"},"secondaryText":{"it":"2020","en":"2020"},"buttonText":{"it":"Vai alla pagina del corso","en":"Go to Course website"},"icon":"school"},{"titleContent":{"it":"Certificazione Databricks assds sss ss. ","en":"Certificazione Databricks asdasd gdfss "},"paperContent":{"it":"Ho studiato matematica, fisica, C, Java, C#, SQL, Prolog... e tanto altro come asd asd asd asd asd asd asd","en":"I studied math, C, Java, SQL, prolog and did a lot of thigs such"},"secondaryText":{"it":"2020","en":"2020"},"buttonText":{"it":"Vai alla pagina del corso","en":"Go to Course website"},"icon":"school"},{"titleContent":{"it":"Data engineer presso Bitbang SRL","en":"Data engineer in Bitbang SRL"},"paperContent":{"it":"ho fatto questo, quello e quell\'altro. Qui ho potuto fare ci\xf2 e ci\xf2. Progetti tipo a, b e c ma anche D e F. ho lavorato er diversi clienti come a bsdas c dasd e ","en":"I DID this that them a lot of placeholder. I used this tool and others but also that. I did project like a, b, c, d. I worked for different client such"},"secondaryText":{"it":"2019 - presente","en":"2019 - now"},"buttonText":{"it":"Vai al Sito","en":"Go to Website"},"icon":"workOutline"},{"titleContent":{"it":"Ingegneria Informatica presso Alma mater studiorum Bologna","en":"Computer Engineer in Alma Mater Studiorum Bologna"},"paperContent":{"it":"Ho studiato matematica, fisica, C, Java, C#, SQL, Prolog... e tanto altro come asd asd asd asd asd asd asd","en":"I studied math, C, Java, SQL, prolog and did a lot of thigs such"},"secondaryText":{"it":"2014 - 2019","en":"2014 - 2019"},"buttonText":{"it":"Vai alla pagina del corso","en":"Go to Course website"},"icon":"school"},{"titleContent":{"it":"Steward Bologna","en":"Steward Bologna"},"paperContent":{"it":"Ho studiato matematica, fisica, C, Java, C#, SQL, Prolog... e tanto altro come asd asd asd asd asd asd asd","en":"I studied math, C, Java, SQL, prolog and did a lot of thigs such"},"secondaryText":{"it":"2017","en":"2017"},"buttonText":{"it":"Vai alla pagina del azienda","en":"Go to company website"},"icon":"workOutline"},{"titleContent":{"it":"bagnino","en":"bagnino"},"paperContent":{"it":"Ho studiato matematica, fisica, C, Java, C#, SQL, Prolog... e tanto altro come asd asd asd asd asd asd asd","en":"I studied math, C, Java, SQL, prolog and did a lot of thigs such"},"secondaryText":{"it":"2012 & 2013","en":"2012 & 2013"},"buttonText":{"it":"Vai alla pagina del azienda","en":"Go to company website"},"icon":"workOutline"}]}}')}},[[324,1,2]]]);
//# sourceMappingURL=main.4d8cadc2.chunk.js.map