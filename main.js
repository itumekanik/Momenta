/**
 * @author itumekanik
 */


var P_okeylendi = function () {
    P.unselect();
}

var paper = Raphael("container", "100%", "100%");

var c = {x:500, y:200, w:400, h:20};

paper.text(c.x+c.w/2, c.y-150, "Yüke clikleyin lütfen...").attr({fill: '#ff0', 
                                                                "font-size": 24, 
                                                                "font-family": "Arial, Helvetica, sans-serif"});


var kiris = paper.rect(c.x, c.y, c.w, c.h)
                 .attr({fill:"gray", stroke:"black"});

var P = new Load(paper, c);


var mesnet1 = paper.path(["M", c.x, c.y + c.h, "l", 10, 10, "l", -20, 0, "l", 10, -10])
                   .attr({fill:"green"})

var mesnet2 = paper.path(["M", c.x + c.w, c.y + c.h, "l", 10, 10, "l", -20, 0, "l", 10, -10])
                   .attr({fill:"green"})
