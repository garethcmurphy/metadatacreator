import { PublishedData } from "./PublishedData";

class MetadataCreator {
  metadata: Object;
  Publish: PublishedData;

  constructor() {
    this.Publish = new PublishedData();
    this.Publish.creator = "J Smith";
    this.Publish.publisher = "ESS";
    this.Publish.affiliation = "ESS";
    this.Publish.publicationYear = 2018;
    this.Publish.pidArray = ["J Smith"];
    this.metadata = this.Publish;
  }

  mainloop() {
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
  }

  get_file_info() {
    // fs.readdirSync();
  }

  print() {
    console.log(this.Publish);
  }
}

const met = new MetadataCreator();
met.print();
