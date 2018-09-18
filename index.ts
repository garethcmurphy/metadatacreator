class MetadataCreator {
  metadata: Object;
  constructor() {
    this.metadata = { id: 20 };
  }

  print() {
    console.log(this.metadata);
  }
}

const met = new MetadataCreator();
met.print();
