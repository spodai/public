html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline
}

article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
    display: block
}

body {
    line-height: 1
}

ol,ul {
    list-style: none
}

blockquote,q {
    quotes: none
}

blockquote:before,blockquote:after,q:before,q:after {
    content: "";
    content: none
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

* {
    box-sizing: border-box
}

:root {
    --color-text: #333;
    --color-shadow: #aaa;
    --color-red: #ff4040;
    font-family: Rubik, sans-serif;
    font-size: 16px;
    color: var(--color-text);
}


::-webkit-scrollbar {
    width: 8px;
    height: 8px
}

::-webkit-scrollbar-button {
    width: 0px;
    height: 0px
}

::-webkit-scrollbar-thumb {
    background: var(--color-scrollbar-thumb);
    border: none
}

::-webkit-scrollbar-track {
    background: var(--color-scrollbar-track);
    border: none
}

::-webkit-scrollbar-corner {
    background: var(--color-scrollbar-track)
}

::selection {
    color: var(--color-selection-text);
    background: var(--color-selection)
}

a {
    text-decoration: none;
    color: var(--color-text)
}

body {
    background: var(--color-background);
    background-image: radial-gradient(var(--color-background-accent) 1.5px,transparent 1.5px);
    background-size: 10px 10px;
    background-color: var(--color-background);
    display: flex;
    align-items: center;
    justify-content: center
}

body .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    min-height: 100dvh;
    width: clamp(69px,100%,727px);
    padding: 16px
}

body .container h1 {
    font-size: 1.75rem;
    text-shadow: 3px 3px 0 var(--color-shadow);
    color: var(--color-red);
    font-weight: 800
}

body .container .subtitle {
    font-family: Rubik,sans-serif;
    font-size: .8rem;
    font-weight: 300;
    color: var(--color-text-secondary)
}

body .container h2 {
    width: 100%;
    margin-top: 6px;
    margin-bottom: -2px;
    font-size: 1rem;
    font-weight: 400
}

body .container h3 {
    width: 100%;
    margin: -2px 0;
    font-size: .8rem;
    color: var(--color-text-secondary)
}

body .container p {
    font-family: Rubik,sans-serif;
    font-size: .9rem;
    font-weight: 300;
    color: var(--color-text);
    text-align: center
}

body .container p strong {
    font-weight: 500
}

body .container p em {
    font-style: italic
}

body .container p a {
    color: var(--color-text-secondary);
    cursor: pointer
}

body .container p a:hover:not(.button) {
    text-decoration: underline
}

body .container hr {
    width: 100%;
    height: 1px;
    border: none;
    background: var(--color-hr)
}

body .container .buttons {
    display: flex;
    gap: 12px;
    width: 100%
}

body .container .button,body .container button {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 8px;
    color: var(--color-text);
    font-family: Rubik,sans-serif;
    font-size: .9rem;
    font-weight: 300;
    cursor: pointer;
    background: var(--color-button);
    border: 1px solid var(--color-button-border);
    box-shadow: 4px 4px 0 0 var(--color-shadow);
    -webkit-user-select: none;
    user-select: none
}

body .container .button:is(button),body .container button:is(button) {
    width: auto
}

body .container .button:is(button[disabled]),body .container button:is(button[disabled]) {
    cursor: not-allowed;
    color: var(--color-button-disabled);
    background: var(--color-button);
    border: 1px solid var(--color-button-disabled);
    box-shadow: 4px 4px 0 0 var(--color-shadow)
}

@media (hover: hover) {
    body .container .button:is(button[disabled]):hover,body .container button:is(button[disabled]):hover {
        transform:translate(0);
        box-shadow: 4px 4px 0 0 var(--color-shadow)
    }
}

body .container .button.hidden,body .container button.hidden {
    display: none
}

@media (hover: hover) {
    body .container .button:hover,body .container button:hover {
        transform:translate(1px,1px);
        box-shadow: 3px 3px 0 0 var(--color-shadow);
        background: var(--color-button-hover)
    }
}

body .container .button:active,body .container button:active {
    transform: translate(3px,3px);
    box-shadow: 1px 1px 0 0 var(--color-shadow);
    background: var(--color-button-active)
}

body .container .button .icon,body .container button .icon {
    width: 32px;
    height: 32px
}

body .container .button .label,body .container button .label {
    font-family: Rubik,sans-serif;
    font-size: 1rem;
    font-weight: 300;
    color: var(--color-text);
    overflow: hidden
}

body .container input,body .container textarea,body .container select,body .container .output {
    width: 100%;
    padding: 8px;
    color: var(--color-text);
    font-family: Rubik,sans-serif;
    font-size: .9rem;
    line-height: 1.1rem;
    font-weight: 300;
    cursor: pointer;
    background: var(--color-input);
    border: 1px solid var(--color-input-border)
}

body .container input:is(textarea),body .container input[type=text],body .container input[type=number],body .container textarea:is(textarea),body .container textarea[type=text],body .container textarea[type=number],body .container select:is(textarea),body .container select[type=text],body .container select[type=number],body .container .output:is(textarea),body .container .output[type=text],body .container .output[type=number] {
    cursor: text
}

body .container input:is(textarea),body .container textarea:is(textarea),body .container select:is(textarea),body .container .output:is(textarea) {
    resize: vertical
}

body .container input:is(.auto),body .container textarea:is(.auto),body .container select:is(.auto),body .container .output:is(.auto) {
    width: auto
}

