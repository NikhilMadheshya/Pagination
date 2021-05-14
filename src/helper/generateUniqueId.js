

export const generateUniqueId=(length)=>
{
    let str='';
   let chars='!@$%&1234567890qwertyuiopzxcvbnmasdfghjkl';
   
   for(let i=0;i<str.length;i++)
   {
       str+=chars[Math.floor(Math.random()*chars.length)];
   }
  return str;
}