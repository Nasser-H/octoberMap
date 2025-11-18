import React, { useEffect, useRef, useState } from 'react'
export default function OverlayMarker2({ mark, ZoneOnLoad }) {
    const ZoneRef = useRef(null);
    const IconRef = useRef(null);
    const [zoneReady, setZoneReady] = useState(false);
    const [zoneHoverReady, setZoneHoverReady] = useState(false);
    const [iconReady, setIconReady] = useState(false);
    const [flagReady, setFlagReady] = useState(false)
    const [dimensions, setDimensions] = useState({width:0, height:0, x:0, y:0});
  useEffect(() => {
    if(!zoneReady || !iconReady) return;
    if (ZoneRef.current && IconRef.current) {

      const zoneImg = ZoneRef.current;
      const IconImg = IconRef.current;

      if (!zoneImg || !IconImg) return;

      const zoneWidth = zoneImg.naturalWidth;
      const zoneHeight = zoneImg.naturalHeight;
 
      const iconWidth = IconImg.naturalWidth;
      const iconHeight = IconImg.naturalHeight;
 
      const xPercent = (mark.coordinate_x * 100) / zoneWidth;
      const yPercent = (mark.coordinate_y * 100) / zoneHeight;


      const widthPercent = (iconWidth * 100) / zoneWidth;
      const heightPercent = (iconHeight * 100) / zoneHeight;
      
      setDimensions({width: widthPercent, height: heightPercent, x: xPercent, y: yPercent});
      console.log();
    }else{
      return;
    }
  },[zoneReady, iconReady, zoneHoverReady, flagReady]);
  return <>
    <img className="w-full h-full block group-hover:hidden"
      ref={ZoneRef}
      src={mark.zone.zone_img}
      alt={mark.name}
      onLoad={(e) => {
        setZoneReady(true);
        const img = e.target;
        ZoneOnLoad(img.naturalWidth, img.naturalHeight);
      }} />
    <img className="w-full h-full hidden group-hover:block"
      src={mark.zone.zone_img_hover}
      onLoad={() => setZoneHoverReady(true)}
      alt={mark.name} />
    <div className={`absolute group-hover:opacity-0 opacity-100 duration-300`}
      style={{ width: `${dimensions.width}%`, height: `${dimensions.height}%`, top: `${dimensions.y}%`, left: `${dimensions.x}%` }}>
      <img onLoad={() => setIconReady(true)} ref={IconRef} className="w-full h-full block" src={mark.flag_icon} alt="" />
    </div>
    <div className='p-3 absolute top-1/2 -translate-y-1/2 start-full after: bg-white/80 group-hover:opacity-100 opacity-0 duration-300 pointer-events-none'>
      <div className='border-[9px] border-y-[8px] border-s-0 border-y-transparent border-e-white/80 absolute top-1/2 -translate-y-1/2 -start-[9px] bg-transparent' />
      <div className='flex justify-start space-x-2 items-start'>
        <picture className='block'>
          <img onLoad={() => setFlagReady(true)} src={mark.flag} alt={mark.name} />
        </picture>
        <div>
          <h3 className="text-xl font-medium text-gray-900">{mark.name}</h3>
          <p className='text-[#000000a1]'>102 Project</p>
        </div>
      </div>
      <div>
        <button to={`/${mark.navigate_to}`} className='text-[#FFFFFF] bg-[#28AFA8] py-1 w-[200px] block text-center mt-2 font-medium pointer-events-auto'>Explore</button>
      </div>
    </div>    
  </>
}