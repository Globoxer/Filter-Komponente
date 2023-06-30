function showAllCompItems() {
    var compItem = document.querySelectorAll("#companyList > li")
    for(let i = 0; i < compItem.length; i++){
        compItem[i].classList.toggle("showAll")
    }
}

function uncheckAll() {
    var checkBoxes = document.querySelectorAll(".check")
    for(let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = false
    }
}

function saveView() {
    var checkBoxes = document.querySelectorAll(".check")
    var selectedFilters = []
    for(let i = 0; i < checkBoxes.length; i++) {
        if(checkBoxes[i].checked == true){
            selectedFilters.push(" " + checkBoxes[i].nextElementSibling.innerHTML)
        }
    }
    if(selectedFilters.length == 0){
        console.log("No filters have been selected!")
    } else {
        console.log("The following filters have been selected: " + selectedFilters.toString())
    }
    toggleFilter()
}