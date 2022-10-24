let p = $("#test");

let div = $(".my-class");

let ul = $("ul");

console.log(p);
console.log(div);
console.log(ul);

console.log(p.text());
p.text("New Text");

$("input").attr("placeholder", "Testerrrr");

div.prepend("<p>prepended paragrap");
div.append("<p>appended paragrap");
div.before("<p>paragraph that was added before the div");
div.after("<p>paragraph that was added after the div");
