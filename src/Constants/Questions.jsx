import "./Questions.css";

const highlight = (s) => {
    return (<span className="highlight">{s}</span>);
}

export const questions = {
    "Javascript" : {
        0: {
            "question": function() {
                return (
                    <div className="question1">
                        <span>difference between <span className="highlight">async</span> and <span className="highlight">defer</span> in the <span className="highlight">&lt;script&gt;</span> tag and if none are used</span>
                    </div>
                )
            },
            "answer": function() {
                const part1 = `<script src='file.js'></script>`
                const part2 = `<script src='file.js' defer></script>`;
                const part3 = `<script src='file.js' async></script>`;
                return (
                    <>
                        <div><b>1.</b> none: excuted synschronously, neither can be used inline, need src. {part1}</div>
                        <div><b>2.</b> defer: downloads the script while the document is stilling parsing, but waits till it finishes parsing before executing it. Scripts rely on eachother use DOMContentLoaded event listener is the same. {part2}</div>
                        <div><b>3.</b> async: downloads the script during parsing the doc but will pause the parser to execute the script before it finishes parsing. Doesn't neccessarily execute in order. Use if scripts are independent of eachother. {part3}</div>
                    </>
                );
            }
        },
        1: {
            "question": function() {
                return (<div>describe {highlight(".bind()")} and how to use</div>);
            },
            "answer": function() {
                return (
                    <>
                        <div>Has to be used when we define a function expression, and not when we call it. Also doesn't work with function declarations.</div>
                        <div><b>var a = function()&#123; &#125;.bind(1);{highlight("// works")}</b></div>
                        <div><b>var a = a.bind(1);{highlight("// works")}</b></div>
                        <div><b>function a()&#123; &#125;.bind(1);{highlight("// doesn't works")}</b></div>
                        <div><b>a().bind(1);{highlight("// doesn't works")}</b></div>
                    
                    </>
                );
            }
        },
        2: {
            "question": function() {
                return (
                    <>
                        <div>Create a standalone function bind that is functionally equivalent to the method Function.prototype.bind</div>
                        <br></br>
                        <div>function ex()&#123;</div> 
                        <div>&emsp;console.log(this);</div>
                        <div>&#125;</div>
                        <div>const boundex = bind(ex, &#123;a: true&#125;))</div>
                        <div>boundEx.call(&#123;b: true&#125;)// logs &#123;a: true&#125;</div>
                    </>
                );
            },
            "answer": function() {
                return (
                    <>
                        <div>Has to be used when we define a function expression, and not when we call it. Also doesn't work with function declarations.</div>
                        <div><b>var a = function()&#123; &#125;.bind(1);{highlight("// works")}</b></div>
                        <div><b>var a = a.bind(1);{highlight("// works")}</b></div>
                        <div><b>function a()&#123; &#125;.bind(1);{highlight("// doesn't works")}</b></div>
                        <div><b>a().bind(1);{highlight("// doesn't works")}</b></div>
                    </>
                );
            }
        }
    },
    "React": {
        0: {
            "question": function() {
                return (<div>What is the virtual DOM</div>)
            },
            "answer":  function() {
                return (<div>not the DOM</div>);
            }
        }
    },
    "Css": {
        0: {
            "question": function() {
                return (<div>types of @ media properties</div>)
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
                return (<div>How to animate show and disappearing an item</div>);
            },
            "answer": function() {
                return (
                    <> 
                        <div><b>.show</b> &#123;</div>
                        <div>&emsp;visibility: visible;</div>
                        <div>&emsp;opacity: 1;</div>
                        <div>&emsp;transition: opacity 3s, visibility 3s;</div>
                        <div>&#125;</div>
                        <div><b>.hide</b> &#123;</div>
                        <div>&emsp;visibility: hidden;</div>
                        <div>&emsp;opacity: 0;</div>
                        <div>&emsp;transition: opacity 3s, visibility 3s;</div>
                        <div>&#125;</div>
                    </>
                );
            }
        }
    },
    "Html": {
        0: {
            "question": function() {
                return (<div>describe and element</div>)
            },
            "answer": function() {
                return (<div>HTML</div>);
            }
        }
    },
    "Network": {
        0: {
            "question": function() {
                return (<div>What is CORS</div>);
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