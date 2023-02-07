(async () => {
    try {
        let blogRes = await fetch('https://jsonplaceholder.typicode.com/posts');
        let blogData = await blogRes.json();

        // podatocite koi vi se potrebni za rabota se smesteni vo blogData
        // console.log(blogData);

        // vashiot kod tuka
        // ...
        //
    } catch (err) {
        console.log(err);
    }
})();