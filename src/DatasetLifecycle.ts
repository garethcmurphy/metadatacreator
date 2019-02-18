export class DatasetLifecycle {
    archivable: Boolean;
    retrievable: Boolean;
    publishable: Boolean;
    dateOfDiskPurging: Date;
    archiveRetentionTime: Date;
    dateOfPublishing:  Date;
    isOnCentralDisk: Boolean;
    archiveStatusMessage: String;
    retrieveStatusMessage: String;
    archiveReturnMessage: Object;
    retrieveReturnMessage: Object;
    exportedTo: String;
    retrieveIntegrityCheck: Boolean;
}