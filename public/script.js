
document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
    e.preventDefault();
    let file = document.getElementsByTagName("input")[0].files[0];
    const fd = new FormData();
    fd.append("image", file);
    axios({
        url: "/save-image",
        method: "post",
        data: fd,
    }).then(res => {
        document.getElementsByTagName("img")[0].src = res.data.path;
    });
})