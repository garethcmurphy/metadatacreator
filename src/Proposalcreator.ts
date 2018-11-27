import { Proposal } from "../shared/sdk/models";
import { DefaultInstrument, InstrumentFactory } from "./instrument";

const fs = require("fs");

export class ProposalCreator {
  metadata: Object;
  proposal: Proposal;
  manager_list = ["gareth.murphy@esss.se"];

  constructor() {
    this.metadata = {};
  }

  getProposal(inst: DefaultInstrument, tag: string) {
    this.proposal = new Proposal();
    this.proposal.proposalId = inst.ownerGroup;
    this.proposal.pi_email = inst.ownerGroup;
    this.proposal.pi_firstname = inst.ownerGroup;
    this.proposal.pi_lastname = inst.ownerGroup;
    this.proposal.email = inst.ownerGroup;
    this.proposal.firstname = inst.ownerGroup;
    this.proposal.lastname = inst.ownerGroup;
    this.proposal.title = inst.ownerGroup;
    this.proposal.abstract = inst.ownerGroup;
    this.proposal.attachments = [inst.ownerGroup];
    this.proposal.MeasurementPeriodList = [inst.ownerGroup];
    this.proposal.ownerGroup = inst.ownerGroup;
    this.proposal.accessGroups = inst.accessGroups;
    this.proposal.createdBy = inst.createdBy;
    this.proposal.updatedBy = inst.updatedBy;
    this.proposal.updatedAt = inst.updatedAt;
    return this.proposal;
  }

  mainloop() {
    const inst_array = ["sonde", "nmx", "multiblade", "multigrid", "beaminstrumentation"];
    for (const inst_tag of inst_array) {
      console.log(inst_tag);
      const inst_fact = new InstrumentFactory();
      const inst = inst_fact.createInstrument(inst_tag);
      console.log(inst.abbreviation);

      const proposal = this.getProposal(inst, "example");
      const key1 = "key" + inst_tag;
      this.metadata[key1] = {
        proposal: proposal
      };
    }
    this.print();
  }

  print() {
    //console.log(this.metadata);
    const json = JSON.stringify(this.metadata, null, 4);
    fs.writeFile("proposal.json", json, err => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  }
}

const sam = new ProposalCreator();
sam.mainloop();
