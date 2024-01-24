import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  startScan = async () => {
    // Check camera permission
    // This is just a simple example, check out the better checks below
    await BarcodeScanner.checkPermission({ force: true });
    try {
      (document as any).querySelector('body').classList.add('scanner-active');
      // make background of WebView transparent
      // note: if you are using ionic this might not be enough, check below
      BarcodeScanner.hideBackground();

      const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

      // if the result has content
      if (result.hasContent) {
        alert(JSON.stringify(result.content)); // log the raw scanned content
      }
    } catch (e) {
      alert(JSON.stringify(e));
    }
  };

  stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };

  scan() {
    this.startScan();
  }
}
