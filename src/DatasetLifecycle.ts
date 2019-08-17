export class DatasetLifecycle {
  private archivable: boolean;
  private retrievable: boolean;
  private publishable: boolean;
  private dateOfDiskPurging: Date;
  private archiveRetentionTime: Date;
  private dateOfPublishing: Date;
  private isOnCentralDisk: boolean;
  private archiveStatusMessage: string;
  private retrieveStatusMessage: string;
  private archiveReturnMessage: object;
  private retrieveReturnMessage: object;
  private exportedTo: string;
  private retrieveIntegrityCheck: boolean;
}
