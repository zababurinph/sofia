let m = [
    main = document.getElementById('main'),
    l1 = document.getElementById('l1'),
    l2 = document.getElementById('l2'),
    l3 = document.getElementById('l3'),
    l4 = document.getElementById('l4')
]

function changePage(idOld, idNew) {
    document.getElementById(idOld).style.display = 'none'
    document.getElementById(idNew).style.display = 'block'
}

function closeAll(id) {
    m.forEach((e) => e.style.display = 'none')
    document.getElementById(id).style.display = 'block'
}