# Frontend

Input text in which as the user types in, launch a search against Github users and return a result list.

## What I have done

- create-react-app with typescript template.
- github api call with fetch.
- react hooks was used.
- no ui test was written
- App.tsx component should be splitted (loader component with global context, empty list component...)

- errors not really handled...


## About rate limit from github

I got strange fetch errors when api calls rate limit is reached. Cors preflight response seems invalid, and I can't get correct errors status and message from Github. Seems that the request round trip is not consistent, then browser consider request as a network failure. Problem should be analized more time than I passed.

A client rate limiter  could be an option, to avoid this error, and in some way, handle x-rate-limit headers. For the exerice, I have only created a simple debounce hooks for search term.
