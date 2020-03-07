function Current (id) {
    const ids = [ 'leftSide', 'rightSide', 'noSide' ]

    ids.forEach((name) => {
        let element = document.getElementById(name)
        if (element.classList.contains('current')) {
            element.classList.remove('current')
        }
    })

    let current = document.getElementById(id)
    current.className = 'current'

    const css = document.getElementById('css')
    css.setAttribute('href', `css/${id}.css`)

    Title(id)

};

function Title (side) {
    sides = {
        'leftSide': 'Left Sidebar',
        'rightSide': 'Right Sidebar',
        'noSide': 'No Sidebar'
    }
    const title = document.getElementById('title')
    if (title.hasChildNodes()){
        title.removeChild(title.firstChild)
    }

    const text = document.createTextNode(sides[side])
    title.appendChild(text)
}
