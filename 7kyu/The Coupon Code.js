/* 
Story
  Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
  Your mission:
    Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

    A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
------------------------------------------------------------------------------*/

// 可能因瀏覽器之間的差異而出問題
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    Date.parse(expirationDate) >= Date.parse(currentDate)
  );
}

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
//   ];

//   //注意： 1+1 == '2' -> true ，所以要用全等 (===) 1+1 === '2' -> false */
//   if (enteredCode === correctCode) {
//     const currentDateArray = currentDate.replace(",", "").split(" ");
//     const expirationDateArray = expirationDate.replace(",", "").split(" ");

//     if (currentDateArray[2] < expirationDateArray[2]) return true;
//     else if (currentDateArray[2] === expirationDateArray[2]) {
//       if (
//         months.indexOf(currentDateArray[0]) <
//         months.indexOf(expirationDateArray[0])
//       )
//         return true;
//       else if (
//         months.indexOf(currentDateArray[0]) ===
//         months.indexOf(expirationDateArray[0])
//       )
//         if (+currentDateArray[1] <= +expirationDateArray[1]) return true;
//     }
//   }

//   return false;
// }
