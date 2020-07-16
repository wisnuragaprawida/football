
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const isFromSaved = urlParams.get("saved");
    const btnSave = document.getElementById("save");
    const btnDelete = document.getElementById("delete");
    if (isFromSaved) {
        // Hide fab jika dimuat dari indexed db
        btnSave.style.display = 'none';

        // ambil artikel lalu tampilkan
        getSavedTeamById();
    } else {
        var item = getTeamById();
        btnDelete.style.display = 'none';
    }
    btnSave.onclick = function () {

        item.then(team => {
            saveForLater(team);
        });
        M.toast({ html: 'team saved!' })
        btnSave.style.display = 'none';
        btnDelete.style.display = 'inherit';


    }
    btnDelete.onclick = function () {
        deleteTeamById();
        M.toast({ html: 'team deleted!' })
        location.href = "index.html"
    }
});
