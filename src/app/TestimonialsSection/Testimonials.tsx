"use client";

import dynamic from "next/dynamic";
import "./Testimonials.scss";
import Item from "@/components/Carousel/Item/Item";
import { carouselItems } from "@/features/carouselItems";
import Link from "next/link";

// Dynamically import Carousel to prevent SSR rendering issues
const Carousel = dynamic(() => import("@/components/Carousel/Carousel"), { ssr: false });

export default function TestimonialsSection() {
  return (
    <div className="testimonials section">
      <div className="text-content">
        <h3 className="semi-title">Clienti Soddisfatti</h3>
        <h2>Alcuni dei nostri progetti</h2>
      </div>
      <Carousel items={carouselItems.map((el, index) => (
          <Item slide={el} key={index} />
        ))} 
      />
      <Link href="/testimonials" className="btn-2">Altri progetti</Link>
    </div>
  )
}
