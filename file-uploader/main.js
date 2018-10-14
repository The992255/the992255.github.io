const upImage = document.querySelector('.fa-cloud-upload-alt');

upImage.addEventListener('dragover', (event) => {
    const imageText = document.querySelector('.image-up');
    imageText.style.animation = 'imageHover 0.5s linear forwards';
    upImage.style.animation = 'iconHover 1.5s linear forwards'
    document.querySelector('.text').style.display = 'none';
    document.querySelector('.cloud-father').style.display = 'none';
    event.stopPropagation();
    event.preventDefault();
})
upImage.addEventListener('dragleave', (event) => {
    const imageText = document.querySelector('.image-up');
    imageText.style.animation = 'imageHoverNone 0.5s linear forwards';
    upImage.style.animation = 'iconHoverNone 1s linear forwards'
    document.querySelector('.text').style.display = 'inline';
    document.querySelector('.cloud-father').style.display = 'inline';
    event.stopPropagation();
    event.preventDefault();
})

upImage.addEventListener('drop', (event) => {
    const imageText = document.querySelector('.image-up');
    imageText.style.animation = "imageHoverNone 0.5s linear forwards";
    upImage.style.animation = 'iconHoverNone 0.5s linear forwards'
    document.querySelector('.text').style.display = 'inline';
    document.querySelector('.cloud-father').style.display = 'inline';
    event.stopPropagation();
    event.preventDefault();
    const file = event.dataTransfer.files;
    if (file[0].type.match('image')) {
        const reader = new FileReader();
        reader.readAsDataURL(file[0]);
        reader.onloadend = (event) => {
            const fileData = event.target.result;
            const base64FileData = fileData.split('base64,')[1];
            imgurApi(base64FileData);
        }
    }
    else {
        const imageText = document.querySelector('.your-image-text');
        const image = document.querySelector('.image');
        image.src = '';
        imageText.textContent = "上傳圖片?";
    }
})

function upload(event) {
    const file = event.files
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onloadend = (event) => {
        const fileData = event.target.result;
        const base64FileData = fileData.split('base64,')[1];
        imgurApi(base64FileData);
    }
}
function imgurApi(base64FileData) {
    const loading = document.querySelector('.fountainG-none');
    const backgroup = document.querySelector('.backgroup-none');
    backgroup.className = 'backgroup'
    backgroup.style.animation = 'backgroupColor 2s linear forwards';
    loading.className = ''
    fetch('https://api.imgur.com/3/image', {
        headers: {
            'Authorization': 'Client-ID dad777400318db6',
            // 'Authorization': 'Client-ID dad777400318db6',
            // 'Authorization': 'Bearer b51fc71bf84221a3fbb049c392986289579ee4d3'
        },
        method: "POST",
        body: base64FileData
    })
        .then(res => {
            return res.json();
        })
        .then(data => {
            if (data.success) {
                const image = document.querySelector('.image');
                const imageText = imageTextClassName();
                const imageBtn = imageBtnClassName();
                imageText.value = data.data.link;
                imageText.className = 'your-image-text';
                imageBtn.className = 'your-image-btn';
                image.src = data.data.link;
            } else {
                httpError(data.data.error)
            }
        })
        .catch(error => {
            httpError(error);
        })

    function imageTextClassName() {
        if (document.querySelector('.your-image-text-none') === null) {
            return document.querySelector('.your-image-text');
        }
        return document.querySelector('.your-image-text-none');
    }
    function imageBtnClassName() {
        if (document.querySelector('.your-image-btn-none') === null) {
            return document.querySelector('.your-image-btn');
        }
        return document.querySelector('.your-image-btn-none');
    }
    function httpError(error) {
        const loading = document.querySelector('#fountainG');
        const backgroup = document.querySelector('.backgroup');
        const errorText = document.querySelector('.errorText');
        const imageText = imageTextClassName();
        const imageBtn = imageBtnClassName();
        backgroup.style.animation = 'backgroupColorNone 1s linear forwards';
        setTimeout(() => {
            backgroup.className = 'backgroup-none';
        }, 2000);
        loading.className = 'fountainG-none'
        imageText.className = 'imageText-none'
        imageBtn.className = 'imageBtn-none'
        errorText.textContent = error;
    }
}
function toCopy() {
    const copyValue = document.querySelector('.your-image-text');
    copyValue.select();
    document.execCommand('copy');
}
function loadingOk() {
    const loading = document.querySelector('#fountainG');
    const backgroup = document.querySelector('.backgroup');
    backgroup.style.animation = 'backgroupColorNone 1s linear forwards';
    setTimeout(() => {
        backgroup.className = 'backgroup-none';
    }, 1000);
    loading.className = 'fountainG-none'
}