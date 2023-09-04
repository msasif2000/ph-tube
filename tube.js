var content = [];
var contentId;
const loadContent = async (id = '1000') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json();
    //console.log(data.data);
    videos = data.data;
    content = videos;
    contentId = id;
    displayContent(videos, id);
}
const verify = (verified) => {
    if (verified) {
        return `<img src="./images/verify.png" alt="" class="h-[12px] w-[12px]">`
    }
    else {
        return '';
    }
}

postTime = (time) => {
    //console.log(time);
    if (time) {
        const hours = Math.floor(time / 60);
        const remainingMinutes = time % 60;
        const hoursText = hours > 0 ? hours + " hr" + (hours !== 1 ? "s" : "") : "";
        const minutesText = remainingMinutes > 0 ? remainingMinutes + " min" + (remainingMinutes !== 1 ? "s" : "") : "";
        if (hoursText && minutesText) {
            return hoursText + " " + minutesText + " ago";
        }
        else if (hoursText) {
            return hoursText + " ago";
        }
        else if (minutesText) {
            return minutesText + " ago";
        }
    }
    else {
        return '';
    }
}
displayContent = (videos, id) => {
    //console.log(videos);


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

    // console.log(videos.length);
    if (id != '1005') {
        document.getElementById('video-section').innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="video-container">
        </div>`;
    }
    if (id === '1005') {
        document.getElementById('video-section').innerHTML = `
        <div class="items-center mt-24">
        <img src="./images/oops.png" class=" mx-auto">
        <h3 class="text-center text-xl font-bold pt-8">Oops!! Sorry, <br> There is no content here</h3>
        </div>`;

    }

    else {
        videos.forEach(video => {
            //console.log(video);

            const videoCard = document.createElement('div');
            videoCard.classList = 'card bg-base-100';
            videoCard.innerHTML = `
                <figure>
                <div class="hero h-[250px]" style="background-image: url(${video.thumbnail});">
                <div class="relative -right-20 top-28 text-slate-300 text-[14px] bg-slate-800 p-1/2 px-1  rounded">
                    <p class="text-right">${postTime(video.others.posted_date)}</p>
                </div>
                </figure>
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
    loadContent('1000');
}
const musicHandle = () => {
    loadContent('1001');
}
const comedyHandle = () => {
    loadContent('1003');
}
const drawingHandle = () => {
    loadContent('1005');
}
const sortByViews = () => {
    console.log('clicked');
    content.sort((a, b) => {
        const viewsA = parseFloat(a.others.views);
        const viewsB = parseFloat(b.others.views);
        console.log(viewsA, viewsB);
        return viewsB - viewsA;
    });
    displayContent(content, contentId);

}

//displayContent(videos);


loadContent();
