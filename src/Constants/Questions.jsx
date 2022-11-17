import "./Questions.css";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const highlight = (s) => {
    return (<span className="highlight">{s}</span>);
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
                const codeBlock = `
                    <script src='file.js'></script>
                    <script src='file.js' defer></script>
                    <script src='file.js' async></script>
                `;

                return (
                    <>
                        <div><b>1.</b> none: excuted synschronously, neither can be used inline, need src.</div>
                        <div><b>2.</b> defer: downloads the script while the document is stilling parsing, but waits till it finishes parsing before executing it. Scripts rely on eachother use DOMContentLoaded event listener is the same.</div>
                        <div><b>3.</b> async: downloads the script during parsing the doc but will pause the parser to execute the script before it finishes parsing. Doesn't neccessarily execute in order. Use if scripts are independent of eachother.</div>
                        <SyntaxHighlighter language="html" style={twilight}>
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
                const codeBlock = `
                    var a = function(){}.bind(1);// works
                    var a = a.bind(1);// works
                    function a(){}.bind(1)// doesn't work
                    a().bind(1);// doesn't work
                `;

                return (
                    <>
                        <div>Has to be used when we define a function expression, and not when we call it. Also doesn't work with function declarations.</div>
                        <SyntaxHighlighter language="javascript" style={twilight}>
                            {codeBlock}
                        </SyntaxHighlighter>
                    </>
                );
            }
        },
        2: {
            "question": function() {
                const codeBlock = `
                    function ex(){
                        console.log(this);
                    }
                    const boundEx = bind(ex, {a: true})
                    boundEx.call({b: true})// logs {a: true}
                `;

                return (
                    <>
                        <h3>Create a standalone function bind that is functionally equivalent to the method Function.prototype.bind</h3>
                        <br></br>
                        <SyntaxHighlighter language="javascript" style={twilight}>
                            {codeBlock}
                        </SyntaxHighlighter>
                    </>
                );
            },
            "answer": function() {
                const codeBlock = `
                    var a = function(){}.bind(1);//works
                    var a = a.bind(1);// works
                    function a(){}.bind(1);// doesn't work
                    a().bind(1);// doesn't work
                `;

                return (
                    <>
                        <div>Has to be used when we define a function expression, and not when we call it. Also doesn't work with function declarations.</div>
                        <SyntaxHighlighter language="javascript" style={twilight}>
                            {codeBlock}
                        </SyntaxHighlighter>
                    </>
                );
            }
        }
    },
    "React": {
        0: {
            "question": function() {
                return (<h3>What is the virtual DOM</h3>)
            },
            "answer":  function() {
                return (<div>not the DOM</div>);
            }
        }
    },
    "Css": {
        0: {
            "question": function() {
                return (<h3>types of @ media properties</h3>)
            },
            "answer": function() {
                const example = `<link rel="stylesheet" media="screen and (max-width: 600px)`;
                return (
                    <>
                        <div><b>all:</b> applies to all media type devices</div>
                        <div><b>print:</b> applies only to printers</div>
                        <div><b>screen:</b> applies to screens(desktop, tablets, mobile, etc)</div>
                        <div><b>speech:</b> screen readers</div>
                        <div><b>exmaple:</b> {example}</div>
                    </>
                );
            }
        },
        1: {
            "question": function() {
                return (<h3>How to animate show and disappearing an item</h3>);
            },
            "answer": function() {
                const codeBlock = `
                    .show{
                        visibility: visible;
                        opacity: 1;
                        transition: opacity 3s, visibility 3s;
                    }
                    .hide {
                        visibility: hidden;
                        opacity: 0;
                        transition: opacity 3s, visibility 3s;
                    }
                `;

                return (
                    <SyntaxHighlighter language="css" style={twilight}>
                        {codeBlock}
                    </SyntaxHighlighter>
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