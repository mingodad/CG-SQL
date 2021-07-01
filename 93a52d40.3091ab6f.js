(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(138)),s=["components"],l={slug:"update",title:"One Month Update",author:"CG/SQL Team",author_title:"Maintainer of CG/SQL",author_url:"https://github.com/facebookincubator",author_image_url:"https://avatars2.githubusercontent.com/u/69631?s=200&v=4",tags:["facebook","cg-sql","update"]},i={permalink:"/blog/update",editUrl:"https://github.com/facebookincubator/CG-SQL/edit/master/website/blog/blog/2020-11-12-update.md",source:"@site/blog/2020-11-12-update.md",description:"It's hard to believe it's been a month since the welcome message went up. We were",date:"2020-11-12T00:00:00.000Z",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"cg-sql",permalink:"/blog/tags/cg-sql"},{label:"update",permalink:"/blog/tags/update"}],title:"One Month Update",readingTime:8,truncated:!1,prevItem:{title:'More Flexible Cursor Patterns Using "Boxing"',permalink:"/blog/boxed-cursors-intro"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},c=[{value:"Here&#39;s a quick summary of what&#39;s been going on:",id:"heres-a-quick-summary-of-whats-been-going-on",children:[]},{value:"And now a few notes on The Big Stuff",id:"and-now-a-few-notes-on-the-big-stuff",children:[{value:"Declare cursors in the shape of a procedure&#39;s arguments and use them",id:"declare-cursors-in-the-shape-of-a-procedures-arguments-and-use-them",children:[]},{value:"Loading cursors and inserting columns",id:"loading-cursors-and-inserting-columns",children:[]},{value:"Putting these together",id:"putting-these-together",children:[]},{value:"Cursor Differencing",id:"cursor-differencing",children:[]}]}],u={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,s);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It's hard to believe it's been a month since the welcome message went up. We were\nhappy to see interest right away and even a bunch of forks but most of all\npull requests.  A sweeping change to modernize the cql.y grammar was much\nappreciated.  That ",Object(o.b)("inlineCode",{parentName:"p"},"$1")," stuff was very old school (I'm showing my age now)."),Object(o.b)("h2",{id:"heres-a-quick-summary-of-whats-been-going-on"},"Here's a quick summary of what's been going on:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"@mingodad gave us an implementation of check and collate column attributes (the check attribute on tables should be easy to add from here)"),Object(o.b)("li",{parentName:"ul"},"the ",Object(o.b)("inlineCode",{parentName:"li"},"select function")," form should never return objects, only SQLite types, enforced"),Object(o.b)("li",{parentName:"ul"},"@attribute(cql:suppress_result_set) was added to save code gen for procedures that don't need the C result set wrappers"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cql_cursor_diff_col")," and ",Object(o.b)("inlineCode",{parentName:"li"},"cql_cursor_diff_val")," methods were added to report what's different about two cursors (highly useful in test code)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cql_cursor_format")," was added so you can quickly convert any cursor into columns and values as string for debug output (no matter the shape)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"sqlite3_changes")," was added to the builtin list so you don't have to use ",Object(o.b)("inlineCode",{parentName:"li"},"declare select function")," to use it anymore"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cql_get_blob_size")," was added so you can see how big your blobs are (useful for diagnostics)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"trim"),", ",Object(o.b)("inlineCode",{parentName:"li"},"rtrim")," and ",Object(o.b)("inlineCode",{parentName:"li"},"ltrim")," were added to the builtin list so you can use them without ",Object(o.b)("inlineCode",{parentName:"li"},"declare select function")),Object(o.b)("li",{parentName:"ul"},"the builtin function ",Object(o.b)("inlineCode",{parentName:"li"},"ifnull_crash")," was added so that nullables that have already checked can be safely typecast to not null"),Object(o.b)("li",{parentName:"ul"},"the bug we saw in demo video number 2 where some foreign keys were not properly linked up in autotest code was fixed (yay videos)"),Object(o.b)("li",{parentName:"ul"},"time functions are now known to be ",Object(o.b)("inlineCode",{parentName:"li"},"not null")," for a bunch of simple cases such as 'now' arguments"),Object(o.b)("li",{parentName:"ul"},"you can use the ",Object(o.b)("inlineCode",{parentName:"li"},"cast(.. as ..)")," operator on numeric types outside of the SQL context"),Object(o.b)("li",{parentName:"ul"},"@mingodad replaced all the positional references by named references in cql.y (yes! thank you!)"),Object(o.b)("li",{parentName:"ul"},"several minor bug fixes"),Object(o.b)("li",{parentName:"ul"},"the railroad diagrams were updated")),Object(o.b)("p",null,'NOTE: I often refer to "sugar" in the below.  This is short for syntatic sugar which, in case you\'re not familiar with the term, refers to a syntatically more pleasing way of writing a concept that is otherwise totally doable with normal syntax.  Many languages have sugar for forms that are common -- for brevity, clarity, and/or correctness.'),Object(o.b)("h2",{id:"and-now-a-few-notes-on-the-big-stuff"},"And now a few notes on The Big Stuff"),Object(o.b)("p",null,"We often add new features to the language to facilitate the writing of tests. The tests have a lot of boilerplate often setting up\nand calling the same procedures again and again with slightly different arguments. Long argument lists and long insert column\nlists are especially problematic as these can be very error prone. Here good language constructs are very helpful.\nWe've found good test constructs are often invaluable in production code as well, though in our experience the\ntests often have a lot more repitition that needs refactoring than production code. To that end we added some very useful things\nin the last month:"),Object(o.b)("h3",{id:"declare-cursors-in-the-shape-of-a-procedures-arguments-and-use-them"},"Declare cursors in the shape of a procedure's arguments and use them"),Object(o.b)("p",null,"The most common way to create a cursor is from a ",Object(o.b)("inlineCode",{parentName:"p"},"select")," statement but you can also make a cursor that can hold values for you\nby declaring it to be ",Object(o.b)("inlineCode",{parentName:"p"},"LIKE")," something else with a shape.  A classic example is:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"declare C cursor like some_table;\n")),Object(o.b)("p",null,"Now ",Object(o.b)("inlineCode",{parentName:"p"},"C")," has the same columns and types as ",Object(o.b)("inlineCode",{parentName:"p"},"some_table")),Object(o.b)("p",null,"Many procedures have a result type that is also a shape, for instance any procedure that ends with a ",Object(o.b)("inlineCode",{parentName:"p"},"select")," statement has a result\nshape defined by the columns of the select statement.  You could always do this sort of thing:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"declare C cursor like some_proc;\n")),Object(o.b)("p",null,"Meaning make ",Object(o.b)("inlineCode",{parentName:"p"},"C")," a cursor whose shape is whatever ",Object(o.b)("inlineCode",{parentName:"p"},"some_proc"),"returns, which is of course exactly the kind of cursor you need to capture\nthe result of ",Object(o.b)("inlineCode",{parentName:"p"},"some_proc"),"."),Object(o.b)("p",null,"Now we add:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"declare C cursor like some_proc arguments;\n")),Object(o.b)("p",null,"The idea being that the arguments of ",Object(o.b)("inlineCode",{parentName:"p"},"some_proc")," are also a shape (unless it has none). With this done you want to use that cursor\nto call the procedure -- that being sort of the whole point.  So we add this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"call some_proc(from C);\n")),Object(o.b)("p",null,"How do we use this effectively?  Hold on just a second -- for that answer we need one more big tool to really help the syntax."),Object(o.b)("h3",{id:"loading-cursors-and-inserting-columns"},"Loading cursors and inserting columns"),Object(o.b)("p",null,"Loading up a cursor is done with syntax that is very much like an ",Object(o.b)("inlineCode",{parentName:"p"},"insert")," statement.  An example might be something like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"fetch C(x,y,z) from values(1,2,3);\n")),Object(o.b)("p",null,"This is simple enough but it becomes more problematic if there are many values and especially if the values have complex names.\nTo make this a little less error prone CQL now has this sugar form for ",Object(o.b)("inlineCode",{parentName:"p"},"fetch"),", ",Object(o.b)("inlineCode",{parentName:"p"},"insert"),", and soon ",Object(o.b)("inlineCode",{parentName:"p"},"update cursor")," (like maybe\nbefore you see this blog).  The more readable form is:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"fetch C using\n  1  x,\n  2  y,\n  3  z;\n")),Object(o.b)("p",null,"This form has the values next to their names just like in a select statement, like all sugars, it is automatically rewritten to the normal form."),Object(o.b)("p",null,"Likewise"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"insert into some_table using\n  1            id,\n  'fred'       first_name,\n  'flintstone' last_name,\n  'bedrock'    home_town,\n  'dino'       favorite_pet,\n  'wilma'      life_partner;\n")),Object(o.b)("p",null,"becomes"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"insert into some_table(id, first_name, last_name, home_town, favorite_pet, life_partner)\n  values(1, 'fred', 'flintstone', 'bedrock', 'dino', 'wilma');\n")),Object(o.b)("p",null,"except the sugar form is much less error prone.  This form doesn't generalize to many values but the single row case is super common."),Object(o.b)("p",null,"Since this form is automatically rewritten SQLite will never see the sugar syntax, it will get the normal syntax."),Object(o.b)("p",null,"NOTE: the insert rewrite is coming later today, and will likely be live by the time you read this."),Object(o.b)("h3",{id:"putting-these-together"},"Putting these together"),Object(o.b)("p",null,"Let's suppose you have to write a test.  You have a procedure ",Object(o.b)("inlineCode",{parentName:"p"},"test_subject")," that takes some arguments plus\nyou have another helper procedure ",Object(o.b)("inlineCode",{parentName:"p"},"test_setup")," that puts seed data in the right places for your subject.\nBut there are many variations and  a lot of what you do between variations is the same.  How can you write this\neconomically making it clear what is different between variations without a lot of fuss.\nWell you can do something like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"-- use defaults for all the named values\n-- use 'seed' for everything else that isn't named\ncreate proc default_setup_args(seed integer not null)\nbegin\n  declare args cursor like test_setup arguments;\n  fetch args using\n    1334    primary_id,\n    98012   secondary_id,\n    'foo'   useful_name,\n    'bar'   other_useful_name,\n    1       fast_mode\n    @dummy_seed(seed);\n  out args;\nend;\n")),Object(o.b)("p",null,"With the above you can easily see which values go to which arguments"),Object(o.b)("p",null,"Your test setup can now look something like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"declare setup_args cursor like test_setup arguments;\nfetch setup_args from call default_setup_args(1999);\nupdate cursor setup_args using\n   0 fast_mode;  -- override fast mode for this test\ncall test_setup(from setup_args);\n")),Object(o.b)("p",null,"To call the test subject you probably need some of those setup arguments and maybe some more things."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"create proc default_subject_args(like default_setup_args, other_thing bool not null)\nbegin\n  declare args cursor like test_subject arguments;\n  fetch args using\n     primary_id    primary_id,    -- this came from the default_setup_args result\n     secondary_id  secondary_id,  -- so did this\n     useful_name   name,          -- the field names don't have to match\n     fast_mode     fast_mode,\n     other_thing   other_thing;\n  out args;\nend;\n")),Object(o.b)("p",null,"Then the test code"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"declare test_args cursor like test_subject arguments;\nfetch test_args from call default_subject_args(0);\ncall test_subject(from test_args);\n")),Object(o.b)("p",null,"Importantly, the cursor set operations are all by name so the order doesn't matter.  Which means even if there are many arguments\nyou don't have to worry that you got them in the wrong order or that they are the wrong type.  Effectively you have\na simple call by name strategy and you can easily read off the arguments.  You could do something similarly brief with\nhelper functions to provide the default arguments but then you can't readily re-use those arguments in later calls or\nfor verification so this way seems a lot more useful in a test context."),Object(o.b)("p",null,"When it comes time to validate, probably your test subject is returning a cursor from a select that you want to check.\nA slightly different call will do the job there."),Object(o.b)("h3",{id:"cursor-differencing"},"Cursor Differencing"),Object(o.b)("p",null,"With the setup above you can verify results very easily.  Let's change it a little bit:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"-- same as before, with a cursor\ndeclare results cursor for call test_subject(from test_args);\n\n-- get the first row\nfetch results;\n\ndeclare expected cursor like results;\nfetch expected using\n   setup_args.primary_id     primary_id,\n   setup_args.useful_name    name,\n   test_args.other_thing     other_thing\n   @dummy_seed(1999);   -- dummy values for all other columns\n\n-- make a macro like EXPECT_CURSOR_EQ(x,y) for this\n-- if the cursors are different the result is a string with the first\n-- different column name and the left and right values ready to print\n\ncall ExpectNull(cql_cursor_diff_val(expected, result));\n")),Object(o.b)("p",null,"ExpectEqual could be"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"create proc ExpectNull(t text)\nbegin\n  if t is not null then\n    call printf('%s\\n', t); -- or whatever\n    throw;\n  end if;\nend;\n")),Object(o.b)("p",null,"All that testing support comes from:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"cursors in the shape of arguments"),Object(o.b)("li",{parentName:"ul"},"cleaner fetch/insert syntax"),Object(o.b)("li",{parentName:"ul"},"cursors passed as arguments"),Object(o.b)("li",{parentName:"ul"},"cursor differences")),Object(o.b)("p",null,"It kills a lot of boilerplate resulting in tests that are much clearer."),Object(o.b)("p",null,"And that's what's been going on for the last month in CG/SQL land."),Object(o.b)("p",null,"If you got this far thanks for reading.  If you didn't get this far,\nyou aren't reading this anyway so thanking you is moot =P"),Object(o.b)("p",null,"Stay safe."),Object(o.b)("p",null,"Rico for CG/SQL"),Object(o.b)("p",null,"P.S. most of these fragments don't actually compile because of missing schema and maybe the odd typo.  If there is interest I'll make a demo that\nworks soup to nuts."))}b.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,d=b["".concat(s,".").concat(p)]||b[p]||m[p]||o;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);