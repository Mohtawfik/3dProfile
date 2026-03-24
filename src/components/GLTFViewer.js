import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect, useRef } from 'react';

const GLTFViewer = ({ onIntroComplete, reduceMotion }) => {
  const viewerRef = useRef(null);
  const onIntroCompleteRef = useRef(onIntroComplete);

  useEffect(() => {
    onIntroCompleteRef.current = onIntroComplete;
  }, [onIntroComplete]);

  useEffect(() => {
    let scene, camera, renderer, model;
    let mouseX = 0, mouseY = 0;
    let introNotified = false;

    const notifyIntroComplete = () => {
      if (introNotified) return;
      introNotified = true;
      onIntroCompleteRef.current?.();
    };

    // Initialize the scene
    function init() {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);

      if (viewerRef.current) {
        viewerRef.current.appendChild(renderer.domElement);
      }

      const ambientLight = new THREE.AmbientLight(0x404040, 2);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight.position.set(0, 10, 10);
      scene.add(directionalLight);

      const modelUrl = `${process.env.PUBLIC_URL}/Assets/space4/scene.gltf`;
      const loader = new GLTFLoader();
      loader.load(
        modelUrl,
        (gltf) => {
          model = gltf.scene;
          scene.add(model);

          model.rotation.y = -0.5;
          model.position.set(0, 0, 0);
          model.scale.set(1, 1, 1);

          if (reduceMotion) {
            camera.position.set(0.5, 5, 6);
            camera.lookAt(0, 0, 0);
            notifyIntroComplete();
          } else {
            zoomInAnimation();
          }
        },
        undefined,
        () => {
          console.error('Error loading the GLTF model');
          notifyIntroComplete();
        }
      );

      camera.position.set(0.5, 5, 10);
      camera.lookAt(0, 0, 0);

      document.addEventListener('mousemove', onDocumentMouseMove, false);
      window.addEventListener('resize', onWindowResize, false);

      animate();
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function zoomInAnimation() {
      const zoomDuration = 2000;
      const zoomStart = camera.position.z;
      const zoomEnd = 6;

      const startTime = performance.now();

      const zoomIn = () => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / zoomDuration, 1);
        camera.position.z = zoomStart - progress * (zoomStart - zoomEnd);

        if (progress < 1) {
          requestAnimationFrame(zoomIn);
        } else {
          notifyIntroComplete();
        }
      };

      zoomIn();
    }

    function onDocumentMouseMove(event) {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1;
    }

    function animate() {
      requestAnimationFrame(animate);

      if (model) {
        model.rotation.y = mouseX * 0.5 - 0.5;
        model.rotation.x = mouseY * 0.2;
      }

      renderer.render(scene, camera);
    }

    init();

    return () => {
      if (renderer && viewerRef.current) {
        viewerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
    };
  }, [reduceMotion]);

  return (
    <div ref={viewerRef} style={{ width: '100%', height: '100%', minHeight: 0 }}>
      {/* The Three.js scene will be rendered inside this div */}
    </div>
  );
};

export default GLTFViewer;
