import { JpgtoPdf } from "../imgtopdf/jpgtopdf/ImageCoverter";

export const tools = [
      {
    id: "jpg-to-pdf",
    title: "JPG to PDF",
    desc:"Package bitmap images in a portable PDF.",    
    format:"jpeg",
    converter: JpgtoPdf
  },

  {
    id: "png-to-pdf",
    title: "PNG to PDF",
    desc:"Package bitmap images in a portable PDF.",
    format:"png",
    converter: JpgtoPdf
  },
    {
    id: "webp-to-pdf",
    title: "webp to PDF",
    desc:"Package bitmap images in a portable PDF.",
    format:"webp",
    converter: JpgtoPdf
  },

  {
    id: "bmp-to-pdf",
    title: "bmp to PDF",
    desc:"Package bitmap images in a portable PDF.",
    format:"bmp",
    converter: JpgtoPdf
  }
]