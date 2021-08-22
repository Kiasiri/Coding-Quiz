# Coding-Quiz
The assignment was to make a quiz that had a timer and that you could save your score in local sotrage.
First  I made an array of questions within which i had data for the question and each of the answers and for whether each answer was correct or not.
I created buttons to start the game, for each of the answers and to save your score.
start button calls a function to show questions which takes the question and answer data and puts into the question div and each of the answer buttons
when an answer is selected selectAnswer() gives a class of corrrect or wrong to each of the buttons depending on its booleen value which is cleared after eveery question by a clear status function
setStatusclass then checks to see if the answer is correct and then add to point or subtracts from timer 5 seconds
timer is in countdown() which starts counting down when start game is pressed if time reaches zero or below timer stops and calls endtime()
endTIme() causes quiz to be hidden and save score button to appear
save score() prompts for user name and saves username and total points into local sotrage and then refreshes page.
