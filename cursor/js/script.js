document.querySelectorAll('.cursor').forEach(node => {
    document.addEventListener('mousemove', e => {
        node.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px`
    })
})