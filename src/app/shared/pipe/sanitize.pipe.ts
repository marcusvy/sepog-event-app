import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize',
})
export class SanitizePipe implements PipeTransform {
  constructor(private _domSanitizer: DomSanitizer) {}

  transform(value?: string): SafeHtml {
    if (value == null) {
      value = '';
    }
    const trustedOutput = this._domSanitizer.sanitize(
      SecurityContext.HTML,
      value
    ) as string;
    return this._domSanitizer.bypassSecurityTrustHtml(trustedOutput);
  }
}
