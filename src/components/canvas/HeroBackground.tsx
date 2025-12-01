import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const Stars = (props: any) => {
    const ref = useRef<any>(null);

    // Generate random points in a sphere manually
    const sphere = useMemo(() => {
        const numPoints = 5000;
        const positions = new Float32Array(numPoints * 3); // x, y, z for each point
        const radius = 1.5;

        for (let i = 0; i < numPoints; i++) {
            // Generate random point in sphere using spherical coordinates
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = radius * Math.cbrt(Math.random());

            const index = i * 3;
            positions[index] = r * Math.sin(phi) * Math.cos(theta);
            positions[index + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[index + 2] = r * Math.cos(phi);
        }

        return positions;
    }, []);

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00f2ea"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

export const HeroBackground = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
};
