export class ValidatorService {
  static min(value, min) {
    if (value.length < min) {
      return `Must enter at least ${min} letters.`;
    }
  }
  static max(value, max) {
    if (value.length > max) {
      return `Must enter at most ${max} letters.`;
    }
  }
}
