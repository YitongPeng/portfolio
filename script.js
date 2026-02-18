// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
    }
    
    lastScroll = currentScroll;
});

// 项目卡片进入视口动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有项目卡片
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `all 0.6s ease ${index * 0.15}s`;
        observer.observe(item);
    });
});

// 图片预览画廊功能
const galleries = {
    yancare: [
        'assets/yancare/客户端登录界面.pic.jpg',
        'assets/yancare/员工端登录界面.pic.jpg',
        'assets/yancare/AI咨询界面1.pic.jpg',
        'assets/yancare/AI咨询界面2.pic.jpg',
        'assets/yancare/预约界面.pic.jpg',
        'assets/yancare/门店界面.pic.jpg',
        'assets/yancare/员工端.pic.jpg'
    ],
    podcast: [
        'assets/podcast/langgraph界面.png',
        'assets/podcast/飞书文档界面.png',
        'assets/podcast/飞书多维表格界面.png'
    ]
};

let currentGallery = [];
let currentImageIndex = 0;

function openGallery(galleryName) {
    const modal = document.getElementById('gallery-modal');
    const galleryImage = document.getElementById('gallery-image');
    const thumbnailsContainer = document.getElementById('gallery-thumbnails');
    
    currentGallery = galleries[galleryName] || [];
    
    if (currentGallery.length === 0) {
        alert('暂无图片预览');
        return;
    }
    
    currentImageIndex = 0;
    
    // 显示第一张图片
    galleryImage.src = currentGallery[0];
    
    // 生成缩略图
    thumbnailsContainer.innerHTML = '';
    currentGallery.forEach((imgSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.alt = `图片 ${index + 1}`;
        thumb.onclick = () => {
            currentImageIndex = index;
            updateGalleryImage();
        };
        if (index === 0) {
            thumb.classList.add('active');
        }
        thumbnailsContainer.appendChild(thumb);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    const modal = document.getElementById('gallery-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = currentGallery.length - 1;
    } else if (currentImageIndex >= currentGallery.length) {
        currentImageIndex = 0;
    }
    
    updateGalleryImage();
}

function updateGalleryImage() {
    const galleryImage = document.getElementById('gallery-image');
    const thumbnails = document.querySelectorAll('.gallery-thumbnails img');
    
    galleryImage.src = currentGallery[currentImageIndex];
    
    thumbnails.forEach((thumb, index) => {
        if (index === currentImageIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// 键盘导航
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('gallery-modal');
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        } else if (e.key === 'Escape') {
            closeGallery();
        }
    }
});

// 点击模态框背景关闭
document.getElementById('gallery-modal').addEventListener('click', (e) => {
    if (e.target.id === 'gallery-modal') {
        closeGallery();
    }
});

// 二维码点击放大功能
function openQRCode(qrSrc) {
    const modal = document.getElementById('gallery-modal');
    const galleryImage = document.getElementById('gallery-image');
    const thumbnailsContainer = document.getElementById('gallery-thumbnails');
    
    // 只显示一张二维码
    currentGallery = [qrSrc];
    currentImageIndex = 0;
    
    galleryImage.src = qrSrc;
    thumbnailsContainer.innerHTML = '';
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // 隐藏导航箭头（只有一张图）
    document.querySelector('.gallery-nav.prev').style.display = 'none';
    document.querySelector('.gallery-nav.next').style.display = 'none';
}

// 修改closeGallery函数，恢复导航箭头显示
const originalCloseGallery = closeGallery;
closeGallery = function() {
    originalCloseGallery();
    document.querySelector('.gallery-nav.prev').style.display = 'block';
    document.querySelector('.gallery-nav.next').style.display = 'block';
};
