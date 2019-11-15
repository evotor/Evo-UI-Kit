import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EvoUploadItemClickEvent } from 'projects/evo-ui-kit/src/public_api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    filesControl = new FormControl([], [Validators.required]);

    ngOnInit() {
        this.filesControl.valueChanges.subscribe(console.log);
    }

    clickFile({ file, index}: EvoUploadItemClickEvent): void {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', (event: Event) => {
            const loadedReader = event.target as FileReader;
            const preview = document.createElement('img');
            preview.src = loadedReader.result as string;
            document.body.appendChild(preview);
        });
    }

    change(): void {
        // tslint:disable-next-line
        const fileContentBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADxSURBVHgB7dFBAQAgDAChaf9Y66U17gEVOLv7how7pAiJERIjJEZIjJAYITFCYoTECIkREiMkRkiMkBghMUJihMQIiRESIyRGSIyQGCExQmKExAiJERIjJEZIjJAYITFCYoTECIkREiMkRkiMkBghMUJihMQIiRESIyRGSIyQGCExQmKExAiJERIjJEZIjJAYITFCYoTECIkREiMkRkiMkBghMUJihMQIiRESIyRGSIyQGCExQmKExAiJERIjJEZIjJAYITFCYoTECIkREiMkRkiMkBghMUJihMQIiRESIyRGSIyQGCExQmKExAiJERLzAbX7BBNFsXXhAAAAAElFTkSuQmCC';
        const bytes = this.base64ToArrayBuffer(fileContentBase64) as any;
        const file = new File([bytes], 'some.png', { type: 'image/png' });
        this.filesControl.setValue([file]);
    }

    base64ToArrayBuffer(base64: string): Uint8Array {
        const binaryString = window.atob(base64);
        const binaryLen = binaryString.length;
        const bytes = new Uint8Array(binaryLen);
        for (let i = 0; i < binaryLen; i++) {
            const ascii = binaryString.charCodeAt(i);
           bytes[i] = ascii;
        }
        return bytes;
    }
}

