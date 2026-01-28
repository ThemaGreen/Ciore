import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function RoundedBoxMesh({
  size,
  radius,
  smoothness,
  material,
  position,
  rotation,
  castShadow,
  receiveShadow,
  testId,
}: {
  size: [number, number, number];
  radius: number;
  smoothness: number;
  material: THREE.Material;
  position?: [number, number, number];
  rotation?: [number, number, number];
  castShadow?: boolean;
  receiveShadow?: boolean;
  testId: string;
}) {
  const geo = useMemo(() => {
    const g = new THREE.BoxGeometry(1, 1, 1, smoothness, smoothness, smoothness);
    g.translate(0, 0, 0);
    return g;
  }, [smoothness]);

  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    return () => {
      geo.dispose();
    };
  }, [geo]);

  // Lightweight faux-rounded box: scale + smooth box + normal smoothing.
  // Using a real RoundedBox can require extra geometry extensions depending on setup.
  return (
    <mesh
      ref={meshRef}
      geometry={geo}
      scale={size}
      position={position}
      rotation={rotation}
      castShadow={castShadow}
      receiveShadow={receiveShadow}
      data-testid={testId}
    >
      <primitive object={material} attach="material" />
    </mesh>
  );
}

function PhoneModel({ interactive = true }: { interactive?: boolean }) {
  const group = useRef<THREE.Group>(null);

  const screenMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#0b0e14"),
        roughness: 0.22,
        metalness: 0.05,
        transmission: 0.06,
        thickness: 0.15,
        clearcoat: 0.8,
        clearcoatRoughness: 0.25,
      }),
    [],
  );

  const frameMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#0f141c"),
        roughness: 0.35,
        metalness: 0.7,
      }),
    [],
  );

  const accentMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#00ff88"),
        roughness: 0.25,
        metalness: 0.2,
        emissive: new THREE.Color("#00ff88"),
        emissiveIntensity: 0.35,
      }),
    [],
  );

  const glassMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#0c1017"),
        roughness: 0.12,
        metalness: 0.0,
        transmission: 0.65,
        thickness: 0.3,
        ior: 1.45,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
      }),
    [],
  );

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();

    group.current.position.y = 0.18 + Math.sin(t * 0.6) * 0.06;

    if (!interactive) {
      group.current.rotation.y = t * 0.25;
      group.current.rotation.x = -0.18;
      return;
    }

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -0.18 + pointer.y * 0.2,
      0.08,
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      t * 0.15 + pointer.x * 0.35,
      0.08,
    );
  });

  useEffect(() => {
    return () => {
      screenMat.dispose();
      frameMat.dispose();
      accentMat.dispose();
      glassMat.dispose();
    };
  }, [accentMat, frameMat, glassMat, screenMat]);

  return (
    <group ref={group} position={[0, 0.15, 0]} data-testid="three-phone-group">
      <RoundedBoxMesh
        size={[1.15, 2.35, 0.18]}
        radius={0.085}
        smoothness={8}
        material={frameMat}
        castShadow
        receiveShadow
        testId="three-phone-frame"
      />

      <RoundedBoxMesh
        size={[1.04, 2.22, 0.04]}
        radius={0.065}
        smoothness={8}
        material={glassMat}
        position={[0, 0, 0.095]}
        testId="three-phone-glass"
      />

      <mesh position={[0, 0.03, 0.075]} data-testid="three-phone-screen">
        <planeGeometry args={[0.94, 2.02]} />
        <primitive object={screenMat} attach="material" />
      </mesh>

      <mesh position={[0, -0.8, 0.098]} data-testid="three-phone-solar">
        <planeGeometry args={[0.82, 0.28]} />
        <meshStandardMaterial
          color="#0b1410"
          roughness={0.35}
          metalness={0.15}
          emissive="#00ff88"
          emissiveIntensity={0.18}
        />
      </mesh>

      <mesh position={[0.44, 0.55, 0.09]} data-testid="three-phone-led">
        <planeGeometry args={[0.07, 0.35]} />
        <primitive object={accentMat} attach="material" />
      </mesh>

      <RoundedBoxMesh
        size={[0.42, 0.09, 0.02]}
        radius={0.04}
        smoothness={6}
        material={new THREE.MeshStandardMaterial({
          color: new THREE.Color("#0a0b10"),
          roughness: 0.4,
          metalness: 0.1,
        })}
        position={[0, 1.02, 0.096]}
        testId="three-phone-notch"
      />

      <RoundedBoxMesh
        size={[0.06, 0.24, 0.03]}
        radius={0.02}
        smoothness={6}
        material={new THREE.MeshStandardMaterial({
          color: new THREE.Color("#161b24"),
          roughness: 0.3,
          metalness: 0.65,
        })}
        position={[-0.44, 0.25, 0]}
        rotation={[0, Math.PI / 2, 0]}
        testId="three-phone-button-0"
      />

      <RoundedBoxMesh
        size={[0.06, 0.18, 0.03]}
        radius={0.02}
        smoothness={6}
        material={new THREE.MeshStandardMaterial({
          color: new THREE.Color("#161b24"),
          roughness: 0.3,
          metalness: 0.65,
        })}
        position={[-0.44, 0.55, 0]}
        rotation={[0, Math.PI / 2, 0]}
        testId="three-phone-button-1"
      />

      <mesh
        position={[0.42, -0.05, -0.06]}
        rotation={[0, -Math.PI / 2, 0]}
        data-testid="three-phone-module-seam"
      >
        <planeGeometry args={[1.9, 0.02]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={0.2}
        />
      </mesh>

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.23, 0]}
        receiveShadow
        data-testid="three-phone-shadow"
      >
        <circleGeometry args={[1.05, 48]} />
        <meshStandardMaterial color="#000000" transparent opacity={0.45} />
      </mesh>
    </group>
  );
}

