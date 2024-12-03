/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useQRCode } from "next-qrcode";
import React from "react";

export default function QrCanvas() {
  const { Image } = useQRCode();

  return (
    <div className='rounded-2xl overflow-hidden absolute top-14 right-10 left-10 md:right-auto md:top-32 md:left-24'>
      <Image
        text={process.env.NEXT_PUBLIC_APP_LINK ?? ""}
        options={{
          type: "image/jpeg",
          quality: 0.3,
          errorCorrectionLevel: "M",
          margin: 3,
          scale: 5,
        }}
      />
    </div>
  );
}
