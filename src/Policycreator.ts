import { Policy } from "../shared/sdk/models";
import { DefaultInstrument, InstrumentFactory } from "./instrument";

const fs = require("fs");

export class PolicyCreator {
  metadata: Object;
  policy: Policy;

  constructor() {
    this.metadata = {};
  }

  getPolicy(inst: DefaultInstrument, tag: string) {
    this.policy = new Policy();
    this.policy.manager = [inst.owner];
    this.policy.tapeRedundancy = "low";
    this.policy.autoArchive = true;
    this.policy.autoArchiveDelay = 7;
    this.policy.archiveEmailNotification = false;
    this.policy.archiveEmailsToBeNotified = ["string"];
    this.policy.retrieveEmailNotification = false;
    this.policy.retrieveEmailsToBeNotified = ["string"];
    this.policy.ownerGroup = inst.ownerGroup;
    this.policy.accessGroups = inst.accessGroups;
    this.policy.createdBy = inst.createdBy;
    this.policy.updatedBy = inst.updatedBy;
    this.policy.updatedAt = inst.updatedAt;
    return this.policy;
  }

  mainloop() {
    const inst_array = ["sonde", "nmx", "multiblade", "multigrid"];
    for (const inst_tag of inst_array) {
      console.log(inst_tag);
      const inst_fact = new InstrumentFactory();
      const inst = inst_fact.createInstrument(inst_tag);
      console.log(inst.abbreviation);

      for (const key of Object.keys(inst.source_folder_array)) {
        const source_folder = inst.source_folder_array[key];
        console.log("gm source", source_folder);
        const policy = this.getPolicy(inst, "example");
        const key1 = "key" + inst_tag + key;
        this.metadata[key1] = {
          policy: policy
        };
      }
    }
    this.print();
  }

  print() {
    //console.log(this.metadata);
    const json = JSON.stringify(this.metadata, null, 4);
    fs.writeFile("policy.json", json, err => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  }
}

const sam = new PolicyCreator();
sam.mainloop();
