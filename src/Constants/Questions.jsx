import "./Questions.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

const highlight = (s) => {
    return (<span className="highlight"><b>{s}</b></span>);
}

export const questions = {
    "Javascript" : {
        0: {
            "question": function() {
                return (
                    <h3>difference between <span className="highlight">async</span> and <span className="highlight">defer</span> in the <span className="highlight">&lt;script&gt;</span> tag and if none are used</h3>
                )
            },
            "answer": function() {
                const codeBlock = `<script src='file.js'></script>\n<script src='file.js' defer></script>\n<script src='file.js' async></script>`;

                return (
                    <>
                        <div><b>1.</b> none: excuted synschronously, neither can be used inline, need src.</div>
                        <div><b>2.</b> defer: downloads the script while the document is stilling parsing, but waits till it finishes parsing before executing it. Scripts rely on eachother use DOMContentLoaded event listener is the same.</div>
                        <div><b>3.</b> async: downloads the script during parsing the doc but will pause the parser to execute the script before it finishes parsing. Doesn't neccessarily execute in order. Use if scripts are independent of eachother.</div>
                        <SyntaxHighlighter language="html" style={prism}>
                            {codeBlock}
                        </SyntaxHighlighter>
                    </>
                );
            }
        },
        1: {
            "question": function() {
                return (<h3>describe {highlight(".bind()")} and how to use</h3>);
            },
            "answer": function() {
                const codeBlock = `var a = function(){}.bind(1);// works\nvar a = a.bind(1);// works\nfunction a(){}.bind(1)// doesn't work\na().bind(1);// doesn't work`;

                return (
                    <>
                        <div>Has to be used when we define a function expression, and not when we call it. Also it doesn't work with function declarations.</div>
                        <SyntaxHighlighter language="javascript" style={prism}>
                            {codeBlock}
                        </SyntaxHighlighter>
                    </>
                );
            }
        },
        2: {
            "question": function() {
                const codeBlock = `function ex(){\n    console.log(this);\n}\nconst boundEx = bind(ex, {a: true})\nboundEx.call({b: true})// logs {a: true}`;

                return (
                    <>
                        <SyntaxHighlighter language="javascript" style={prism}>
                            {codeBlock}
                        </SyntaxHighlighter>
                        <h3>Create a standalone function bind that is functionally equivalent to the method Function.prototype.bind</h3>
                    </>
                );
            },
            "answer": function() {
                const codeBlock = `const bind = (fn, context) => (..args) => {\n    fn.apply(context, args)\n}`;

                return (
                    <SyntaxHighlighter language="javascript" style={prism}>
                        {codeBlock}
                    </SyntaxHighlighter>
                );
            }
        },
        3: {
            "question": function() {
                return (
                    <h3>How do you clone an object</h3>
                );
            },
            "answer": function() {
                const codeBlock = `const obj2 = {...obj}\n\nconst obj2 = JSON.parse(JSON.stringify(obj))\n\nObject.assign({}, obj)\n\nfunction object(o) {\n    function F() {}\n    F.prototype = o;\n    return new F();\n}\nvar newObject = object(oldObject);\n//aka\nvar newObject = Object.create(oldObject);
                `;

                return (
                    <>
                        <div>Sincee objects are passed by reference you need to shallow copy</div>
                        <SyntaxHighlighter language="javascript" style={prism}>
                            {codeBlock}
                        </SyntaxHighlighter>
                    </>
                );
            }
        },
        4: {
            "question": function() {
                return (
                    <h3>How to create an object where you simulate having private member variables. AKA immuatable variables</h3>
                );
            },
            "answer": function() {
                const codeBlock = `function Person(first, last) {\n    this.first = first;\n    this.last = last;\n    this.full_name = function() {\n        return first+last;\n    }\n}\nconst person = new Person("john", "smith");`;

                return (
                    <SyntaxHighlighter language="javascript" style={prism}>
                        {codeBlock}
                    </SyntaxHighlighter>
                );
            }
            
        },
        5: {
            "question": function() {
                return (
                    <h3>Describe the Prototype Chain</h3>
                );
            },
            "answer": function() {
                return (
                    <>
                        <div>
                            Links objects by the .__proto__ (object) or .prototype (function) and when checking for props it will ascend
                            down the chain till it's found or hits the end.
                        </div>
                        <div>to quickly check use {highlight(".isPrototypeOf()")}</div>
                    </>
                );
            }
        },
        6: {
            "question": function() {
                return (
                    <h3>What is callback hell and how do we combat this</h3>
                );
            },
            "answer": function() {
                const codeBlock = `do(() => {\n    do(() => {\n        do(() => {\n        })\n    })\n})`;

                return (
                    <>
                        <SyntaxHighlighter language="javascript" style={prism}>
                            {codeBlock}
                        </SyntaxHighlighter>
                        <div>
                            If you want to perform another process after your previous callback then you will need to chain them
                            and it gets really long and confusing the more you chain.
                        </div>
                        <div>
                            It is easy to prevent this by using Promises introduced with ES6
                        </div>
                    </>
                );
            }
        },
        7: {
            "question": function() {
                return (
                    <h3>Create an object by using class & extend with super and describe its advantages</h3>
                );
            },
            "answer": function() {
                const codeBlock = `class Student extends Person {\n    constructor (first, last, course){\n        super(first, last);\n        this.course = course;\n    }\n    name() {\n        return \`\${super.name()} & I study \${this.course}\`;\n    }\n}`;

                return (
                    <>
                        <SyntaxHighlighter language="javascript" style={prism}>
                            {codeBlock}
                        </SyntaxHighlighter>
                        <div>
                            It is prototypical and constructor pattern still but with these additional keywords to make it easier.
                            You can use the other methods of making object and inheritance but combine with this new stuff. *ES6 class
                            can extend to ES5 object functions
                        </div>
                        <div>
                            super calls the constructor of the extended class. You always need to call the super of the base class 
                            before using this.
                        </div>
                    </>
                );
            }
        }
    },
    "React": {
        0: {
            "question": function() {
                return (<h3>What is the advantage of using keys</h3>)
            },
            "answer":  function() {
                return (
                    <>
                        <div>To perform the fewest DOM manipulations as possible. When rerendering it can track new vs. already available.</div>
                        <div>{highlight("Important:")} Always use a unique id and never use index since it can periodically change depending on the code.</div>
                    </>
                );
            }
        }
    },
    "Css": {
        0: {
            "question": function() {
                return (<h3>types of @ media properties</h3>)
            },
            "answer": function() {
                const codeBlock = `<link rel="stylesheet" media="screen and (max-width: 600px)"></link>`;
                return (
                    <>
                        <div><b>all:</b> applies to all media type devices</div>
                        <div><b>print:</b> applies only to printers</div>
                        <div><b>screen:</b> applies to screens(desktop, tablets, mobile, etc)</div>
                        <div><b>speech:</b> screen readers</div>
                        <div><b>exmaple:</b></div>
                        <SyntaxHighlighter language="html" style={prism}>
                            {codeBlock}
                        </SyntaxHighlighter>
                    </>
                );
            }
        },
        1: {
            "question": function() {
                return (<h3>How to animate show and disappearing an item</h3>);
            },
            "answer": function() {
                const codeBlock = `.show {\n    visibility: visible;\n    opacity: 1;\n    transition: opacity 3s, visibility 3s;\n}\n.hide {\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 3s, visibility 3s;\n}`;

                return (
                    <SyntaxHighlighter language="css" style={prism}>
                        {codeBlock}
                    </SyntaxHighlighter>
                );
            }
        },
        2: {
            "question": function() {
                return (<h3>How to center</h3>);
            },
            "answer": function() {
                const codeBlock = `.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}`;

                return (
                    <SyntaxHighlighter language="css" style={prism}>
                        {codeBlock}
                    </SyntaxHighlighter>
                );
            }
        },
        3: {
            "question": function() {
                return (<h3>Describe the Box Model and each of its parts</h3>)
            },
            "answer":  function() {
                return (
                    <>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <div style={{width:"250px",height:"250px",border:"1px solid black",textAlign:"center",backgroundColor:"lightgrey"}}>
                                <div>Margin</div>
                                <div style={{width:"200px",height:"200px",border:"1px solid black",display:"inline-block",backgroundColor:"lightblue"}}>
                                    <div>Border</div>
                                    <div style={{width:"150px",height:"150px",border:"1px solid black",display:"inline-block",backgroundColor:"lightgrey"}}>
                                        <div>Padding</div>
                                        <div style={{width:"100px",height:"100px",border:"1px solid black",display:"inline-flex",alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
                                            Content
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <div><b>Content</b> - The content of the box, where text and images appear</div>
                            <div><b>Padding</b> - Clears an area around the content. The padding is transparent</div>
                            <div><b>Border</b> - A border that goes around the padding and content</div>
                            <div><b>Margin</b> - Clears an area outside the border. The margin is transparent</div>
                        </div>
                    </>
                );
            }
        }
    },
    "Html": {
        0: {
            "question": function() {
                return (<h3>describe and element</h3>)
            },
            "answer": function() {
                return (<div>HTML</div>);
            }
        }
    },
    "Network": {
        0: {
            "question": function() {
                return (<h3>What is CORS</h3>);
            },
            "answer": function() {
                return (
                    <>
                        <div><b>Cross origin resource sharing:</b></div>
                        <div>This is a security feature which allows you to break the same origin policy. 
                            Header needs Access-Control-Allow-Origin if you call an external website that 
                            doesn't have this header as * or your site, on the browser, prevents the data
                            on the response but lets the request happen.
                        </div>
                        <div>{highlight("PUT, POST, DELETE:")} uses a preflight request so the request is blocked not the 
                            reponse with the OPTIONS method HTTP request.</div>
                    </>
                )
            }
        }
    }
};