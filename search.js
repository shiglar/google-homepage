hi = () => {
    window.location.href = 'google-search/index.html';
    return false
}

lucky = () => {
    var x = document.getElementsByClassName("feeling-lucky")[0];
    if (x.value != "I'm Feeling Happy") {
        x.setAttribute("value", "I'm Feeling Happy")
    } else {
        x.setAttribute("value", "I'm Feeling Lucky")
    }
}