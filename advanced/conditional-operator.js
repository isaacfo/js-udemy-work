// const myAge = 27
// // turnary operator 
// const message = myAge >= 18 ? 'You can vote' : 'You cannot vote'





// another version
const myAge = 20
const showPage = () => {
    return 'Show the page'
}
const showErrorPage = () => {
    return 'Showing the error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)



const team = ['Tyler', 'Porter']
console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team')
