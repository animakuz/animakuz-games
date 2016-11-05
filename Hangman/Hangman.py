#!/usr/bin/env python

#Simple CLI Hangman game in python

import math
import random

def get_rand_index(max):
    rand = random.random()
    ind  = math.floor(rand * max)
    return int(ind)

def make_guess_word(word):
    len_word = len(word)
    guess_word = ""
    i = 0

    while i < len_word:
        guess_word += "_"
        i += 1

    return guess_word

def check_guess(guess, word):
    i              = 0
    len_word       = len(word)
    new_guess_word = "" 
    correct_guess  = False

    while i < len_word:
        if guess == word[i]:
            #correct guess
            new_guess_word += guess
            correct_guess = True
        else: 
            #incorrect guess
            new_guess_word += "_"
        
        i += 1
    
    return [correct_guess, new_guess_word]

def check_win(word, guess_word):
    if word == guess_word:
        return True

    else:
        return False

def play_game():
    guess = raw_input("\nPlease enter a letter: ")

    if guess not in letters_used:
        guess_result  = check_guess(guess, word)   
        
        if guess_result[0] == False:
            print "\nThis letter is incorrect!\n"
            tries -= 1
        else:
            print "\nThis letter is correct!\n"
            guess_word = guess_result[1]

        letters_used.append([guess])
    
        if check_win(word, guess_word) == True:
            print "\nYou have won! \nComplete word: %", guess_word

        else:
            print "\nYou have % tries left\n", tries
            
            if tries <= 0:
                print "\nYou have lost!\n"
            else:
                print "\nYour guesses so far: %\n", guess_word
                play_game()

    else:
        print "This letter has already been used\n%\n", guess_word
        play_game()


print "H A N G M A N\n\n"

#setup
words = ['computer', 'program', 'repository', 'recursive', 'processor', 'interface', 'application', 'software', 'keyboard', 'command']

ind = get_rand_index(10)
word         = words[ind]
guess_word   = make_guess_word(word)
letters_used = []
guess_result = []
tries        = 3

#play
play_game()








