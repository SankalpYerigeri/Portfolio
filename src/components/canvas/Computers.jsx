// /* eslint-disable react/no-unknown-property */
// import React, {Suspense, useEffect, useState} from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
// import CanvasLoader from "../Loader";






// const ComputersCanvas = () =>
// {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Add a listener for changes to the screen size
//     const mediaQuery = window.matchMedia("(max-width: 500px)");

//     // Set the initial value of the `isMobile` state variable
//     setIsMobile(mediaQuery.matches);

//     // Define a callback function to handle changes to the media query
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     // Add the callback function as a listener for changes to the media query
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     // Remove the listener when the component is unmounted
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop='demand'
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// const Computers = () => {

//   const computer = useGLTF('./desktop_pc/scene.gltf');

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor='black' />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={0.75}
//         position={[0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
      
//     </mesh>
//   )
// }

// export default ComputersCanvas;


const ComputersCanvas = () =>
{
  return(
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x300" alt="Card Image" />
    <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
        <p className="mt-2 text-gray-600">This is a simple card component built with Tailwind CSS. You can add more details about your content here.</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Read More
        </button>
    </div>
</div>

  )
}

export default ComputersCanvas;




