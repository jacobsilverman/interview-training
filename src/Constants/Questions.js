export const questions = {
    "Javascript" : [
        {
            "question": `difference between\n<script src="file.js"></script>\n<script src="file.js" defer></script>\n<script src="file.js" async></script>\n`,
            "answer": "1. excuted synschronously, neither can be used inline, need src\n2. defer: downloads the script while the document is stilling parsing, but waits till it finishes parsing before executing it. Scripts rely on eachother use DOMContentLoaded event listener is the same.\n3. async: downloads the script during parsing the doc but will pause the parser to execute the script before it finishes parsing. Doesn't neccessarily execute in order. Use if scripts are independent of eachother."
        }
    ],
    "React": [],
    "CSS": [
        {
            "question": "types of @ media properties",
            "answer": `all: applies to all media type devices\nprint: applies only to printers\nscreen: applies to screens(desktop, tablets, mobile, etc)\nspeech: screen readers\n<link rel="stylesheet" media="screen and (max-width: 600px)">`
        }
    ],
    "HTML": []
};