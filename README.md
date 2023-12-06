# Dictionary
Input : Text blob
Ex: Chennai is flooded with water. The situation is better now.
Output: No of words : 10
         No of occurences of each : is :2
                                     with:1

1. For number of words:
    word can be identified by spaces. So string.split(' ')
2. For number of occurences:
        Create a map with each word from split and assign counter as 0
        Increment the counter by 1 each time the word is encountered
