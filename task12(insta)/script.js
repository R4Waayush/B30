const users = [
    {
        profilePhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "ryan",
        storyPhoto: "https://images.unsplash.com/photo-1684061578510-80d12e70d1ee?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePhoto: "https://images.unsplash.com/photo-1504834636679-cd3acd047c06?q=80&w=2506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: 'minachi',
        storyPhoto: "https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePhoto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "ayan",
        storyPhoto: "https://images.unsplash.com/photo-1680536425297-59f8a22e4a76?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePhoto: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=3444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "jeany",
        storyPhoto: "https://images.unsplash.com/photo-1684001162075-54901abdaa25?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePhoto: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "kobalt",
        storyPhoto: "https://images.unsplash.com/photo-1680539593018-1bab59cafc8f?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        profilePhoto: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "manu",
        storyPhoto: "https://images.unsplash.com/photo-1695311510443-a616195bec72?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];
let part1 = document.querySelector(".part1");
let story = document.querySelector(".story");
sum = ""
users.forEach(function(elem,idx){
    sum += `<div class="story">
                    <img id=${idx} src="${elem.profilePhoto}" alt="">
                    <h4>${elem.name}</h4>
                </div>`
    
})

part1.innerHTML = sum;
overlay = document.querySelector(".overlay");
userName = document.querySelector(".overlay h2");
growthBar = document.querySelector(".overlay .progress .growthBar");
part1.addEventListener("click", function(dets){
    growth = 0


    overlay.style.display = "block";
    overlay.style.backgroundImage = `url("${users[dets.target.id].storyPhoto})`;
    userName.innerHTML = users[dets.target.id].name 

    let interval = setInterval(function(elem){
        growth++
        growthBar.style.width = growth + "%"
        console.log(growth);
        
    },50)

    setTimeout(() => {
        clearInterval(interval)
        overlay.style.display = "none";
    }, 5000);
})