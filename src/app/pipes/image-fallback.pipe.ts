import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFallback'
})
export class ImageFallbackPipe implements PipeTransform {

   transform(image: { url?: string } | null | undefined, fallback: string = 'assets/image/unknown.png'): string {
    return image?.url?.trim() ? image.url : fallback;
  }


}
