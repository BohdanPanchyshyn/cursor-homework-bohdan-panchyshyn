async function getRandomChinese(param) {
   let massString = [];
   const getSingleSign = () => new Promise((resolve) => {
      return setTimeout(() => {
         const sign = Date.now().toString().slice(-5);
         let resp = String.fromCharCode(sign);
         resolve(resp);
      }, 50);
   });

   for (let i = 0; i < param; i++) {
      await getSingleSign()
         .then(value => massString.push(value));
   }


   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (param <= 0 || typeof param === "string") {
            reject(console.log("We have a problem guys!"))
         } else resolve(console.log(massString.join("")));

      }, param * 50);
   });
}

getRandomChinese(4);