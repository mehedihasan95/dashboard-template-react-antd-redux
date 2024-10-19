import React, { forwardRef } from "react";

interface Props {
  children: React.ReactNode;
  extra?: React.ReactNode;
}

const A4PageContainer = forwardRef<HTMLDivElement, Props>(
  ({ children, extra }, ref) => {
    return (
      <section
        ref={ref}
        style={{
          width: "210mm",
          minHeight: "297mm",
          padding: "20mm 20mm 20mm 25mm",
          margin: "0 auto",
          border: "none",
          backgroundColor: "#FFFFFF",
          color: "#000000",
          display: "grid",
          alignContent: "space-between",
        }}
      >
        <div>{children}</div>
        <div>{extra}</div>
      </section>
    );
  }
);

export default A4PageContainer;
