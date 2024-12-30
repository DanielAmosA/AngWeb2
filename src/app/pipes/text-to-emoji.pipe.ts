import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textToEmoji',
  standalone: true
})
export class TextToEmojiPipe implements PipeTransform {

  transform(value: string): string {
    const emojiMap: { [key: string]: string } = {
      a: '🍎', b: '🍌', c: '🥕', d: '🍩', e: '🥚',
      f: '🍟', g: '🍇', h: '🍯', i: '🍦', j: '🍏',
      k: '🥝', l: '🍋', m: '🍈', n: '🍊', o: '🍪',
      p: '🍍', q: '🍳', r: '🍓', s: '🍬', t: '🍅',
      u: '🍇', v: '🥑', w: '🍉', x: '🍫', y: '🍋',
      z: '🧀'
    };
    return value
      .toLowerCase()
      .split('')
      .map((char) => emojiMap[char] || char)
      .join('');
  }

}
