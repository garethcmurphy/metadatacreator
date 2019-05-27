import { Proposal } from "../shared/sdk/models";
import { DefaultInstrument, InstrumentFactory } from "./instrument";

const human = require("humanparser");

const fs = require("fs");

export class ProposalCreator {
  metadata: Object;
  proposal: Proposal;

  constructor() {
    this.metadata = {};
  }

  get_firstname(fullName: string) {
    const attrs = human.parseName(fullName);
    return attrs.firstName;
  }
  get_secondname(fullName: string) {
    const attrs = human.parseName(fullName);
    return attrs.lastName;
  }

  getProposal(inst: DefaultInstrument, tag: string) {
    this.proposal = new Proposal();
    this.proposal.proposalId = inst.proposal;
    this.proposal.pi_email = inst.ownerEmail;
    this.proposal.pi_firstname = this.get_firstname(inst.owner);
    this.proposal.pi_lastname = this.get_secondname(inst.owner);
    this.proposal.email = inst.ownerEmail;
    this.proposal.firstname = this.proposal.pi_firstname;
    this.proposal.lastname = this.proposal.pi_lastname;
    this.proposal.title = "Sample data from " + inst.creationLocation;
    this.proposal.abstract =
      "These data were collected at ESS as part of sample data for " +
      inst.creationLocation;
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
    const inst_array = [
      "sonde",
      "dsc",
      "nmx",
      "multiblade",
      "multigrid",
      "v20",
      "beaminstrumentation"
    ];
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

if (require.main === module) {
  const sam = new ProposalCreator();
  sam.mainloop();
}
