// すべての画像を取得
const images = document.querySelectorAll('.marquee-inner-stop img');
const marqueeInners = document.querySelectorAll('.marquee-inner-stop');

// 各画像にホバーイベントを追加
images.forEach(img => {
    img.addEventListener('click',() => {
        //  すべての.marquee-innner-stopのアニメーションを停止
        marqueeInners.forEach(marqueeInner => {
            marqueeInner.classList.add('marquee-paused');
        });
    });

    // img.addEventListener('mouseleave',()=>{
    //     //  すべての.marquee-innner-stopのアニメーションを再開
    //     marqueeInners.forEach(marqueeInner=>{
    //         marqueeInner.classList.remove('marquee-paused');
    //     })
    // });
});

// すべての画像を取得
const images2 = document.querySelectorAll('.marquee-inner-stop2 img');
const marqueeInners2 = document.querySelectorAll('.marquee-inner-stop2');

// 各画像にホバーイベントを追加
images2.forEach(img => {
    img.addEventListener('click',() => {
        //  すべての.marquee-innner-stopのアニメーションを停止
        marqueeInners2.forEach(marqueeInner => {
            marqueeInner.classList.add('marquee-paused2');
        });
    });

    // img.addEventListener('mouseleave',()=>{
    //     //  すべての.marquee-innner-stopのアニメーションを再開
    //     marqueeInners.forEach(marqueeInner=>{
    //         marqueeInner.classList.remove('marquee-paused');
    //     })
    // });
});

// すべての画像を取得
const images3 = document.querySelectorAll('.marquee-inner-stop3 img');
const marqueeInners3 = document.querySelectorAll('.marquee-inner-stop3');

// 各画像にホバーイベントを追加
images3.forEach(img => {
    img.addEventListener('click',() => {
        //  すべての.marquee-innner-stopのアニメーションを停止
        marqueeInners3.forEach(marqueeInner => {
            marqueeInner.classList.add('marquee-paused3');
        });
    });

    // img.addEventListener('mouseleave',()=>{
    //     //  すべての.marquee-innner-stopのアニメーションを再開
    //     marqueeInners.forEach(marqueeInner=>{
    //         marqueeInner.classList.remove('marquee-paused');
    //     })
    // });
});