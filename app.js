//  EPOCH TIME
const epochDisplay = document.getElementById('epoch-time')

function updateTime() {
    epochDisplay.textContent = Date.now()
}

updateTime()
setInterval(updateTime, 1000)

//  BIO COLLAPSIBLE
const bioText = document.getElementById('bio-text')
const bioToggle = document.getElementById('bio-toggle')
const toggleLabel = bioToggle.querySelector('.bio-toggle-text')

// Only show toggle if bio is actually long enough to need it
function checkBioLength() {
    // Temporarily expand to measure full height
    bioText.style.webkitLineClamp = 'unset'
    bioText.style.display = 'block'
    const fullHeight = bioText.scrollHeight

    // Reset clamp
    bioText.style.webkitLineClamp = ''
    bioText.style.display = ''

    const clampedHeight = bioText.clientHeight

    if (fullHeight > clampedHeight + 4) {
        bioToggle.style.display = 'inline-block'
    } else {
        bioToggle.style.display = 'none'
    }
}

bioToggle.addEventListener('click', () => {
    const isExpanded = bioToggle.getAttribute('aria-expanded') === 'true'

    bioText.classList.toggle('expanded', !isExpanded)
    bioToggle.setAttribute('aria-expanded', String(!isExpanded))
    toggleLabel.textContent = isExpanded ? 'Show more' : 'Show less'
})

checkBioLength()
window.addEventListener('resize', checkBioLength)