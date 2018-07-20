#!/usr/bin/env python

#Simple CLI Hangman game in python

import math
import random

def get_rand_index(max):
    rand = random.random()
    ind  = math.floor(rand * max)
    return int(ind)

def make_guess_word(word):
    len_word   = len(word)
    guess_word = []  
    i          = 0

    while i < len_word:
        guess_word.append("_") 
        i += 1

    return guess_word

def check_guess(guess, word, guess_word):
    i              = 0
    len_word       = len(word)
    new_guess_word = [] 
    correct_guess  = False

    while i < len_word:
        if guess == word[i]:
            #guess matches letter in word
            new_guess_word.append(guess)
            correct_guess = True
        else: 
            new_guess_word.append(guess_word[i])
        
        i += 1
    
    return [correct_guess, new_guess_word]

def format_guess_word(guess_word):
    """Result of this algorithm was not desirable
    result = ""
    i      = 0
    w_len  = len(guess_word)    
    
    while (i < w_len - 1):
        if guess_word[i] == "_" or guess_word[i + 1] == "_": 
            result += guess_word[i] + " "
        else:
            result += guess_word[i] 
        i += 1 

    return result + guess_word[-1] 
    """
    return " ".join(guess_word)

def check_win(word, guess_word):
    if word == guess_word:
        return True

    else:
        return False

def play_game(game_data):
    print "\nType 'quit' to leave game or type full word to solve instantly"
    guess = raw_input("\nPlease enter a letter and press enter: ")
    
    if guess == "quit":
        #escape condition
        print "\nThanks for playing!"
        quit()

    elif check_win(game_data["word"], guess) == True:
        #end game if correct word guessed
        print "\nYou guessed '" + game_data["word"] + "' correctly. You have won!\n"

    elif guess not in game_data["letters_used"]:
        #check letters
        guess_result = check_guess(guess, game_data["word"], game_data["guess_word"])   
        
        if guess_result[0] == False:
            if len(guess) > 1:
                print "\nThis guess is incorrect!\n"

            else:
                print "\nThis letter is incorrect!\n"

            game_data["tries"] -= 1
        else:
            print "\nThis letter is correct!\n"
            game_data["guess_word"] = guess_result[1]

        game_data["letters_used"].append([guess])
    
        if check_win(game_data["word"], "".join(game_data["guess_word"])) == True:
            print "\nYou have won! \nComplete word: " +  game_data["word"]
        else:
            print "\nYou have " + str(game_data["tries"]) + " tries left.\n"
            
            if game_data["tries"] <= 0:
                print "\nYou have lost!\n"
            else:
                print "\nYour guesses so far: " + format_guess_word(game_data["guess_word"]) + "\n"

                play_game(game_data)

    else:
        print "This letter has already been used\n" +  format_guess_word(game_data["guess_word"]) + "\n"

        play_game(game_data)
 

print "H A N G M A N\n\n"

#setup
words = ['computer', 'program', 'repository', 'recursive', 'processor', 'interface', 'application', 'software', 'keyboard', 'command']

game_data = { "word" : "", "guess_word" : [], "letters_used": [], "tries" : 0 }

ind                     = get_rand_index(10);
game_data["word"]       = words[ind]
game_data["guess_word"] = make_guess_word(game_data["word"])
game_data["tries"]      = 5

#play
play_game(game_data)


