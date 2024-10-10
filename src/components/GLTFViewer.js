import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect, useRef } from 'react';

const GLTFViewer = () => {
  const viewerRef = useRef(null); // Create a ref to attach the Three.js renderer

  useEffect(() => {
    let scene, camera, renderer, model;
    let mouseX = 0, mouseY = 0;

    // Initialize the scene
    function init() {
      // Create a new scene
      scene = new THREE.Scene();

      // Setup the camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
      // Setup renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0); // Transparent background
      
      // Append the renderer's canvas to the ref container instead of the body
      if (viewerRef.current) {
        viewerRef.current.appendChild(renderer.domElement);
      }

      // Add lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 2);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight.position.set(0, 10, 10);
      scene.add(directionalLight);

      // Load the GLTF model
      console.log(${process.env.PUBLIC_URL});
      const loader = new GLTFLoader();
      loader.load('${process.env.PUBLIC_URL}/Assets/space4/scene.gltf', (gltf) => {
        model = gltf.scene;
        scene.add(model);

        // Set model properties
        model.rotation.y = -0.5; // Initial rotation
        model.position.set(0, 0, 0);
        model.scale.set(1, 1, 1); // Adjust scale if necessary
        // Start zoom-in animation
        zoomInAnimation();
      }, undefined, (error) => {
        console.error('Error loading the GLTF model:', error);
      });

      // Set initial camera position
      camera.position.set(0.5, 5, 10);
      camera.lookAt(0, 0, 0);

      // Add event listeners for mouse movement
      document.addEventListener('mousemove', onDocumentMouseMove, false);
      window.addEventListener('resize', onWindowResize, false);

      animate();
    }

    // Window resize handler
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // Zoom in animation
    function zoomInAnimation() {
      const zoomDuration = 2000; // Duration in milliseconds
      const zoomStart = camera.position.z;
      const zoomEnd = 6;

      const startTime = performance.now();

      const zoomIn = () => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / zoomDuration, 1);
        camera.position.z = zoomStart - progress * (zoomStart - zoomEnd);

        if (progress < 1) {
          requestAnimationFrame(zoomIn);
        }
      };

      zoomIn();
    }

    // Mouse move event handler
    function onDocumentMouseMove(event) {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1;
    }

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      // Rotate model based on mouse movement
      if (model) {
        model.rotation.y = mouseX * 0.5 - 0.5;  // Rotate horizontally
        model.rotation.x = mouseY * 0.2; // Rotate vertically
      }

      renderer.render(scene, camera);
    }

    // Start the scene
    init();

    // Cleanup function when component unmounts
    return () => {
      if (renderer && viewerRef.current) {
        viewerRef.current.removeChild(renderer.domElement); // Remove renderer from DOM
      }
      window.removeEventListener('resize', onWindowResize); // Clean up event listeners
      document.removeEventListener('mousemove', onDocumentMouseMove); // Remove mouse event
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div ref={viewerRef} style={{ width: '100%', height: '80vh' }}>
      {/* The Three.js scene will be rendered inside this div */}
    </div>
  );
};

export default GLTFViewer;
