'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface AirplaneCanvas3DProps {
  progress: number; // 0 to 100
}

interface ContrailParticle {
  position: THREE.Vector3;
  mesh: THREE.Mesh;
  age: number;
  maxAge: number;
  initialScale: number;
}

export function AirplaneCanvas3D({ progress }: AirplaneCanvas3DProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(progress);
  progressRef.current = progress;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    // Subtle atmospheric celestial fog
    scene.fog = new THREE.FogExp2(0x040810, 0.005);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.5, 600);
    camera.position.set(0, 5, 55);
    camera.lookAt(0, 3, 0);

    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 2. High-Altitude Celestial Lights
    const ambientLight = new THREE.AmbientLight(0x0f1d2d, 1.8);
    scene.add(ambientLight);

    // Key Golden Hour Sun Light
    const sunLight = new THREE.DirectionalLight(0xfff3db, 3.8);
    sunLight.position.set(60, 45, 40);
    scene.add(sunLight);

    // Cyan / Emerald Atmospheric Rim Fill Light
    const rimLight = new THREE.DirectionalLight(0x2dd4bf, 2.0);
    rimLight.position.set(-50, -20, -30);
    scene.add(rimLight);

    // Warm Golden Horizon Bounce Light
    const groundBounce = new THREE.DirectionalLight(0xb89047, 1.4);
    groundBounce.position.set(0, -40, 20);
    scene.add(groundBounce);

    // 3. Stardust Floating Starfield (3D Points)
    const starCount = 180;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 220;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 140;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 160 - 30;

      const isGold = Math.random() > 0.4;
      starColors[i * 3] = isGold ? 0.95 : 0.22;
      starColors[i * 3 + 1] = isGold ? 0.82 : 0.74;
      starColors[i * 3 + 2] = isGold ? 0.45 : 0.97;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 1.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const starPoints = new THREE.Points(starGeometry, starMaterial);
    scene.add(starPoints);

    // 4. Construct Luxury 3D Commercial / Private Airliner
    const planeGroup = new THREE.Group();

    // High-End Materials
    // Pearlescent Pearl-White Fuselage (with specular metallic shine)
    const fuselageMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.65,
      roughness: 0.2,
      envMapIntensity: 1.2,
    });

    // Glady's Heaven Royal Gold Accent
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.9,
      roughness: 0.15,
      emissive: 0xaa7c11,
      emissiveIntensity: 0.25,
    });

    // Dark Titanium / Carbon Leading Edge
    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.8,
      roughness: 0.35,
    });

    // Deep Obsidian Sky-Reflective Cockpit Glass
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x0369a1,
      metalness: 0.95,
      roughness: 0.05,
      transparent: true,
      opacity: 0.9,
    });

    // Glowing Jet Turbine Exhaust Core
    const glowCyanMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
    });
    const glowAmberMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
    });

    // --- Fuselage Main Body ---
    // Orient plane: +Z is forward, +Y is up, +X is right, -X is left
    const fuselageCenter = new THREE.Mesh(
      new THREE.CylinderGeometry(1.2, 1.2, 12, 32),
      fuselageMat
    );
    fuselageCenter.rotation.x = Math.PI / 2;
    fuselageCenter.position.z = 0;
    planeGroup.add(fuselageCenter);

    // Fuselage Gold Luxury Livery Strip
    const goldStripe = new THREE.Mesh(
      new THREE.CylinderGeometry(1.21, 1.21, 10, 32, 1, true, 0, Math.PI),
      goldMat
    );
    goldStripe.rotation.x = Math.PI / 2;
    goldStripe.rotation.y = Math.PI / 2; // Side ribbon
    goldStripe.position.z = 0;
    planeGroup.add(goldStripe);

    // Aerodynamic Nose Cone
    const noseCone = new THREE.Mesh(
      new THREE.ConeGeometry(1.2, 4.2, 32),
      fuselageMat
    );
    noseCone.rotation.x = -Math.PI / 2;
    noseCone.position.z = 8.1;
    planeGroup.add(noseCone);

    // Spherical Nose Tip (Weather Radar Dome)
    const noseTip = new THREE.Mesh(
      new THREE.SphereGeometry(0.35, 20, 16),
      darkMetalMat
    );
    noseTip.position.z = 10.2;
    planeGroup.add(noseTip);

    // Cockpit Curved Windshield
    const cockpitGlass = new THREE.Mesh(
      new THREE.SphereGeometry(1.22, 24, 16, 0, Math.PI, 0, Math.PI * 0.38),
      glassMat
    );
    cockpitGlass.rotation.x = -Math.PI / 3;
    cockpitGlass.position.set(0, 0.42, 6.8);
    cockpitGlass.scale.set(0.95, 0.7, 1.1);
    planeGroup.add(cockpitGlass);

    // Tapered Rear Fuselage
    const tailCone = new THREE.Mesh(
      new THREE.ConeGeometry(1.2, 6.0, 32),
      fuselageMat
    );
    tailCone.rotation.x = Math.PI / 2;
    tailCone.position.z = -9.0;
    planeGroup.add(tailCone);

    // Auxiliary Power Unit (APU) Exhaust at tail tip
    const apuExhaust = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.25, 0.6, 16),
      darkMetalMat
    );
    apuExhaust.rotation.x = Math.PI / 2;
    apuExhaust.position.z = -12.1;
    planeGroup.add(apuExhaust);

    // --- Main Swept-Back Wings with Winglets ---
    // Helper function to create an aerodynamic swept wing half
    const createWingHalf = (isRight: boolean) => {
      const wingGroup = new THREE.Group();
      const sign = isRight ? 1 : -1;

      // Custom wing polygon with sweep angle and thickness
      const wingShape = new THREE.Shape();
      wingShape.moveTo(0, 1.8); // Leading edge root
      wingShape.lineTo(sign * 13.5, -4.5); // Leading edge tip (swept back)
      wingShape.lineTo(sign * 13.5, -6.0); // Trailing edge tip
      wingShape.lineTo(0, -2.5); // Trailing edge root
      wingShape.closePath();

      const extrudeSettings = {
        depth: 0.25,
        bevelEnabled: true,
        bevelSegments: 3,
        steps: 1,
        bevelSize: 0.08,
        bevelThickness: 0.08,
      };

      const wingMesh = new THREE.Mesh(
        new THREE.ExtrudeGeometry(wingShape, extrudeSettings),
        fuselageMat
      );
      // Align horizontally and give realistic dihedral angle (+3 degrees upward)
      wingMesh.rotation.x = Math.PI / 2;
      wingMesh.rotation.z = -sign * 0.05; // Slight dihedral
      wingMesh.position.y = -0.2;
      wingGroup.add(wingMesh);

      // Gold Leading Edge Slat Accent
      const slatShape = new THREE.Shape();
      slatShape.moveTo(0, 1.8);
      slatShape.lineTo(sign * 13.5, -4.5);
      slatShape.lineTo(sign * 13.4, -4.8);
      slatShape.lineTo(0, 1.4);
      slatShape.closePath();

      const slatMesh = new THREE.Mesh(
        new THREE.ExtrudeGeometry(slatShape, { depth: 0.27, bevelEnabled: false }),
        goldMat
      );
      slatMesh.rotation.x = Math.PI / 2;
      slatMesh.rotation.z = -sign * 0.05;
      slatMesh.position.y = -0.19;
      wingGroup.add(slatMesh);

      // Vertical Luxury Winglet at Tip (Angled upward 80 degrees)
      const wingletShape = new THREE.Shape();
      wingletShape.moveTo(0, 0);
      wingletShape.lineTo(0, 1.8);
      wingletShape.lineTo(-0.8, 1.4);
      wingletShape.lineTo(-1.5, 0);
      wingletShape.closePath();

      const wingletMesh = new THREE.Mesh(
        new THREE.ExtrudeGeometry(wingletShape, { depth: 0.12, bevelEnabled: true, bevelThickness: 0.04 }),
        goldMat
      );
      wingletMesh.position.set(sign * 13.5, -0.2, -4.8);
      wingletMesh.rotation.y = sign * 0.2;
      wingletMesh.rotation.z = sign * -0.25; // Canted slightly outward
      wingGroup.add(wingletMesh);

      // Wingtip Navigation LED Beacon
      const navLightColor = isRight ? 0x22c55e : 0xef4444; // Green on Right, Red on Left
      const navLightMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 12, 12),
        new THREE.MeshBasicMaterial({ color: navLightColor })
      );
      navLightMesh.position.set(sign * 13.6, 1.7, -5.0);
      wingGroup.add(navLightMesh);

      const navPointLight = new THREE.PointLight(navLightColor, 1.8, 8);
      navPointLight.position.set(sign * 13.6, 1.7, -5.0);
      wingGroup.add(navPointLight);

      return { wingGroup, navPointLight };
    };

    const rightWing = createWingHalf(true);
    const leftWing = createWingHalf(false);
    planeGroup.add(rightWing.wingGroup);
    planeGroup.add(leftWing.wingGroup);

    // --- Twin Under-Wing Turbofan Jet Engines ---
    const engineExhaustPoints: THREE.Vector3[] = [];

    const createEngine = (xPos: number) => {
      const engineGroup = new THREE.Group();

      // Pylon connecting wing to engine
      const pylon = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.7, 2.2),
        darkMetalMat
      );
      pylon.position.set(0, 0.45, 0);
      engineGroup.add(pylon);

      // Outer Engine Cowling (Metallic Cylinder)
      const nacelle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.72, 0.68, 3.4, 24),
        fuselageMat
      );
      nacelle.rotation.x = Math.PI / 2;
      engineGroup.add(nacelle);

      // Chrome Air Intake Ring
      const intakeRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.7, 0.08, 16, 24),
        goldMat
      );
      intakeRing.position.z = 1.7;
      engineGroup.add(intakeRing);

      // Titanium Center Spinner Cone
      const spinner = new THREE.Mesh(
        new THREE.ConeGeometry(0.22, 0.6, 16),
        darkMetalMat
      );
      spinner.rotation.x = -Math.PI / 2;
      spinner.position.z = 1.45;
      engineGroup.add(spinner);

      // Turbine Exhaust Nozzle
      const exhaustCone = new THREE.Mesh(
        new THREE.CylinderGeometry(0.55, 0.62, 0.5, 24),
        darkMetalMat
      );
      exhaustCone.rotation.x = Math.PI / 2;
      exhaustCone.position.z = -1.8;
      engineGroup.add(exhaustCone);

      // Glowing Internal Core
      const coreGlow = new THREE.Mesh(
        new THREE.CircleGeometry(0.48, 16),
        glowCyanMat
      );
      coreGlow.position.z = -1.95;
      coreGlow.rotation.y = Math.PI;
      engineGroup.add(coreGlow);

      // Hot Exhaust Point Light
      const engineLight = new THREE.PointLight(0x38bdf8, 2.2, 10);
      engineLight.position.set(0, 0, -2.4);
      engineGroup.add(engineLight);

      engineGroup.position.set(xPos, -0.9, -0.5);
      planeGroup.add(engineGroup);

      // Store local exhaust position
      engineExhaustPoints.push(new THREE.Vector3(xPos, -0.9, -2.6));
    };

    createEngine(-3.8); // Left Engine
    createEngine(3.8);  // Right Engine

    // --- Vertical Tail Fin (Swept Vertical Stabilizer) ---
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0); // Root front
    finShape.lineTo(0, 4.8); // Tip front (swept back)
    finShape.lineTo(-1.2, 4.4); // Tip rear
    finShape.lineTo(-3.6, 0); // Root rear
    finShape.closePath();

    const finMesh = new THREE.Mesh(
      new THREE.ExtrudeGeometry(finShape, { depth: 0.22, bevelEnabled: true, bevelThickness: 0.05 }),
      fuselageMat
    );
    finMesh.rotation.y = -Math.PI / 2;
    finMesh.position.set(0.11, 1.0, -8.2);
    planeGroup.add(finMesh);

    // Fin Leading Edge Gold Accent
    const finStripe = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 4.9, 0.3),
      goldMat
    );
    finStripe.rotation.x = 0.52;
    finStripe.position.set(0, 3.2, -9.4);
    planeGroup.add(finStripe);

    // White High-Intensity Tail Strobe Light
    const tailStrobeMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.16, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    tailStrobeMesh.position.set(0, 5.8, -10.2);
    planeGroup.add(tailStrobeMesh);

    const tailStrobeLight = new THREE.PointLight(0xffffff, 2.5, 12);
    tailStrobeLight.position.set(0, 5.8, -10.2);
    planeGroup.add(tailStrobeLight);

    // --- Horizontal Tail Stabilizers (Elevators) ---
    const createElevator = (isRight: boolean) => {
      const sign = isRight ? 1 : -1;
      const elevShape = new THREE.Shape();
      elevShape.moveTo(0, 0.8);
      elevShape.lineTo(sign * 4.6, -1.8);
      elevShape.lineTo(sign * 4.6, -2.4);
      elevShape.lineTo(0, -1.2);
      elevShape.closePath();

      const elevMesh = new THREE.Mesh(
        new THREE.ExtrudeGeometry(elevShape, { depth: 0.14, bevelEnabled: true, bevelThickness: 0.03 }),
        fuselageMat
      );
      elevMesh.rotation.x = Math.PI / 2;
      elevMesh.position.set(0, 0.6, -10.4);
      return elevMesh;
    };
    planeGroup.add(createElevator(true));
    planeGroup.add(createElevator(false));

    scene.add(planeGroup);

    // 5. 3D Volumetric Contrail Particle System
    // Dual jet contrails trailing continuously behind the engines in 3D world space
    const contrailParticles: ContrailParticle[] = [];
    const contrailGeo = new THREE.SphereGeometry(0.4, 8, 8);
    const contrailMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    let frameCount = 0;

    // 6. Smooth 3D Flight Spline Trajectory
    // Realistic curved oceanic & alpine trajectory from distant horizon, swooping into full 3D foreground, banking, and climbing
    const flightCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-105, -32, -135), // Distant horizon start
      new THREE.Vector3(-55, -12, -75),   // Approach & rising
      new THREE.Vector3(-15, 2, -25),     // Entering midground with roll
      new THREE.Vector3(12, 10, 8),       // Close foreground pass (magnificent 3D detail)
      new THREE.Vector3(38, 18, 30),      // Climbing turn
      new THREE.Vector3(72, 28, 65),      // Ascending into stratosphere
      new THREE.Vector3(120, 42, 110),    // Horizon exit
    ]);

    // 7. Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // 8. 60 FPS Render Loop with True 3D Aerodynamic Physics
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      frameCount++;
      const elapsedTime = clock.getElapsedTime();

      // Normalized flight time t in range [0.001, 0.999]
      const currentProgress = progressRef.current;
      const t = Math.max(0.002, Math.min(0.998, currentProgress / 100));

      // Compute current position along 3D Catmull-Rom curve
      const currentPos = flightCurve.getPointAt(t);
      const lookAheadT = Math.min(0.999, t + 0.015);
      const lookAheadPos = flightCurve.getPointAt(lookAheadT);

      // Forward direction vector
      const forwardDir = lookAheadPos.clone().sub(currentPos).normalize();

      planeGroup.position.copy(currentPos);

      // Orient plane along flight tangent
      // The default plane has forward = +Z.
      const defaultForward = new THREE.Vector3(0, 0, 1);
      const orientationQuat = new THREE.Quaternion().setFromUnitVectors(defaultForward, forwardDir);
      planeGroup.quaternion.copy(orientationQuat);

      // Realistic Aerodynamic Banking (Roll into curves)
      // When banking, the aircraft rolls along its local Z-axis.
      // Curve turns rightwards and ascends, so it banks naturally:
      const bankAmount = Math.sin(t * Math.PI) * -0.55; // Up to ~32 degrees bank angle
      const pitchFineTune = Math.cos(t * Math.PI * 0.8) * 0.12; // Natural aerodynamic pitch
      const rollQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), bankAmount);
      const pitchQuat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), pitchFineTune);
      planeGroup.quaternion.multiply(rollQuat);
      planeGroup.quaternion.multiply(pitchQuat);

      // Strobes blinking frequency
      const strobeOn = Math.sin(elapsedTime * 6) > 0.3;
      const tailStrobeOn = Math.sin(elapsedTime * 8) > 0.6;
      rightWing.navPointLight.intensity = strobeOn ? 2.4 : 0.6;
      leftWing.navPointLight.intensity = strobeOn ? 2.4 : 0.6;
      tailStrobeLight.intensity = tailStrobeOn ? 4.0 : 0.2;

      // Spawn 3D Contrail vapor particles behind twin engines
      if (frameCount % 2 === 0 && currentProgress < 96) {
        engineExhaustPoints.forEach((localPoint) => {
          const worldPos = localPoint.clone().applyMatrix4(planeGroup.matrixWorld);

          const particleMesh = new THREE.Mesh(contrailGeo, contrailMat.clone());
          particleMesh.position.copy(worldPos);

          // Add slight turbulence dispersion
          particleMesh.position.x += (Math.random() - 0.5) * 0.2;
          particleMesh.position.y += (Math.random() - 0.5) * 0.2;
          particleMesh.position.z += (Math.random() - 0.5) * 0.2;

          scene.add(particleMesh);

          contrailParticles.push({
            position: particleMesh.position,
            mesh: particleMesh,
            age: 0,
            maxAge: 70 + Math.random() * 30, // 1.2 to 1.6 seconds persistence
            initialScale: 0.6,
          });
        });
      }

      // Update and fade active contrail particles
      for (let i = contrailParticles.length - 1; i >= 0; i--) {
        const p = contrailParticles[i];
        p.age++;

        const lifeRatio = p.age / p.maxAge;
        if (lifeRatio >= 1) {
          scene.remove(p.mesh);
          p.mesh.geometry.dispose();
          if (Array.isArray(p.mesh.material)) {
            p.mesh.material.forEach((m) => m.dispose());
          } else {
            p.mesh.material.dispose();
          }
          contrailParticles.splice(i, 1);
        } else {
          // Particles expand as they disperse in high altitude
          const expansion = 1 + lifeRatio * 4.2;
          p.mesh.scale.set(expansion, expansion, expansion);
          // Dissipate opacity
          const mat = p.mesh.material as THREE.MeshBasicMaterial;
          mat.opacity = (1 - lifeRatio) * 0.4;
        }
      }

      // Slow celestial starfield rotation
      starPoints.rotation.y = elapsedTime * 0.015;
      starPoints.rotation.x = Math.sin(elapsedTime * 0.01) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup Resources on Unmount
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);

      // Clean up contrails
      contrailParticles.forEach((p) => {
        scene.remove(p.mesh);
        p.mesh.geometry.dispose();
      });

      // Dispose scene objects
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });

      renderer.dispose();
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-15 overflow-hidden"
      style={{ perspective: '1600px' }}
    />
  );
}
