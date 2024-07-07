const outArray = JSON.parse(localStorage.getItem("data"));
const $blogOutput = $('.blog-output');
$blogOutput.empty();
for(var i = 0; i < outArray.length; i++) {
    blogObj = outArray[i];
    $blogOutput.append(
        `<div>
            Name: ${blogObj.name}
            <br>
            Title: ${blogObj.title}
            <br>
            Content: ${blogObj.content}
            <br>
            <br>
        </div>`
    )
}