(function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload"))
        return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
        o(e);
    new MutationObserver(e => {
        for (const a of e)
            if (a.type === "childList")
                for (const i of a.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && o(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function l(e) {
        const a = {};
        return e.integrity && (a.integrity = e.integrity),
        e.referrerPolicy && (a.referrerPolicy = e.referrerPolicy),
        e.crossOrigin === "use-credentials" ? a.credentials = "include" : e.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin",
        a
    }
    function o(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const a = l(e);
        fetch(e.href, a)
    }
}
)();
const c = [{
    dark: "eaeaea",
    light: "2a2a2a",
    name: "text"
}, {
    dark: "bababa",
    light: "5a5a5a",
    name: "text-secondary"
}, {
    dark: "cd435c",
    light: "e86880",
    name: "selection"
}, {
    dark: "eaeaea",
    light: "2a2a2a",
    name: "selection-text"
}, {
    dark: "1a1a1a",
    light: "eaeaea",
    name: "background"
}, {
    dark: "222222",
    light: "dedede",
    name: "background-accent"
}, {
    dark: "3a3a3a",
    light: "d2d2d2",
    name: "shadow"
}, {
    dark: "8a8a8a",
    light: "8a8a8a",
    name: "hr"
}, {
    dark: "2a2a2a",
    light: "d8d8d8",
    name: "button"
}, {
    dark: "bababa",
    light: "5a5a5a",
    name: "button-border"
}, {
    dark: "3a3a3a",
    light: "eaeaea",
    name: "button-hover"
}, {
    dark: "5a5a5a",
    light: "fafafa",
    name: "button-active"
}, {
    dark: "8a8a8a",
    light: "fafafa",
    name: "button-disabled"
}, {
    dark: "2a2a2a",
    light: "d8d8d8",
    name: "input"
}, {
    dark: "5a5a5a",
    light: "8a8a8a",
    name: "input-border"
}, {
    dark: "eaeaea",
    light: "5a5a5a",
    name: "scrollbar-thumb"
}, {
    dark: "1a1a1a",
    light: "eaeaea",
    name: "scrollbar-track"
}, {
    dark: "bababa",
    light: "eaeaea",
    name: "range"
}, {
    dark: "3a3a3a",
    light: "aaaaaa",
    name: "range-border"
}, {
    dark: "3a3a3a",
    light: "aaaaaa",
    name: "range-background"
}, {
    dark: "e26f80",
    light: "f4899d",
    name: "checkbox-background"
}]
  , n = document.getElementById("theme-toggle");
n && n.addEventListener("click", () => {
    u()
}
);
document.addEventListener("keydown", t => {
    t.altKey && t.key === "l" && u()
}
);
function u() {
    localStorage.setItem("theme", localStorage.getItem("theme") === "dark" ? "light" : "dark"),
    s()
}
let f = "";
function s() {
    let t = localStorage.getItem("theme") === "light" ? "light" : "dark";
    localStorage.setItem("theme", t),
    n && (t === "dark" ? n.innerHTML = "switch to light theme 🌞" : n.innerHTML = "switch to dark theme 🌚");
    for (let r in c) {
        let l = c[r].name
          , o = c[r][t];
        document.documentElement.style.setProperty(`--color-${l}`, `#${o}`)
    }
    f = t
}
s();
setInterval( () => {
    f !== localStorage.getItem("theme") && s()
}
, 500);
const m = document.getElementById("short")
  , g = document.getElementById("long")
  , h = document.getElementById("expand");
let d = !1;
h.addEventListener("click", () => {
    d ? (m.classList.remove("hidden"),
    g.classList.add("hidden")) : (m.classList.add("hidden"),
    g.classList.remove("hidden")),
    d = !d,
    h.innerText = d ? "collapse text" : "expand text"
}
);
