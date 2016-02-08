// set up target links for each ref
var refs = document.querySelectorAll('.references div');
for (var i = 0; i < refs.length; i++) {
    var a = document.createElement('a');
    a.name = 'cite:' + (i+1);
    refs[i].insertBefore(a, refs[i].firstChild);
    var p = refs[i].querySelector('p');
    p.id = 'cite' + (i+1);
}

// create new elements for citations
var cites = document.querySelectorAll('.citation');
for (var i = 0; i < cites.length; i++) {
    var s = cites[i].innerHTML.replace("[", "").replace("]", "").split(", ");
    cites[i].innerHTML = "[";
    for (var j = 0; j < s.length; j++) {
        if (j > 0) {
            cites[i].innerHTML += ", ";
        }
        var ref = parseInt(s[j]);
        var a = document.createElement('a');
        a.className = 'cite-link';
        a.href = '#cite:' + (ref);
        a.innerHTML = s[j];
        cites[i].appendChild(a);
    }
    cites[i].innerHTML += "]";
}

// add hover events for cites
var links = document.querySelectorAll('.cite-link');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", function(evt) {
        // kill old nodes
        var boxes = document.querySelectorAll('#refbox');
        for (var j = 0; j < boxes.length; j++) {
            boxes[j].parentNode.removeChild(boxes[j]);
        }

        // get the cite
        var ref = parseInt(evt.target.innerHTML);
        var cite = document.querySelector("#cite"  + ref);

        var box = document.createElement('div');
        box.id = "refbox";
        box.innerHTML = cite.innerHTML;
        var rect = evt.target.getBoundingClientRect();
        box.style.top = (window.pageYOffset + rect.top + 25) + 'px';
        box.style.left = (window.pageXOffset + rect.left + 25) + 'px';

        document.querySelector('body').appendChild(box);
    });
    links[i].addEventListener("mouseleave", function(evt) {
        // kill old nodes
        var boxes = document.querySelectorAll('#refbox');
        for (var j = 0; j < boxes.length; j++) {
            boxes[j].parentNode.removeChild(boxes[j]);
        }
    });
}

/*
$('.references div').each(function(e, i) {
    var html = '<a name="cite:' + (i+1) + '"></a>';
    var link = $.parseHTML(html)[0];
    e.insertBefore(link, e.firstChild);
    $(e).find('p').first().attr("id", "cite:" + (i+1));
});

$('.citation').each(function(e) {
    var cites = $(e).text().replace("[", "").replace("]", "").split(", ");

    //console.log(cites);
});
*/
