export class DatasetLifecycle {
  public archivable: boolean;
  public retrievable: boolean;
  public publishable: boolean;
  public dateOfDiskPurging: Date;
  public archiveRetentionTime: Date;
  public dateOfPublishing: Date;
  public isOnCentralDisk: boolean;
  public archiveStatusMessage: string;
  public retrieveStatusMessage: string;
  public archiveReturnMessage: object;
  public retrieveReturnMessage: object;
  public exportedTo: string;
  public retrieveIntegrityCheck: boolean;
}