body .container input[type=range],body .container textarea[type=range],body .container select[type=range],body .container .output[type=range] {
    border: none;
    background: none;
    height: 23px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%
}

body .container input[type=range]:focus,body .container textarea[type=range]:focus,body .container select[type=range]:focus,body .container .output[type=range]:focus {
    outline: none
}

body .container input[type=range]::-webkit-slider-runnable-track,body .container textarea[type=range]::-webkit-slider-runnable-track,body .container select[type=range]::-webkit-slider-runnable-track,body .container .output[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: var(--color-range-background);
    border: 1px solid var(--color-range-border)
}

body .container input[type=range]::-webkit-slider-thumb,body .container textarea[type=range]::-webkit-slider-thumb,body .container select[type=range]::-webkit-slider-thumb,body .container .output[type=range]::-webkit-slider-thumb {
    border: 1px solid var(--color-range-border);
    height: 16px;
    width: 16px;
    background: var(--color-range);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px
}

body .container input[type=range]:focus::-webkit-slider-runnable-track,body .container textarea[type=range]:focus::-webkit-slider-runnable-track,body .container select[type=range]:focus::-webkit-slider-runnable-track,body .container .output[type=range]:focus::-webkit-slider-runnable-track {
    background: var(--color-range-background)
}

body .container input[type=range]::-moz-range-track,body .container textarea[type=range]::-moz-range-track,body .container select[type=range]::-moz-range-track,body .container .output[type=range]::-moz-range-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: var(--color-range-background);
    border: 1px solid var(--color-range-border)
}

body .container input[type=range]::-moz-range-thumb,body .container textarea[type=range]::-moz-range-thumb,body .container select[type=range]::-moz-range-thumb,body .container .output[type=range]::-moz-range-thumb {
    border: 1px solid var(--color-range-border);
    height: 16px;
    width: 16px;
    background: var(--color-range);
    cursor: pointer
}

body .container input[type=range]::-ms-track,body .container textarea[type=range]::-ms-track,body .container select[type=range]::-ms-track,body .container .output[type=range]::-ms-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent
}

body .container input[type=range]::-ms-fill-lower,body .container textarea[type=range]::-ms-fill-lower,body .container select[type=range]::-ms-fill-lower,body .container .output[type=range]::-ms-fill-lower {
    background: var(--color-range-background);
    border: 1px solid var(--color-range-border)
}

body .container input[type=range]::-ms-fill-upper,body .container textarea[type=range]::-ms-fill-upper,body .container select[type=range]::-ms-fill-upper,body .container .output[type=range]::-ms-fill-upper {
    background: var(--color-range-background);
    border: 1px solid var(--color-range-border)
}

body .container input[type=range]::-ms-thumb,body .container textarea[type=range]::-ms-thumb,body .container select[type=range]::-ms-thumb,body .container .output[type=range]::-ms-thumb {
    border: 1px solid var(--color-range-border);
    height: 16px;
    width: 16px;
    background: var(--color-range);
    cursor: pointer;
    margin-top: 0
}

body .container input[type=range]:focus::-ms-fill-lower,body .container textarea[type=range]:focus::-ms-fill-lower,body .container select[type=range]:focus::-ms-fill-lower,body .container .output[type=range]:focus::-ms-fill-lower {
    background: var(--color-range-background)
}

body .container input[type=range]:focus::-ms-fill-upper,body .container textarea[type=range]:focus::-ms-fill-upper,body .container select[type=range]:focus::-ms-fill-upper,body .container .output[type=range]:focus::-ms-fill-upper {
    background: var(--color-range-background)
}

body .container input[type=radio],body .container textarea[type=radio],body .container select[type=radio],body .container .output[type=radio] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 0;
    height: 0;
    border: 2px solid var(--color-input-border);
    border-radius: 50%
}

body .container input[type=radio]:checked,body .container textarea[type=radio]:checked,body .container select[type=radio]:checked,body .container .output[type=radio]:checked {
    background: var(--color-text)
}

body .container input[type=checkbox],body .container textarea[type=checkbox],body .container select[type=checkbox],body .container .output[type=checkbox] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    height: 0;
    width: 36px;
    border: 2px solid var(--color-input-border);
    transition: .1s
}

body .container input[type=checkbox]:before,body .container textarea[type=checkbox]:before,body .container select[type=checkbox]:before,body .container .output[type=checkbox]:before {
    content: "";
    display: block;
    height: calc(100% - 2px);
    aspect-ratio: 1/1;
    margin: 2px;
    background: var(--color-text);
    transition: .1s;
    left: -1px;
    top: -1px;
    position: absolute
}

body .container input[type=checkbox]:checked,body .container textarea[type=checkbox]:checked,body .container select[type=checkbox]:checked,body .container .output[type=checkbox]:checked {
    background: var(--color-checkbox-background)
}

body .container input[type=checkbox]:checked:before,body .container textarea[type=checkbox]:checked:before,body .container select[type=checkbox]:checked:before,body .container .output[type=checkbox]:checked:before {
    left: calc(100% - 3px);
    transform: translate(-100%)
}

body .container footer {
    font-family: Rubik,sans-serif;
    font-size: .7rem;
    font-weight: 300;
    color: var(--color-text-secondary);
    padding-top: 6px
}

body .container footer a {
    color: var(--color-text-secondary);
    cursor: pointer
}

body .container footer a:hover {
    text-decoration: underline
}

body .container .text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px
}

body .container .text.hidden {
    display: none
}
