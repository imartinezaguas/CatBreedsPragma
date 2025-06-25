import { Pipe, PipeTransform } from '@angular/core';
import { IMG_UNKNOWN } from '../constants/api.constants';

@Pipe({
  name: 'imageFallback'
})
export class ImageFallbackPipe implements PipeTransform {

   transform(image: { url?: string } | null | undefined, fallback: string = IMG_UNKNOWN): string {
    return image?.url?.trim() ? image.url : fallback;
  }


}
