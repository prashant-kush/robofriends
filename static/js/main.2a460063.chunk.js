(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(7),n(1)),l=n(2),s=n(4),h=n(3),u=n(5),m=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(this.props.id,"?200*200")}),r.a.createElement("div",null,r.a.createElement("h2",null,this.props.name),r.a.createElement("p",null,this.props.email)))}}]),t}(a.Component),d=function(e){var t=e.Robots,n=t.map(function(e,n){return r.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})});return r.a.createElement("div",null,n)},b=function(e){var t=e.searchfield,n=e.searchChange;return r.a.createElement("div",{className:"pa2 dib b--green bg-lightest-blue"},r.a.createElement("input",{type:"search",placeholder:"search Robots",value:t,onChange:n}))},p=(n(16),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"550px"}},e.children)}),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={Robots:[],searchfield:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({Robots:t})})}},{key:"render",value:function(){var e=this,t=this.state.Robots.filter(function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return 0===this.state.Robots.length?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(p,null,r.a.createElement(d,{Robots:t})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(18);c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){},9:function(e,t,n){e.exports=n(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.2a460063.chunk.js.map