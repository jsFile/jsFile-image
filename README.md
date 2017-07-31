# jsFile-image [![Build Status](https://secure.travis-ci.org/jsFile/jsFile-image.png?branch=master)](https://travis-ci.org/jsFile/jsFile-image) [![Coverage Status](https://coveralls.io/repos/jsFile/jsFile-image/badge.svg?branch=master&service=github)](https://coveralls.io/github/jsFile/jsFile-image?branch=master)

Engine for jsFile library to work with images

> ### :warning: This project is deprecated in favour of https://github.com/file2html/file2html


## Supported formats
* [WBMP](https://en.wikipedia.org/wiki/Wireless_Application_Protocol_Bitmap_Format)
* [GIF](https://en.wikipedia.org/wiki/GIF)
* [JPEG](https://en.wikipedia.org/wiki/JPEG)
* [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics)
* [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)
* [ICO](https://en.wikipedia.org/wiki/ICO_(file_format))
* [TIFF](https://en.wikipedia.org/wiki/Tagged_Image_File_Format)




## Installation
### via NPM

You can install a <code>jsFile-image</code> package very easily using NPM. After
installing NPM on your machine, simply run:
````
$ npm install jsfile-image
````

### with Git

You can clone the whole repository with Git:
````
$ git clone git://github.com/jsFile/jsFile-image.git
````

### from latest version

Also you can download [the latest release](https://github.com/jsFile/jsFile-image/tree/master/dist) of `Image` engine and include built files to your project.




##Usage
````js
import JsFile from 'JsFile';
import JsFileImage from 'jsfile-image';

const jf = new JsFile(file, options);
````
`file` - an image file. You may find information about options and `jsFile` in [documentation](https://github.com/jsFile/jsFile#installation)
