import { Router } from "./router.js"
import Events from "./events.js"

const router = new Router()
const events = Events()

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")

router.handle()

events.backgroundImageChange()


// window.onpopstate = () => router.handle()
