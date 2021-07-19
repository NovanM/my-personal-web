
const canvasHomePage = document.getElementById("CanvasHomePage")

const sceneHome = new THREE.Scene()
// Objects
const geometryHome = new THREE.DodecahedronGeometry( .9, 1,  );
const particelGeo = new THREE.BufferGeometry;
const particelInt = 5000;
const posArray = new Float32Array(particelInt * 3)
// const star = loader.load('./stars.png')
const star = loader.load('https://th.bing.com/th/id/R.15fa7f3b9de5074d4723e530127609ea?rik=zqDjit7wxWX1dA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fstar-icon-transparent-background%2fstar-icon-transparent-background-11.png&ehk=VstoKfHIjLBb1dIFuSe3q3%2f9cE%2fgcPMFXDWVF39t5Ig%3d&risl=&pid=ImgRaw')
// Materials

for(let i = 0; i < particelInt * 3; i++){
    posArray[i] = (Math.random() -0.5) * (Math.random() * 5)
}

particelGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

const materialHome = new THREE.PointsMaterial(
    {
        size:0.005,
    }
)


const particelMaterialHome = new THREE.PointsMaterial(
    {
        size:0.005,
        transparent:true,
        map:star
    }
)

// Mesh
const sphere = new THREE.Points(geometryHome,materialHome)
const sphere2 = new THREE.Points(geometryHome,materialHome)
const particelMesh = new THREE.Points(particelGeo, particelMaterialHome)
sceneHome.add(sphere,sphere2,particelMesh)
// Lights

const pointLightHome = new THREE.PointLight(0xffffff, .3)
pointLightHome.position.x = 2
pointLightHome.position.y = 3
pointLightHome.position.z = 4
sceneHome.add(pointLightHome)

/**
 * Sizes
 */
 const sizesHome = {
    width: window.innerWidth  * .9,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes 
    sizesHome.width = window.innerWidth  * .9    
    sizesHome.height = window.innerHeight

    // Update camera
    cameraHome.aspect = sizes.width / sizes.height
    cameraHome.updateProjectionMatrix()

    // Update renderer
    rendererHome.setSize(sizes.width, sizes.height)
    rendererHome.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


/**
 * Camera
 */
// Base camera
const cameraHome = new THREE.PerspectiveCamera(75, sizesHome.width / sizesHome.height, 0.1, 100)
cameraHome.position.x = 0
cameraHome.position.y = 0
cameraHome.position.z = 2
sceneHome.add(cameraHome)


/**
 * Renderer
 */
const rendererHome = new THREE.WebGLRenderer({
    canvas: canvasHomePage,
    // alpha:true
})
rendererHome.setSize(sizesHome.width, sizesHome.height)
rendererHome.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// rendererHome.setClearColor(new THREE.Color('#21282a'))

const animateHome = () =>
{
    const elapsedTime = clock.getElapsedTime()
    
    // Update objects
    sphere.rotation.y = .5 * elapsedTime
    sphere2.rotation.z = .3 * elapsedTime

    // Render
    rendererHome.render(sceneHome, cameraHome)

    window.requestAnimationFrame(animateHome)
}

animateHome()