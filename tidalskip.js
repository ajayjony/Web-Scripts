document.addEventListener("DOMContentLoaded", function () {
         function myFunction() {
            var min = 35,max = 75;
            console.log("HIII WORKING")
            var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between min-max
            for (const button of document.querySelectorAll('button[data-type="button__skip-next"]')) {
               button.click();
            }
            setTimeout(myFunction, rand * 1000);
         }

         myFunction()
      
