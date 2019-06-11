import { Proposal } from "../shared/sdk";
const fs = require("fs");

class MakeV20Proposals {
  calendar: Proposal[] = [
    {
      proposalId: "LM28IF",
      pi_email: "ramsey.aljebali@esss.se",
      pi_firstname: "Ramsey",
      pi_lastname: "Al Jebali",
      email: "ramsey.aljebali@esss.se",
      firstname: "Ramsey",
      lastname: "Al Jebali",
      title: "Sample data from SoNDe",
      abstract:
        "These data were collected at ESS as part of sample data for SoNDe",
      attachments: ["ess"],
      MeasurementPeriodList: [
        {
          id: "string",
          instrument: "default",
          start: "2016-09-02T01:01:00+0000",
          end: "2019-09-22T23:59:00+0000",
          comment: "string"
        }
      ],
      ownerGroup: "ess",
      accessGroups: ["brightness", "ess"],
      createdBy: "ingestor",
      createdAt: new Date(),
      updatedBy: "ingestor",
      updatedAt: new Date(),
      measurementPeriods: []
    },
    {
      proposalId: "GH43YU",
      pi_email: "kalliopi.kanaki@esss.se",
      pi_firstname: "Kalliopi",
      pi_lastname: "Kanaki",
      email: "Ioannis.Apostolidis@esss.se",
      firstname: "Ioannis",
      lastname: "Apostolidis",
      attachments: [],
      ownerGroup: "ess",
      accessGroups: ["ess"],
      updatedAt: new Date(),
      updatedBy: "ingestor",
      createdAt: new Date(),
      createdBy: "ingestor",
      title:
        "Validation of timing and flux counting capabilities of beam monitors for the ESS instruments",
      abstract:
        "Ioannis Apostolidis, Kalliope Kanaki, Jonas Nilsson and Steven Alcock",
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
      pi_lastname: "Strobl",
      email: "morgano.manuel@esss.se",
      firstname: "Morgano",
      lastname: "Manuel",
      title: "TOF MCP detector ",
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
      title: "In-situ deformation",
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
      pi_email: "tobias.richter@esss.se",
      pi_firstname: "Tobias",
      pi_lastname: "Richter",
      email: "werner.schweika@esss.se",
      firstname: "Werner",
      lastname: "Schweika",
      title: "DREAM detector",
      abstract: "Tobias Richter, Werner Schweika",
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
          start: "2019-07-08T01:01:00+0000",
          end: "2019-07-14T23:59:00+0000",
          comment: "string"
        }
      ],
      measurementPeriods: []
    },
    {
      proposalId: "UI13RE",
      pi_email: "morgano.manuel@esss.se",
      pi_firstname: "Morgano",
      pi_lastname: "Manuel",
      email: "Robin.Woracek@esss.se",
      firstname: "Robin",
      lastname: "Woracek",
      title: "JPARC detector test",
      abstract: "Morgano Manuel, Robin Woracek",
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
          end: "2019-07-28T23:59:00+0000",
          comment: "string"
        }
      ],
      measurementPeriods: []
    },
    {
      proposalId: "14CD3N",
      pi_email: "malcolm.guthrie@esss.se",
      pi_firstname: "Malcolm",
      pi_lastname: "Guthrie",
      email: "Premek.Beran@esss.se",
      firstname: "Premek",
      lastname: "Beran",
      title: "BEER Stress Rig Test",
      abstract: "Malcolm Guthrie, Premek Beran",
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
          start: "2019-07-29T01:01:00+0000",
          end: "2019-08-08T23:59:00+0000",
          comment: "string"
        }
      ],
      measurementPeriods: []
    },
    {
      proposalId: "DD1F5G",
      pi_email: "tobias.richter@esss.se",
      pi_firstname: "Tobias",
      pi_lastname: "Richter",
      email: "Robin.Woracek@esss.se",
      firstname: "Robin",
      lastname: "Woracek",
      title: "DMSC Integration Milestone",
      abstract: "Tobias Richter",
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
          start: "2019-09-02T01:01:00+0000",
          end: "2019-09-22T23:59:00+0000",
          comment: "string"
        }
      ],
      measurementPeriods: []
    },
    {
      proposalId: "8F9G7G",
      pi_email: "pascal.deen@esss.se",
      pi_firstname: "Pascal",
      pi_lastname: "Deen",
      email: "anton.khaplanov@esss.se",
      firstname: "Anton",
      lastname: "Khaplanov",
      title: "MG.SEQ test",
      abstract: "Pascal Deen, Anton Khaplanov, Weibke Lohstroh",
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
          start: "2019-09-23T01:01:00+0000",
          end: "2019-10-04T23:59:00+0000",
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
