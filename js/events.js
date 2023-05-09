export default function Events() {
  function backgroundImageChange() {
    const { pathname } = window.location
    const homeButton = document.querySelector(".home-button")
    const universeButton = document.querySelector(".universe-button")
    const explorationButton = document.querySelector(".exploration-button")

    switch (pathname) {
      case "/":
        document.body.classList.add("page1")
        homeButton.classList.toggle("active")
        break
      case "/universe":
        document.body.classList.add("page2")
        universeButton.classList.toggle("active")
        break
      case "/exploration":
        document.body.classList.add("page3")
        explorationButton.classList.toggle("active")
      default:
        console.log("erro")
    }
  }
  return { backgroundImageChange }
}
