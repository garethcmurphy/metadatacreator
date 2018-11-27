import { Proposal } from "../shared/sdk/models";
import { DefaultInstrument, InstrumentFactory } from "./instrument";

const fs = require("fs");

export class ProposalCreator {
  metadata: Object;
  policy: Proposal;
  manager_list = ["gareth.murphy@esss.se"];

  constructor() {
    this.metadata = {};
  }

  getPolicy(inst: DefaultInstrument, tag: string) {
    this.policy = new Proposal();
    this.policy.ownerGroup = inst.ownerGroup;
    this.policy.accessGroups = inst.accessGroups;
    this.policy.createdBy = inst.createdBy;
    this.policy.updatedBy = inst.updatedBy;
    this.policy.updatedAt = inst.updatedAt;
    return this.policy;
  }

  mainloop() {
    const inst_array = ["sonde", "nmx", "multiblade", "multigrid", "beaminstrumentation"];
    for (const inst_tag of inst_array) {
      console.log(inst_tag);
      const inst_fact = new InstrumentFactory();
      const inst = inst_fact.createInstrument(inst_tag);
      console.log(inst.abbreviation);

      const policy = this.getPolicy(inst, "example");
      const key1 = "key" + inst_tag;
      this.metadata[key1] = {
        policy: policy
      };
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
