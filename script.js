document.addEventListener("DOMContentLoaded", function () {
    var md = window.markdownit();
    var output = document.getElementById('html-output');

    fetch('README.md') // 这里指定Markdown文件的路径
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(text => {
            var result = md.render(text);
            output.innerHTML = result;
        })
        .catch(error => console.error('Error fetching the markdown file:', error));
});
