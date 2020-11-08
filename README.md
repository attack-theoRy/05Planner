Pirooz Wallace
10/31/2020
Day Planner Homework

GitHub Pages/App : https://attack-theory.github.io/05Planner/Develop

GitHub Repo: https://github.com/attack-theoRy/05Planner

GitHub Screenshot: https://user-images.githubusercontent.com/20414600/97927017-0c23e900-1d19-11eb-9e9d-767c3c2fa9af.png


Simple Day Planner that displays the date at the top and has a row for every hour that can be edited to save tasks / events for that day using the blue buttons on the right of the hour (save events). Save buttons change colors when mouse is hovering over them. The rows are color coded at run-time using jquery, moment.js, and supplied stylesheet so that the hours that are already past are grey, the current hour is in red and the future hours are green.

Here we are at 2:00PM  (title has since been changed)
<img src='https://user-images.githubusercontent.com/20414600/97927017-0c23e900-1d19-11eb-9e9d-767c3c2fa9af.png' alt=day planner screen>

And here we are on a different day at 4:00pm (with a better title too)

<img src='https://user-images.githubusercontent.com/20414600/98454328-4a097e80-2118-11eb-9bdf-1ca5e7fa9eb9.png'>

Saved tasks are persistent (after clicking the save event button) through refreshes and browser closing/opening. Used moment js legacy code to retrieve and manipulate current date/time data. Code is generally clean and efficient although would have liked to condensed button listeners into a single function.

