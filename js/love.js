    var text_idx = 0;
    var col_idx = 0;

    var text = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
    var col = new Array("#FF0000", "#FF7F00", " #FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#8B00FF", "#FF0000", "#FF7F00", " #FFFF00", "#00FF00", "#00FFFF");

    $("body").click(function (e) {
        var $i = $("<span/>").text(text[text_idx]);
        text_idx = (text_idx + 1) % text.length;
        col_idx = (col_idx + 1) % col.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": col[col_idx]
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function () {
                $i.remove();
            });
    });