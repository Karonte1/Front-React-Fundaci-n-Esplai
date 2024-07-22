type ClassStrings = {
  bg: string;
  text: string;
  icon: string;
}

// type Classes = {
//   error: ClassStrings;
//   success: ClassStrings;
//   warning: ClassStrings;
//   info: ClassStrings;
//   default: ClassStrings;
// }

type Classes = {
 [key: string]: ClassStrings;  
}


export default function createAlertTailwind (message = 'Error', type = 'error') {
  const alertHTML = document.createElement('div');

  // let bgClasses;

  // if (type === 'error') bgClasses = 'bg-red-200';
  // else if (type === 'warning') bgClasses = 'bg-yellow-200';
  // else if (type === 'success') bgClasses = 'bg-green-200';
  // else if (type === 'info') bgClasses = 'bg-blue-200';

  const classes: Classes = {
    error: {
      bg: 'bg-red-200',
      text: 'text-red-600',
      icon: '❌'
    },
    success: {
      bg: 'bg-green-200',
      text: 'text-green-600',
      icon: '✅'
    },
    info: {
      bg: 'bg-blue-200',
      text: 'text-blue-600',
      icon: '💼'
    },
    warning: {
      bg: 'bg-yellow-200',
      text: 'text-yellow-600',
      icon: '😵'
    },
    default: {
      bg: 'bg-red-200',
      text: 'text-red-600',
      icon: '❌'
    } 
  }

  // const bgClass = {
  //   error: 'bg-red-200',
  //   success: 'bg-green-200',
  //   info: 'bg-blue-200',
  //   warning: 'bg-yellow-200',
  //   default: 'bg-red-200'
  // };

  // const textClass = {
  //   error: 'text-red-600',
  //   success: 'text-green-600',
  //   info: 'text-blue-600',
  //   warning: 'text-yellow-600',
  //   default: 'text-red-600'
  // };

  // const icon = {
  //   error: '❌',
  //   success: '✅',
  //   info: '💼',
  //   warning: '😵',
  //   default: '❌'
  // }

  alertHTML.className = `alertIn ${classes[type].bg || classes.default.bg} p-4 rounded w-max fixed right-2 top-2 flex gap-4`;

  alertHTML.innerHTML = `
  <span>${classes[type]?.icon || classes.default.icon}</span>
  <span class="${classes[type]?.text || classes.default.text}">${message}</span>
  `;

  alertHTML.animate([
    { translate: '100%' },
    { translate: '0%' }
  ], { duration: 500, easing: 'ease' });

  setTimeout(() => { alertHTML.remove() }, 5000);

  document.body.append(alertHTML);
}