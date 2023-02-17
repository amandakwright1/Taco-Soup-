var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
//console.log (harryPotterTitles.length)
for (var i = 0; i <harryPotterTitles.length; i ++){

console.log(harryPotterTitles[i]);
}

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];

for (var i = 0; i <grades.length; i ++){
   console.log (grades[i]) //Can take out if you don't want the grade numbers to show in output.

    if (grades[i] >= 0 && grades[i] <= 69){
        console.log ("You got an F!");
    }
      if (grades[i] >= 70 && grades[i] <= 76){
        console.log ("You got an D!");
      }
      if (grades[i] >= 77 && grades[i] <= 84){ 
        console.log ("You got an C!");
      }
      if (grades[i] >= 84 && grades[i] <= 92){
        console.log ("You got an B!");
      }
      if (grades[i] >= 93 && grades[i] <= 100){
        console.log ("You got an A!");
      }




}