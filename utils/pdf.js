import { PDFDocument } from "pdf-lib";

class PDF {
  static async create() {
    return await PDFDocument.create();
  }

  static async load(data) {
    return await PDFDocument.load(data);
  }
}

export const PDF = PDF;
