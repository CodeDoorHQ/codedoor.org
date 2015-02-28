# Codedoor.org


This project contains the code for the website www.codedoor.org. CodeDoor is a technology based educational system. 

It's hosted on github pages and uses Jekyll to generate the static files.

Of course we welcome any pull requests. In order to make the most efficient use of your contribution we are sharply defining the modules. The list of modules will soon be posted. 

Design
Regarding the design of the modules, we ask you to use the following checklist. The design should be:
- Timeless
- Simple
- Solving the right problem
- Suggestive
- Looking "easy"


## Getting started

### Make it run locally

#### Requirements

* Ruby
* [Bundler](http://bundler.io/)

```shell
$ bundle install
$ bundle exec jekyll serve
```
You can now browse the website at http://localhost:4000/codedoor.org/


### How to add a post
Create a new file under the folder `_posts`. Filename should start with the date and followed by the title (without whitespace).


### Modify the layout
The main layout is available under `_layouts/default.html` and its css file is under `style.scss`.


License 
MIT for the code. It is easy: just don't be evil.
