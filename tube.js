const loadContent = async (id='1000') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json();
    //console.log(data.data);
    videos = data.data;
    displayContent(videos);
}
const verify = (verified) => {
    if (verified) {
        return `<img src="./images/verify.png" alt="" class="h-[18px] w-[18px]">`
    }
    else {
       return '';
    }
}
displayContent = videos => {
    console.log(videos);
    document.getElementById('video-container').innerHTML = '';
    if(videos.length === 0){
        document.getElementById('video-section').innerHTML = `
        <div class="items-center mt-24">
        <img src="./images/oops.png" class=" mx-auto">
        <h3 class="text-center text-xl font-bold">Oops!! Sorry, <br> There is no content here</h3>
        </div>`;
    }
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList = 'card bg-base-100';
        videoCard.innerHTML = `
        <figure><img src="${video.thumbnail}" alt="" class="h-[250px] rounded-xl p-1" /></figure>
                    <div class="flex gap-4 mt-4 p-2">
                        <div>
                            <img src="${video.authors[0].profile_picture}" alt="" class="rounded-full h-[36px] w-[36px]">
                        </div>
                        <div>
                            <h4 class="card-title text-[16px] font-bold">${video.title}</h4>
                            <div class="flex gap-2 items-center">
                                <p>${video.authors[0].profile_name}</p> 
                                <p>${verify(video.authors[0].verified)}</p>
                            </div>
                            <p>${video.others.views} views</p>
                        </div>
                    </div>
                    `;
        document.getElementById('video-container').appendChild(videoCard);

    })
}

const allHandle = ()=>{
    
    loadContent('1000');
}
const musicHandle = ()=>{
    loadContent('1001');
}
const comedyHandle = () =>{
    loadContent('1003');
}
const drawingHandle = () =>{
    loadContent('1005');
}
// const sortByTime = () => {
//     videos.sort((a, b) => {
//         return b.others.posted_date - a.others.posted_date;
//     })
//     displayContent(videos);
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