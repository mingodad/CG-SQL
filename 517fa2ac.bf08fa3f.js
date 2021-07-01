(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{138:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return r?o.a.createElement(h,i(i({ref:t},b),{},{components:r})):o.a.createElement(h,i({ref:t},b))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<a;b++)c[b]=r[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(138)),c=["components"],i={slug:"error-tracing-intro",title:"Introducing General Purpose Error Tracing",author:"CG/SQL Team",author_title:"Maintainer of CG/SQL",author_url:"https://github.com/facebookincubator",author_image_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4",tags:["facebook","cg-sql","errors"]},l={permalink:"/blog/error-tracing-intro",editUrl:"https://github.com/facebookincubator/CG-SQL/edit/master/website/blog/blog/2020-11-16-error-tracing.md",source:"@site/blog/2020-11-16-error-tracing.md",description:"Today we made a couple of minor changes in the code generation to take care of some lingering issues.",date:"2020-11-16T00:00:00.000Z",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"cg-sql",permalink:"/blog/tags/cg-sql"},{label:"errors",permalink:"/blog/tags/errors"}],title:"Introducing General Purpose Error Tracing",readingTime:2.87,truncated:!1,prevItem:{title:"Error Tracing Helper Macro",permalink:"/blog/error-tracing-macro"},nextItem:{title:'More Flexible Cursor Patterns Using "Boxing"',permalink:"/blog/boxed-cursors-intro"}},b=[],s={rightToc:b};function p(e){var t=e.components,r=Object(o.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Today we made a couple of minor changes in the code generation to take care of some lingering issues."),Object(a.b)("p",null,"The first is that when you did a ",Object(a.b)("inlineCode",{parentName:"p"},"throw")," inside a ",Object(a.b)("inlineCode",{parentName:"p"},"catch")," to basically rethrow the error, you would lose\nthe error code if something had succeeded within the catch handler."),Object(a.b)("p",null,"The old codegen looked something like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-C"},'  catch_start_1: {\n    printf("error\\n");\n    cql_best_error(&_rc_)\n    goto cql_cleanup;\n  }\n')),Object(a.b)("p",null,"The problem being that while the ",Object(a.b)("inlineCode",{parentName:"p"},"printf")," above is fine and well, if you did any SQL operation then ",Object(a.b)("inlineCode",{parentName:"p"},"_rc_")," would be\nclobbered and you'd end up throwing an unrelated error code.   ",Object(a.b)("inlineCode",{parentName:"p"},"cql_best_error")," would at least make sure it was\na failure code (",Object(a.b)("inlineCode",{parentName:"p"},"SQLITE_ERROR"),") but the original error code was lost."),Object(a.b)("p",null,"The new code looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-C"},'  catch_start_1: {\n    _rc_thrown_ = _rc_;\n    printf("error\\n");\n    _rc_ = cql_best_error(_rc_thrown_);\n    goto cql_cleanup;\n  }\n')),Object(a.b)("p",null,"So now if there are db operations, the original return code is still preserved.  Note:  you still lose ",Object(a.b)("inlineCode",{parentName:"p"},"sqlite3_errmsg()")," because\nSQLite doesn't know that cleanup logic is running."),Object(a.b)("p",null,"This brings us to the second new thing: general purpose error traces."),Object(a.b)("p",null,"Error checking of result codes happens very consistently in CQL output.  The usual pattern looks something like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-C"},'  _rc_ = cql_exec(_db_,\n    "SAVEPOINT base_proc_savepoint");\n  if (_rc_ != SQLITE_OK) goto cql_cleanup;\n')),Object(a.b)("p",null,"or if it's inside a try block a little different... very little actually"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-C"},'  // try\n  {\n    _rc_ = cql_exec(_db_,\n      "RELEASE SAVEPOINT base_proc_savepoint");\n    if (_rc_ != SQLITE_OK) goto catch_start_8;\n    // ... the rest of the try block\n  }\n')),Object(a.b)("p",null,"Basically if the local ",Object(a.b)("inlineCode",{parentName:"p"},"_rc_")," doersn't match the necessary condition we ",Object(a.b)("inlineCode",{parentName:"p"},"goto")," the appropriate error label... either the relevant\ncatch block or else the procedure's cleanup code."),Object(a.b)("p",null,"We generalize this a bit now so that it looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-C"},"  if (_rc_ != SQLITE_OK) { cql_error_trace(); goto cql_cleanup; }\n\n-- or, in a catch...\n\n  if (_rc_ != SQLITE_OK) { cql_error_trace(); goto catch_start_8; }\n")),Object(a.b)("p",null,"Now the default implementation of ",Object(a.b)("inlineCode",{parentName:"p"},"cql_error_trace()")," is in ",Object(a.b)("inlineCode",{parentName:"p"},"cqlrt.h")," which you can and should customize. I'll be writing more\nabout that later but suffice to say you're supposed to replace ",Object(a.b)("inlineCode",{parentName:"p"},"cqlrt.h")," and ",Object(a.b)("inlineCode",{parentName:"p"},"cqlrt.c")," with suitable runtime helpers for your environment\nwhile keeping ",Object(a.b)("inlineCode",{parentName:"p"},"cqlrt_common.h")," and ",Object(a.b)("inlineCode",{parentName:"p"},"cqlrt_common.c")," fixed."),Object(a.b)("p",null,"So for instance, your ",Object(a.b)("inlineCode",{parentName:"p"},"cqlrt.h")," could look like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-C"},'#ifndef CQL_TRACING_ENABLED\n#define cql_error_trace()\n#else\n// whatever tracing you want, for example this might help in test code.\n#define cql_error_trace() \\\n  fprintf(stderr, "Error at %s:%d in %s: %d %s\\n", __FILE__, __LINE__, _PROC_, _rc_, sqlite3_errmsg(_db_))\n#endif\n')),Object(a.b)("p",null,"So then when you need to debug problems involving lots of error recovery you can watch the entire chain of events easily."),Object(a.b)("p",null,"Note that there are some useful variables there:"),Object(a.b)("p",null,"In any procedure ",Object(a.b)("inlineCode",{parentName:"p"},"_db_")," is the current database and ",Object(a.b)("inlineCode",{parentName:"p"},"_rc_")," is the most recent return code from SQLite.  ",Object(a.b)("inlineCode",{parentName:"p"},"__FILE__")," and ",Object(a.b)("inlineCode",{parentName:"p"},"__LINE__"),"\nof course come from the preprocessor.  and ",Object(a.b)("inlineCode",{parentName:"p"},"_PROC_")," (one underscore) is now generated by the compiler.  Every procedure's\nbody now begins with:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'#undef _PROC_\n#define _PROC_ "the_current_procedure"\n')),Object(a.b)("p",null,"So by defining your own cql_error_trace macro you can cause whatever logging you need to happen.  Note this can be\nvery expensive indeed because this happens a lot and even the string literals needed are a significant cost. So generally\nthis should be off for production builds and enabled as needed for debug builds."),Object(a.b)("p",null,"The default implementation is just an empty block"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"#define cql_error_trace()\n")),Object(a.b)("p",null,"But the hook is enough to light up whatever logging you might need, and you can use ",Object(a.b)("inlineCode",{parentName:"p"},"sqlite3_errmsg()")," before that message is gone."),Object(a.b)("p",null,"Good hunting."))}p.isMDXComponent=!0}}]);