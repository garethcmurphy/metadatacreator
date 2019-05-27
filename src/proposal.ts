import { Proposal } from "../shared/sdk";

class MakeV20Proposals {
  calendar: Proposal[] = [
    {
      proposalId: "GH43YU",
      pi_email: "kalliopi.kanaki@esss.se",
      pi_firstname: "Kalliopi",
      pi_lastname: "Kanaki",
      email: "kalliopi.kanaki@esss.se",
      firstname: "Kalliopi",
      lastname: "Kanaki",
      abstract: "string",
      attachments: [],
      ownerGroup: "ess",
      accessGroups: ["ess"],
      updatedAt: new Date(),
      updatedBy: "ingestor",
      createdAt: new Date(),
      createdBy: "ingestor",
      title:
        "Validation of timing and flux counting capabilities of beam monitors for the ESS instruments",
      MeasurementPeriodList: [],
      measurementPeriods: [
        {
          id: "string",
          instrument: "V20",
          start: "2019-05-27T00:01:00+0000",
          end: "2019-06-02T23:59:00+0000",
          comment: "string"
        }
      ]
    },
    {
      proposalId: "Z3HJ84",
      pi_email: "markus.strobl@esss.se",
      pi_firstname: "Strobl",
      pi_lastname: "Markus",
      email: "morgano.manuel@esss.se",
      firstname: "Morgano",
      lastname: "Manuel",
      title: "TOF MCP detector ",
      abstract: "string",
      attachments: [],
      ownerGroup: "ess",
      accessGroups: ["ess"],
      updatedAt: new Date(),
      updatedBy: "ingestor",
      createdAt: new Date(),
      createdBy: "ingestor",
      MeasurementPeriodList: [],
      measurementPeriods: [
        {
          id: "string",
          instrument: "V20",
          start: "2019-06-03T00:01:00+0000",
          end: "2019-06-07T23:59:00+0000",
          comment: "string"
        }
      ]
    }
  ];

  makeProposals() {
    for (let item of this.calendar) {
      let newProp = new Proposal();
      newProp.pi_email = item.pi_email;
    }
  }
}
