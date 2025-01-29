'use client';


import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

import image1 from '../../public/images/photos/KSK_4319.jpg'
import image2 from '../../public/images/photos/IMG-20250127-WA0042.jpg'
import image3 from '../../public/images/photos/KSK_4458.jpg'
import image4 from '../../public/images/photos/IMG-20250127-WA0041.jpg'
import image5 from '../../public/images/photos/KSK_4547.jpg'
export function Gallery() {
  return (
    (<BentoGrid className="mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
      ))}
    </BentoGrid>)
  );
}




const items = [
  {
    header: image1,
  },
  {
  
    header: image2,
  },
  {

    header: image3,
  },
  {

    header: image5,
  },
  {

    header: image4,
  },
];
