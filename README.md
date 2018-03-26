# General Purpose Book Cipher Decryption App

This app is inspired by the puzzle from [Patrick Juola, Ph.D.](http://mathcs.duq.edu/~juola/) presented at the First Annual Hackathon hosted by the Duquesne Student CS Club. The problem was a [Beaufort cipher](), using a popular English novel as the key text (more fully described [here](http://mathcs.duq.edu/~juola/Hackathon-Beaufort.pdf)).

Contained in this repository so far is a frontend for interfacing with a python function that takes as input a variable number of cipher-text strings, and returns the first 'n' letters of the key based on the frequency of patterns of letters in the English letters to the browser's JavaScript console. Future additions would include a user interface for displaying the result, perhaps coupled with a mechanism for displaying the next characters as they are guessed. The intended final use case of the output is to query a general purpose search engine to find the title of the book, if it is well-known enough to find in that manner. Accordingly a trivial second addition is to include a panel with such a search automatically performed with the output as it is accumulated on the frontend application.

## Usage

To use the code in this repository, execute the following steps:

* `npm install`
* `pip install flask`
* `npm run build`
* `python app.py`

The module where the additional code is to be merged into this repository is called 'thing' and resides in `thing.py` at the root of this repository.

