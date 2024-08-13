'use client'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


import { useEffect, useRef, useState } from "react";

function MyThree() {
    const refContainer = useRef(null);
    const [stop, isStop] = useState(true)
    useEffect(() => {

        // Sizes
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        const cursor = {
            x: 0,
            y: 0
        }

        window.addEventListener('dblclick', () => {
            console.log("double clicked")
            canvas.requestFullScreen()
        })

        addEventListener('mousemove', (e) => {
            cursor.x = (e.clientX / sizes.width)
            cursor.y = (e.clientY / sizes.height)
        })
        // Scene
        const scene = new THREE.Scene()

        // Object2
        const geometry2 = new THREE.SphereGeometry(3, 32, 16, 4, 12)
        const material2 = new THREE.MeshBasicMaterial({ color: "#a8328f" })
        const mesh2 = new THREE.Mesh(geometry2, material2)
        scene.add(mesh2)
        // Object
        const geometry = new THREE.SphereGeometry(1, 32, 64)
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: .8, transparent: true })
        const mesh1 = new THREE.Mesh(geometry, material)
        scene.add(mesh1)


        // Camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
        camera.position.z = 6
        camera.position.y = 16
        scene.add(camera)

        camera.lookAt(mesh2)

        // Renderer
        const renderer = new THREE.WebGLRenderer()
        refContainer.current && refContainer.current.appendChild(renderer.domElement);
        //Controls
        const controls = new OrbitControls(camera, refContainer.current)
        controls.enableDamping = true
        scene.add(controls)

        const clock = new THREE.Clock()

        const resize = () => {
            renderer.setSize(innerWidth / innerHeight)
        }
        const animate = () => {
            const elapsedTime = clock.getElapsedTime()

            mesh2.rotation.y = Math.PI * .4 * elapsedTime
            mesh1.position.x = Math.cos(elapsedTime) - cursor.x
            mesh1.position.y = Math.sin(elapsedTime) + cursor.y

            // resize()
            renderer.render(scene, camera)
            window.requestAnimationFrame(animate)
            renderer.setSize(sizes.width, sizes.height)
        }

        animate()
    }, []);
    return (
        <div ref={refContainer} className='webgl z-0'></div>

    );
}

export default MyThree