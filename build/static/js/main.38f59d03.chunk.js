(this.webpackJsonppersonalwebsite=this.webpackJsonppersonalwebsite||[]).push([[0],{129:function(e){e.exports=JSON.parse('{"nodes":[{"id":"Microsoft Azure","size":1000,"renderLabel":false,"svg":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1280px-Microsoft_Azure_Logo.svg.png"},{"id":"Azure Data Factory","size":500,"renderLabel":false,"svg":"https://symbols.getvecta.com/stencil_28/27_data-factory.c99c3eee98.svg"},{"id":"Databricks","size":1000,"renderLabel":false,"svg":"https://i.pinimg.com/originals/05/8a/16/058a16cd476728f2780b761f77575cdf.png"},{"id":"Apache Spark","size":1000,"renderLabel":false,"svg":"https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg"},{"id":"Scala","size":1000,"renderLabel":false,"svg":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Scala-full-color.svg/800px-Scala-full-color.svg.png"}],"links":[{"source":"Microsoft Azure","target":"Databricks"},{"source":"Microsoft Azure","target":"Azure Data Factory"},{"source":"Databricks","target":"Apache Spark"},{"source":"Databricks","target":"Scala"},{"source":"Apache Spark","target":"Scala"}]}')},130:function(e){e.exports=JSON.parse('{"nodes":[{"id":"Microsoft Azure","size":1000,"renderLabel":false,"svg":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1280px-Microsoft_Azure_Logo.svg.png"},{"id":"Azure Data Factory","size":500,"renderLabel":false,"svg":"https://symbols.getvecta.com/stencil_28/27_data-factory.c99c3eee98.svg"},{"id":"Databricks","size":1000,"renderLabel":false,"svg":"https://i.pinimg.com/originals/05/8a/16/058a16cd476728f2780b761f77575cdf.png"}],"links":[{"source":"Microsoft Azure","target":"Databricks"},{"source":"Microsoft Azure","target":"Azure Data Factory"}]}')},140:function(e,t,i){},141:function(e,t,i){},142:function(e,t,i){},143:function(e,t,i){},144:function(e,t,i){},145:function(e,t,i){},146:function(e,t,i){},147:function(e,t,i){},148:function(e,t,i){},149:function(e,t,i){},32:function(e){e.exports=JSON.parse('{"title":{"it":"Ciao, il mio nome \xe8 Filippo Adessi","en":"Hi, i\'m Filippo Adessi"},"title_salutation":{"it":"Ciao, ","en":"Hi, "},"title_other":{"it":"il mio nome \xe8 Filippo Adessi","en":"i\'m Filippo Adessi"},"body":{"it":"Sono un ingegnere informatico appassionato di tecnologia e musica. In particolare sono un Data Engineer e tramite l\'utilizzo di stumenti in cloud mi occupo di flussi ed elaborazione di big data al fine di estrapolare informazioni utili partendo da dati grezzi. Mi piace iniziare nuovi progetti come app o comporre canzoni e mi piace praticare nuovi sport, conoscere nuove tecnologie ed imparare a suonare nuovi strumenti.","en":"I am a computer engineer with a passion for technology and music. In particular, i am a Data Engineer and through the use of cloud tools i deal with big data flows and processing in order to extract useful information starting from raw data. I like to start new projects like apps or composing songs and I like to practice new sport, learning about new technologies and learn to play new instrument."}}')},329:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),o=i(34),s=i.n(o),r=(i(140),i(141),i(142),i(143),i(144),i(145),i(146),i(147),i(148),i(149),i(7)),c=i(8),l=i(15),d=i(10),h=i(9),p=i(358),u=i.p+"static/media/EN.fd46970f.svg",b=i.p+"static/media/IT.52701962.svg",g=i(1),m=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).state={lan:"EN",lan_logo:u},a.changeLan=a.changeLan.bind(Object(l.a)(a)),a}return Object(c.a)(i,[{key:"changeLan",value:function(e){this.setState({lan:e}),"EN"===e&&(this.setState({lan_logo:u}),this.props.handler("en")),"IT"===e&&(this.setState({lan_logo:b}),this.props.handler("it"))}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"LanguageButton",children:Object(g.jsxs)(p.a,{onSelect:this.changeLan,children:[Object(g.jsxs)(p.a.Toggle,{variant:"success",id:"dropdown-basic",className:"DropDown",children:[this.state.lan," ",Object(g.jsx)("img",{src:this.state.lan_logo,alt:"\\logo\\",className:"flagIcon"})]}),Object(g.jsxs)(p.a.Menu,{children:[Object(g.jsx)(p.a.Item,{href:"#/action-1",eventKey:"EN",children:"Eglish"}),Object(g.jsx)(p.a.Item,{href:"#/action-2",eventKey:"IT",children:"Italiano"})]})]})})}}]),i}(n.a.Component),j=i.p+"static/media/libreria.9675502d.jpg",f=i(32),v=i(5),O=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).state={title:f.title.en,title_salutation:f.title_salutation.en,title_other:f.title_other.en,text:f.body.en},a}return Object(c.a)(i,[{key:"changeText",value:function(e){this.setState({title:f.title[e]}),this.setState({text:f.body[e]}),this.setState({title_salutation:f.title_salutation[e]}),this.setState({title_other:f.title_other[e]})}},{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{className:"Presentation",children:Object(g.jsxs)("div",{className:"PresentationText",children:[Object(g.jsx)("img",{src:j,alt:"Logo",className:"PresentationImmagine"}),Object(g.jsx)(v.Spring,{native:!0,force:!0,config:{mass:100,tension:170,friction:100,clamp:!1,velocity:0},delay:100,from:{opacity:0},to:{opacity:1},children:function(t){return Object(g.jsx)(v.animated.div,{style:t,children:Object(g.jsx)("h1",{style:{"font-size":"50px"},children:e.state.title_salutation})})}}),Object(g.jsx)(v.Spring,{native:!0,force:!0,config:{mass:50,tension:170,friction:100,clamp:!1,velocity:0},delay:1e3,from:{opacity:0},to:{opacity:1},children:function(t){return Object(g.jsx)(v.animated.div,{style:t,children:Object(g.jsx)("h1",{style:{"font-size":"30px"},children:e.state.title_other})})}}),Object(g.jsx)(v.Spring,{native:!0,force:!0,config:{mass:100,tension:170,friction:50,clamp:!1,velocity:0},delay:1800,from:{opacity:0},to:{opacity:1},children:function(t){return Object(g.jsx)(v.animated.div,{style:t,children:Object(g.jsx)("p",{children:e.state.text})})}})]})})}}]),i}(n.a.Component),y=i(132),x=i(123),w=i(354),k=i(359),C=i(67),z=i.n(C),S=i(66),L=i(352),T=i(351),N=i(353),A=i(125),I=i.n(A),V=i(126),D=i.n(V),P=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return null}}]),i}(n.a.Component),E=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).icons={keyboardArrowDown:z.a,workOutline:I.a,school:D.a},e.connector={true:T.a,false:P},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this.icons[this.props.iconName||"fastfoodIcon"],t=this.connector[this.props.withConnector||"true"];return Object(g.jsxs)(L.a,{children:[Object(g.jsx)(N.a,{color:"inherit",children:Object(g.jsx)(e,{})}),Object(g.jsx)(t,{})]})}}]),i}(n.a.Component),_=i(31),R=i.n(_),H=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).state={showHidePaper:!1,block:!0,isVisible:!1},e.hideComponent=e.hideShowComponent.bind(Object(l.a)(e)),e.onVisible=e.onVisible.bind(Object(l.a)(e)),e}return Object(c.a)(i,[{key:"onVisible",value:function(e){e&&(console.log(e+""),this.setState({isVisible:!0}))}},{key:"hideShowComponent",value:function(){this.setState({block:!1}),this.setState({showHidePaper:!this.state.showHidePaper})}},{key:"goToWebsite",value:function(){console.log(this.props.link)}},{key:"render",value:function(){var e=this;return Object(g.jsx)(v.Spring,{config:{tension:280,friction:200},delay:0,from:{opacity:1},to:{opacity:this.state.isVisible?1:0},children:function(t){return Object(g.jsx)(R.a,{onChange:e.onVisible,active:!e.state.isVisible,partialVisibility:!0,children:Object(g.jsx)(v.animated.div,{style:t,children:Object(g.jsxs)(k.a,{className:"TimelineItem",children:[Object(g.jsx)("div",{className:"TimelineOppositeItem",children:Object(g.jsx)("div",{children:e.props.secondaryText})}),Object(g.jsx)(E,{iconName:e.props.iconName,withConnector:e.props.withConnector}),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"TimelinePaper",children:[Object(g.jsxs)("div",{className:"TimelineTitleContainer",onClick:function(){return e.hideShowComponent()},children:[Object(g.jsx)("div",{className:"TimelineTitleText",children:e.props.titleContent}),Object(g.jsx)(v.Spring,{native:!0,force:!0,immediate:e.state.block,from:{rotate:e.state.showHidePaper?0:180},to:{rotate:e.state.showHidePaper?180:0},children:function(t){var i=t.rotate;return Object(g.jsx)(v.animated.div,{style:{transform:Object(v.interpolate)([i],(function(e){return"rotate(".concat(e,"deg)")}))},children:Object(g.jsx)(z.a,{className:"TimelineOpenButton",onClick:function(){return e.hideShowComponent()}})})}})]}),Object(g.jsx)(v.Spring,{native:!0,force:!0,immediate:e.state.block,from:{height:e.state.showHidePaper?0:"auto",opacity:e.state.showHidePaper?0:1},to:{height:e.state.showHidePaper?"auto":0,opacity:e.state.showHidePaper?1:0},children:function(t){return Object(g.jsxs)(v.animated.div,{style:t,id:"TimelineContentContainer",children:[Object(g.jsx)("div",{children:Object(g.jsx)("div",{onClick:function(){return e.hideShowComponent()},style:{"padding-left":"5%","padding-right":"5%"},dangerouslySetInnerHTML:{__html:e.props.paperContent}})}),Object(g.jsx)("div",{className:"TimelineButton",children:Object(g.jsxs)(S.a,{href:e.props.link,target:"_blank",children:[e.props.buttonContent," "]})})]})}})]})})]})})})}})}}]),i}(n.a.Component),G=i(86),M=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).state={language:"en",selected_index:-1},a}return Object(c.a)(i,[{key:"changeText",value:function(e){this.setState({language:e})}},{key:"render",value:function(){var e,t=G.timelineItems,i=[],a=Object(x.a)(t.entries());try{for(a.s();!(e=a.n()).done;){var n=Object(y.a)(e.value,1)[0],o="true";n===t.length-1&&(o="false"),i.push(Object(g.jsx)(H,{index:n,selected_index:this.state.selected_index,titleContent:t[n].titleContent[this.state.language],paperContent:t[n].paperContent[this.state.language],secondaryText:t[n].secondaryText[this.state.language],buttonContent:t[n].buttonText[this.state.language],link:t[n].link[this.state.language],iconName:t[n].icon,withConnector:o}))}}catch(s){a.e(s)}finally{a.f()}return Object(g.jsx)("div",{className:"paper",children:Object(g.jsxs)("div",{className:"Timeline",children:[Object(g.jsx)("div",{className:"jumboTitle",children:G.timelineTitle[this.state.language]}),Object(g.jsx)("div",{className:"TimelineComponent",children:Object(g.jsx)(w.a,{align:"left",children:i})})]})})}}]),i}(n.a.Component),B=i(127),F=i(129),q=i(130),W=i(356),J=i(357),K=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).state={radioValue:0,radios:[{name:"Data Engineer",short:"data",value:0},{name:"Front End",short:"front",value:1}]},e}return Object(c.a)(i,[{key:"setRadioValue",value:function(e){this.setState({radioValue:e});var t=this.state.radios[e].short;this.props.handler(t)}},{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{className:"GraphMultiSelector",children:Object(g.jsx)("div",{className:"ButtonGroup",children:Object(g.jsx)(W.a,{toggle:!0,children:this.state.radios.map((function(t,i){return Object(g.jsx)(J.a,{type:"radio",variant:"secondary",name:"radio",value:t.value,checked:e.state.radioValue===t.value,onChange:function(t){return e.setRadioValue(t.currentTarget.value)},children:t.name},i)}))})})})}}]),i}(n.a.Component),Z=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).state={lan:"en",text:"click a node to show details"},a.changeText=a.changeText.bind(Object(l.a)(a)),a.changeLanguage=a.changeLanguage.bind(Object(l.a)(a)),a}return Object(c.a)(i,[{key:"changeText",value:function(e){this.setState({text:e})}},{key:"changeLanguage",value:function(e){this.setState({lan:e})}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"GraphDescription",children:Object(g.jsxs)("div",{children:[this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER",this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER ",this.state.text," PLACEHOLDER"]})})}}]),i}(n.a.Component),Q=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).state={graph:"data",width:window.innerWidth},a.graphVisualizationRef=n.a.createRef(),a.changeGraph=a.changeGraph.bind(Object(l.a)(a)),a.handleResize=a.handleResize.bind(Object(l.a)(a)),a.onClickNode=a.onClickNode.bind(Object(l.a)(a)),window.addEventListener("resize",a.handleResize),a}return Object(c.a)(i,[{key:"changeGraph",value:function(e){console.log(e),this.setState({graph:e})}},{key:"handleResize",value:function(e){console.log("ciao"),this.setState({width:window.innerWidth})}},{key:"onClickNode",value:function(e){this.graphVisualizationRef.current.changeText(e),this.graphVisualizationRef.current.changeLanguage(e)}},{key:"onClickLink",value:function(e,t){window.alert("Clicked link between ".concat(e," and ").concat(t))}},{key:"render",value:function(){var e={width:this.state.width<1080?90*this.state.width*935/1e3/100:1080,nodeHighlightBehavior:!0,staticGraph:!1,automaticRearrangeAfterDropNode:!0,highlightDegree:2,highlightOpacity:.3,initialZoom:.8,maxZoom:.8,minZoom:.8,d3:{gravity:-1e3,linkLength:160},node:{color:"lightgreen",size:120,highlightStrokeColor:"blue"},link:{highlightColor:"lightblue"}},t=null;return"front"==this.state.graph&&(t=q),"data"==this.state.graph&&(t=F),Object(g.jsx)("div",{className:"paper",children:Object(g.jsxs)("div",{className:"GraphVisualization",children:[Object(g.jsx)("div",{className:"jumboTitle",children:"Tools and skill"}),Object(g.jsxs)("div",{className:"GraphMaster",children:[Object(g.jsx)(K,{handler:this.changeGraph}),Object(g.jsxs)("div",{className:"GraphContainer",children:[Object(g.jsx)(B.Graph,{className:"GraphContent",id:"graph-id",data:t,config:e,onClickNode:this.onClickNode,onClickLink:this.onClickLink}),Object(g.jsx)(Z,{ref:this.graphVisualizationRef})]})]})]})})}}]),i}(n.a.Component),U=i(131),X=i.n(U),Y=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).particlesInit=a.particlesInit.bind(Object(l.a)(a)),a.particlesLoaded=a.particlesLoaded.bind(Object(l.a)(a)),a}return Object(c.a)(i,[{key:"particlesInit",value:function(e){console.log(e)}},{key:"particlesLoaded",value:function(e){console.log(e)}},{key:"render",value:function(){return Object(g.jsx)(X.a,{id:"tsparticles",init:this.particlesInit,loaded:this.particlesLoaded,height:1.2*window.outerHeight,options:{background:{color:{value:"#0d47a1"}},fpsLimit:30,interactivity:{detectsOn:"window",events:{onClick:{enable:!1,mode:"push"},onHover:{enable:!1,mode:"grab"},resize:!0},modes:{bubble:{distance:200,duration:2,opacity:.8,size:40},push:{quantity:1},repulse:{distance:100,duration:.4},grab:{distance:200}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:200,enable:!0,opacity:1,width:1},collisions:{enable:!1},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:2,straight:!1},number:{density:{enable:!0,value_area:400},value:40},opacity:{value:1},shape:{type:"circle"},size:{random:!1,value:0}},detectRetina:!0}})}}]),i}(n.a.Component),$=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).state={isVisible:!1},a.onVisible=a.onVisible.bind(Object(l.a)(a)),a.width=0,a}return Object(c.a)(i,[{key:"onVisible",value:function(e){e&&(this.width=this.props.customWidth,this.setState({isVisible:!0}))}},{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{children:Object(g.jsx)(R.a,{onChange:this.onVisible,active:!this.state.isVisible,partialVisibility:!0,children:Object(g.jsx)(v.Spring,{config:v.config.molasses,delay:300,from:{opacity:0,width:0},to:{opacity:this.state.isVisible?1:0,width:this.state.isVisible?this.width:0},children:function(t){return Object(g.jsxs)("div",{class:"LanguageGridContainer",children:[Object(g.jsx)(v.animated.div,{class:"LanguageBar",style:{width:t.width+"%",opacity:t.opacity}}),Object(g.jsx)(v.animated.div,{style:{opacity:t.opacity},class:"LanguageDescription",children:e.props.description}),Object(g.jsx)(v.animated.div,{style:{opacity:t.opacity},class:"LanguageA1",children:"A1"}),Object(g.jsx)(v.animated.div,{style:{opacity:t.opacity},class:"LanguageA2",children:"A2"}),Object(g.jsx)(v.animated.div,{style:{opacity:t.opacity},class:"LanguageB1",children:"B1"}),Object(g.jsx)(v.animated.div,{style:{opacity:t.opacity},class:"LanguageB2",children:"B2"}),Object(g.jsx)(v.animated.div,{style:{opacity:t.opacity},class:"LanguageC1",children:"C1"}),Object(g.jsx)(v.animated.div,{style:{opacity:t.opacity},class:"LanguageC2",children:"C2"}),Object(g.jsx)(v.animated.div,{style:{opacity:t.opacity},class:"LanguageL1",children:"L1"}),Object(g.jsx)(v.animated.div,{style:{opacity:t.opacity},class:"LanguageName",children:e.props.name})]})}})})})}}]),i}(n.a.Component),ee=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).state={isVisible:!1},a}return Object(c.a)(i,[{key:"getRandomInt",value:function(e){return Math.floor(Math.random()*Math.floor(e))}},{key:"render",value:function(){for(var e=[],t="With the continuous improvement of information ",i=0;i<4;i++){var a=100/7*(this.getRandomInt(7)+1);t=t+"ciao"+t;e.push(Object(g.jsx)($,{customWidth:a,description:t,name:"English Reading"}))}return Object(g.jsxs)("div",{className:"paper",children:[Object(g.jsx)("div",{className:"jumboTitle",children:"Lingue"}),Object(g.jsx)("div",{className:"Language",children:e})]})}}]),i}(n.a.Component),te=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).state={isVisible:!1},a.onVisible=a.onVisible.bind(Object(l.a)(a)),a.width=0,a}return Object(c.a)(i,[{key:"onVisible",value:function(e){e&&(this.width=this.props.customWidth,this.setState({isVisible:!0}))}},{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)(R.a,{onChange:this.onVisible,active:!this.state.isVisible,partialVisibility:!0,children:Object(g.jsxs)("div",{class:"Sport-grid-container",children:[Object(g.jsx)("img",{src:j,alt:"IMG",class:"SportImage"}),Object(g.jsx)("div",{class:"SportName",children:this.props.name}),Object(g.jsx)("div",{class:"SportDate",children:this.props.date}),Object(g.jsx)("div",{class:"SportDescription",children:this.props.description})]})})})}}]),i}(n.a.Component),ie=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){return Object(r.a)(this,i),t.call(this,e)}return Object(c.a)(i,[{key:"render",value:function(){for(var e=[],t="CIAO",i=0;i<4;i++){t="sport fantastico bellissimo sport fantastico bellissimo"+t+t;e.push(Object(g.jsx)(te,{description:t,name:"Sport Name",date:"2019"}))}return Object(g.jsxs)("div",{className:"paper",children:[Object(g.jsx)("div",{className:"jumboTitle",children:"Sport"}),Object(g.jsx)("div",{className:"Sport",children:e})]})}}]),i}(n.a.Component),ae=(n.a.Component,function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).state={isVisible:!1,showHidePaper:!1,block:!0},a.onVisible=a.onVisible.bind(Object(l.a)(a)),a.width=0,a}return Object(c.a)(i,[{key:"onVisible",value:function(e){e&&this.setState({isVisible:!0})}},{key:"hideShowComponent",value:function(){this.setState({block:!1}),this.setState({showHidePaper:!this.state.showHidePaper})}},{key:"render",value:function(){var e=this;return Object(g.jsx)(R.a,{onChange:this.onVisible,active:!this.state.isVisible,partialVisibility:!0,children:Object(g.jsxs)("div",{className:"ProjectItem",onClick:function(){return e.hideShowComponent()},children:[Object(g.jsxs)("div",{className:"ProjectFlexContainer",children:[Object(g.jsx)("img",{src:j,alt:"IMG",class:"ProjectImage"}),Object(g.jsx)("div",{class:"ProjectName",children:this.props.name}),Object(g.jsx)("div",{class:"ProjectTags",children:this.props.tags}),Object(g.jsx)("div",{class:"ProjectDate",children:this.props.date})]}),Object(g.jsx)(v.Spring,{native:!0,force:!0,immediate:this.state.block,from:{height:this.state.showHidePaper?0:"auto",opacity:this.state.showHidePaper?0:1,margin:this.state.showHidePaper?"0px":"10px"},to:{height:this.state.showHidePaper?"auto":0,opacity:this.state.showHidePaper?1:0,margin:this.state.showHidePaper?"10px":"0px"},children:function(t){return Object(g.jsx)(v.animated.div,{style:t,class:"ProjectDescription",children:e.props.description})}})]})})}}]),i}(n.a.Component)),ne=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){return Object(r.a)(this,i),t.call(this,e)}return Object(c.a)(i,[{key:"render",value:function(){for(var e=[],t="REACT ",i="CIAO",a="Project Name",n=0;n<4;n++){i="Progetto fantastico con tanti dettagli "+i+i,a="Project Name project "+a;t="react "+t+t,e.push(Object(g.jsx)(ae,{description:i,name:a,date:"2019",tags:t}))}return Object(g.jsxs)("div",{className:"paper",children:[Object(g.jsx)("div",{className:"jumboTitle",children:"Projects"}),Object(g.jsx)("div",{className:"Project",children:e})]})}}]),i}(n.a.Component),oe=function(e){Object(d.a)(i,e);var t=Object(h.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).state={language:"en"},a.presentationRef=n.a.createRef(),a.timelineRef=n.a.createRef(),a.updateLanguage=a.updateLanguage.bind(Object(l.a)(a)),a}return Object(c.a)(i,[{key:"updateLanguage",value:function(e){this.setState({language:e}),this.presentationRef.current.changeText(e),this.timelineRef.current.changeText(e)}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"all",children:[Object(g.jsx)(Y,{className:"particelsAsBackground"}),Object(g.jsxs)("div",{className:"WholeSite",children:[Object(g.jsx)(m,{handler:this.updateLanguage}),Object(g.jsx)(O,{language:this.state.language,ref:this.presentationRef}),Object(g.jsx)(M,{ref:this.timelineRef,language:this.state.language}),Object(g.jsx)(Q,{language:this.state.language}),Object(g.jsx)(ne,{}),Object(g.jsx)(ee,{}),Object(g.jsx)(ie,{})]})]})}}]),i}(n.a.Component);var se=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(oe,{})})};s.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(se,{})}),document.getElementById("root"))},86:function(e){e.exports=JSON.parse('{"timelineTitle":{"it":"Esperienze Lavorative & Studio","en":"Job & Educational Experiences"},"timelineItems":[{"titleContent":{"it":"Data engineer - Bitbang SRL","en":"Data engineer - Bitbang SRL"},"paperContent":{"it":"ho fatto questo, quello e quell\'altro. Qui ho potuto fare ci\xf2 e ci\xf2. Progetti tipo a, b e c ma anche D e F. ho lavorato er diversi clienti come a bsdas c dasd e ","en":"I DID this that them a lot of placeholder. I used this tool and others but also that. I did project like a, b, c, d. I worked for different client such"},"secondaryText":{"it":"2019 - presente","en":"2019 - now"},"buttonText":{"it":"Vai al Sito Aziendale","en":"Go to Company Website"},"icon":"workOutline","link":{"it":"https://www.bitbang.com/","en":"https://www.bitbang.com/"}},{"titleContent":{"it":"Generazione di previsioni di inventario affidabili con Databricks - Formazione virtuale","en":"Generating Reliable Inventory Forecasts with Databricks - Virtual Training"},"paperContent":{"it":"Questo corso insegna come eseguire previsioni dettagliate della domanda su larga scala con Facebook Prophet e Apache Spark. Dopo una spiegazione teorica ho messo in pratica le tecniche che consentono di produrre previsioni di serie temporali efficienti e accurate su una scala pi\xf9 fine rispetto all\'utilizzo di tecniche tradizionali.","en":"This course teaches  how to perform detailed large-scale demand forecasting with Facebook Prophet and Apache Spark. After a theoretical explanation I have put into practice the techniques that allow to produce efficient and accurate time series predictions on a finer scale than using traditional techniques."},"secondaryText":{"it":"2020","en":"2020"},"buttonText":{"it":"Vai alla Certificazione","en":"Go to Certification"},"icon":"school","link":{"it":"https://academy.databricks.com/award/completion/740c125e-dd2a-3af9-b2c0-5ffcb6b9e342/view-ext","en":"https://academy.databricks.com/award/completion/740c125e-dd2a-3af9-b2c0-5ffcb6b9e342/view-ext"}},{"titleContent":{"it":"Azure Databricks Core Technical - Formazione virtuale e Certificazione","en":"Azure Databricks Core Technical - Virtual Training and Capstone"},"paperContent":{"it":"La formazione tecnica di base di Azure Databricks \xe8 un\'esperienza pratica di 3 giorni di persona che fornisce i concetti chiave, le abilit\xe0 pratiche e la conoscenza tecnica di Azure Databricks.","en":"Azure Databricks Core Technical Training is a 3 day, hands-on, in person experience that provide the key concepts, practical skills, and technical knowledge of Azure Databricks."},"secondaryText":{"it":"2020","en":"2020"},"buttonText":{"it":"Vai alla Certificazione","en":"Go to Certification"},"icon":"school","link":{"it":"https://academy.databricks.com/award/certification/a7132a7b-1bed-36c4-9248-9debd5c3cb31/view-ext","en":"https://academy.databricks.com/award/certification/a7132a7b-1bed-36c4-9248-9debd5c3cb31/view-ext"}},{"titleContent":{"it":"Laurea in Ingegneria Informatica - Alma mater studiorum Bologna","en":"Bachelor in Computer Engineering - Alma Mater Studiorum Bologna"},"paperContent":{"it":"<p>Il corso presta particolare attenzione ai principi fondazionali, all\'esemplificazione degli approcci metodologici, alla presentazione degli ambienti e degli strumenti al fine di avere<span style=\'font-weight:bold;\'> una visione:</span></p><div style=\'font-weight:bold;\'>sistemistica </div><div style=\'font-weight:bold;\'>sulla progettazione del software </div><div style=\'font-weight:bold;\'>dei sistemi operativi </div><div style=\'font-weight:bold;\'>dei sistemi informativi </div><div style=\'font-weight:bold;\'>delle reti di calcolatori </div><div style=\'font-weight:bold;\'>delle infrastrutture WEB </div><div style=\'font-weight:bold;\'>delle architetture computazionali</div></br><p> Le competenze specifiche nel settore sono integrate da solide <span style=\'font-weight:bold;\'>basi fisico-matematiche</span>, da approfondite conoscenze interdisciplinari riguardanti aree tematiche quali <span style=\'font-weight:bold;\'>l\'Ingegneria Elettronica</span> e <span style=\'font-weight:bold;\'>l\'Ingegneria delle Telecomunicazioni</span>, da elementi di cultura aziendale e da adeguate conoscenze di lingua straniera.</p>","en":"<p>The course pays particular attention to the founding principles, to the exemplification of methodological approaches, to the presentation of environments and tools in order to have<span style=\'font-weight:bold;\'> a vision about:</span></p><div style = \'font-weight: bold;\'> systems engineering </div><div style = \'font-weight: bold;\'> software design </div><div style = \'font-weight: bold;\'> operating systems </div><div style = \'font-weight: bold;\'> information systems </div><div style = \'font-weight: bold;\'> computer networks </div><div style = \'font-weight: bold;\'> WEB infrastructure </div><div style = \'font-weight: bold;\'> computational architectures </div></br><p> The specific skills in the sector are complemented by solid <span style = \'font-weight: bold;\'> physical-mathematical bases </span>, by in-depth interdisciplinary knowledge concerning thematic areas such as <span style = \'font-weight : bold; \'> Electronic Engineering </span> and <span style =\' font-weight: bold; \'> Telecommunications Engineering </span>, from elements of corporate culture and adequate knowledge of a foreign language. </p>"},"secondaryText":{"it":"2014 - 2019","en":"2014 - 2019"},"buttonText":{"it":"Vai alla pagina del corso","en":"Go to Course website"},"icon":"school","link":{"it":"https://corsi.unibo.it/laurea/IngegneriaInformatica/insegnamenti/piano?code=0926&year=2015&manifest=it_2015_0926_000_000_3","en":"https://corsi.unibo.it/1cycle/ComputerEngineering/course-structure-diagram/piano?code=0926&year=2014&manifest=en_2014_0926_000_000_3"}},{"titleContent":{"it":"Steward - Best Union SpA ora VIVATICKET","en":"Stadium Steward - Best Union SpA now VIVATICKET"},"paperContent":{"it":"<p>Per circa un anno ho lavorato come steward nel weekend. Dopo aver effettuato un corso professionale, ho lavorato negli stadi dell\'emilia-romagna. I mie compiti erano:</p><div>Garantire la sicurezza del pubblico e dei giocatori</div><div>Assistere e Accoglienre il pubblico</div><div>Gestire folle di persone</div><div>Segnalare comportamenti pericolosi</div><div>Effettuare controlli a campione</div>","en":"<p> For about a year I worked in the weekend as steward. After completing a professional course, I worked in the stadiums of Emilia-Romagna.</p><p>My duties were: </p><div> Ensuring the safety of the public and players </div><div> Attending and welcoming the public </div><div> Dealing with crowds of people </div><div> Report dangerous behavior </div><div> Carry out random checks </div>"},"secondaryText":{"it":"2016 - 2017","en":"2016 - 2017"},"buttonText":{"it":"Vai alla pagina aziendale","en":"Go to company website"},"icon":"workOutline","link":{"it":"https://corporate.vivaticket.com/it/company/about-us","en":"https://corporate.vivaticket.com/en/company/about-us"}},{"titleContent":{"it":"Bagnino di salvataggio - La Compagnia Del Mare","en":"Lifeguard - La Compagnia Del Mare"},"paperContent":{"it":"<p>Per due estati ho lavorato come bagnino 7 giorni su 7 mediamente 6 ore al giorno. Dopo aver seguito un corso professionale dove ho studiato le ordinanze, le tecniche di salvataggio in acqua e le tecniche di primo soccorso e dopo aver conseguito il brevetto della Societ\xe0 Nazionale di Salvamento ho iniziato a lavorare presso gli hotel GH Montesilvano & Grand Eurhotel (sia piscina che mare) e presso la spiaggia libera di citt\xe0 Sant\'Angelo.</p><p>I mie compiti erano:</p><div>prevenire gli incidenti in acqua o farvi fronte</div><div>regolare le attivit\xe0 di balneazione ed il comportamento degli utenti</div><div>applicare e far rispettare le ordinanze (Capitaneria di Porto e Guardia Costiera)</div><div>verificare periodicamente la chimica delle acque nelle piscine</div>","en":"<p> For two summers I worked as a lifeguard 7 days a week on average 6 hours a day. After following a professional course where I studied ordinances, water rescue techniques and first aid techniques and after obtaining the patent of the National Salvation Society I started working at the GH Montesilvano & Grand Eurhotel (both swimming pool che mare) and at the free beach of Citt\xe0 Sant\'Angelo. </p><p> My duties were: </p><div> prevent or cope with water accidents </div><div> regulate bathing activities and user behavior </div><div> apply and enforce the ordinances (Port Authority and Coast Guard) </div><div> periodically check the water chemistry in swimming pools </div>"},"secondaryText":{"it":"2012-2013","en":"2012-2013"},"buttonText":{"it":"Vai alla pagina della cooperativa","en":"Go to cooperative website"},"icon":"workOutline","link":{"it":"https://www.lacompagniadelmareitalia.com/","en":"https://www.lacompagniadelmareitalia.com/"}}]}')}},[[329,1,2]]]);
//# sourceMappingURL=main.38f59d03.chunk.js.map