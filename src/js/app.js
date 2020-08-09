(function() {
    getStatus()
})();

async function getStatus()
{
    const ENDPOINT = `https://api.archivenode.io/heartbeat`
    try {
        await fetch(ENDPOINT).then(function (response) {
            const elStatus = document.getElementById("status")
            if(response.status === 200) {
                elStatus.setAttribute("status", "online")
                elStatus.innerText = "Online"
                return
            }

            elStatus.setAttribute("status", "offline")
            elStatus.innerText = "Offline"
        })
    } catch(e) {
        console.log(e)
        const elStatus = document.getElementById("status")
        elStatus.setAttribute("status", "offline")
        elStatus.innerText = "Offline"
    }
}