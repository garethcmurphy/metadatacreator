

const fs = require("fs");

export class ThumbnailImage {

  image: string;

  constructor(){
    const filename = "./assets/image.png"
    this.image = this.base64_encode(filename);
    
  }

  base64_encode(file: string) {
    // read binary data
    const bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}
}
