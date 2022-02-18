let secretMessage = [
    'вчера',
    ',',
    'что',
    'к',
    'нам',
    'в',
    'Новом',
    'году',
    'крупнейшим',
    'интернет-бизнесом',
    'будет',
    'бухгалтерская',
    'компания',
    ',',
    'о',
    'которой',
    'еще',
    'никто',
    'ничего'
   ];

   console.log(secretMessage.length);

   secretMessage.pop();
   console.log(secretMessage.length);

   secretMessage.push('не', 'знает');

   console.log(secretMessage.indexOf('бухгалтерская'));
   secretMessage[11] = 'образовательная';

   secretMessage.shift();
   secretMessage.unshift('Предполагаю');

   console.log(secretMessage.indexOf('нам'));
   secretMessage.splice(4, 3, '2030');
   
   console.log(secretMessage.join(' '));