document.addEventListener('DOMContentLoaded', () =>
    replaceText()
)

function replaceText() {
    document.getElementById('text')
        .innerHTML = 'This is really cool!'
}