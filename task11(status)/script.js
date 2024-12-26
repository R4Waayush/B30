const users = [
    {
      profilePhoto: "https://images.unsplash.com/photo-1620912096563-4c7ff17b0474?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Aayush Sharma",
      uploadTime: "Today at 9:00 AM"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1620912096563-4c7ff17b0474?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Priya Singh",
      uploadTime: "Today at 10:30 AM"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1620912096563-4c7ff17b0474?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Rohan Verma",
      uploadTime: "Yesterday at 5:15 PM"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1620912096563-4c7ff17b0474?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Sneha Patel",
      uploadTime: "Today at 8:00 AM"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1620912096563-4c7ff17b0474?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Vikram Mehta",
      uploadTime: "Yesterday at 4:45 PM"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1620912096563-4c7ff17b0474?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Ananya Nair",
      uploadTime: "Today at 11:15 AM"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1620912096563-4c7ff17b0474?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Arjun Desai",
      uploadTime: "Yesterday at 3:00 PM"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1620912096563-4c7ff17b0474?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Kavya Kapoor",
      uploadTime: "Today at 7:45 AM"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1620912096563-4c7ff17b0474?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Rajesh Gupta",
      uploadTime: "Yesterday at 6:30 PM"
    },
    {
      profilePhoto: "https://images.unsplash.com/photo-1620912096563-4c7ff17b0474?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullName: "Ishita Malhotra",
      uploadTime: "Today at 12:00 PM"
    }
  ];
    let allStatus = document.querySelector(".allStatus");
    let container = ``
  users.forEach(function(elem){
    console.log(elem.fullName)

    container += `<div class="OtherStatus">
                        <img src="${elem.profilePhoto}" alt="">
                        <div class="details">
                            <h3>${elem.fullName}</h3>
                            <p>${elem.uploadTime}</p>
                        </div>
                    </div>`
  });
  
  allStatus.innerHTML = container;
  