import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SphereCore = ({ scrollProgress }: { scrollProgress: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const wireRef1 = useRef<THREE.Mesh>(null);
  const wireRef2 = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Generate random node positions on sphere surface
  const { nodePositions, linePositions } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    const count = 60;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 2;
      nodes.push(new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      ));
    }

    const nodeArr = new Float32Array(count * 3);
    nodes.forEach((n, i) => {
      nodeArr[i * 3] = n.x;
      nodeArr[i * 3 + 1] = n.y;
      nodeArr[i * 3 + 2] = n.z;
    });

    // Connect nearby nodes
    const lines: number[] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 1.5) {
          lines.push(nodes[i].x, nodes[i].y, nodes[i].z);
          lines.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }

    return { nodePositions: nodeArr, linePositions: new Float32Array(lines) };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.08 + scrollProgress * 2;
      groupRef.current.position.x = scrollProgress * 2;
    }
    if (wireRef1.current) {
      wireRef1.current.rotation.y = t * 0.1;
    }
    if (wireRef2.current) {
      wireRef2.current.rotation.y = -t * 0.07;
      wireRef2.current.rotation.x = t * 0.04;
    }
    // Pulse nodes
    if (pointsRef.current) {
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      mat.size = 0.04 + Math.sin(t * 1.5) * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main wireframe sphere */}
      <mesh ref={wireRef1}>
        <sphereGeometry args={[2, 24, 24]} />
        <meshBasicMaterial color="#1D9E75" wireframe transparent opacity={0.1} />
      </mesh>

      {/* Second wireframe layer */}
      <mesh ref={wireRef2}>
        <sphereGeometry args={[2.05, 18, 18]} />
        <meshBasicMaterial color="#1D9E75" wireframe transparent opacity={0.06} />
      </mesh>

      {/* Nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#1D9E75" size={0.05} transparent opacity={0.7} sizeAttenuation />
      </points>

      {/* Connection lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#1D9E75" transparent opacity={0.12} />
      </lineSegments>
    </group>
  );
};

const HeroSphere = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 hidden md:block">
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 50 }}
          style={{ position: 'absolute', inset: 0 }}
          gl={{ antialias: true, alpha: true }}
        >
          <SphereCore scrollProgress={scrollProgress} />
        </Canvas>
      )}
    </div>
  );
};

export default HeroSphere;
