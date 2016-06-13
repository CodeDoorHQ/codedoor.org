# Codedoor.org - the website

This project contains all the code for the website www.codedoor.org.  
It uses [Jekyll](https://jekyllrb.com/). This allows us to use markdown and to include files (to avoid [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)).

## How to modify the website
1. Using github website (recommended for beginners)
  - Click on the file you want to change
  - Click on the edit button
  - Make the necessary changes
  - At the bottom, add a subject to your change
  - Click on `Create a new branch and start a pull request`
  - Add more comments
  - Assign somebody to review your changes
  - Create the pull request
  - Notify the assignee
<img src="http://i.imgur.com/VqTEpwH.gif" />

2. Using command lines
   > Well, you should know how to do a PR, right?


## Structure
### Root folder
The root folder contains the files for all static pages.

### `_layouts`
This folder contains the layouts. Currently, we have only one default layout.  
If you add a new page, you probably also want to add it to the menu (found in the default layout in the `_ layouts` folder.

### `css`
This folder contains all the CSS styles and fonts for the website.  
The CSS is based on a theme we bought and need to be cleaned up.

### `images`
This folder contains all images used on the website.

### `js`
This folder contains all the javascript files necessary for the website. This also needs to be cleaned up.

## How to use it
Install [Jekyll](https://jekyllrb.com/) and run `jekyll run` to build and start the website locally.

