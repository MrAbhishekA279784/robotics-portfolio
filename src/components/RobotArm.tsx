import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function RobotArm() {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/robot-arm.glb");

  // 🔥 simple animation (fun but impressive)
  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime) * 0.5;
  });

  return (
    <group ref={group} scale={1.2} position={[0, -0.5, 0]}>
      <primitive object={scene} />
    </group>
  );
}
