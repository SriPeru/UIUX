# Loading Large amount of data from/to server

1. How to load large JSON?
    - Stream the data(JSON) as small chunks


2. How to search DB while search using autocomplete?

    1. Approach 1:

        - In JS use **Change and input** events to deduct the input change
        - To avoid more searches, let the user enter multiple charactor(5+) and call the API to search. In this case the searching data volume will be small.
        - Show some information to the user to keep them engaged.
        - Even if the data is more don't get more data to the client.
        - Get a small chunk and show arrow/next to get more data from server.

    2. Approach 2:

        - Store previous searches by other users [which are not private data]
        - Show it while typing as suggestions.
        - If the content not matches, 
            - let the user enter whole content and search.
            - Or by that time user might've entered sizable charactors, so search can be initiated(if required).

3. Loading large data in single page.

        - Load only limited data and show it in the UI
        - When the page scroll starts load the next part and build the UI.
        - jQuery - jscroll can be used to lazyLoad the content while scroll.