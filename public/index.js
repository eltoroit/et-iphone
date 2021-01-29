document.addEventListener('orientationchange', () => {
    document.documentElement.style.height = `initial`;
    setTimeout(() => {
        document.documentElement.style.height = `100vh`;
        document.documentElement.style.width = `100vw`;
        setTimeout(() => {
            // this line prevents the content from hiding behind the address bar
            window.scrollTo(0, 1);
        }, 500);
    }, 500);
});
alert("<%= dttm %>");