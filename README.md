# scaleChange

The million user code

## The idea

We look at one simple part of a usually complicated web page.

**Login + Sign Up page**

The idea is to build a login page assuming our users are in in the range of 0-10^n.

So I will incrementally build a login page for 1 user, 10 users, 100 users and so on until a substantial user base can be handled.

## Why
It seems pretty easy to handle less than a million users logging in. So lets cut to the chase and handle a millions of logins.


## Repo structure

The million users repo

## Tech Stack

I am particularly interested in how javascript handles load and the respective architectures so I am starting out with
* HTML
* CSS
* JS
* NodeJs
* Postgres

## Folder structure
Since the prediction is that folder structure will change considerably overtime, I will be adding it in the readme for every branch

# Targets & Goals
- 5000 logins per second
- 5000 isAuthenticated() requests per second
- asynchronous logging

## Security Considerations
- CSRF
- XSS
- hashed passwords (bcrypt)

## Availability & Scalability
- Highly available Services and databases
### Considerations
- Postgres cluster
- Multiple servers
- autoscale

## Learnings
This section is a continuous fragment and all the learnings from past will stay here.

- Pg loader is super fast in uploadting csv's to database.
  - was able to upload 10 million rows in ~18s without an index
- Using babel cli in production
  - dont use it in production
  - use it in development the way we would normally use node
  - build the whole project using babel-node and then use node v6/7 for running in production
- DB Performances
  - Ran a simple query `select * from appuser where first_name='john1'`
  - took ~2.4s for the result everytime
  - Added index over first_name column since all of the names are different. This would be wrong ideally, but considering the purpose of this activity, I think I can let this be. Anyway, adding an index reduced the response time drastically. Takes 2ms at worst now. This is something I totally didnt expect
