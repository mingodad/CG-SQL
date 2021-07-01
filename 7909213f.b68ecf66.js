(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||r;return n?o.a.createElement(d,l(l({ref:t},c),{},{components:n})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),r=(n(0),n(138)),i=["components"],l={slug:"declare-enum-intro",title:"Introducing Declare Enum",author:"CG/SQL Team",author_title:"Maintainer of CG/SQL",author_url:"https://github.com/facebookincubator",author_image_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4",tags:["facebook","cg-sql","errors"]},s={permalink:"/blog/declare-enum-intro",editUrl:"https://github.com/facebookincubator/CG-SQL/edit/master/website/blog/blog/2020-12-03-declare-enum-intro.md",source:"@site/blog/2020-12-03-declare-enum-intro.md",description:"There is an unfortunate pattern of hard coding constants in SQL which I think comes from the",date:"2020-12-03T00:00:00.000Z",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"cg-sql",permalink:"/blog/tags/cg-sql"},{label:"errors",permalink:"/blog/tags/errors"}],title:"Introducing Declare Enum",readingTime:4.765,truncated:!1,prevItem:{title:"Introducing  Argument Bundles",permalink:"/blog/arg-bungle-intro"},nextItem:{title:"A quick tutorial on LIKE forms",permalink:"/blog/like-forms-tutorial"}},c=[],u={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"There is an unfortunate pattern of hard coding constants in SQL which I think comes from the\nfact that there's not an especially good way to encode constants in SQL.  Things are a little\nbetter In CG/SQL's CQL language because it's normal to run things through the pre-processor first\nso you can do things like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"#define BUSINESS_TYPE_RESTAURANT 1\n#define BUSINESS_TYPE_LAUNDROMAT 2\n")),Object(r.b)("p",null,"Having done so, you could write:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"insert into Business using\n   \"Rico's Laundry\"  name,\n   BUSINESS_TYPE_LAUNDROMAT type;\n\n-- by the time SQL sees this it becomes\ninsert into Business(name, type) values('Rico''s Laundry', 2);\n")),Object(r.b)("p",null,"And at least you don't have to see these loose '2' values all over. An especially unfortunate\nform is the below, in which the auther is clearly crying for a symbol to use:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'insert into Business using\n   "Rico\'s Laundry"  name,\n   2 type; /* laundromat */\n')),Object(r.b)("p",null,"But if we use ",Object(r.b)("inlineCode",{parentName:"p"},"#define")," the language knows nothing of the names and it can't help you manage them\nor export them consistently or anything like that.  I guess ",Object(r.b)("inlineCode",{parentName:"p"},"#define")," is pretty useful in several\nlangauges (C and C++) so you could maybe ",Object(r.b)("inlineCode",{parentName:"p"},"#include")," the macros somehow but that doesn't seem\nespecially great.  And if you need them in Java you're getting no help at all."),Object(r.b)("p",null,"So to this world we add enumerated constants.  This is a bit short of enumerated types as we'll\nsee later.  You can now write something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"declare enum business_type integer (\n  restuarant,\n  laundromat,\n  corner_store = 11+3  /* math added for demo purposes only */\n);\n")),Object(r.b)("p",null,"After this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"select business_type.corner_store;\n")),Object(r.b)("p",null,"is the same as"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"select 14;\n")),Object(r.b)("p",null,"And that is exactly what SQLite will see, the literal 14."),Object(r.b)("p",null,"What's going on here?  There's just a few rules:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the enumeration can be any numeric type (bool, integer, long integer, real)"),Object(r.b)("li",{parentName:"ul"},"the values of the enumeration start at 1 (i.e. if there is no ",Object(r.b)("inlineCode",{parentName:"li"},"= expression")," the first item will be 1, not 0)"),Object(r.b)("li",{parentName:"ul"},"if you don't specify a value, the next value is the previous value + 1"),Object(r.b)("li",{parentName:"ul"},"if you do specify a value it can be any constant expression and it will be cast to the type of the enumeration (even if thatis lossy)"),Object(r.b)("li",{parentName:"ul"},"the enumeration can refer to previous values in itself with no qualification ",Object(r.b)("inlineCode",{parentName:"li"},"(big = 100.0, medium = big/2, small = medium/2)")),Object(r.b)("li",{parentName:"ul"},"the enumeration can refer to previously defined enumerations as usual ",Object(r.b)("inlineCode",{parentName:"li"},"(code = business_type.restaurant)")),Object(r.b)("li",{parentName:"ul"},"Once the enumeration is defined you refer to its members in a fully qualified fashion ",Object(r.b)("inlineCode",{parentName:"li"},"enum_name.member_name")," elsewhere")),Object(r.b)("p",null,"Why is this better than macros?  Well for one thing the enum values can be checked at their declaration site, so if you\nhave errors you will hear about them in a more reasonable place.  But additionally since the structure is known to the\ncompiler it can give you useful information in the outputs."),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},".h")," files you get:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"enum business_type {\n  business_type__restaurant = 1,\n  business_type__laundromat = 2,\n  business_type__corner_store = 14\n};\n")),Object(r.b)("p",null,"In case of floating point values such as:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"declare enum floating real (\n  one = 1.0,\n  two = 2.0,\n  e = 2.71828,\n  pi = 3.14159\n);\n")),Object(r.b)("p",null,"You get:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"// enum floating (floating point values)\n#define floating__one 1.000000e+00\n#define floating__two 2.000000e+00\n#define floating__e 2.718280e+00\n#define floating__pi 3.141590e+00\n")),Object(r.b)("p",null,"Which is unfortunately the best you can do since C has no floating point enums."),Object(r.b)("p",null,"But in both cases the ",Object(r.b)("inlineCode",{parentName:"p"},"enums")," section of the JSON has the name of the enums and their members and values ready to go.\nWith these values you can readily generate (with moustache or something) the language interfaces of your choice.  This\nis a real help if you're trying to make helpers to call your CQL from say Java or something."),Object(r.b)("p",null,"To do all this we needed to add some constant folding and general evaluation to the compiler.  It's not much,\njust the normal numeric types and null.  The supported operations include:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"+"),", ",Object(r.b)("inlineCode",{parentName:"p"},"-"),", ",Object(r.b)("inlineCode",{parentName:"p"},"*"),", ",Object(r.b)("inlineCode",{parentName:"p"},"/"),", ",Object(r.b)("inlineCode",{parentName:"p"},"%"),", ",Object(r.b)("inlineCode",{parentName:"p"},"|"),", ",Object(r.b)("inlineCode",{parentName:"p"},"&"),", ",Object(r.b)("inlineCode",{parentName:"p"},"<<"),", ",Object(r.b)("inlineCode",{parentName:"p"},">>"),", ",Object(r.b)("inlineCode",{parentName:"p"},"~"),", ",Object(r.b)("inlineCode",{parentName:"p"},"and"),", ",Object(r.b)("inlineCode",{parentName:"p"},"or"),", ",Object(r.b)("inlineCode",{parentName:"p"},"not"),", ",Object(r.b)("inlineCode",{parentName:"p"},"=="),", ",Object(r.b)("inlineCode",{parentName:"p"},"<="),", ",Object(r.b)("inlineCode",{parentName:"p"},">="),", ",Object(r.b)("inlineCode",{parentName:"p"},"!="),", ",Object(r.b)("inlineCode",{parentName:"p"},"<"),", ",Object(r.b)("inlineCode",{parentName:"p"},">"),", the ",Object(r.b)("inlineCode",{parentName:"p"},"cast")," operator\nand the ",Object(r.b)("inlineCode",{parentName:"p"},"case")," forms.  These are enough to make a lot of very interesting expressions, all of which are envaluated at\ncompile time."),Object(r.b)("p",null,"While the constant folding was added to allow for rich ",Object(r.b)("inlineCode",{parentName:"p"},"enum")," expressions, there is also the ",Object(r.b)("inlineCode",{parentName:"p"},"const()")," primitive in the\nlanguage now which can appear anywhere a literal could appear.  This allows you do things that were previously not\nallowed such as:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"create table something(\n  x integer default const((1<<16)|0xf) /*  again the math is just for illustration */\n);\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"const")," form is also very useful in macros:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"#define SOMETHING const(12+3)\n")),Object(r.b)("p",null,"This form ensures that the constant will be evaluated at compile time. Const can also also nest so you can build these\nkinds of macros from other macros or you can build enums this way. Anywhere you might need literals, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"const"),"."),Object(r.b)("p",null,"Importantly, no enumerated data types were added to the language to do any of this.  The values can help you to\nachieve some correctness by avoiding transcription mistakes but there is no additional type-safety provided here.\nIndeed given the rich mix between these types in SQLite, and with SQLite having no knowledge of enumerations at\nall it would be tricky to do a complete job.  Still, this might happen in the future."),Object(r.b)("p",null,"But for now, declaring constants that are really an intimate part of your schema is now possible and the addition\nof the constants to the ",Object(r.b)("inlineCode",{parentName:"p"},".h")," files and the ",Object(r.b)("inlineCode",{parentName:"p"},".json")," output should hopefully make these generally useful.  At least\nwe might see less of the hard-coded constant business with good values baked right into the schema declarations."),Object(r.b)("p",null,"Happy Holidays."))}b.isMDXComponent=!0}}]);