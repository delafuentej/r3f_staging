import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export const Background = () => {
  const map = useTexture(
    "/environment/Flux_Dev_Depict_a_breathtaking_futuristic_cityscape_at_dusk_wh_0.jpg"
  );
  return (
    <>
      <mesh>
        <sphereGeometry args={[5, 64, 64]} />
        <meshBasicMaterial side={THREE.BackSide} map={map} toneMapped={false} />
      </mesh>
    </>
  );
};
