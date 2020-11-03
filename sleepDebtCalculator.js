const getSleepHours = day => {
if (day === 'monday'){
  return 7;
  } else if (day === 'tuesday'){
  return 8;
  }
  else if (day === 'wednesday'){
  return 15;
  }
  else if (day === 'thursday'){
  return 6;
  }
  else if (day === 'friday'){
  return 8;
  }
  else if (day === 'saturday'){
  return 5;
  }
  else if (day === 'sunday'){
  return 9;
  }
  else { 
    return 'Error!'
  }
}

const getActualSleepHours= () =>{
return getSleepHours('monday') + getSleepHours('tuesday') +   getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
 }
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
 const idealHours = 8 
 return idealHours * 8;
 }


console.log(getIdealSleepHours());

const calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
   if (actualSleepHours > idealSleepHours){
     return `You slep ${(actualSleepHours - idealSleepHours)} hours more than you needed`
   }
   if (actualSleepHours < idealSleepHours)
   {
     return `You slep ${(idealSleepHours - actualSleepHours)} hours less than you needed, you should rest!!!`
   }
   if (actualSleepHours === idealSleepHours)
   {
     return `got the perfect amount of sleep.`
   }
}



console.log(calculateSleepDebt())
