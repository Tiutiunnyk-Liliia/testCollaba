/* Jquery */
let iSelectDropDown = (function () {
    let $el = $(".iSelect");
    let $elListItem = $(".iSelect").find("ul li");
    let $selectedText = $(".iSelect").find(".select-label");

    function iSelect() {
        $elListItem.on("click", function () {
            $selectedText.text($(this).text()).attr('title', $(this).text());
        });
    }

    return iSelect;
})();
let iselect = new iSelectDropDown();

/****************************************************/

let iSelectDropDownSecond = (function () {
    let $el = $(".iSelectSecond");
    let $elListItem = $(".iSelectSecond").find("ul li");
    let $selectedText = $(".iSelectSecond").find(".select-label");

    function iSelectSecond() {
        $elListItem.on("click", function () {
            $selectedText.text($(this).text()).attr('title', $(this).text());
        });
    }

    return iSelectSecond;
})();
let iSelectSecond = new iSelectDropDownSecond();

/******************************************************/

let iSelectDropDownThird = (function () {
    let $el = $(".iSelectThird");
    let $elListItem = $(".iSelectThird").find("ul li");
    let $selectedText = $(".iSelectThird").find(".select-label");

    function iSelectThird() {
        $elListItem.on("click", function () {
            $selectedText.text($(this).text()).attr('title', $(this).text());
        });
    }

    return iSelectThird;
})();
let iSelectThird = new iSelectDropDownThird();

/*Hide block*/
let closeBlock = document.querySelector(".close-block")
let catBox = document.querySelector(".category-box")

closeBlock.addEventListener("click", () => {
    closeBlock.classList.toggle("rotate-arrow")
    catBox.classList.toggle("show-box")
})

/*Close subcategory*/
let closeCat = document.querySelectorAll(".btn-close")

closeCat.forEach((button) => {
    button.addEventListener("click", () => {
        button.closest("div").classList.add("remove-category")
    })
})

/*One button for all*/
let checkbox = document.querySelectorAll('.toggle');
let oneForAll = document.querySelector(".main-toggle")
let selectLabel = document.querySelectorAll(".select-label")

oneForAll.addEventListener("click", check)

function check() {
    let check = document.querySelectorAll('.toggle');
    for (let i = 0; i < check.length; i++) {
        if (check[i].type == 'checkbox') {
            check[i].checked = true;
        }
    }

    selectLabel.forEach((item) => {
        item.textContent = "Мгновенно"
    })
}

/*Modal details*/
let detModal = document.getElementById("detModal");
let links = document.querySelectorAll(".subcategory-link");
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        detModal.style.display = "block";
        window.onclick = function(event) {
            if (event.target == detModal) {
                detModal.style.display = "none";
            }
        }
    },false)
})

/*Modal*/
let modal = document.getElementById("myModal");
let saveBtn = document.getElementById("btnModal");
let savePopup = document.querySelector(".save-changes");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
saveBtn.onclick = function() {
    savePopup.style.display = "flex";
}








