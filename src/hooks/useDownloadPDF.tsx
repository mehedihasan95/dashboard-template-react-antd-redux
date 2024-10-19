import { useCallback } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import dayjs from "dayjs";

export const useDownloadPDF = () => {
  return useCallback(
    (ref: React.RefObject<HTMLDivElement>, filename: string): void => {
      html2canvas(ref.current as HTMLElement, { scale: 2 }).then(
        (canvas: HTMLCanvasElement) => {
          const imgData: string = canvas.toDataURL("image/png", 1.0);
          const pdf: jsPDF = new jsPDF("p", "mm", "a4", true);
          const pdfWidth: number = pdf.internal.pageSize.getWidth();
          const pdfHeight: number = pdf.internal.pageSize.getHeight();
          const imgWidth: number = canvas.width;
          const imgHeight: number = canvas.height;
          const ratio: number = Math.min(
            pdfWidth / imgWidth,
            pdfHeight / imgHeight
          );
          const imgX: number = (pdfWidth - imgWidth * ratio) / 2;
          const imgY: number = 0;
          pdf.addImage(
            imgData,
            "PNG",
            imgX,
            imgY,
            imgWidth * ratio,
            imgHeight * ratio
          );
          pdf.save(`${dayjs().format("YYYY-MM-DD_HH-mm-ss")}_${filename}.pdf`);
        }
      );
    },
    []
  );
};
