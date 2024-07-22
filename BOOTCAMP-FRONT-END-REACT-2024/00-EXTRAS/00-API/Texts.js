class Texts {
  static capitalizeWords (text = '') {
    if (typeof text !== 'string') return '';
  
    const words = text.split(' ');
    const capitalizedWords = [];
  
    for (const word of words) {
      const capitalizeWord = word.slice(0, 1).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizeWord);
    }
  
    return capitalizedWords.join(' ');
  }


  static reverseText (text = '') {
    return text.split('').reverse().join('');
  }

};

export default Texts;