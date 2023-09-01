const loadContent = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
    const data = await res.json()
    //console.log(data.data);
    videos = data.data;
    displayContent(videos);
}
displayContent = videos => {
    console.log(videos);
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList = 'card bg-base-100 p-4 shadow-xl';
        videoCard.innerHTML = `
        <figure><img src="${video.thumbnail}" alt="" /></figure>
                    <div class="flex gap-1">
                        <div>
                            <img src="${video.authors[0]}" alt="">
                        </div>
                        <div>
                            <h4 class="card-title">${video.title}</h4>
                            <p>${video.authors[1]}</p>
                            <p>${video.others.views}</p>
                        </div>
                    </div>
                    `;
        document.getElementById('video-container').appendChild(videoCard);

    })
}

// const allHandle()=>{

// }
loadContent();

// { "category_id": "1001", 
// "thumbnail": "https://i.ibb.co/hdtZYbB/enchnting.jpg", 
// "title": "Enchanted Harmonies", 
// "authors":
//  [{ "profile_picture": "https://i.ibb.co/jh1q2F3/shopia.jpg", 
//  "profile_name": "Sophia Williams", 
//  "verified": false }], 
//  "others": { "views": "7.6K", "posted_date": "16450" } }]}