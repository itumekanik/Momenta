/**
 * @author itumekanik
 */

var Load = function (paper, c) {
    this.c = c;
    this.selected = false;
    this.inputP = $("#div_input1");
    
    this.shape = paper.path(["M", c.x+c.w/2, c.y, "l", 0, -50]).attr({'arrow-start':'classic-wide-long', 'stroke-width': 4})

    this.select = () => {
        this.shape.animate({stroke:"yellow"}, 300)
        this.inputP.css({"visibility":"visible",
                         "top":this.c.y - 50,
                         "left":this.c.x + this.c.w/2+10}).focus();
        this.selected = true;
    }

    this.unselect = () => {
        this.shape.animate({stroke:"black"}, 300)
        this.inputP.css({"visibility":"hidden"});
        this.selected = false;
    }

    this.shape.click(()=>{
        if (this.selected) {
            this.unselect();
        } else {
            this.select();
        }
    })
}
