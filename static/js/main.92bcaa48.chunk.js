(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(7),o=n.n(r),i=n(9),s=n(2),u=n(3),l=n(5),h=n(4),b=n(8),j=n(18),d=n(0),m=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={id:Object(j.a)(),name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.check(t.state.name)||t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({id:Object(j.a)(),name:"",number:""})},t.checkContact=function(){},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(d.jsxs)("label",{children:["Name",Object(d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(d.jsxs)("label",{children:["Number",Object(d.jsx)("input",{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(d.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component);function f(t){var e=t.contacts,n=t.onRemove,a=e.map((function(t){return Object(d.jsxs)("li",{children:[" ",Object(d.jsxs)("p",{children:["    \ud83d\udcf1    ",t.name,": ",t.number]})," ",Object(d.jsx)("button",{onClick:function(){n(t.id)},children:"Remove"})]},t.id)}));return Object(d.jsx)("ul",{children:a})}var O=function(t){var e=t.value,n=t.onChange;return Object(d.jsxs)("label",{className:"form",children:["Find contacts by name",Object(d.jsx)("input",{value:e,onChange:n})]})},p=(n(15),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.createContact=function(e){t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},t.handleCheckUniqueContact=function(e){var n=t.state.contacts.find((function(t){return t.name===e}));if(n)return alert("Contact is already exist"),n},t.handleRemoveContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=n.toLocaleLowerCase(),c=e.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}));return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(m,{contacts:e,check:this.handleCheckUniqueContact,onSubmit:this.createContact}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(O,{value:n,onChange:this.changeFilter}),Object(d.jsx)(f,{contacts:c,onRemove:this.handleRemoveContact})]})}}]),n}(a.Component));o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.92bcaa48.chunk.js.map