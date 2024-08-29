var total_img = [];
var total_pay = [];
var total_btp = [];
var total_btm = [];
var total_btt = [];
var sale = 0;

// function buy(i) {
//     var x = document.createElement("img");
//     x.setAttribute("src", pop_img[i - 1]);
//     x.style.width = "50%";
//     x.style.marginBottom = "5px";
//     document.getElementById("mySidebar").appendChild(x);
//     // total_img[total_img.length] = x;

//     var y = document.createElement("span");
//     y.style.marginLeft = "20px";
//     y.innerText = "$" + pop_pay[i - 1];
//     sale += pop_pay[i - 1];
//     document.getElementById("mySidebar").appendChild(y);
//     // total_pay[total_pay.length] = y;
// }
var s = [];
var ss = [];
var count = 0;
var total_sale = [];

function buy(i) {
    if (document.getElementById("mySidebar1").getElementsByTagName("img").length > 0) {
        count = parseInt(localStorage.getItem(`count`)) + 1;
        s = localStorage.getItem(`total_img`).split(",");
        ss = localStorage.getItem(`total_pay`).split(",");
        total_btt = localStorage.getItem(`total_btt`).split(",");
        for (let index = 0; index < s.length; index++) {
            total_img[index] = s[index];
            total_pay[index] = ss[index];
        }
        localStorage.setItem(`count`, count);
        localStorage.setItem(`total_img`, total_img);
        localStorage.setItem(`total_pay`, total_pay);
        localStorage.setItem(`total_btt`, total_btt);
        bbb()
    }
    else if (count == 0) {
        if (localStorage.getItem(`total_img`) != null) {
            total_img = localStorage.getItem(`total_img`).split(",");
            total_pay = localStorage.getItem(`total_pay`).split(",");
            total_btt = localStorage.getItem(`total_btt`).split(",");
            count = parseInt(localStorage.getItem(`count`));
        }

        if (document.getElementById("mySidebar1").getElementsByTagName("img").length == 0 && s.length > 0) {
            for (let index = 0; index < s.length; index++) {
                var x = document.createElement("img");
                x.setAttribute("src", total_img[index]);
                x.style.width = "50%";
                x.style.marginLeft = "5px";
                x.style.marginBottom = "5px";
                document.getElementById("mySidebar1").appendChild(x);

                var y = document.createElement("span");
                y.style.marginLeft = "20px";
                y.innerText = "$" + total_pay[index];
                document.getElementById("mySidebar1").appendChild(y);

                var zz = document.createElement("button");
                zz.id = `btm${index}`;
                zz.innerText = "-"
                zz.style.width = "30%";
                zz.addEventListener("click", 
                function (e) { 
                    var id_num = e.target.id;
                    btn_m(id_num.slice(-1));
                });
                document.getElementById("mySidebar1").appendChild(zz);

                var z = document.createElement("input");
                z.id = `btt${index}`;
                z.type = "text";
                z.value = "1";
                z.style.width = "30%";
                document.getElementById("mySidebar1").appendChild(z);

                var zzz = document.createElement("button");
                zzz.id = `btp${index}`;
                zzz.innerText = "+"
                zzz.style.width = "30%";
                zzz.addEventListener("click", 
                function (e) { 
                    var id_num = e.target.id;
                    btn_p(id_num.slice(-1));
                });
                document.getElementById("mySidebar1").appendChild(zzz);
            }
        }

        count += 1;
        localStorage.setItem(`count`, count);
        localStorage.setItem(`total_img`, total_img);
        localStorage.setItem(`total_pay`, total_pay);
        localStorage.setItem(`total_btt`, total_btt);
        bbb()
    }
}

var countt = 0;

