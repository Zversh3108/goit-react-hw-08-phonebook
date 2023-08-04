"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[111],{6111:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var i=t(2791),r=t(9439),l=t(8410),a=t(1692),s=t(9163),o=t(7943),d=t(9055),u=t(9273),c=t(3855),p=t(184),m=function(){var e=i.useState(!1),n=(0,r.Z)(e,2),t=n[0],m=n[1],v=(0,c.I0)(),f="Test-user-1@gmail.com",h="Test-user-1";return(0,p.jsx)(l.W,{maxW:"550px",mt:8,children:(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target,t={email:n.elements.email.value,password:n.elements.password.value};v((0,u.x4)(t))},children:[(0,p.jsx)(a.B,{size:"md",mb:4,children:(0,p.jsx)(s.I,{pr:"4.5rem",type:"email",name:"email",value:f,placeholder:"Enter email"})}),(0,p.jsxs)(a.B,{size:"md",mb:4,children:[(0,p.jsx)(s.I,{pr:"4.5rem",type:t?"text":"password",name:"password",value:h,placeholder:"Enter password"}),(0,p.jsx)(o.x,{width:"4.5rem",children:(0,p.jsx)(d.z,{h:"1.75rem",size:"sm",onClick:function(){return m(!t)},children:t?"Hide":"Show"})})]}),(0,p.jsx)(d.z,{mt:4,colorScheme:"teal",type:"submit",children:"Log In"})]})})};function v(){return(0,p.jsx)("div",{children:(0,p.jsx)(m,{})})}},5325:function(e,n,t){t.d(n,{NI:function(){return k},NJ:function(){return R},e:function(){return b}});var i=t(1413),r=t(5987),l=t(9439),a=t(9886),s=t(4591),o=t(5597),d=t(6833),u=t(2996),c=t(1665),p=t(6992),m=t(2791),v=t(184),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],x=(0,a.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),Z=(0,l.Z)(x,2),g=Z[0],b=Z[1],I=(0,a.k)({strict:!1,name:"FormControlContext"}),y=(0,l.Z)(I,2),j=y[0],R=y[1];var k=(0,o.G)((function(e,n){var t=(0,d.jC)("Form",e),a=function(e){var n=e.id,t=e.isRequired,a=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,r.Z)(e,f),c=(0,m.useId)(),v=n||"field-".concat(c),h="".concat(v,"-label"),x="".concat(v,"-feedback"),Z="".concat(v,"-helptext"),g=(0,m.useState)(!1),b=(0,l.Z)(g,2),I=b[0],y=b[1],j=(0,m.useState)(!1),R=(0,l.Z)(j,2),k=R[0],N=R[1],_=(0,m.useState)(!1),C=(0,l.Z)(_,2),S=C[0],F=C[1],E=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:Z},e),{},{ref:(0,s.lq)(n,(function(e){e&&N(!0)}))})}),[Z]),q=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,"data-focus":(0,p.PB)(S),"data-disabled":(0,p.PB)(o),"data-invalid":(0,p.PB)(a),"data-readonly":(0,p.PB)(d),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:v})}),[v,o,S,a,d,h]),w=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:x},e),{},{ref:(0,s.lq)(n,(function(e){e&&y(!0)})),"aria-live":"polite"})}),[x]),P=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),z=(0,m.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!t,isInvalid:!!a,isReadOnly:!!d,isDisabled:!!o,isFocused:!!S,onFocus:function(){return F(!0)},onBlur:function(){return F(!1)},hasFeedbackText:I,setHasFeedbackText:y,hasHelpText:k,setHasHelpText:N,id:v,labelId:h,feedbackId:x,helpTextId:Z,htmlProps:u,getHelpTextProps:E,getErrorMessageProps:w,getRootProps:P,getLabelProps:q,getRequiredIndicatorProps:z}}((0,u.Lr)(e)),o=a.getRootProps,x=(a.htmlProps,(0,r.Z)(a,h)),Z=(0,p.cx)("chakra-form-control",e.className);return(0,v.jsx)(j,{value:x,children:(0,v.jsx)(g,{value:t,children:(0,v.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},o({},n)),{},{className:Z,__css:t.container}))})})}));k.displayName="FormControl",(0,o.G)((function(e,n){var t=R(),r=b(),l=(0,p.cx)("chakra-form__helper-text",e.className);return(0,v.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==t?void 0:t.getHelpTextProps(e,n)),{},{__css:r.helperText,className:l}))})).displayName="FormHelperText"},7943:function(e,n,t){t.d(n,{x:function(){return x}});var i=t(4942),r=t(1413),l=t(5987),a=t(1692),s=t(1665),o=t(5597),d=t(6992),u=t(184),c=["placement"],p=["className"],m=["className"],v=(0,s.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),f=(0,o.G)((function(e,n){var t,s,o,d=e.placement,p=void 0===d?"left":d,m=(0,l.Z)(e,c),f=(0,a.m)(),h=f.field,x="left"===p?"insetStart":"insetEnd",Z=(0,r.Z)((t={},(0,i.Z)(t,x,"0"),(0,i.Z)(t,"width",null!=(s=null==h?void 0:h.height)?s:null==h?void 0:h.h),(0,i.Z)(t,"height",null!=(o=null==h?void 0:h.height)?o:null==h?void 0:h.h),(0,i.Z)(t,"fontSize",null==h?void 0:h.fontSize),t),f.element);return(0,u.jsx)(v,(0,r.Z)({ref:n,__css:Z},m))}));f.id="InputElement",f.displayName="InputElement";var h=(0,o.G)((function(e,n){var t=e.className,i=(0,l.Z)(e,p),a=(0,d.cx)("chakra-input__left-element",t);return(0,u.jsx)(f,(0,r.Z)({ref:n,placement:"left",className:a},i))}));h.id="InputLeftElement",h.displayName="InputLeftElement";var x=(0,o.G)((function(e,n){var t=e.className,i=(0,l.Z)(e,m),a=(0,d.cx)("chakra-input__right-element",t);return(0,u.jsx)(f,(0,r.Z)({ref:n,placement:"right",className:a},i))}));x.id="InputRightElement",x.displayName="InputRightElement"},9163:function(e,n,t){t.d(n,{I:function(){return h}});var i=t(1413),r=t(5987),l=t(5325),a=t(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var n=function(e){var n,t,s,d=(0,l.NJ)(),u=e.id,c=e.disabled,p=e.readOnly,m=e.required,v=e.isRequired,f=e.isInvalid,h=e.isReadOnly,x=e.isDisabled,Z=e.onFocus,g=e.onBlur,b=(0,r.Z)(e,o),I=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&I.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&I.push(d.helpTextId);return(0,i.Z)((0,i.Z)({},b),{},{"aria-describedby":I.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(n=null!=c?c:x)?n:null==d?void 0:d.isDisabled,isReadOnly:null!=(t=null!=p?p:h)?t:null==d?void 0:d.isReadOnly,isRequired:null!=(s=null!=m?m:v)?s:null==d?void 0:d.isRequired,isInvalid:null!=f?f:null==d?void 0:d.isInvalid,onFocus:(0,a.v0)(null==d?void 0:d.onFocus,Z),onBlur:(0,a.v0)(null==d?void 0:d.onBlur,g)})}(e),t=n.isDisabled,d=n.isInvalid,u=n.isReadOnly,c=n.isRequired,p=(0,r.Z)(n,s);return(0,i.Z)((0,i.Z)({},p),{},{disabled:t,readOnly:u,required:c,"aria-invalid":(0,a.Qm)(d),"aria-required":(0,a.Qm)(c),"aria-readonly":(0,a.Qm)(u)})}var u=t(5597),c=t(6833),p=t(2996),m=t(1665),v=t(184),f=["htmlSize"],h=(0,u.G)((function(e,n){var t=e.htmlSize,l=(0,r.Z)(e,f),s=(0,c.jC)("Input",l),o=d((0,p.Lr)(l)),u=(0,a.cx)("chakra-input",e.className);return(0,v.jsx)(m.m.input,(0,i.Z)((0,i.Z)({size:t},o),{},{__css:s.field,ref:n,className:u}))}));h.displayName="Input",h.id="Input"},1692:function(e,n,t){t.d(n,{B:function(){return I},m:function(){return b}});var i=t(1413),r=t(5987),l=t(9439),a=t(9886),s=t(7200),o=t(5597),d=t(6833),u=t(2996),c=t(1665),p=t(6992),m=t(2796),v=t(2791),f=t(184),h=["children","className"],x=(0,a.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),Z=(0,l.Z)(x,2),g=Z[0],b=Z[1],I=(0,o.G)((function(e,n){var t=(0,d.jC)("Input",e),l=(0,u.Lr)(e),a=l.children,o=l.className,x=(0,r.Z)(l,h),Z=(0,p.cx)("chakra-input__group",o),b={},I=(0,s.W)(a),y=t.field;I.forEach((function(e){var n,i;t&&(y&&"InputLeftElement"===e.type.id&&(b.paddingStart=null!=(n=y.height)?n:y.h),y&&"InputRightElement"===e.type.id&&(b.paddingEnd=null!=(i=y.height)?i:y.h),"InputRightAddon"===e.type.id&&(b.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(b.borderStartRadius=0))}));var j=I.map((function(n){var t,i,r=(0,m.o)({size:(null==(t=n.props)?void 0:t.size)||e.size,variant:(null==(i=n.props)?void 0:i.variant)||e.variant});return"Input"!==n.type.id?(0,v.cloneElement)(n,r):(0,v.cloneElement)(n,Object.assign(r,b,n.props))}));return(0,f.jsx)(c.m.div,(0,i.Z)((0,i.Z)({className:Z,ref:n,__css:(0,i.Z)({width:"100%",display:"flex",position:"relative",isolation:"isolate"},t.group),"data-group":!0},x),{},{children:(0,f.jsx)(g,{value:t,children:j})}))}));I.displayName="InputGroup"},2796:function(e,n,t){function i(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}t.d(n,{o:function(){return i}})},7200:function(e,n,t){t.d(n,{W:function(){return r}});var i=t(2791);function r(e){return i.Children.toArray(e).filter((function(e){return(0,i.isValidElement)(e)}))}}}]);
//# sourceMappingURL=111.554757df.chunk.js.map