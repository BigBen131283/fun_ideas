const toggleBio = document.querySelector('.toggle-bio')
const biography = document.querySelector('.displayed-bio')

toggleBio.onclick = function(){
    biography.classList.toggle('active');
}
