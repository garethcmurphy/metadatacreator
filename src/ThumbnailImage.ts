

const fs = require("fs");

export class ThumbnailImage {

  image: string;

  constructor() {
    const header = "data:image/png;base64,"
    const filename = "./assets/image.png"
    this.image = header + this.base64_encode(filename);

  }

  base64_encode(file: string) {
    // read binary data
    const bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return Buffer.from(bitmap).toString('base64');
  }
}
