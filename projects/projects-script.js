const search_bar = document.getElementById('search-text');

search_bar.oninput = function() {
    let projects = get_projects();
    if (search_bar.value.length) {
        projects
            .map(c=>c.innerText.toLowerCase())
            .map(c=>search_bar.value.split(/\s+/g).some(s=>c.includes(s)))
            .forEach((d,i)=>{
                if (d) {
                    projects[i].classList.add('show-project');
                    projects[i].classList.remove('hide-project');
                } else {
                    projects[i].classList.remove('show-project');
                    projects[i].classList.add('hide-project');
                }
            });
    } else {
        projects.forEach(p=>{p.classList.add('show-project');p.classList.remove('hide-project')});
    }
}