# todojs
Source : https://www.youtube.com/watch?v=Ttf3CEsEwMQ&ab_channel=DevEd

## Day 1:
    * HTML Coding 00:00 -> 0916
    * Learning 
        * Adding fonts , google fonts, awesome font cdn in the head
        * featurAdding stylesheets in the head
        * adding forms for input in body along with the button
    * Bonus
        * setting up a git repo
        * creating a branch in local
        * merging branch with different histories by using git merge feature/* 
        ```
        >branch --allow-unrelated-histories
        >git remote add r-name r-url
        >git push r-name
        >git push --set-upstream r-name feature/branch
        ```
## Day 2
    * CSS Coding 0920 -> 1450
    * Learning
        * Body Header customization text and color
        * Form customization input and button
## Day 3
    * 0920 -> 3050
    *Learning
    Code is split into threee main areas.
        * Selectors - Area of the code that selects elements with html. usually thorugh class=
        * Eventlistners - capturing events like mouse click etc. added to selectors 
        * Functions - added to eventlisters and implmented 
    * document
        * This is the class added for access/add/modifiy elements insdie the HTML
            * newItem=document.createElement(HTML tag)
            * newItem.classList.add(name) -- adding name to the class of the new tag
    * css 
        *  .classname from the js file 
           *    Use this to customize the elements of that element in HTML file.  