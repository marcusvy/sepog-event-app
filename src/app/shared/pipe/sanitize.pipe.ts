import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize',
})
export class SanitizePipe implements PipeTransform {
  constructor(private _domSanitizer: DomSanitizer) {}

  transform(value?: string, mode: string = 'html'): SafeHtml | SafeUrl {
    let trustedOutput = '';
    if (value == null) {
      value = '';
    }
    if (mode === 'html') {
      trustedOutput = this._domSanitizer.sanitize(
        SecurityContext.HTML,
        value
      ) as string;
      return this._domSanitizer.bypassSecurityTrustHtml(trustedOutput);
    }
    if (mode === 'url') {
      trustedOutput = this._domSanitizer.sanitize(
        SecurityContext.URL,
        value
      ) as string;
      return this._domSanitizer.bypassSecurityTrustUrl(trustedOutput);
    }
    return value;
  }
}
