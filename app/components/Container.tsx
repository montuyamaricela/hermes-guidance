import React from "react";

export function Container({
  id,
  children,
  backgroundImage = "",
  position,
  styling = {},
  className = "",
}: {
  id?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
  styling?: object;
  position?: string;
  className?: string;
}) {
  let style: object = {
    backgroundImage: `url('${backgroundImage}')`,
    backgroundPosition: position || "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  if (styling) {
    // combine the styling
    style = { ...style, ...styling };
  }

  return (
    <div className={`relative ${className}`} style={style} id={id ? id : ""}>
      <div className='container mx-auto px-5 py-16 sm:py-20 lg:py-16 2xl:py-32 lg:px-20 2xl:px-0 text-white'>
        {children}
      </div>
    </div>
  );
}
