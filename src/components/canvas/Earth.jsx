import { useEffect, useRef } from "react";
import * as THREE from "three";

const wrapperStyle = {
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const canvasStyle = {
  width: "100%",
  height: "100%",
  cursor: "grab",
};

const loaderStyle = {
  position: "absolute",
  color: "#A855F7",
  fontFamily: "Inter, sans-serif",
  fontSize: "12px",
  letterSpacing: "4px",
  textTransform: "uppercase",
  pointerEvents: "none",
};

const EarthCanvas = () => {
  const containerRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const loaderText = loaderRef.current;

    if (!container || !loaderText) {
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x112244, 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 0.4);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.setCrossOrigin("anonymous");
    const nightTextureURL =
      "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_lights_2048.png";

    let earthMesh = null;
    let atmosphere = null;
    let animationFrameId = null;
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0;
    let disposed = false;

    const animate = () => {
      if (disposed) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(animate);

      if (!isDragging) {
        targetRotationY += 0.002;
      }

      if (earthMesh) {
        earthMesh.rotation.y += (targetRotationY - earthMesh.rotation.y) * 0.1;
        earthMesh.rotation.x += (targetRotationX - earthMesh.rotation.x) * 0.1;
      }

      if (atmosphere) {
        atmosphere.rotation.y = earthMesh ? earthMesh.rotation.y : 0;
        atmosphere.rotation.x = earthMesh ? earthMesh.rotation.x : 0;
      }

      renderer.render(scene, camera);
    };

    const onMouseDown = (event) => {
      isDragging = true;
      previousMouseX = event.clientX;
      previousMouseY = event.clientY;
      container.style.cursor = "grabbing";
    };

    const onMouseUp = () => {
      isDragging = false;
      container.style.cursor = "grab";
    };

    const onMouseMove = (event) => {
      if (!isDragging) {
        return;
      }

      const deltaX = event.clientX - previousMouseX;
      const deltaY = event.clientY - previousMouseY;
      targetRotationY += deltaX * 0.005;
      targetRotationX += deltaY * 0.005;
      targetRotationX = THREE.MathUtils.clamp(
        targetRotationX,
        -Math.PI / 2.4,
        Math.PI / 2.4
      );
      previousMouseX = event.clientX;
      previousMouseY = event.clientY;
    };

    const onResize = () => {
      if (!container.clientWidth || !container.clientHeight) {
        return;
      }

      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    textureLoader.load(nightTextureURL, (texture) => {
      if (disposed) {
        texture.dispose();
        return;
      }

      const geometry = new THREE.SphereGeometry(4, 64, 64);
      const material = new THREE.MeshStandardMaterial({
        map: texture,
        emissive: texture,
        emissiveIntensity: 1.5,
        metalness: 0.1,
        roughness: 0.9,
      });

      earthMesh = new THREE.Mesh(geometry, material);
      scene.add(earthMesh);

      const glowGeo = new THREE.SphereGeometry(4.3, 64, 64);
      const glowMat = new THREE.ShaderMaterial({
        side: THREE.BackSide,
        transparent: true,
        uniforms: {
          c: { value: 0.2 },
          p: { value: 3.0 },
          glowColor: { value: new THREE.Color(0x2463eb) },
          viewVector: { value: camera.position },
        },
        vertexShader: `
          uniform vec3 viewVector;
          varying float intensity;
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            vec3 actual_normal = vec3(modelMatrix * vec4(normal, 0.0));
            intensity = pow(dot(normalize(viewVector), actual_normal), 6.0);
          }
        `,
        fragmentShader: `
          uniform vec3 glowColor;
          varying float intensity;
          void main() {
            gl_FragColor = vec4(glowColor, intensity);
          }
        `,
      });

      atmosphere = new THREE.Mesh(glowGeo, glowMat);
      scene.add(atmosphere);

      loaderText.style.display = "none";
      animate();
    });

    return () => {
      disposed = true;

      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }

      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);

      scene.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose();
        }

        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div id="earth-pro-wrapper" style={wrapperStyle}>
      <div id="earth-canvas" ref={containerRef} style={canvasStyle} />
      <div id="loader-text" ref={loaderRef} style={loaderStyle}>
        Activating Night Feed...
      </div>
    </div>
  );
};

export default EarthCanvas;
