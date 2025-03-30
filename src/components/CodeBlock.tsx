import React from "react";
function CodeBlock({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className: string;
}) {
  return (
    <div
      className={`bg-[#1A1A1A] rounded-xl w-fit xl:shadow-[0px_0px_20px_#00000090] ${className}`}
    >
      <div className="h-10 w-full text-white opacity-80 border-b border-on-primary/10 flex items-center">
        <span className="px-4 text-sm">{title}</span>
      </div>
      <div className="p-4 text-xs">{children}</div>
    </div>
  );
}

export default CodeBlock;
