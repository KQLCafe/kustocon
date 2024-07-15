document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.querySelector('.md-sidebar');
    if (sidebar) {
        sidebar.style.display = 'none';
    }

    var toc = document.querySelector('.md-content__right');
    if (toc) {
        toc.style.display = 'none';
    }

    var mainContent = document.querySelector('.md-main__inner');
    if (mainContent) {
        mainContent.style.marginLeft = 'auto';
        mainContent.style.marginRight = 'auto';
    }
});
