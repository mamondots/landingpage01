document.getElementById('menuId').addEventListener('click',function(){
    document.getElementById('sideMenu').classList.add('active');
});

document.getElementById('side-close').addEventListener('click',function(){
    document.getElementById('sideMenu').classList.remove('active');
});

document.getElementById('productBox').addEventListener('click', function(){
    document.getElementById('product-view-show').classList.add('is-active');
});

document.getElementById('viwe-close-btn').addEventListener('click', function(){
    document.getElementById('product-view-show').classList.remove('is-active');
});
