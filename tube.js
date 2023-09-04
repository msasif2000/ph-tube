const loadContent = async (id = '1000') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json();
    //console.log(data.data);
    videos = data.data;
    displayContent(videos, id);
}
const verify = (verified) => {
    if (verified) {
        return `<img src="./images/verify.png" alt="" class="h-[18px] w-[18px]">`
    }
    else {
        return '';
    }
}
displayContent = (videos, id) => {
    console.log(videos);

    
    if (id === '1000') {
        document.getElementById('all').classList.add("bg-red-600", "text-white");
        document.getElementById('music').classList.remove("bg-red-600", "text-white");
        document.getElementById('comedy').classList.remove("bg-red-600", "text-white");
        document.getElementById('drawing').classList.remove("bg-red-600", "text-white");

    }
    else if (id === '1001') {
        document.getElementById('all').classList.remove("bg-red-600", "text-white");
        document.getElementById('music').classList.add("bg-red-600", "text-white");
        document.getElementById('comedy').classList.remove("bg-red-600", "text-white");
        document.getElementById('drawing').classList.remove("bg-red-600", "text-white");
    }
    else if (id === '1003') {
        document.getElementById('all').classList.remove("bg-red-600", "text-white");
        document.getElementById('music').classList.remove("bg-red-600", "text-white");
        document.getElementById('comedy').classList.add("bg-red-600", "text-white");
        document.getElementById('drawing').classList.remove("bg-red-600", "text-white");
    }
    else if (id === '1005') {
        document.getElementById('all').classList.remove("bg-red-600", "text-white");
        document.getElementById('music').classList.remove("bg-red-600", "text-white");
        document.getElementById('comedy').classList.remove("bg-red-600", "text-white");
        document.getElementById('drawing').classList.add("bg-red-600", "text-white");
    }


    if (videos.length === 0) {
        document.getElementById('video-section').innerHTML = `
        <div class="items-center mt-24">
        <img src="./images/oops.png" class=" mx-auto">
        <h3 class="text-center text-xl font-bold pt-8">Oops!! Sorry, <br> There is no content here</h3>
        </div>`;

    }
    document.getElementById('video-container').innerHTML = '';
    
    if(videos.length>0){
        
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

}

const allHandle = () => {
    //document.getElementById('all').classList.remove("px-4","py-1");
    // document.getElementById('all').innerHTML=`
    // <button class="px-4 bg-red-600 rounded-md py-1 text-xl text-white">All</button>`;
    loadContent('1000');
}
const musicHandle = () => {
    // document.getElementById('music').classList.remove("px-4","py-1");
    // document.getElementById('music').innerHTML=`
    // <button class="px-4 bg-red-600 rounded-md py-1 text-xl text-white">Music</button>`;
    loadContent('1001');
}
const comedyHandle = () => {
    //document.getElementById('comedy').classList.remove("px-4","py-1");
    // document.getElementById('comedy').innerHTML=`
    // <button class="px-4 bg-red-600 rounded-md py-1 text-xl text-white">Comedy</button>`;
    loadContent('1003');
}
const drawingHandle = () => {
    // document.getElementById('drawing').classList.remove("px-4","py-1");
    // document.getElementById('drawing').innerHTML=`
    // <button class="px-4 bg-red-600 rounded-md py-1 text-xl text-white">Drawing</button>`;
    loadContent('1005');
}

loadContent();

// { "category_id": "1001",
// "thumbnail": "https://i.ibb.co/hdtZYbB/enchnting.jpg",
// "title": "Enchanted Harmonies",
// "authors":
//  [{ "profile_picture": "https://i.ibb.co/jh1q2F3/shopia.jpg",
//  "profile_name": "Sophia Williams",
//  "verified": false }],
//  "others": { "views": "7.6K", "posted_date": "16450" } }]}