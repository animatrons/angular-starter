import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pathRootMatch',
  standalone: true
})
export class PathRootMatchPipe implements PipeTransform {

  transform(path: string, path2: string): unknown {
    const pathSegments = path.replace(/^\//g, '').split('/');
    const path2Segments = path2.replace(/^\//g, '').split('/');
    return pathSegments[0] === path2Segments[0];
  }

}
