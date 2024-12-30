import { TextToEmojiPipe } from './text-to-emoji.pipe';

describe('TextToEmojiPipe', () => {
  it('create an instance', () => {
    const pipe = new TextToEmojiPipe();
    expect(pipe).toBeTruthy();
  });
});
