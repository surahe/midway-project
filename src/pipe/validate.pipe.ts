import { Pipe, PipeTransform, TransformOptions } from '@midwayjs/core';

@Pipe()
export class CutPipe implements PipeTransform {
    transform(value: number, options: TransformOptions): string {
        return String(value).slice(5);
    }
}