function ThreeFallback() {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-black/25"
      data-testid="fallback-3d"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,136,0.18),transparent_55%),radial-gradient(circle_at_70%_25%,rgba(212,175,55,0.12),transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 p-4" data-testid="fallback-3d-overlay">
        <div
          className="ciore-display text-xs tracking-[0.18em] text-white/60"
          data-testid="text-fallback-title"
        >
          LIGHTWEIGHT PREVIEW
        </div>
        <div className="mt-1 text-sm text-white/80" data-testid="text-fallback-body">
          3D model disabled for data-saver or low-power devices.
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 h-[78%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/15 bg-black/35 shadow-[0_40px_120px_-70px_rgba(0,255,136,0.55)]" />
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[47%] -translate-x-1/2 -translate-y-1/2 rounded-[22px] border border-white/12 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.10),rgba(255,255,255,0.03))]" />
      <div className="absolute left-1/2 top-[67%] h-[7%] w-[41%] -translate-x-1/2 rounded-[14px] border border-[rgba(0,255,136,0.25)] bg-[rgba(0,255,136,0.08)]" />
      <div className="absolute left-[65%] top-[35%] h-[18%] w-[4%] rounded-full bg-[rgba(0,255,136,0.35)] blur-[1px]" />
    </div>
  );
}

export function PhoneScene({ lowPower }: { lowPower: boolean }) {
  const [canWebGL, setCanWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setCanWebGL(!!gl);
    } catch {
      setCanWebGL(false);
    }
  }, []);

  if (lowPower || !canWebGL) return <ThreeFallback />;

  return (
    <Suspense fallback={<ThreeFallback />}>
      <Canvas
        shadows
        camera={{ position: [0, 0.35, 3.05], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.6]}
        data-testid="three-canvas"
      >
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.55} />
        <directionalLight
          position={[3, 4, 2]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-3, 2, -2]} intensity={0.5} />

        <Environment preset="city" />
        <PhoneModel interactive />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          rotateSpeed={0.7}
          minPolarAngle={Math.PI / 2.7}
          maxPolarAngle={Math.PI / 2.0}
        />

        <Html position={[0, -1.4, 0]} center transform occlude data-testid="three-caption">
          <div className="pointer-events-none select-none rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/65 backdrop-blur">
            Drag to rotate
          </div>
        </Html>
      </Canvas>
    </Suspense>
  );
}
