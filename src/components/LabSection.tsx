import { useRef, useLayoutEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Play, RotateCw, ZoomIn } from "lucide-react";

/* ===================== */
/* ROBOT ARM (GLB)       */
/* ===================== */
function RobotArm({ animate }: { animate: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/robot-arm.glb");

  // ✅ CENTER + GROUND ALIGN
  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    scene.position.set(
      -center.x,
      -center.y + size.y / 2, // lift above grid
      -center.z
    );

    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.side = THREE.DoubleSide;
      }
    });
  }, [scene]);

  // ✅ ANIMATION TOGGLE
  useFrame((state) => {
    if (!animate || !groupRef.current) return;
    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.6) * 0.4;
  });

  return (
    <group ref={groupRef} scale={1.3}>
      <primitive object={scene} />
    </group>
  );
}

/* ===================== */
/* FLOATING CUBE         */
/* ===================== */
function FloatingCube() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={[2, 0.7, -1]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#7C4DFF" wireframe />
      </mesh>
    </Float>
  );
}

/* ===================== */
/* SENSOR NODE           */
/* ===================== */
function SensorNode({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={3} floatIntensity={1}>
      <mesh position={position}>
        <octahedronGeometry args={[0.2]} />
        <meshStandardMaterial
          color="#00FF9C"
          emissive="#00FF9C"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

/* ===================== */
/* MAIN LAB SECTION      */
/* ===================== */
export default function LabSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [animate, setAnimate] = useState(false);

  return (
    <section id="lab" className="relative py-32 overflow-hidden">
      <div ref={ref} className="relative z-10 container mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 glass-panel rounded-full text-sm mb-4">
            Interactive Space
          </span>
          <h2 className="text-4xl font-bold">
            Portfolio <span className="gradient-text">Lab</span>
          </h2>
        </motion.div>

        {/* CANVAS */}
        <div className="aspect-[16/9] max-w-5xl mx-auto glass-panel rounded-2xl overflow-hidden border border-primary/20 relative">
          <Canvas
            camera={{ position: [5, 3, 5], fov: 50 }}
            shadows
          >
            <ambientLight intensity={0.4} />
            <directionalLight
              position={[5, 10, 5]}
              intensity={1.2}
              castShadow
            />
            <pointLight position={[10, 10, 10]} intensity={0.6} />

            <RobotArm animate={animate} />
            <FloatingCube />
            <SensorNode position={[-2, 1, 1]} />
            <SensorNode position={[2, 1.5, 0]} />

            <gridHelper args={[10, 20, "#00E5FF", "#1a1a2e"]} />

            <OrbitControls
              enableZoom
              enablePan={false}
              minDistance={3}
              maxDistance={10}
            />
          </Canvas>

          {/* CONTROLS */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
            <button
              onClick={() => setAnimate((p) => !p)}
              className="p-3 glass-panel rounded-lg text-accent"
              title="Animate"
            >
              <Play className="w-5 h-5" />
            </button>
            <button className="p-3 glass-panel rounded-lg">
              <RotateCw className="w-5 h-5" />
            </button>
            <button className="p-3 glass-panel rounded-lg">
              <ZoomIn className="w-5 h-5" />
            </button>
          </div>

          {/* STATUS */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs">Live Simulation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
