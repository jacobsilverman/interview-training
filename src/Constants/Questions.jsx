import "./Questions.css";


export const questions = {
    "Javascript" : {
        0: {
            "question": function () {

                return (
                    <div className="question1">
                        <span>difference between <span className="highlight">async</span> and <span className="highlight">defer</span> in the <span className="highlight">&lt;script&gt;</span> tag and if none are used</span>
                    </div>
                )
            },
            "answer": function () {
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
        }
    },
    "React": {
        0: {
            "question": function () {
                return (<div>What is the virtual DOM</div>)
            },
            "answer":  function() {
                return (<div>not the DOM</div>);
            }
            
        }
    },
    "Css": {
        0: {
            "question": function () {
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
            
        }
    },
    "Html": {
        0: {
            "question": function () {
                return (<div>describe and element</div>)
            },
            "answer": function () {
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
                return (<div>Cross origin resource sharing</div>)
            }
        }
    }
};