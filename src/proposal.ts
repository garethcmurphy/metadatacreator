import { Proposal } from "../shared/sdk";
const fs = require("fs");

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
      attachments: [],
      ownerGroup: "ess",
      accessGroups: ["ess"],
      updatedAt: new Date(),
      updatedBy: "ingestor",
      createdAt: new Date(),
      createdBy: "ingestor",
      title: "GH43YU " +
        "Validation of timing and flux counting capabilities of beam monitors for the ESS instruments",
      abstract: "Kalliope Kanaki",
      MeasurementPeriodList: [
        {
          id: "string",
          instrument: "V20",
          start: "2019-05-27T00:01:00+0000",
          end: "2019-06-02T23:59:00+0000",
          comment: "string"
        }
      ],
      measurementPeriods: []
    },
    {
      proposalId: "Z3HJ84",
      pi_email: "markus.strobl@esss.se",
      pi_firstname: "Markus",
      pi_lastname: "Strobus",
      email: "morgano.manuel@esss.se",
      firstname: "Morgano",
      lastname: "Manuel",
      title: "Z3HJ84 "+" TOF MCP detector ",
      abstract: "Markus Strobl",
      attachments: [],
      ownerGroup: "ess",
      accessGroups: ["ess"],
      updatedAt: new Date(),
      updatedBy: "ingestor",
      createdAt: new Date(),
      createdBy: "ingestor",
      MeasurementPeriodList: [
        {
          id: "string",
          instrument: "V20",
          start: "2019-06-03T00:01:00+0000",
          end: "2019-06-07T23:59:00+0000",
          comment: "string"
        }
      ],
      measurementPeriods: []
    },
    {
      proposalId: "ML89ZA",
      pi_email: "robin.woracek@esss.se",
      pi_firstname: "Robin",
      pi_lastname: "Woracek",
      email: "robin.woracek@esss.se",
      firstname: "Robin",
      lastname: "Woracek",
      title: "ML89ZA: "+" In-situ deformation",
      abstract: "Robin Woracek",
      attachments: [],
      ownerGroup: "ess",
      accessGroups: ["ess"],
      updatedAt: new Date(),
      updatedBy: "ingestor",
      createdAt: new Date(),
      createdBy: "ingestor",
      MeasurementPeriodList: [
        {
          id: "string",
          instrument: "V20",
          start: "2019-06-17T00:01:00+0000",
          end: "2019-06-28T23:59:00+0000",
          comment: "string"
        }
      ],
      measurementPeriods: []
    },
    {
      proposalId: "NJ27CD",
      pi_email: "robin.woracek@esss.se",
      pi_firstname: "Tobias",
      pi_lastname: "Richter",
      email: "tobias.richter@esss.se",
      firstname: "Tobias",
      lastname: "Richter",
      title: "NJ27CD: "+" DREAM detector",
      abstract: "string",
      attachments: [],
      ownerGroup: "ess",
      accessGroups: ["ess"],
      updatedAt: new Date(),
      updatedBy: "ingestor",
      createdAt: new Date(),
      createdBy: "ingestor",
      MeasurementPeriodList: [
        {
          id: "string",
          instrument: "V20",
          start: "2019-07-15T01:01:00+0000",
          end: "2019-07-14T23:59:00+0000",
          comment: "string"
        }
      ],
      measurementPeriods: []
    }
  ];


  makeProposals() {
    const result = this.calendar.reduce(function(map, obj) {
      map[obj.proposalId] = { proposal: obj };
      return map;
    }, {});
    const prop_string = JSON.stringify(result, null, 2);
    console.log("result", prop_string);
    fs.writeFileSync("v20prop.json", prop_string, function(err) {
      if (err) {
        return console.error(err);
      }
      console.log("File created!");
    });
  }
}

if (require.main === module) {
  const sam = new MakeV20Proposals();
  sam.makeProposals();
}
