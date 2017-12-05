README.txt for CS!300, Development Project, ahellma1

To run this project, navigate to the folder in which this code is saved and run the command "npm start". In your broswer, go to "http://localhost:3000/" to view.

My code is set up using three different components: List, FilteredList, and Monster. The first two are components that we developed in the React lab. The last component is one I created to deal with the creation of each "Monster" object that gets viewed in the webpage. Each block on the webpage holds relevant Monster information for a single Monster, and the Monster component helps to create the html for displaying this information.

As far as design goes, I used a black and white color pallete for a majority of the site. The only aspects of the page that are not some shade of grey are the Monster portraits - which are brightly colored and varied, but placed regularly so as to keep the webpage continuous. Each block that contains Monster information is similar in structure to the rest. Furthremore, the font family  and font color are both kept constant throughout each use on the page. 

Data is passed into FilteredList, where a List of Monster components is created for display. The Monster components are displayed on the webpage based on user search/filter preference. Monster Data is passed into FilteredList by App.js. Monster icons are pulled from the database "http://puzzledragonx.com/".

The user can interact with the webpage in a few different ways: through the filter dropdowns, through the seach bar, or through various buttons. These elements all change the state "data" that gets displayed on the page. Furthermore, the program saves the filter selections in the program state in order to properly filter data for display. 

The app this is based on (the popular "Puzzle and Dragons" phone game) is a fun app that I used to be really obsessed with. The goal of this application is to give a user personalized information on Monsters from the game - something I would have loved to use when I was really interested in the game. There are thousands of Monster cards in the game, but this webpage gives information on a small subset of the more popular Monsters - ideally based on the Monster cards owned by the user.