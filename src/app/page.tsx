'use client';

import React, {useState, useEffect} from 'react';

import {fabric} from 'fabric';
import { Canvas } from 'fabric/fabric-impl';

export default function Home() {

  const [canvas, setCanvas] = useState<Canvas>();

  const initCanvas = () =>(
new fabric.Canvas('canvas', {
  height:800,
  width:800,
  backgroundColor:'white'
})
  );

  useEffect(() =>{
    // setCanvas(initCanvas());
    setCanvas(initCanvas())
  }, []);



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
<p className='text-center text-white text-xl '>FabricJs Canvas</p>
<canvas id="canvas" />

    </main>
  )
}