function bbb() {   
    if (localStorage.getItem(`total_img`) != null) {
        s = localStorage.getItem(`total_img`).split(",");
        ss = localStorage.getItem(`total_pay`).split(",");
        countt = localStorage.getItem(`count`);
        total_sale = localStorage.getItem(`total_pay`).split(",");
        total_btt = localStorage.getItem(`total_btt`).split(",");
    }
   
    if (document.getElementById("mySidebar1").getElementsByTagName("img").length == 0 && s.length > 0) {        
        for (let index = 0; index < s.length; index++) {
            var x = document.createElement("img");
            x.setAttribute("src", s[index]);
            x.style.width = "50%";
            x.style.marginLeft = "5px";
            x.style.marginBottom = "5px";
            document.getElementById("mySidebar1").appendChild(x);

            var y = document.createElement("span");
            y.style.marginLeft = "20px";
            y.innerText = "$" + ss[index];
            document.getElementById("mySidebar1").appendChild(y);

            var zz = document.createElement("button");
            zz.id = `btm${index}`;
            zz.innerText = "-"
            zz.style.width = "30%";
            zz.addEventListener("click", 
            function (e) { 
                var id_num = e.target.id;
                btn_m(id_num.slice(-1));
            });
            document.getElementById("mySidebar1").appendChild(zz);

            var z = document.createElement("input");
            z.id = `btt${index}`;
            z.type = "text";
            z.value = total_btt[index];
            z.style.width = "30%";
            document.getElementById("mySidebar1").appendChild(z);

            var zzz = document.createElement("button");
            zzz.id = `btp${index}`;
            zzz.innerText = "+"
            zzz.style.width = "30%";
            zzz.addEventListener("click", 
            function (e) { 
                var id_num = e.target.id;
                btn_p(id_num.slice(-1));
            });
            document.getElementById("mySidebar1").appendChild(zzz);
        }
        localStorage.setItem(`count`, countt)
        localStorage.setItem(`total_img`, s);
        localStorage.setItem(`total_pay`, ss);
        localStorage.setItem(`total_btt`, total_btt);
    }
    else if (countt > 0) {
        if (countt > document.getElementById("mySidebar1").getElementsByTagName("img").length) {
            var x = document.createElement("img");
            x.setAttribute("src", s[countt - 1]);
            x.style.width = "50%";
            x.style.marginLeft = "5px";
            x.style.marginBottom = "5px";
            document.getElementById("mySidebar1").appendChild(x);

            var y = document.createElement("span");
            y.style.marginLeft = "20px";
            y.innerText = "$" + ss[countt - 1];
            document.getElementById("mySidebar1").appendChild(y);

            var zz = document.createElement("button");
            zz.id = `btm${countt - 1}`;
            zz.innerText = "-"
            zz.style.width = "30%";
            zz.addEventListener("click", 
            function (e) { 
                var id_num = e.target.id;
                btn_m(id_num.slice(-1));
            });
            document.getElementById("mySidebar1").appendChild(zz);

            var z = document.createElement("input");
            z.id = `btt${countt - 1}`;
            z.type = "text";
            z.value = total_btt[countt - 1];
            z.style.width = "30%";
            document.getElementById("mySidebar1").appendChild(z);

            var zzz = document.createElement("button");
            zzz.id = `btp${countt - 1}`;
            zzz.innerText = "+"
            zzz.style.width = "30%";
            zzz.addEventListener("click", 
            function (e) { 
                var id_num = e.target.id;
                btn_p(id_num.slice(-1));
            });
            document.getElementById("mySidebar1").appendChild(zzz);
        }
    }

    
    sale = 0;
    for (let index = 0; index < total_sale.length; index++) {
        sale += parseInt(total_sale[index]) * parseInt(total_btt[index]);         
    }
    document.getElementById("coin").innerText = `$${sale}`;

    var numer = total_sale.length;
    document.getElementById("bag-num").innerText = `${numer}`;

}

if (localStorage.getItem(`total_pay`) != null) {
    var buy_num = localStorage.getItem(`total_pay`).split(",");
    var numer = buy_num.length;
    document.getElementById("bag-num").innerText = `${numer}`;
} else {
    var numer = 0;
    document.getElementById("bag-num").innerText = `${numer}`;
}

function clearCart() {
    localStorage.setItem(`count`, "0");
    localStorage.setItem(`sale`, "0");
    localStorage.setItem(`total_img`, []);
    localStorage.setItem(`total_pay`, []);
    localStorage.setItem(`total_btt`, []);
    localStorage.clear();
    count = 0;
    countt = 0;
    sale = 0;
    total_sale = [];
    total_img = [];
    total_pay = [];
    total_btt = [];
    s = [];
    ss = [];
    document.getElementById("mySidebar1").remove();
    var c = document.createElement("div");
    c.id = "mySidebar1";
    document.getElementById("mySidebar").appendChild(c);
    document.getElementById("coin").innerText = "$0";
    document.getElementById("bag-num").innerText = 0;
}



function btn_m(index) {
    if (parseInt(document.getElementById(`btt${index}`).value) > 0) {
        total_btt = localStorage.getItem(`total_btt`).split(",");
        total_sale = localStorage.getItem(`total_pay`).split(",");
        total_btt[index] = parseInt(total_btt[index]) - 1;

        document.getElementById(`btt${index}`).value = parseInt(document.getElementById(`btt${index}`).value) - 1;

        sale = 0;
        for (let index = 0; index < total_sale.length; index++) {
            sale += parseInt(total_sale[index]) * parseInt(total_btt[index]);
        }
        document.getElementById("coin").innerText = `$${sale}`;

        
        localStorage.setItem(`total_btt`, total_btt);
    }
    else {
        document.getElementById(`btt${index}`).value = 0;
    }
}

function btn_p(index) {
    if (parseInt(document.getElementById(`btt${index}`).value) >= 0) {
        total_btt = localStorage.getItem(`total_btt`).split(",");
        total_sale = localStorage.getItem(`total_pay`).split(",");        
        total_btt[index] = parseInt(total_btt[index]) + 1;

        document.getElementById(`btt${index}`).value = parseInt(document.getElementById(`btt${index}`).value) + 1;

        sale = 0;
        for (let index = 0; index < total_sale.length; index++) {
            sale += parseInt(total_sale[index]) * parseInt(total_btt[index]);
        }
        document.getElementById("coin").innerText = `$${sale}`;

        localStorage.setItem(`total_btt`, total_btt);
    }
    else {
        document.getElementById(`btt${index}`).value = 0;
    }
}