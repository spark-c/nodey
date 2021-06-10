# nodey

I'm learning React via a great course on Udemy by Stephen Grider (Twitter [@ste_grider](www.twitter.com/ste_grider)), titled [Modern React with Redux](https://www.udemy.com/course/react-redux/)!

I'm using this repo as a workspace so that I can refer back to my learning projects in the future.

## exploring this repository

A note on how I've organized the projects, in case someone wants to run them for some reason:
- Each project (so far, at least) has shared identical files outside of the `/src` directory. So, I've created my own storage space in `/old` which contains the files from each project. All that needs to be done to swap projects, is to replace the contents of `/src` with the contents of one of the folders in `/old`.
- I'm working on Windows, so I created a couple little Powershell scripts that handle swapping between projects.
  - `./pack.ps1 project_name` will move all of the files in `/src` into a directory called `/old/project_name`, creating the dir if it does not exist.
  - `./unpack.ps1 project_name` will move all of the files in `/old/project_name` into the current `/src` directory -- but only if `/src` is currently empty! Otherwise it raises an error.

This repo uses [create-react-app](https://github.com/facebook/create-react-app). For c-r-e instructions, please see the file [cre-README.md](https://github.com/spark-c/nodey/blob/main/README.md) in this repo for the auto-generated instructions on setting it up.
