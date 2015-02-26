# Codedoor.org


This project contains the code for the website www.codedoor.org.

It's hosted on github pages and uses Jekyll to generate the static files.


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
