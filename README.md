# scaleChange


## The idea

We look at one simple part of a usually complicated web page.

**Login + Sign Up page**

The idea is to build a login page assuming our users are in in the range of 0-10^n. 

So I will incrementally build a login page for 1 user, 10 users, 100 users and so on until a substantial user base can be handled.

## Why 
There's a lot being spoken about scalable architectures and the ability to handle tons of users.
Having never worked on something that is going to be used by billions of users , its difficult to understand the effort that is required or the architectures that need to be modified. This is an attempt to go ground up on how and why architecure needs to be changed.




## Repo structure

The master will contain nothing more than this readme.

Each `n` factor will have its own branch which will be checked out from the branch named `n-1`

Example: 
A branch handling 1000 users will be checked out from the 100 users branch.

Since I wont be pushing anything to the `n` factor branch directly. Every branch which is a WIP for a particular `n`  will be named `n/feature`.

## Tech Stack

I am particularly interested in how javascript handles load and the respective architectures so I am starting out with 
* HTML
* CSS
* JS
* NodeJs
* Postgres

## Folder structure
Since the prediction is that folder structure will change considerably overtime, I will be adding it in the readme for every branch

## Learnings
- Pg loader is super fast in uploadting csv's to database.
  - was able to upload 1 crore rows in ~18s without an index
- Using babel cli in production
  - dont use it in production
  - use it in development the way we would normally use node
  - build the whole project using babel-node and then use node v6/7 for running in production
- DB Performances
  - Ran a simple query `select * from appuser where first_name='john1'`
  - took ~2.4s for the result everytime
  - Added index over first_name column since all of the names are different. This would be wrong ideally, but considering the purpose of this activity, I think I can let this be. Anyway, adding an index reduced the response time drastically. Takes 2ms at worst now. This is something I totally didnt expect
