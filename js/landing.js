const canvas = document.getElementById("CanvaslandingPage")

// Loader and Clock


// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.PlaneGeometry( 3, 3, 64, 64 )
// Materials

const texture = loader.load("../img/imgTexture.jpg")
// const texture = loader.load('https://images.unsplash.com/photo-1467693068421-3a2b8d01faf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80F')
const height = loader.load('../img/height.png')
// const height = loader.load('https://upload.wikimedia.org/wikipedia/commons/0/01/Blender3DNobbToPro-ExampleHeightmap.jpg')
const alpha = loader.load('../img/alpha.jpg')
// const alpha = loader.load('https://aws1.discourse-cdn.com/standard17/uploads/threejs/original/2X/7/72c58e4b7fdb116af74090ad829569979edca6f6.png')
const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: texture,
    displacementMap: height,
    displacementScale:.6,
    alphaMap:alpha,
    transparent:true,
    depthTest:false
        
  });
const plane = new THREE.Mesh(geometry,material)
material.color = new THREE.Color(0xffffff)
plane.rotation.x = Math.PI / 2
// Mesh
scene.add(plane)
plane.rotation.x = 181
// Lights

const pointLight = new THREE.PointLight(0xffacbd, 3)
pointLight.position.x = 12
pointLight.position.y = 8
pointLight.position.z = 4.5
scene.add(pointLight)

let sizes = {
    width: window.innerWidth * .98,
    height: window.innerHeight * .8
}

window.addEventListener('resize', () =>
{
    // Update sizes
    // sizes.width = window.innerWidth
    // sizes.height = window.innerHeight 

    // Update camera
    camera.aspect = sizes.width / sizes.height 
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3))
})


// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 3.5
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas: canvas,});
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

document.addEventListener('mousemove', animateUp)
let mouseY = 0

function animateUp(event) {
    mouseY = event.clientY
}


const animateLanding = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    plane.rotation.z = .5 * elapsedTime
    plane.material.displacementScale  = .4 + mouseY * 0.0005
    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(animateLanding)
}

animateLanding()