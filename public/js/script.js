const handleWheel = function (e) {
    if (e.ctrlKey || e.metaKey)
        e.preventDefault();
};
window.addEventListener("wheel", handleWheel, { passive: false });

window.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && (e.which === 61 || e.which === 107 || e.which === 173 || e.which === 109 || e.which === 187 || e.which === 189)) {
        e.preventDefault();
    }
}, false);