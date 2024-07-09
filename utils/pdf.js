import { PDFDocument } from "pdf-lib";

class AppPDF {
  static async create() {
    return await PDFDocument.create();
  }

  static async load(data) {
    return await PDFDocument.load(data);
  }
}

export { AppPDF };
