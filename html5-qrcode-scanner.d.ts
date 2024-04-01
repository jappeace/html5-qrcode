import { Html5QrcodeScanType, QrcodeSuccessCallback, StartErrorCallback, QrcodeErrorCallback } from "./core";
import { Html5QrcodeConfigs, Html5QrcodeCameraScanConfig } from "./html5-qrcode";
import { Html5QrcodeScannerState } from "./state-manager";
declare enum Html5QrcodeScannerStatus {
    STATUS_DEFAULT = 0,
    STATUS_SUCCESS = 1,
    STATUS_WARNING = 2,
    STATUS_REQUESTING_PERMISSION = 3
}
export interface Html5QrcodeScannerConfig extends Html5QrcodeCameraScanConfig, Html5QrcodeConfigs {
    rememberLastUsedCamera?: boolean | undefined;
    supportedScanTypes?: Array<Html5QrcodeScanType> | [];
    showTorchButtonIfSupported?: boolean | undefined;
    showZoomSliderIfSupported?: boolean | undefined;
    defaultZoomValueIfSupported?: number | undefined;
}
export declare class Html5QrcodeScanner {
    private elementId;
    private config;
    private verbose;
    private currentScanType;
    private sectionSwapAllowed;
    private persistedDataManager;
    private scanTypeSelector;
    private logger;
    private html5Qrcode;
    private qrCodeSuccessCallback;
    private qrCodeErrorCallback;
    private lastMatchFound;
    private cameraScanImage;
    private fileScanImage;
    private fileSelectionUi;
    startErrorCallback: StartErrorCallback;
    torchButtonErrorCallback: StartErrorCallback;
    constructor(elementId: string, config: Html5QrcodeScannerConfig | undefined, verbose: boolean | undefined);
    render(qrCodeSuccessCallback: QrcodeSuccessCallback, qrCodeErrorCallback: QrcodeErrorCallback | undefined): void;
    pause(shouldPauseVideo?: boolean): void;
    resume(): void;
    getState(): Html5QrcodeScannerState;
    clear(): Promise<void>;
    getRunningTrackCapabilities(): MediaTrackCapabilities;
    getRunningTrackSettings(): MediaTrackSettings;
    applyVideoConstraints(videoConstaints: MediaTrackConstraints): Promise<void>;
    private getHtml5QrcodeOrFail;
    private createConfig;
    private createBasicLayout;
    private resetBasicLayout;
    private setupInitialDashboard;
    private createHeader;
    private createSection;
    private createCameraListUi;
    private createPermissionButton;
    private createPermissionsUi;
    private createSectionControlPanel;
    private renderFileScanUi;
    private renderCameraSelection;
    private createSectionSwap;
    private startCameraScanIfPermissionExistsOnSwap;
    resetHeaderMessage(): void;
    setHeaderMessage(messageText: string, scannerStatus?: Html5QrcodeScannerStatus): void;
    private showHideScanTypeSwapLink;
    private insertCameraScanImageToScanRegion;
    private insertFileScanImageToScanRegion;
    private clearScanRegion;
    private getDashboardSectionId;
    private getDashboardSectionCameraScanRegionId;
    private getDashboardSectionSwapLinkId;
    private getScanRegionId;
    private getDashboardId;
    private getHeaderMessageContainerId;
    private getCameraPermissionButtonId;
    private getCameraScanRegion;
    private getDashboardSectionSwapLink;
    private getHeaderMessageDiv;
}
export {};
